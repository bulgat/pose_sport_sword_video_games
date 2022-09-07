import { StateFiendBasic } from '../StateFiendBasic';
import { TimeFrameAnimModel } from './TimeFrameAnimModel';
import { ItemDrawSample } from './ItemDrawSample';
import { StateParam } from '../StateParam';

class MasterState extends StateFiendBasic {
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
			new ItemDrawSample(1,-255,0,31,true,"Задание",false,10,0,"Black")
		];
		this.TextQuest ="Привет солдат! Надо спасти принцессу из замка."
	}
	Update = function(currentFrameTime,X,Y,HeroModel) {
		
		this.ListAdditionallyStateDraw[0].SetText(this.TextQuest.substr(0,Math.floor(this.TextCount)));
		this.TextCount+=0.5;
		

		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,0,20)){
			this.SetState(17);
			
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,20,30)){
			this.SetState(18);
			
			return new StateParam(false,X,Y);
		}	
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,30,40)){
			this.SetState(19);
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,60,61)){
			this.TextCount =10.0;
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,60,70)){
			this.SetState(17);
			this.TextQuest =  "Марио спас, пора и тебе!";
			
			console.log( this.TextQuest+"  apo et = nderImage =  " +this.TextCount);
			
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,70,80)){
			this.SetState(18);
			this.TextQuest =  "Вперед!";
			//this.TextCount =0;
			return new StateParam(false,X,Y);
		}	
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,80,90)){
			this.SetState(19);
			this.TextQuest =  "Что стоишь?!";
			//this.TextCount =0;
			return new StateParam(false,X,Y);
		}
		//dead
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,90,100)){
			this.SetState(19);
			this.TextQuest =  "Пока!";
			return this.DeadStateParam(X,Y);
		}
		
		this.SetState(17);
		//return this.DeadStateParam(X,Y);
		return new StateParam(false,X,Y);
		
		//default
		
	}
}
export { MasterState }