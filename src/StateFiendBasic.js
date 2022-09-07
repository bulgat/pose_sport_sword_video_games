import { StateParam } from './StateParam';

class StateFiendBasic {
	State = 10;
	timeFrame;
	AttackFiend=false;
	AttackPlayer=false;
	AttackFiendTime;
	Y;
	Name ="Basic";
	ListAdditionallyStateDraw=null;
	SetState = function(State) {
		this.State = State;
	};
	GetState = function() {
		return this.State;
	};
	GetAttackFiend= function() {
		return this.AttackFiend;
	};
	GetAttackPlayer = function() {
		return this.AttackPlayer;
	};
	SetAttackPlayer = function(AttackPlayer){
		this.AttackPlayer=AttackPlayer;
		
		
		
	}
	GetAttackFiendTime = function() {
		return this.AttackFiendTime;
	};
	GetAdditionallyStateDraw = function(){
		return this.ListAdditionallyStateDraw;
	}
	DeadStateParam(X,Y) {
		this.AttackPlayer = true;
		return new StateParam(false,X,Y,true,false);
	}
}
export { StateFiendBasic }