import { ZonaAttack } from './ZonaAttack';
import { StateFiendBasic } from './StateFiendBasic';
import { StateParam } from './StateParam';
import { GameParam } from './GameParam';
import { InventoryState } from './InventoryState';
import { TimeFrameAnimModel } from './model/TimeFrameAnimModel';
import { ItemDrawSample } from './model/ItemDrawSample';
import { MasterState } from './model/MasterState';
import { PrincessState } from './model/PrincessState';
import { VillagerState } from './model/VillagerState';
import { DoorState } from './model/DoorState';

//ItemDrawSample
class TemplateFiend {

	Id;
	X;
	Y;
	ReserveY;
	Ystatic;
	MaxAttack = 25;
	StateImage=0;
	State;
	timeFrame;
	CANVAS_WIDTH;
	Speed =20;
	HeroModel;
	ZONA_ATTACK;
	Dead = false;
	TypeUnit;
	HPlife = 10;
	LocationLineReserve = false;
	NamePharmacy = "pharmacy";
	Dealer = "dealer";
	Master = "master";
	Princess = "princess";
	Villager ="villager";
	Door = "door";
	PersonList=[];
	Score =0;
	constructor(Id,X,Yline,ReserveY,timeFrame,CANVAS_WIDTH,ZONA_ATTACK,currentFrameTime,StartX,TableMonster){

		this.PersonList.push({Name:this.NamePharmacy,MatterTreat:true,StronglyTreat:true});
		this.PersonList.push({Name:this.Dealer,MatterTreat:true,StronglyTreat:false});
		this.PersonList.push({Name:this.Master,MatterTreat:false,StronglyTreat:false});
		this.PersonList.push({Name:this.Princess,MatterTreat:false,StronglyTreat:false});
		this.PersonList.push({Name:this.Villager,MatterTreat:false,StronglyTreat:false});
		this.PersonList.push({Name:this.Door,MatterTreat:false,StronglyTreat:false});

		this.Id = Id;
		this.Name = TableMonster.Name;
		
		this.Time =0;
		this.timeFrame = timeFrame;
		this.CANVAS_WIDTH = CANVAS_WIDTH;



		switch(this.Name) 
		{
		  case this.NamePharmacy:  
			
			var randomPharmacy = Math.floor(Math.random() * 8);
			this.SetState(new InventoryState(StartX, 200,randomPharmacy));
			this.Y =30;
			 break;

		  case this.Dealer:  
			
			//70
			this.SetState(new DealerState(StartX, 200,10,this.timeFrame,currentFrameTime,ZONA_ATTACK));
			this.Y =105;
			 break;
			 
		case this.Master:
			this.SetState(new MasterState(StartX, 200,10,this.timeFrame,currentFrameTime,ZONA_ATTACK,"Master"));
			this.Y =55;
			break;

		case this.Princess:
			this.SetState(new PrincessState(StartX,200,40,this.timeFrame,currentFrameTime,ZONA_ATTACK,"Princess"));
			this.Y =55;
			break;

		case this.Villager:
			this.SetState(new VillagerState(StartX,200,50,this.timeFrame,currentFrameTime,ZONA_ATTACK,"Villager"));
			this.Y =35;
			break;
		case this.Door:
			this.SetState(new DoorState(StartX,200,60,this.timeFrame,currentFrameTime,ZONA_ATTACK,"Door"));
			this.Y =5;
			break;

		  default:
			
			this.SetLinePositionReserve(Yline);
				this.SetState(new StateFiendMoveFix(this.LocationLineReserve,currentFrameTime,this.timeFrame,this.CANVAS_WIDTH,this.Speed,this.HeroModel,this.ZONA_ATTACK, this.X,null,this.Y));
			 break;
		}
		
		this.X=StartX;
		this.Ystatic =this.Y;
		this.ReserveY = ReserveY;
		this.ZONA_ATTACK = ZONA_ATTACK;
		this.TypeUnit = TableMonster.TypeUnit;
		this.HPlife = TableMonster.HPlife;
		this.Score = TableMonster.Score;
		
	};
	GetAdditionallyStateDraw = function(){
		return this.State.GetAdditionallyStateDraw();
	};
	GetLocationLineReserve = function(){
		return this.LocationLineReserve;
	};
	SetLinePositionReserve = function(Yline) {
		if(Yline!=undefined){
			if (Yline){
				
				this.LocationLineReserve = true;
				this.Y=new GameParam().LineReserve;
			} else {
				this.LocationLineReserve = false;
				this.Y=new GameParam().LineAttack;
			}
		}
		
	}
	GetId = function() {
		return this.Id;
	};
	YesPerson= function(Name,MatterTreat,UnStronglyTreat) {
		
		if (UnStronglyTreat){
			for(var i=0;i<this.PersonList.length;i++)
			{
				if(this.PersonList[i].Name==Name) 
				{
					if(this.PersonList[i].StronglyTreat==true) 
					{
						return true;
					}
				}
			}
			return false;
		}
		if(MatterTreat){
			for(var i=0;i<this.PersonList.length;i++)
			{
				if(this.PersonList[i].Name==Name) 
				{
					if(this.PersonList[i].MatterTreat)
					{
					
						return true;
					}
				}
			}
			return false;
		}
		
		//this.NamePharmacy
		for(var i=0;i<this.PersonList.length;i++){

			if(this.PersonList[i].Name==Name) {
				
				return true;
				
			}
		}
		return false;
	}
	UpdateRandomAttack = function(currentFrameTime,HeroModel) {
		
		
		
		this.HeroModel = HeroModel;
		if (this.YesPerson(this.Name,false,true)==false) 
		{
			if (this.YesPerson(this.Name,false)==false) 
			{
		//if (this.Name !=this.NamePharmacy&&this.Name !=this.Dealer&&this.Name !=this.Master) {
				if(this.State.GetAttackFiend()==false){
					if(this.State.Name!="MoveJump"){
						var randomAttack = Math.floor(Math.random() * this.MaxAttack);
						if (this.LocationLineReserve == false)
						{
							if(randomAttack==1){
				
								this.SetLinePositionReserve(false);
								//	this.State =new StateFiend(1,false,true,currentFrameTime,this.timeFrame);
								this.SetState(new StateFiendAttack(this.LocationLineReserve,false,true,currentFrameTime,this.timeFrame));
							}
						}
						/*
						if(randomAttack==2){
							
							//move
							this.State = new StateFiendMove(1,currentFrameTime,this.timeFrame,this.CANVAS_WIDTH,this.Speed,this.HeroModel,this.ZONA_ATTACK, this.X);
							
						}
						*/
						//Jump
						if(randomAttack==3){
							//jump StateFiendJump
							
							this.SetState(new StateFiendJump(this.LocationLineReserve,currentFrameTime,this.timeFrame,this.CANVAS_WIDTH,this.Speed,
							this.HeroModel,this.ZONA_ATTACK, this.X, this.Y));
						}
						//StateFiendBlock
						if(randomAttack==4){
							this.SetState( new StateFiendBlock(this.LocationLineReserve,currentFrameTime,this.timeFrame));
						}
					}
				}
			}
		}
	};
	GetTypeUnit = function(){
		return this.TypeUnit;
	}
	SetState = function(State){
		if(this.Dealer == "dealer"){
			

		}
		
		this.State = State;
	}
	GetState = function(){
		return this.State.GetState();
	};
	GetStateName = function(){
		return this.State.Name;
	};
	GetAttackPlayer = function(){
		return this.State.GetAttackPlayer();
	}
	SetAttackPlayer = function(AttackPlayer,currentFrameTime,DamageWeapon){

		if (this.Name ==this.Dealer||this.Name ==this.Master||this.Name ==this.Princess) {
			this.AttackPlayer = false;
			return 0;
		}
		if (this.Name ==this.NamePharmacy) {
			
				this.AttackPlayer = true;
				this.Dead = true;
				var hpLife = this.HPlife;
				this.HPlife =0;
				return hpLife;
			
		} 
		else 
		{
			// block blow
			if (this.State.Name !="MoveBlow"){
				//this.Name ="Block"
				if(this.State.Name !="Block"){
				//block reserve line
					if(this.LocationLineReserve==false){
					
						this.HPlife -=DamageWeapon;
						//GetDamageWeapon();
						
						if (0>=this.HPlife){
							
						
							if (this.State.Name !="Dead"){
								
								this.SetState(new StateFiendDead(this.LocationLineReserve,true,false,currentFrameTime,this.timeFrame,this.Ystatic));
								this.AttackPlayer = true;
							}
							return this.Score;
						} else {
							
															//State,AttackFiendTime,timeFrame,Speed
							this.SetState(new StateFiendBlow(this.LocationLineReserve,currentFrameTime,this.timeFrame,3));
						}
						
					}
				}
			}
		} 
		return 0;
	}
	// and Update
	GetStateTime = function(currentFrameTime) {
		var stateParam = this.UpdateState(currentFrameTime,this.X,this.Y,this.HeroModel);
		
		if(this.YesPerson(this.Name,true)==false){
	
			if(stateParam.ChangeStatus){
				
				this.SetState(new StateFiendOld(this.LocationLineReserve,false,false,currentFrameTime,this.timeFrame,this.Ystatic));
				//Update
			}
		}
		this.X = stateParam.X;
		this.Y = stateParam.Y;
		if (stateParam.Dead ==true){
			this.Dead = true;
			
		}

		if(this.YesPerson(this.Name,false)==false){
			this.SetLinePositionReserve(stateParam.LocationLineReserve);
		}
		return this.State.GetState();
	
	};
	UpdateState = function(currentFrameTime,X,Y,HeroModel) {
		return this.State.Update(currentFrameTime,X,Y,HeroModel);
	}
}

