import  { HeroModel } from "./HeroModel.js";
import { TemplateFiend, AnotherTemplate } from './Fiend';
import { ZonaAttack } from './ZonaAttack';
import { GameParam } from './GameParam';
import { View } from './View';
import { PlayMusic } from './PlayMusic';
import { PlayAudioEffect } from './PlayAudioEffect';
import { Scenario } from './Scenario';
import { ModelLevel } from './model/ModelLevel';

//ModelLevel
const CANVAS_WIDTH =new GameParam().CANVAS_WIDTH;
const CANVAS_HEIGHT =new GameParam().CANVAS_HEIGHT;
const coefDraw=2;


const ZONA_ATTACK =30*coefDraw;
let LEVEL =0;
const TIME_FRAME = 400;
var _modelHero =new HeroModel(TIME_FRAME);
var gameParam =new GameParam();
var LineAttack = gameParam.LineAttack;
var LineReserve = gameParam.LineReserve;
var _heightArmValue = new GameParam().HeightArm;
var _scenario = new Scenario();
var _modelLevel = new ModelLevel([],0,300);

var coefImg = 127;

	setInterval(() => {
     // draw();
	  drawCanvasHero ();
    }, 100);
	


//var _this =this;
/*
	setTimeout(function() {
 
	console.log( "========= (((=   = "+ _this.coefImg  );
	}, 1000);
	*/
	//var arr =[{kol:2},{kol:4},{kol:6},{kol:8}];
	//var arr2 = arr.map(function(v,i) {
		
		//return {kol:v.kol+=3}});
	
	
	
	var context = document.getElementById("myCanvas");

