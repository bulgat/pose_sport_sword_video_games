import { GameParam } from './GameParam';
import { ViewCanvasDrawFiend } from './view/ViewCanvasDrawFiend';
import { ViewGetViewUnitX } from './view/ViewGetViewUnitX';
import  { HeroModel } from "./HeroModel.js";

class View {
	
	_devilEyeList = {
		0:{img:[{x:151*0,y:0,w:151,h:151,wView:151,hView:150,name:"jump"}]},
		1:{img:[{x:151*1,y:0,w:151,h:151,wView:151,hView:150,name:"jump"}]},
		2:{img:[{x:151*2,y:0,w:151,h:151,wView:151,hView:150,name:"jump"}]},
		3:{img:[{x:151*3,y:0,w:151,h:151,wView:151,hView:150,name:"jump"}]},
		4:{img:[{x:151*4,y:0,w:151,h:151,wView:151,hView:150,name:"idle"}]},
		5:{img:[{x:151*5,y:0,w:151,h:151,wView:151,hView:150,name:"idle"}]},
		6:{img:[{x:151*6,y:0,w:151,h:151,wView:151,hView:150,name:"idle"}]},
		7:{img:[{x:151*7,y:0,w:151,h:151,wView:151,hView:150,name:"attack"}]},
		8:{img:[{x:151*8,y:0,w:151,h:151,wView:151,hView:150,name:"attack"}]},
		9:{img:[{x:151*9,y:0,w:151,h:151,wView:151,hView:150,name:"attack"}]},
		10:{img:[{x:151*10,y:0,w:151,h:151,wView:151,hView:150,name:"right"}]},
		11:{img:[{x:151*11,y:0,w:151,h:151,wView:151,hView:150,name:"left"}]},
		12:{img:[{x:151*12,y:0,w:151,h:151,wView:151,hView:150,name:"dead"}]},
		13:{img:[{x:151*13,y:0,w:151,h:151,wView:151,hView:150,name:"dead"}]},
		14:{img:[{x:151*14,y:0,w:151,h:151,wView:151,hView:150,name:"dead"}]},
		15:{img:[{x:151*15,y:0,w:151,h:151,wView:151,hView:150,name:"blow"}]},
		16:{img:[{x:151*16,y:0,w:151,h:151,wView:151,hView:150,name:"block"}]}
	};

	_heroList = {
		0:{img:[{x:113*0,y:0,w:113,h:150,name:"idle"}]},
		1:{img:[{x:113*1,y:0,w:113,h:150,name:"attack"}]},
		2:{img:[{x:113*2,y:0,w:113,h:150,name:"attack"}]},
		3:{img:[{x:113*3,y:0,w:113,h:150,name:"attack"}]},
		4:{img:[{x:113*4,y:0,w:113,h:150,name:"defence"}]},
		5:{img:[{x:113*5,y:0,w:113,h:150,name:"defence"}]},

		6:{img:[{x:113*6,y:0,w:113,h:150,name:"attack0"}]},
		7:{img:[{x:113*7,y:0,w:113,h:150,name:"attack0"}]},
		8:{img:[{x:113*8,y:0,w:113,h:150,name:"attack0"}]},

		9:{img:[{x:113*9,y:0,w:113,h:150,name:"dead"}]},
		10:{img:[{x:113*10,y:0,w:113,h:150,name:"dead"}]},
	};