class DealerState extends StateFiendBasic {
	ZONA_ATTACK;
	constructor(X,Y,State,timeFrame,AttackFiendTime,ZONA_ATTACK){
		super();
		this.X = X;
		this.Y = Y+100;
		this.Name ="Dealer";
		this.State = State;
		this.AttackFiendTime = AttackFiendTime;
		this.timeFrame = timeFrame;
		var gameParam = new GameParam();
		this.ListAdditionallyStateDraw =
		[
			new ItemDrawSample(1,-600,10,20,true,"COST: 10",false,10,0),
			new ItemDrawSample(gameParam.TableWeapon[0].Id,-300,10,20,true,"COST: "+gameParam.TableWeapon[0].Cost,false,gameParam.TableWeapon[0].Cost,gameParam.TableWeapon[0].Id),
			new ItemDrawSample(gameParam.TableWeapon[1].Id,0,10,20,true,"COST: "+gameParam.TableWeapon[1].Cost,false,gameParam.TableWeapon[1].Cost,gameParam.TableWeapon[1].Id),
			new ItemDrawSample(4,300,10,20,true,"EXIT",true,0,0),
			new ItemDrawSample(1,-600+100,10+10,2,false,"",false,0,0),
			new ItemDrawSample(gameParam.TableWeapon[0].Id,-300,10,gameParam.TableWeapon[0].ImageId,false,"",false,0,gameParam.TableWeapon[0].Id),
			new ItemDrawSample(gameParam.TableWeapon[1].Id,0,10,gameParam.TableWeapon[1].ImageId,false,"",false,0,gameParam.TableWeapon[1].Id),
		];
		this.ZONA_ATTACK = ZONA_ATTACK;
	}
	DestroyItemAdditionallyStateDraw = function(Id){
		for (var i=0;i<this.ListAdditionallyStateDraw.length;i++){
			if (this.ListAdditionallyStateDraw[i].GetId()==Id) {
				this.ListAdditionallyStateDraw.splice(i,1);
			}
			
		}
		
	}
	Update = function(currentFrameTime,X,Y,HeroModel) {
		
		if (HeroModel!=undefined){
			for(var i=0;i<this.ListAdditionallyStateDraw.length;i++){
				this.ListAdditionallyStateDraw[i].Reset();
				var Ximage = this.ListAdditionallyStateDraw[i].X;
				
				
				if (new ZonaAttack().ZoneAttack(Ximage,HeroModel.X,this.ZONA_ATTACK)){
							//stop move
						
						this.ListAdditionallyStateDraw[i].SetFlag();
						
						
							//return new StateParam(true,X,Y,false);
							if (HeroModel.GetStateAttack()){
								if (this.ListAdditionallyStateDraw[i].GetModeExit()){
									
									console.log(  " Exit  !!!!!!!!! ==   g ="+HeroModel.GetStateAttack());
									//this.AttackPlayer = true;
									//this.SetDeadStatus();
									//Exit
									//return new StateParam(false,X,Y,true,false);
									return this.DeadStateParam(X,Y);
								}
								//buy
								if (this.ListAdditionallyStateDraw[i].GetSellerMode()){
									console.log( " ##########  V    =  "+this.ListAdditionallyStateDraw[i].GetSellerCost());
									if (HeroModel.Score>=this.ListAdditionallyStateDraw[i].GetSellerCost())	
									{								
										HeroModel.Score -=this.ListAdditionallyStateDraw[i].GetSellerCost();
										var id = this.ListAdditionallyStateDraw[i].GetId();
										
										HeroModel.SetIdWeapon(this.ListAdditionallyStateDraw[i].GetWeaponId());
										console.log("id = "+id+"__ A i= "+i+" @@@@@@    DealerState  =  " +this.ListAdditionallyStateDraw[i].GetWeaponId());
										//destroy
										this.DestroyItemAdditionallyStateDraw(id);
										
									}
								}
							}
							
				}
				
				
			}
		}
		
		//Y += 2;
		
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,0,2)){
			this.SetState(10);
				Y-=1;
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,2,3)){
			this.SetState(11);
			Y-=1;
			return new StateParam(false,X,Y);
		}	
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,3,4)){
			this.SetState(12);
			Y-=1;
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,4,5)){
			this.SetState(13);
			Y-=1;
			return new StateParam(false,X,Y);
		}
		
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,5,6)){
			this.SetState(14);
			Y-=1;
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,6,7)){
			this.SetState(15);
			Y-=1;
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,7,8)){
			this.SetState(16);
			Y-=1;
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,8,9)){
			//this.SetState(16);
			//return new StateParam(false,X,Y);
			Y-=1;
			return new StateParam(false,X,Y,false,false);
		}
		//if (Y>=110)
		//{
		//	this.AttackPlayer = true;
		//	return new StateParam(false,X,Y,true,false);
		//}
		
		return new StateParam(false,X,Y,false,false);
		
	}
}

