import { StateFiendBasic } from './StateFiendBasic';
import { StateParam } from './StateParam';

class InventoryState extends StateFiendBasic {
	
	constructor(X,Y,RandomPharmacy){
		super();
		this.X = X;
		this.Y = Y;
		this.Name ="Inventory";
		this.State = RandomPharmacy;
	}
	Update = function(currentFrameTime,X,Y) {
		Y += 2;
		
		if (Y>=110)
		{
			this.AttackPlayer = true;
			return new StateParam(false,X,Y,true,false);
		}
		
		return new StateParam(false,X,Y,false,false);
		
	}
}

export { InventoryState }