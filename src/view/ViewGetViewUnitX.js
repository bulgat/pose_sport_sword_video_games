import { GameParam } from '../GameParam';
class ViewGetViewUnitX{
	GetViewUnitX = function(X){
		return (300*new GameParam().coefDraw)+(X*0.9);
	};
	
}
export { ViewGetViewUnitX }