	_inventoryList = {
		0:{img:[{x:50*0,y:0,w:50,h:50,wView:25,hView:25,name:"pharmacy"}]},
		1:{img:[{x:50*1,y:0,w:50,h:50,wView:25,hView:25,name:"pharmacy"}]},
		2:{img:[{x:50*2,y:0,w:50,h:50,wView:25,hView:25,name:"pharmacy"}]},
		3:{img:[{x:50*3,y:0,w:50,h:50,wView:25,hView:25,name:"pharmacy"}]},
		4:{img:[{x:50*4,y:0,w:50,h:50,wView:25,hView:25,name:"pharmacy"}]},
		5:{img:[{x:50*5,y:0,w:50,h:50,wView:25,hView:25,name:"pharmacy"}]},
		6:{img:[{x:50*6,y:0,w:50,h:50,wView:25,hView:25,name:"pharmacy"}]},
		7:{img:[{x:50*7,y:0,w:50,h:50,wView:25,hView:25,name:"pharmacy"}]},
		
		10:{img:[{x:151*0,y:75,w:151,h:130,wView:125,hView:125,name:"lady"}]},
		11:{img:[{x:151*1,y:75,w:151,h:130,wView:125,hView:125,name:"lady"}]},
		12:{img:[{x:151*2,y:75,w:151,h:130,wView:125,hView:125,name:"lady"}]},
		13:{img:[{x:151*3,y:75,w:151,h:130,wView:125,hView:125,name:"lady"}]},
		
		14:{img:[{x:151*4,y:75,w:151,h:130,wView:125,hView:125,name:"lady"}]},
		15:{img:[{x:151*5,y:75,w:151,h:130,wView:125,hView:125,name:"lady"}]},
		16:{img:[{x:151*6,y:75,w:151,h:130,wView:125,hView:125,name:"lady"}]},
		
		17:{img:[{x:136*0,y:207,w:132,h:130,wView:132,hView:132,name:"master"}]},
		18:{img:[{x:136*1,y:207,w:132,h:130,wView:132,hView:132,name:"master"}]},
		19:{img:[{x:136*2,y:207,w:132,h:130,wView:132,hView:132,name:"master"}]},
		
		
		20:{img:[{x:415,y:0,w:100,h:50,wView:125,hView:55,name:"trade"}]},
		21:{img:[{x:415+90,y:0,w:100,h:50,wView:125,hView:55,name:"trade"}]},
		
		22:{img:[{x:415+90+90+3,y:0,w:90,h:50,wView:125,hView:55,name:"sword0"}]},
		23:{img:[{x:415+90+90+90,y:0,w:90,h:50,wView:125,hView:55,name:"sword1"}]},
		
		30:{img:[{x:40*0,y:340,w:40,h:43,wView:40,hView:43,name:"master head"}]},
		31:{img:[{x:405,y:200,w:273,h:66,wView:273,hView:66,name:"master cloud"}]},
		
		40:{img:[{x:58*0,y:387,w:58,h:162,wView:58,hView:132,name:"princess"}]},
		41:{img:[{x:58*1,y:387,w:58,h:162,wView:58,hView:132,name:"princess"}]},
		42:{img:[{x:58*2,y:387,w:58,h:162,wView:58,hView:132,name:"princess"}]},
		43:{img:[{x:58*3,y:387,w:58,h:162,wView:58,hView:132,name:"princess"}]},
		
		50:{img:[{x:151*0,y:540,w:151,h:132,wView:151,hView:132,name:"villager"}]},
		51:{img:[{x:151*1,y:540,w:151,h:132,wView:151,hView:132,name:"villager"}]},
		52:{img:[{x:151*2,y:540,w:151,h:132,wView:151,hView:132,name:"villager"}]},
		53:{img:[{x:151*3,y:540,w:151,h:132,wView:151,hView:132,name:"villager"}]},
		
		54:{img:[{x:151*4,y:540,w:151,h:132,wView:151,hView:132,name:"villager"}]},
		55:{img:[{x:151*5,y:540,w:151,h:132,wView:151,hView:132,name:"villager"}]},
		56:{img:[{x:151*6,y:540,w:151,h:132,wView:151,hView:132,name:"villager"}]},
		57:{img:[{x:151*7,y:540,w:151,h:132,wView:151,hView:132,name:"villager"}]},
		
		60:{img:[{x:453+302*0,y:302,w:302,h:170,wView:302,hView:170,name:"door"}]},
		61:{img:[{x:453+302*1,y:302,w:302,h:170,wView:302,hView:170,name:"door"}]},
		62:{img:[{x:453+302*2,y:302,w:302,h:170,wView:302,hView:170,name:"door"}]},
		
		70:{img:[{x:0,y:690,w:936,h:170,wView:645,hView:100,name:"LowBarInventory"}]},
	}
	//kol=0;
	DrawBackground=(ctx,Id,throneRoom_image,MoveX,MoveFon) =>{
		
		var coefDraw = new GameParam().coefDraw;
		//if(document.kol==undefined){
		//	document.kol=0;
		//}
		if (MoveFon){
			MoveX -= 1;
			if(MoveX<=0)
			{
				MoveX =0;
			}
		}
		
		
		if(Id == 0){
			
			ctx.drawImage(throneRoom_image, 0+(MoveX), 189*0, 939, 189, 0, 0, 939*coefDraw, 189*coefDraw);
			//move
			//document.kol+=1;
			
		}
		if(Id == 1){
			ctx.drawImage(throneRoom_image, 0+(MoveX), 189*1, 939, 189, 0, 0, 939*coefDraw, 189*coefDraw);
		}
		if(Id == 2){
			ctx.drawImage(throneRoom_image, 0+(MoveX), 189*2, 939, 189, 0, 0, 939*coefDraw, 189*coefDraw);
		}
		if(Id == 3){
			ctx.drawImage(throneRoom_image, 0+(MoveX), 189*3, 939, 189, 0, 0, 939*coefDraw, 189*coefDraw);
		}
		return MoveX;
	};
	DrawHero = (ctx,ModelHero,CurrentFrameTime,_heroList,base_image) =>
	{
		var kol = ModelHero instanceof HeroModel;
		
		if (ModelHero instanceof HeroModel==false){
			
			var gfg = ModelHero instanceof HeroModel;
			
			throw "no model";
		}
		
		
		var coefDraw = new GameParam().coefDraw;

		var countAnimInf = ModelHero.GetState(CurrentFrameTime)
		
		
		
		
		
		//1500
		//var moveHeroX = ModelHero.Nose*0.9;
		this.DrawCanvas(ctx,this._heroList,base_image,countAnimInf,ModelHero,coefDraw);
		

		
		
		return;
	};
	DrawCanvas =(ctx,_heroList,base_image,countAnimInf,ModelHero,coefDraw) =>{
		
		
		
		ctx.drawImage(base_image, 
				_heroList[countAnimInf].img[0].x,//x origin
				_heroList[countAnimInf].img[0].y,//y origin
				_heroList[countAnimInf].img[0].w,//w origin
				_heroList[countAnimInf].img[0].h,//h origin
				new ViewGetViewUnitX().GetViewUnitX(ModelHero.Nose),//x
				39*coefDraw,//y
				_heroList[countAnimInf].img[0].w*coefDraw,//w size
				_heroList[countAnimInf].img[0].h*coefDraw//h size
				);
		
	};
	
