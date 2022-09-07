import { StateFiendBasic } from '../StateFiendBasic';
import { TimeFrameAnimModel } from './TimeFrameAnimModel';
import { ItemDrawSample } from './ItemDrawSample';
import { StateParam } from '../StateParam';

class DoorState extends StateFiendBasic {
	TextQuest;
	TextCount=10;
	constructor(X,Y,State,timeFrame,AttackFiendTime,ZONA_ATTACK,Name){
		super();
		this.X = X;
		this.Y = Y+100;
		this.Name =Name;
		this.State = State;
		this.AttackFiendTime = AttackFiendTime;
		this.timeFrame = timeFrame;
		/*
		this.ListAdditionallyStateDraw =
		[
			//new ItemDrawSample(1,-55,115,30,true,"COST: 10",false,10,0)
			new ItemDrawSample(1,-200,0,31,true,"Задание",false,10,0,"Black")
		];
		*/
		this.TextQuest ="Спасите! Помогите! Напали!";
		
	}
	Update = function(currentFrameTime,X,Y,HeroModel) {
		this.TextCount=100;
		//this.ListAdditionallyStateDraw[0].SetText(this.TextQuest.substr(0,Math.floor(this.TextCount)));
		this.TextCount+=0.5;
		
//run
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,0,2)){
			this.SetState(60);
			this.TextQuest ="Спасите! Помогите! Напали!";
			//Y+=.5;
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,2,4)){
			this.SetState(61);
			//Y+=.5;
			return new StateParam(false,X,Y);
		}	
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,4,6)){
			this.SetState(62);
			//Y+=.5;
			return new StateParam(false,X,Y);
		}
		/*
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,6,8)){
			this.SetState(62);
			//Y+=.5;
			return new StateParam(false,X,Y);
		}
		*/
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,6,8)){
			this.SetState(62);
			this.TextQuest =  "Пока!";
			return this.DeadStateParam(X,Y);
		}
		//this.SetState(57);
		//return this.DeadStateParam(X,Y);
		return new StateParam(false,X,Y);

	}
}
export { DoorState }