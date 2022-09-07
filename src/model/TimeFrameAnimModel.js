class TimeFrameAnimModel{
	TimeFrameCheck= function(CurrentFrameTime,AttackFiendTime,TimeFrame,First,Second){
		if (AttackFiendTime+(TimeFrame*First)<CurrentFrameTime&&AttackFiendTime+(TimeFrame*Second)>CurrentFrameTime){
			return true;
		}
		return false;
	}
}
export { TimeFrameAnimModel }