	DrawFiend = (ctx,currentFrameTime,ModelLevel,devilEye_image,_devilEyeList,_inventory_image,_inventoryList) =>
	{
		var coefDraw = new GameParam().coefDraw;
		
		//sort depth
		var reservLine_ar = [];
		var attackLine_ar = [];
		
		for(var i=0;i<ModelLevel.fiendModelList.length;i++){
			 
			if(ModelLevel.fiendModelList[i].GetLocationLineReserve()==true){
				reservLine_ar.push(ModelLevel.fiendModelList[i]);
			} else {
				attackLine_ar.push(ModelLevel.fiendModelList[i]);
			}
		}

		
		
		ModelLevel.fiendModelList = reservLine_ar.concat(attackLine_ar);
	
	
		for(var i=0;i<ModelLevel.fiendModelList.length;i++){
		
			var ModelFiend = ModelLevel.fiendModelList[i];
		
			var countAnimInf =ModelFiend.GetStateTime(currentFrameTime);
			
			var heightTypeEnemy =ModelFiend.GetTypeUnit();
			
			var renderImage =devilEye_image;
			var renderImageList = this._devilEyeList;
			

			for(var z=0;z<ModelLevel.fiendModelList[i].PersonList.length;z++)
			{
				if (ModelLevel.fiendModelList[i].Name==ModelLevel.fiendModelList[i].PersonList[z].Name)
				{
					
					renderImage = _inventory_image;
					renderImageList =this._inventoryList;
				}
			}

			//ctx.save();
			//ctx.scale(-1, 1);
			//ctx.translate(CANVAS_WIDTH, 0);
	//ctx.scale(-1, 1);
			

			
			new ViewCanvasDrawFiend().CanvasDrawFiend(ctx,renderImageList,renderImage,countAnimInf,heightTypeEnemy,ModelFiend.X,ModelFiend.Y,coefDraw);
			
			this.DrawOtherItem(ModelFiend,ctx,renderImageList,renderImage,ModelFiend,heightTypeEnemy,coefDraw);
			//this.CanvasDrawFiend(ctx,renderImageList,renderImage,countAnimInf,heightTypeEnemy,ModelFiend.X,ModelFiend.Y,coefDraw);
			

			//	ctx.restore();
			
		}
	};
	DrawOtherItem = function(ModelFiend,ctx,renderImageList,renderImage,countAnimInf,heightTypeEnemy,coefDraw) {
		if (ModelFiend.GetAdditionallyStateDraw()!=null){
				if (ModelFiend.GetAdditionallyStateDraw().length>0)
				{
					
					for(var z=0;z<ModelFiend.GetAdditionallyStateDraw().length;z++)
					{
						
						
						new ViewCanvasDrawFiend().CanvasDrawFiend(ctx,renderImageList,renderImage,ModelFiend.GetAdditionallyStateDraw()[z].GetIdimage(),
						heightTypeEnemy,
						ModelFiend.GetAdditionallyStateDraw()[z].X,
						ModelFiend.GetAdditionallyStateDraw()[z].Y,
						coefDraw);
						
						if (ModelFiend.GetAdditionallyStateDraw()[z].IsText()) {
							ctx.font = "bold 22px verdana, sans-serif ";
							ctx.fillStyle = "#FFFF00";
							var yText = ModelFiend.GetAdditionallyStateDraw()[z].Y;
							if (ModelFiend.GetAdditionallyStateDraw()[z].ColorText == "Black"){
								ctx.fillStyle = "#000000";
								yText -= 30;
								var lengthTextBlock = 27;
								console.log( ModelFiend.GetAdditionallyStateDraw()[z].GetText()+"    ttac    Id =    countAnim  = "+ModelFiend.GetAdditionallyStateDraw()[z].GetText().length );
								if(ModelFiend.GetAdditionallyStateDraw()[z].GetText().length>10){
									var textQuest =ModelFiend.GetAdditionallyStateDraw()[z].GetText();
									var splitTextList =[];
									for(var i=0;i<textQuest.length/lengthTextBlock;i++){
										splitTextList.push(textQuest.substr(lengthTextBlock*i,Math.floor(lengthTextBlock)));
										//textQuest = textQuest.slice(lengthTextBlock);
									}
									
									for(var i=0;i<splitTextList.length;i++){
										ctx.fillText(splitTextList[i],
										new ViewGetViewUnitX().GetViewUnitX(ModelFiend.GetAdditionallyStateDraw()[z].X+50*coefDraw),
										yText*coefDraw+50*coefDraw+10*coefDraw*i);
									}
									
									
									//console.log( splitTextList+"      color =" +ModelFiend.GetAdditionallyStateDraw()[z].ColorText);
				
								}
							} else {
								ctx.fillText(ModelFiend.GetAdditionallyStateDraw()[z].GetText(),
								new ViewGetViewUnitX().GetViewUnitX(ModelFiend.GetAdditionallyStateDraw()[z].X+50*coefDraw),
								yText*coefDraw+50*coefDraw);
							}
							
							
						}
					}
				}
			}
		
	};
	DrawWeapon =(ctx,currentFrameTime,ModelLevel,devilEye_image,_devilEyeList,_inventory_image,IdWeapon)=>{
		
		
		
		var coefDraw = new GameParam().coefDraw;
		
		var heightTypeEnemy = 0;
		var countAnimInf = IdWeapon;
	
		var renderImage = _inventory_image;
		var renderImageList =this._inventoryList;
		
		new ViewCanvasDrawFiend().CanvasDrawFiend(ctx,renderImageList,renderImage,countAnimInf,heightTypeEnemy,450,160,coefDraw);
		//this.CanvasDrawFiend(ctx,renderImageList,renderImage,countAnimInf,heightTypeEnemy,ModelFiend.X,ModelFiend.Y,coefDraw);
	};
	DrawLowBar =(ctx,currentFrameTime,ModelLevel,devilEye_image,_devilEyeList,_inventory_image)=>{
		
		var coefDraw = new GameParam().coefDraw;
		var heightTypeEnemy = 0;
		
		var countAnimInf = 70;
		
		var renderImage = _inventory_image;
		var renderImageList =this._inventoryList;
		
		new ViewCanvasDrawFiend().CanvasDrawFiend(ctx,renderImageList,renderImage,countAnimInf,heightTypeEnemy,-670,180,coefDraw);
	};
	
}
export { View }