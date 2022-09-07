import { StateFiendBasic } from '../StateFiendBasic';
import { TimeFrameAnimModel } from './TimeFrameAnimModel';
import { ItemDrawSample } from './ItemDrawSample';
import { StateParam } from '../StateParam';

class VillagerState extends StateFiendBasic {
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
		
		this.ListAdditionallyStateDraw =
		[
			//new ItemDrawSample(1,-55,115,30,true,"COST: 10",false,10,0)
			new ItemDrawSample(1,-200,0,31,true,"Задание",false,10,0,"Black")
		];
		this.TextQuest ="Спасите! Помогите! Напали!";
		
	}
	Update = function(currentFrameTime,X,Y,HeroModel) {
		this.TextCount=100;
		this.ListAdditionallyStateDraw[0].SetText(this.TextQuest.substr(0,Math.floor(this.TextCount)));
		this.TextCount+=0.5;
		
//run
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,0,2)){
			this.SetState(50);
			this.TextQuest ="Спасите! Помогите! Напали!";
			Y+=.5;
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,2,4)){
			this.SetState(51);
			Y+=.5;
			return new StateParam(false,X,Y);
		}	
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,4,6)){
			this.SetState(50);
			Y+=.5;
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,6,8)){
			this.SetState(51);
			Y+=.5;
			return new StateParam(false,X,Y);
		}
		//start
		//talk
		
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,8,10)){
			this.SetState(52);
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,10,12)){
			this.SetState(53);
			this.TextQuest ="Они сошли с ума! Кругом монстры! Всюду кровь!";
			
			console.log( this.TextQuest+"  apo et = nderImage =  " +this.TextCount);
			
			return new StateParam(false,X,Y);
		}
		
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,12,14)){
			this.SetState(52);
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,14,16)){
			this.SetState(53);
			//this.TextQuest =  "Я навек твоя!";
			
			console.log( this.TextQuest+"  apo et = nderImage =  " +this.TextCount);
			
			return new StateParam(false,X,Y);
		}
		
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,16,18)){
			this.SetState(52);
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,18,20)){
			this.SetState(53);
			this.TextQuest =  "Враги напали и всех режут! Я схожу с ума от ужаса!";
			
			console.log( this.TextQuest+"  apo et = nderImage =  " +this.TextCount);
			
			return new StateParam(false,X,Y);
		}
		//end talk
		
		
		//breathe
		
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,20,22)){
			this.SetState(54);
			//this.TextQuest =  "Любовь!";
			//this.TextCount =0;
			return new StateParam(false,X,Y);
		}	
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,22,24)){
			this.SetState(55);
			//this.TextQuest =  "Это святое!";
			//this.TextCount =0;
			return new StateParam(false,X,Y);
		}
		
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,24,26)){
			this.SetState(54);
			this.TextQuest =  "Что-то спина болит!";
			//this.TextCount =0;
			return new StateParam(false,X,Y);
		}	
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,26,28)){
			this.SetState(55);
			//this.TextQuest =  "Это святое!";
			//this.TextCount =0;
			return new StateParam(false,X,Y);
		}
		
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,28,30)){
			this.SetState(54);
			//this.TextQuest =  "Любовь!";
			//this.TextCount =0;
			return new StateParam(false,X,Y);
		}	
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,30,32)){
			this.SetState(55);
			this.TextQuest =  "Я ранен в спину!";
			//this.TextCount =0;
			return new StateParam(false,X,Y);
		}
		
		
		//dead
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,32,34)){
			this.SetState(56);
			this.TextQuest =  "О нет! Я умираю";
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,34,36)){
			this.SetState(57);
			//this.TextQuest =  "Пока!";
			return new StateParam(false,X,Y);
		}
		if (new TimeFrameAnimModel().TimeFrameCheck(currentFrameTime,this.AttackFiendTime,this.timeFrame,36,38)){
			this.SetState(57);
			this.TextQuest =  "Пока!";
			return this.DeadStateParam(X,Y);
		}
		//this.SetState(57);
		//return this.DeadStateParam(X,Y);
		return new StateParam(false,X,Y);
		
		//default
		
	}
}
export { VillagerState }