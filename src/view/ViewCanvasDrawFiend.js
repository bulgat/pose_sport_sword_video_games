import { ViewGetViewUnitX } from './ViewGetViewUnitX';

class ViewCanvasDrawFiend{
	
	constructor(){
		
	};
	CanvasDrawFiend = function(ctx,renderImageList,renderImage,countAnimInf,heightTypeEnemy,X,Y,coefDraw)
	{
			
			
		ctx.drawImage(renderImage, 
					renderImageList[countAnimInf].img[0].x,//x origin
					renderImageList[countAnimInf].img[0].y+(151*heightTypeEnemy),//y origin
					renderImageList[countAnimInf].img[0].w,//w origin
					renderImageList[countAnimInf].img[0].h,//h origin
					new ViewGetViewUnitX().GetViewUnitX(X),
					//(300*coefDraw)+moveFiendX,
					//ModelFiend.X*coefDraw,//x
					Y*coefDraw,//y
					renderImageList[countAnimInf].img[0].wView*coefDraw,//w size
					renderImageList[countAnimInf].img[0].hView*coefDraw//h size
					);
		
	};
}
export { ViewCanvasDrawFiend }