// Move
class StateFiendMove extends StateFiendBasic {
	XstartJump;
	randomMoveX;
	moveY;
	lengthMove;
	Speed;
	ZONA_ATTACK;
	HeroModel;
	Jump = false;
	MoveFix = false;
	ReserveY;
	AttackY;
	MoveInAttackLine = false;
	constructor(LocationLineReserve,AttackFiendTime,timeFrame,CANVAS_WIDTH,Speed,HeroModel,ZONA_ATTACK,Xfiend,MoveFix,XfixMove,Y){
		super();
		this.State =8;
		this.AttackFiendTime = AttackFiendTime;
		this.timeFrame = timeFrame;
		this.Speed = Speed;
		this.ZONA_ATTACK = ZONA_ATTACK;
		this.HeroModel = HeroModel;
		this.XstartJump = Xfiend;
		this.Name ="Move";
		this.ReserveY = new GameParam().LineReserve;
		this.AttackY = new GameParam().LineAttack;
		if(LocationLineReserve){
			
			this.MoveInAttackLine = true;
		}
		
		
		
		if(MoveFix==true){
			this.MoveFix = true;
			this.randomMoveX =XfixMove;
		}
		// move fiend
		var random = false;
		
		if(this.HeroModel!=undefined){
			if(this.MoveFix){
				
			} else {
				if (random){
					this.randomMoveX = Math.floor(Math.random() * CANVAS_WIDTH);
				} else {
					
					this.randomMoveX = this.HeroModel.X;
				}
			}
		}
		this.lengthMove = this.randomMoveX - Xfiend;
		
	}
	Update = function(currentFrameTime,X,Y) {
		
		if (this.AttackFiendTime+(this.timeFrame*9)<currentFrameTime){
				this.SetState(1);
				return new StateParam(true,X,Y);
		}
		if (X!=this.randomMoveX){
			if(X>this.randomMoveX){
				X-=this.Speed;
				this.State =12;
			}
			if(X<this.randomMoveX){
				X+=this.Speed;
				this.State =11;
			}
		}
		if (this.Jump) {
			//jump  Math.abs   ReserveY
			var pathLength = (this.XstartJump - this.randomMoveX);
			var residual = Math.abs(this.XstartJump - X);
			var proc = Math.abs(residual/pathLength);
			
			if (proc<.5){
				Y =30-(50*proc);
			}
			if (proc>=.5){
				var procEnd =0.5-(proc-0.5);
				Y =30-(50*procEnd);
			}
			
			/*
			var setY = Math.sin(proc*10)*50+30;
			if(setY<=30){
				
				Y = setY;
			}
			*/
			if(proc<.7){
				this.SetState(0);
				return new StateParam(false,X,Y,false,false);
			}
			if(proc>.7&&proc<.8){
				this.SetState(1);
				return new StateParam(false,X,Y,false,false);
			}
			if(proc>.8&&proc<.9){
				this.SetState(2);
				return new StateParam(false,X,Y,false,false);
			}
			if(proc>.9){
				this.SetState(3);
				if (this.MoveInAttackLine == true){
					
					Y = this.AttackY;
				}
				
				return new StateParam(true,X,Y,false,false);
			}
	
		}
		if(this.MoveFix!=undefined){
			if(this.MoveFix){
				if (new ZonaAttack().ZoneAttack(X,this.randomMoveX,this.ZONA_ATTACK)){
						//stop move
						
						return new StateParam(true,X,Y,false);
					}
			} else 
			{
				

					if (new ZonaAttack().ZoneAttack(X,this.HeroModel.X,this.ZONA_ATTACK)){
						//stop move
						
						return new StateParam(true,X,Y,false);
					}
			}
		}
		return new StateParam(false,X,Y);
	}
}
// Blow
class StateFiendBlow extends StateFiendMove {
	MoveReserveY;
	AttackFiendTime;
	timeFrame;
	Speed;
	constructor(LocationLineReserve,AttackFiendTime,timeFrame,Speed){
		super();
		this.MoveReserveY = new GameParam().LineReserve;
		this.AttackFiendTime = AttackFiendTime;
		this.timeFrame = timeFrame;
		this.Speed = Speed;
		this.randomMoveY = new GameParam().LineReserve;
		this.Name ="MoveBlow";
		//this.MoveFix = undefined;
	};
	Update = function(currentFrameTime,X,Y) {

		if (Y!=this.randomMoveY){
			Y-=this.Speed;
			this.SetState(15);
			
		}
		if (new ZonaAttack().ZoneAttack(Y,this.randomMoveY,5)){
			//stop blow
			Y = this.MoveReserveY;
			return new StateParam(true,X,Y,false,true);
		}
		return new StateParam(false,X,Y);
	};
}
class StateFiendBlock extends StateFiendMove {
		constructor(LocationLineReserve,AttackFiendTime,timeFrame){
		super();
		this.MoveReserveY = new GameParam().LineReserve;
		this.AttackFiendTime = AttackFiendTime;
		this.timeFrame = timeFrame;
		this.randomMoveY = new GameParam().LineReserve;
		this.Name ="Block";
		//this.MoveFix = undefined;
	};
	Update = function(currentFrameTime,X,Y) {
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,0,2)){
				this.SetState(16);
				return new StateParam(false,X,Y,false);
		}
		return new StateParam(true,X,Y,false);
	};
}
// Move Fix
class StateFiendMoveFix extends StateFiendMove {
	
