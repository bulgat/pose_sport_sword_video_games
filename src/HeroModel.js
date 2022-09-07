import { GameParam } from './GameParam';
import { StateParam } from './StateParam';

class HeroModel {
	RightArm=false;
	RightArmTrigger=false;
	LeftArm=false;
	LeftArmTrigger=false;
	Nose=0;
	X=0;
	Y=0;
	Health = 10;
	TIME_FRAME = 400;
	AnimDamage = false;
	AnimDamageTime =1000;
	State;
	Score = 0;
	RightArmElevate = 0;
	LeftArmElevate = 0;
	IdWeapon = 22;
	DamageWeapon = 10;
	constructor(timeFrame){
		this.TIME_FRAME = timeFrame;		
		if (this.AnimDamage==false ){
			this.AnimDamage = true;
		}
		this.State = new StateHero(0);
	};
		SetNose = function(Nose){
		this.Nose=Nose;
		this.X =Nose;
	}
	SetRightArm = function(rightArm){
		
			if (this.RightArmTrigger == false && rightArm){
				this.RightArmElevate+=1;
			}

		this.RightArmTrigger = rightArm;
		
		this.RightArm = rightArm;
	};
	GetStateAttack =function() {
		return this.RightArm;
	}
	SetLeftArm= function(leftArm){
		if (this.LeftArmTrigger == false && leftArm){
				this.LeftArmElevate+=1;
			}

		this.LeftArmTrigger = leftArm;
		
		this.LeftArm = leftArm;
	};
	MinusHealth= function(Minus, currentFrameTime){
		this.Health -=Minus;
		if (Minus>0){
			if(this.AnimDamage==false){
				this.AnimDamage = true;
				this.AnimDamageTime = currentFrameTime;
				
			}
		}
	};
	GetState = function(currentFrameTime) 
	{
		
		if(this.State.GetState(currentFrameTime).ChangeStatus==false){
			
			return this.State.GetState(currentFrameTime).StatePose;
		}
		
		if (this.AnimDamage){
			if (this.State.Name =="InjureState"){
				if(this.State.GetState(currentFrameTime).ChangeStatus==true){
					this.AnimDamage = false;
				}
			}
				
				document.PlayAudio.PlayEffect("Injure");
				this.State = new InjureState(currentFrameTime);
				
			
			return this.State.GetState(currentFrameTime).StatePose;
		}

		if(this.RightArm) 
		{
			var maxAttack =3;
			var randomAttack = Math.floor(Math.random() * maxAttack);
			document.PlayAudio.PlayEffect("Sword");
			if (randomAttack==1){
				this.State = new AttackState_0(currentFrameTime);
			} else {
				//attack 1
				this.State = new AttackState(currentFrameTime);
			}
			
			return this.State.GetState(currentFrameTime).StatePose;
		}
		//defence
		if(this.LeftArm) {
			//defence 3
			this.State = new DefenceState(currentFrameTime);
			return this.State.GetState(currentFrameTime).StatePose;
		}
		this.State = new StateHero(0);
		
		return this.State.GetState(currentFrameTime).StatePose;
	};
	SetIdWeapon = function(IdWeapon){
		
		var tableWeapon = new GameParam().TableWeapon;
		for(var i=0;i<tableWeapon.length;i++){
			if (IdWeapon==tableWeapon[i].Id){
				this.DamageWeapon = tableWeapon[i].Damage;
				this.IdWeapon =tableWeapon[i].ImageId;
			}
		}
		
	}
	GetIdWeapon = function(){
		return this.IdWeapon;
	};
	GetDamageWeapon = function(){
		
		return this.DamageWeapon;
	}
	
}
class StateHero{
	timeFrame;
	startCurrentFrameTime;
	State=0;
	Name ="StateHero";
	constructor(State) {
		this.State = State;
	};
	GetState = function(){
		return new StateParam(true,null,null,null,null,this.State);
	}
}
class DefenceState extends StateHero {
	constructor(currentFrameTime) {
		super(1);
		this.startCurrentFrameTime = currentFrameTime;
		this.timeFrame = new GameParam().TIME_FRAME;
		this.Name = "DefenceState";
	}
	GetState = function(currentFrameTime){
		
		if (this.startCurrentFrameTime+(this.timeFrame*0)<currentFrameTime&&this.startCurrentFrameTime+(this.timeFrame*1)>currentFrameTime){
				
				//return 4;
				return new StateParam(false,null,null,null,null,4);
		}
		if (this.startCurrentFrameTime+(this.timeFrame*1)<currentFrameTime&&this.startCurrentFrameTime+(this.timeFrame*2)>currentFrameTime){
				
				//return 5;
				return new StateParam(false,null,null,null,null,5);
		}

		//return 5;
		return new StateParam(true,null,null,null,null,5);
	}
}
class AttackState extends StateHero {
	
	
	constructor(currentFrameTime) {
		super(1);
		this.startCurrentFrameTime = currentFrameTime;
		this.timeFrame = new GameParam().TIME_FRAME;
		this.Name = "AttackState";
	}
	GetState = function(currentFrameTime){
		
		if (this.startCurrentFrameTime+(this.timeFrame*0)<currentFrameTime&&this.startCurrentFrameTime+(this.timeFrame*1)>currentFrameTime){
				
				//return 1;
				return new StateParam(false,null,null,null,null,1);
		}
		if (this.startCurrentFrameTime+(this.timeFrame*1)<currentFrameTime&&this.startCurrentFrameTime+(this.timeFrame*2)>currentFrameTime){
				
				//return 2;
				return new StateParam(false,null,null,null,null,2);
		}
		if (this.startCurrentFrameTime+(this.timeFrame*2)<currentFrameTime&&this.startCurrentFrameTime+(this.timeFrame*3)>currentFrameTime){
				
				//return 3;
				return new StateParam(false,null,null,null,null,3);
		}
		//return 3;
		return new StateParam(true,null,null,null,null,3);
	}
}
class AttackState_0 extends StateHero {
	
	
	constructor(currentFrameTime) {
		super(1);
		this.startCurrentFrameTime = currentFrameTime;
		this.timeFrame = new GameParam().TIME_FRAME;
		this.Name = "AttackState";
	}
	GetState = function(currentFrameTime){
		
		if (this.startCurrentFrameTime+(this.timeFrame*0)<currentFrameTime&&this.startCurrentFrameTime+(this.timeFrame*1)>currentFrameTime){

				return new StateParam(false,null,null,null,null,6);
		}
		if (this.startCurrentFrameTime+(this.timeFrame*1)<currentFrameTime&&this.startCurrentFrameTime+(this.timeFrame*2)>currentFrameTime){

				return new StateParam(false,null,null,null,null,7);
		}
		if (this.startCurrentFrameTime+(this.timeFrame*2)<currentFrameTime&&this.startCurrentFrameTime+(this.timeFrame*3)>currentFrameTime){

				return new StateParam(false,null,null,null,null,8);
		}
		return new StateParam(true,null,null,null,null,8);
	}
}
class InjureState extends StateHero {
	constructor(currentFrameTime) {
		super(1);
		this.startCurrentFrameTime = currentFrameTime;
		this.timeFrame = new GameParam().TIME_FRAME;
		this.Name = "InjureState";
	}
	GetState = function(currentFrameTime){
		if (this.startCurrentFrameTime+(this.timeFrame*0)<currentFrameTime&&this.startCurrentFrameTime+(this.timeFrame*1)>currentFrameTime){
				
				//dead 6
				return new StateParam(false,null,null,null,null,9);
		}
		if (this.startCurrentFrameTime+(this.timeFrame*1)<currentFrameTime&&this.startCurrentFrameTime+(this.timeFrame*2)>currentFrameTime){
				
				//dead 7
				return new StateParam(false,null,null,null,null,10);
		}
		
		//dead 7
		return new StateParam(true,null,null,null,null,10);
	}
}

export { HeroModel }