import { TemplateFiend, AnotherTemplate } from './Fiend';
import { GameParam } from './GameParam';
import { ModelLevel } from './model/ModelLevel';

class Scenario{
	LEVEL =0;
	ResetNewLevel = function(modelLevel,currentFrameTime){
		var gameParam =new GameParam();
		var LineReserve = gameParam.LineReserve;
		if(modelLevel.fiendModelList.length==0){
			if (this.LEVEL==0){
				/*
				ModelLevel.fiendModelList =[
				new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-160,gameParam.TableMonster[4]),
				//new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-620,gameParam.TableMonster[7])
				];
				ModelLevel.LevelId =0;
				*/
//0
				console.log( " == t = " );
				
				
				modelLevel = new ModelLevel([
				new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-160,gameParam.GetTableMonster("master")),
				
				//new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-160,gameParam.TableMonster[9])
				//new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-160,gameParam.GetTableMonster("skelet"))
				],0,300,false);
				
			}
			if (this.LEVEL==1){
				/*
				modelLevel.fiendModelList =[
				new TemplateFiend(1,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,100,gameParam.TableMonster[0]),
				new TemplateFiend(2,239,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,500,gameParam.TableMonster[1]),
				new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,220,gameParam.TableMonster[2]),

				];
				modelLevel.LevelId =0;
					*/
modelLevel = new ModelLevel([
				new TemplateFiend(1,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,100,gameParam.TableMonster[0]),
				new TemplateFiend(2,239,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,500,gameParam.TableMonster[1]),
				new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,220,gameParam.TableMonster[2]),

				],0,300,true);					
			}
			if (this.LEVEL==2){
				/*
				modelLevel.fiendModelList =[
					new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-160,gameParam.TableMonster[3])
				];
				modelLevel.LevelId =0;
				*/
				console.log(  " !!!!!!!!!!!!!!!!  ModelLevel    e = "  );
				modelLevel = new ModelLevel(
				[
					new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-160,gameParam.TableMonster[3])
				],0,0,false
				);
			}
			if (this.LEVEL==3){
				/*
				modelLevel.fiendModelList =[
				new TemplateFiend(1,59,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-100,gameParam.TableMonster[1]),
				new TemplateFiend(2,339,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,gameParam.CANVAS_WIDTH+100,gameParam.TableMonster[1]),
				new TemplateFiend(2,439,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,gameParam.CANVAS_WIDTH+100,gameParam.TableMonster[1])];
				modelLevel.LevelId =0;
				*/
				modelLevel = new ModelLevel(
				[
				new TemplateFiend(1,59,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-100,gameParam.TableMonster[1]),
				new TemplateFiend(2,339,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,gameParam.CANVAS_WIDTH+100,gameParam.TableMonster[1]),
				new TemplateFiend(2,439,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,gameParam.CANVAS_WIDTH+100,gameParam.TableMonster[1])],0,0,false
				);
			}
			if (this.LEVEL==4){
				/*
				modelLevel.fiendModelList =[
					new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-620,gameParam.TableMonster[7])
				];
				modelLevel.LevelId =3;
				*/
				modelLevel = new ModelLevel(
				[
					new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-620,gameParam.TableMonster[7])
				],3,0,false
				);
			}
			if (this.LEVEL==5){
				/*
				modelLevel.fiendModelList =[new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-160,gameParam.TableMonster[6])];
				modelLevel.LevelId =1;
				*/
				modelLevel = new ModelLevel(
				[new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-160,gameParam.TableMonster[6])],
				1,0,false
				);
			}
			if (this.LEVEL==6){
				/*
				modelLevel.fiendModelList =[
				new TemplateFiend(1,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-100,gameParam.TableMonster[0]),
				new TemplateFiend(2,239,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,gameParam.CANVAS_WIDTH+100,gameParam.TableMonster[0])];
				modelLevel.LevelId =1;
				*/
				modelLevel = new ModelLevel(
				[
				new TemplateFiend(1,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-100,gameParam.TableMonster[0]),
				new TemplateFiend(2,239,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,gameParam.CANVAS_WIDTH+100,gameParam.TableMonster[0])],1,300,true
				);
			}
			if (this.LEVEL==7){
				/*
				modelLevel.fiendModelList =[
				new TemplateFiend(1,59,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-100,gameParam.TableMonster[0]),
				new TemplateFiend(2,339,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,gameParam.CANVAS_WIDTH+100,gameParam.TableMonster[0]),
				new TemplateFiend(2,439,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,gameParam.CANVAS_WIDTH+100,gameParam.TableMonster[0])];
				modelLevel.LevelId =2;
				*/
				modelLevel = new ModelLevel(
				[
				new TemplateFiend(1,59,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-100,gameParam.TableMonster[0]),
				new TemplateFiend(2,339,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,gameParam.CANVAS_WIDTH+100,gameParam.TableMonster[0]),
				new TemplateFiend(2,439,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,gameParam.CANVAS_WIDTH+100,gameParam.TableMonster[0])],2,300,true
				);
			}
			if (this.LEVEL==8){
				/*
				modelLevel.fiendModelList =[
				new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-160,gameParam.TableMonster[5])
				];
				modelLevel.LevelId =2;
				*/
				modelLevel = new ModelLevel(
				[
				new TemplateFiend(3,139,true,LineReserve,gameParam.TIME_FRAME,gameParam.CANVAS_WIDTH,gameParam.GetZonaAttack(),currentFrameTime,-160,gameParam.TableMonster[5])
				],2,0,false
				);
			}
			
			this.LEVEL+=1;
			console.log( "==    LEVEL =" +this.LEVEL);
		}
		return modelLevel.fiendModelList
	}
}
export { Scenario }