	constructor(LocationLineReserve,AttackFiendTime,timeFrame,CANVAS_WIDTH,Speed,HeroModel,ZONA_ATTACK,Xfiend,XfixMove,Y){
		
		super(LocationLineReserve,AttackFiendTime,timeFrame,CANVAS_WIDTH,Speed,HeroModel,ZONA_ATTACK,Xfiend,true,XfixMove,Y);
		this.Name ="MoveFix";
		this.MoveFix = true;
		this.randomMoveX =XfixMove;
		 
	};

}

// Move
class StateFiendJump extends StateFiendMove {
	
	constructor(LocationLineReserve,AttackFiendTime,timeFrame,CANVAS_WIDTH,Speed,HeroModel,ZONA_ATTACK,Xfiend,Y){
		
		super(LocationLineReserve,AttackFiendTime,timeFrame,CANVAS_WIDTH,Speed,HeroModel,ZONA_ATTACK,Xfiend,null,null,Y);
		this.Name ="MoveJump";
		this.Jump = true;
	};

}
class StateFiendAttack extends StateFiendBasic{
	
		constructor(LocationLineReserve,AttackPlayer,AttackFiend,AttackFiendTime,timeFrame){
		super();
		
		this.State = 7;
		this.AttackPlayer = AttackPlayer;
		this.AttackFiend = AttackFiend;
		this.AttackFiendTime = AttackFiendTime;
		this.timeFrame = timeFrame;
		this.Name ="Attack";
	};
	Update = function(currentFrameTime,X,Y) {

		
			if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,0,2)){
				this.SetState(7);
				return new StateParam(false,X,Y);
			}
			if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,2,3)){
				this.SetState(8);
				return new StateParam(false,X,Y);
			}
			if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,3,4)){
				this.SetState(9);
				return new StateParam(false,X,Y);
			}
			if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,4,5)){
				this.SetState(9);
				return new StateParam(false,X,Y);
			}
			
			
			if (this.AttackFiendTime+(this.timeFrame*5)<currentFrameTime){
				//attack
				return new StateParam(true,X,Y);
			}
			return new StateParam(false,X,Y);

		
		
	}
}
class StateFiendDead extends StateFiendBasic{
	
