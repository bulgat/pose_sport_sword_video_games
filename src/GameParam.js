class GameParam{
	ZONA_ATTACK = 30;
	coefDraw = 2;
	TIME_FRAME = 400;
	CANVAS_WIDTH =640;
	CANVAS_HEIGHT =400;
	LineReserve =0;
	LineAttack = 30;
	GetZonaAttack = function(){
		return this.ZONA_ATTACK*this.coefDraw;
	}
	TableMonster = [
	{HPlife: 10, Name: "eye",Score:10,TypeUnit:0},
	{HPlife: 30, Name: "ork",Score:20,TypeUnit:1},
	{HPlife: 30, Name: "pharmacy",Score:0,TypeUnit:0},
	{HPlife: 30, Name: "dealer",Score:0,TypeUnit:0},
	{HPlife: 30, Name: "master",Score:0,TypeUnit:0},
	{HPlife: 30, Name: "princess",Score:0,TypeUnit:0},
	{HPlife: 30, Name: "villager",Score:0,TypeUnit:0},
	{HPlife: 30, Name: "door",Score:0,TypeUnit:0},
	{HPlife: 30, Name: "joker",Score:20,TypeUnit:2},
	{HPlife: 30, Name: "skelet",Score:20,TypeUnit:3},
	];
	GetTableMonster = function(Name){
		
		if (typeof Name!=="string")
		{
			throw "Имя должно быть String";
		}
		
		for(var i=0;i<this.TableMonster.length;i++){
			if(this.TableMonster[i].Name == Name){
				return this.TableMonster[i];
			}
		}
	};
	MaxHealthHero = 10;
	HeightArm = 150;
	constructor(){
		
	};
	TableWeapon =[
		{Id:2,ImageId:22,Cost:30,Damage:10,Name:"old"},
		{Id:3,ImageId:23,Cost:40,Damage:20,Name:"cool"}
	]
	
	
}
export { GameParam }