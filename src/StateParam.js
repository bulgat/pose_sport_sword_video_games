class StateParam {
	ChangeStatus;
	X;
	Y;
	Dead;
	LocationLineReserve;
	StatePose;
	constructor(ChangeStatus,X,Y,Dead,LocationLineReserve,StatePose){
		this.ChangeStatus = ChangeStatus;
		this.X=X;
		this.Y=Y;
		this.Dead = Dead;
		this.LocationLineReserve = LocationLineReserve;
		this.StatePose = StatePose;
	}
	
}
export { StateParam }