	constructor(LocationLineReserve,AttackPlayer,AttackFiend,AttackFiendTime,timeFrame,Y){
		
		super();
		this.Y = Y;
		this.State =12;
		this.AttackPlayer = AttackPlayer;
		this.AttackFiend = AttackFiend;
		this.AttackFiendTime = AttackFiendTime;
		this.timeFrame = timeFrame;
		this.Name ="Dead";
	};
	Update = function(currentFrameTime,X,Y) {
		

			if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,0,2)){
				//11
				this.SetState(12);
				return new StateParam(false,X,Y);
			}
			if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,2,3)){
				//12
				this.SetState(13);
				return new StateParam(false,X,Y);
			}
			if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,3,4)){
				this.SetState(14);
				return new StateParam(false,X,Y);
			}

			this.State =14;
			return new StateParam(false,X,this.Y,true);

	}
	
}
//statc pose
class StateFiendOld extends StateFiendBasic{
	_frameCount;
	constructor(LocationLineReserve,AttackPlayer,AttackFiend,AttackFiendTime,timeFrame,Y){
		super();
		this.Y = Y;
		this.State = 4;
		this.AttackPlayer = AttackPlayer;
		this.AttackFiend = AttackFiend;
		this.AttackFiendTime = AttackFiendTime;
		this.timeFrame = timeFrame;
		this.Name ="StateFiendOld";
	};
	
	
	Update = function(currentFrameTime,X,Y) {
	
			if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,0,2)){
				this.SetState(4);

				
				return new StateParam(false,X,Y);
			}
			if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,2,3)){
				
				this.SetState(5);
				return new StateParam(false,X,Y);
			}
			if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,3,5)){
				
				this.SetState(6);
				return new StateParam(false,X,Y);
			}
			
			if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,5,6)){
				this.SetState(5);

				
				return new StateParam(false,X,Y);
			}
			if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,6,7)){
				
				this.SetState(4);
				return new StateParam(false,X,Y);
			}

		//0
		this.State=4;
		return new StateParam(false,X,this.Y);
	}
}


export { TemplateFiend, StateFiendOld }