var playMusic = new PlayMusic(localStorage.getItem('Volume'));
document.PlayAudio = new PlayAudioEffect(0.05);
		
		document.addEventListener('DOMContentLoaded', function(event){
			
			var volume = document.getElementById("volume");
			
			if (volume!=null)
			{
				volume.value =localStorage.getItem('Volume');
				
				var num = parseInt(volume.value);
				
				
				volume.addEventListener("change",function(e)
				{
					
						
						localStorage.setItem('Volume', volume.value/100);
						playMusic.SetVolume(volume.value/100);
						volumeValue.innerHTML = " "+(volume.value)+" %";
						document.PlayAudio.SetVolume(volume.value/100);
				});
			}	
				var volumeValue = document.getElementById("volumeValue");
				
				
				if(volumeValue!=null){
					volumeValue.innerHTML = " "+(volume.value)+" %";
					document.PlayAudio.SetVolume(volume.value/100);
					
					
						//////
						
						
						var heightArmId = document.getElementById("heightArmValue");
						var heightArmSlice = document.getElementById("heightArm");
						var heightArm = localStorage.getItem('heightArm');
						if (heightArm == null) {
							//heightArm = new GameParam().HeightArm;
							heightArm = _heightArmValue;
							localStorage.setItem('heightArm', heightArm);
						} else {
							heightArmId.innerHTML =heightArm;
							//new GameParam().HeightArm = heightArm;
							
							_heightArmValue = heightArm;
						}
						
						
						
						
						heightArmSlice.addEventListener("change",function(e)
						{
							
							var value = this.value;
							heightArmId.innerHTML = value;
							localStorage.setItem('heightArm', value);
							_heightArmValue = value;
						});
						//////
				}
		});
		
		

	const audioSword = [];
	audioSword[0] = new Audio("/sword.ogg");
	audioSword[1] = new Audio("/injure.mp3");
	


	var loadCanvas=false;
	const base_image = new Image();
	base_image.src = '/image/womenAtlas0.png';
	
	base_image.onload = function() 
	{	 
		 loadCanvas=true;
	}

	// ThroneRoom  bigFon
	const throneRoom_image = new Image();
	throneRoom_image.src = '/image/bigFon.png';
	throneRoom_image.onload = function() 
	{		  }
	//DevilEye.png
	const devilEye_image = new Image();
	devilEye_image.src = '/image/DevilEye.png';
	devilEye_image.onload = function() 
	{}
	//inventory
	const _inventory_image = new Image();
	_inventory_image.src = '/image/pharmacy.png';
	_inventory_image.onload = function() 
	{}
	
	const devilEyeModel =  {X:139,Y:139};
	/*
	var ModelLevel = {
		fiendModelList:[],
		LevelId:0
	};
*/
	var lastFrameTime=0;
	const drawCanvasHero = () =>{

		var currentFrameTime = Date.now();
		var timeElapsed = currentFrameTime-lastFrameTime;
		
		
		
		if(loadCanvas){
			var context = document.getElementById("myCanvas");
			if(context==null){
				return;
			}
			var ctx = context.getContext("2d");

			if (window.Nose!=undefined){
				ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
				

				_modelLevel.MoveX = new View().DrawBackground(ctx,_modelLevel.LevelId,throneRoom_image,_modelLevel.MoveX,_modelLevel.MoveFon);

				UpdateHero(_modelLevel.fiendModelList,currentFrameTime);
				////
				let health = document.getElementById("health");
				if(health!=null){
					health.value = _modelHero.Health;
				}
				
				////
				
				
				
				for(var i=0;i<_modelLevel.fiendModelList.length;i++){
					
					
					if (_modelLevel.fiendModelList[i].GetState() == 7)
					{
						//zona attack fiend => player
						if (new ZonaAttack().ZoneAttack(_modelLevel.fiendModelList[i].X,_modelHero.Nose,ZONA_ATTACK))
						{
							
							_modelHero.MinusHealth(1,currentFrameTime) ;
						}
					}
					_modelLevel.fiendModelList[i].UpdateRandomAttack(currentFrameTime,_modelHero);

				}
				new View().DrawFiend(ctx,currentFrameTime,_modelLevel,devilEye_image,null,_inventory_image,null);
				new View().DrawHero (ctx,_modelHero,currentFrameTime,null,base_image);
				
				new View().DrawLowBar(ctx,currentFrameTime,_modelLevel,devilEye_image,null,_inventory_image);
				
				// draw weapon
				new View().DrawWeapon(ctx,currentFrameTime,_modelLevel,devilEye_image,null,_inventory_image,_modelHero.GetIdWeapon());
				
				
				
				resetFiendModel(_modelLevel.fiendModelList,currentFrameTime);

				_modelLevel.fiendModelList = _scenario.ResetNewLevel(_modelLevel,currentFrameTime);
			}
		}
		lastFrameTime = currentFrameTime;
	}
	
	const UpdateHero =(FiendModelList,CurrentFrameTime)=>{
	
		var HeightArm =_heightArmValue;

		_modelHero.SetRightArm(HeightArm>window.RightArm.position.y);
		_modelHero.SetLeftArm(HeightArm>window.LeftArm.position.y); 

		_modelHero.SetNose(CANVAS_WIDTH - window.Nose.position.x*coefDraw);
		
		//Muscle
		var muscleValue = document.getElementById("MuscleValue");
		muscleValue.innerHTML =" Muscle : "+Math.min(_modelHero.LeftArmElevate,_modelHero.RightArmElevate)+"          ";
		//ScoreValue
		var leftArmValue = document.getElementById("ScoreValue");
		leftArmValue.innerHTML =" Score : "+_modelHero.Score+"          ";
		//LeftArmValue
		var leftArmValue = document.getElementById("LeftArmValue");
		leftArmValue.innerHTML =" Left : "+_modelHero.LeftArmElevate+" ";
		
		var rightArmValue = document.getElementById("RightArmValue");
		rightArmValue.innerHTML =" Right : "+_modelHero.RightArmElevate+" ";
		
		// attack player => fiend
		for(var i=0;i<FiendModelList.length;i++){

			if (new ZonaAttack().ZoneAttack(FiendModelList[i].X,_modelHero.Nose,ZONA_ATTACK))
			{
				if(_modelHero.RightArm){
					//monstr
					if(FiendModelList[i].GetAttackPlayer() ==false){
						FiendModelList[i].Time =CurrentFrameTime;
					}
					var score = FiendModelList[i].SetAttackPlayer(true,CurrentFrameTime,_modelHero.GetDamageWeapon());
					_modelHero.Score +=score;
				} else {
					//pharmacy
					if (FiendModelList[i].Name == FiendModelList[i].NamePharmacy){
						
						var hpLife = FiendModelList[i].SetAttackPlayer(true,CurrentFrameTime,_modelHero.GetDamageWeapon());
				
						_modelHero.MinusHealth(-hpLife,CurrentFrameTime);
					}
				}
				
			}
			
			
		}
		
		if (_modelHero.Health<=0){
			
			window.location.replace("./gameover.html");
		}
		//_modelHero.Health
		
		return _modelHero;
	};

	//Fiend

	
	var resetFiendModel = function(FiendModelList,currentFrameTime){
		
		for(var i=0;i<FiendModelList.length;i++){
			
			if (FiendModelList[i].GetAttackPlayer()){

				if (FiendModelList[i].Dead == true){

					if (FiendModelList[i].Name != FiendModelList[i].NamePharmacy) {
						var randomSetPharmacy = Math.floor(Math.random() * 3);
						
						//add pharmacy prize
						if (randomSetPharmacy ==1) {
							_modelLevel.fiendModelList.push(new TemplateFiend(3,139,true,LineReserve,TIME_FRAME,CANVAS_WIDTH,ZONA_ATTACK,currentFrameTime,
							FiendModelList[i].X,gameParam.TableMonster[2]));
						}
					}
					
					console.log("DEAD     =  "+FiendModelList[i].GetAttackPlayer()+"  =  e = "+FiendModelList[i].Name );
					
					FiendModelList.splice(i,1);
					return;
				}
				
			}
		}
	}
	/*
	var draw = function(){
		var context = document.getElementById("myCanvas");
		if(context!=null)
		{
			var ctx = context.getContext("2d");
			ctx.moveTo(0, 0);
				ctx.lineTo(200, 100);
				ctx.stroke();
		}
	};
	*/