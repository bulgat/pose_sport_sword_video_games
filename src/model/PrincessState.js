import { StateFiendBasic } from '../StateFiendBasic';
import { TimeFrameAnimModel } from './TimeFrameAnimModel';
import { ItemDrawSample } from './ItemDrawSample';
import { StateParam } from '../StateParam';

class PrincessState extends StateFiendBasic {
	TextQuest;
	TextCount=0;
	constructor(X,Y,State,timeFrame,AttackFiendTime,ZONA_ATTACK,Name){
		super();
		this.X = X;
		this.Y = Y+100;
		this.Name =Name;
		this.State = State;
		this.AttackFiendTime = AttackFiendTime;
		this.timeFrame = timeFrame;
		
		this.ListAdditionallyStateDraw =
		[
			//new ItemDrawSample(1,-55,115,30,true,"COST: 10",false,10,0)
			new ItemDrawSample(1,-200,0,31,true,"Задание",false,10,0,"Black")
		];
		this.TextQuest ="О! Мой герой! Ты спас меня!"
	}
	Update = function(currentFrameTime,X,Y,HeroModel) {
		
		this.ListAdditionallyStateDraw[0].SetText(this.TextQuest.substr(0,Math.floor(this.TextCount)));
		this.TextCount+=0.5;
		

		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,0,20)){
			this.SetState(40);
			
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,20,30)){
			this.SetState(41);
			
			return new StateParam(false,X,Y);
		}	
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,30,40)){
			this.SetState(42);
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,60,61)){
			this.TextCount =10.0;
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,60,70)){
			this.SetState(40);
			this.TextQuest =  "Я навек твоя!";
			
			console.log( this.TextQuest+"  apo et = nderImage =  " +this.TextCount);
			
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,70,80)){
			this.SetState(41);
			this.TextQuest =  "Любовь!";
			//this.TextCount =0;
			return new StateParam(false,X,Y);
		}	
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,80,90)){
			this.SetState(42);
			this.TextQuest =  "Это святое!";
			//this.TextCount =0;
			return new StateParam(false,X,Y);
		}
		//dead
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,90,100)){
			this.SetState(40);
			this.TextQuest =  "Пока!";
			return this.DeadStateParam(X,Y);
		}
		
		this.SetState(41);
		//return this.DeadStateParam(X,Y);
		return new StateParam(false,X,Y);
		
		//default
		
	}
}
export { PrincessState }