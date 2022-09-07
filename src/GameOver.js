import { PlayMusic } from './PlayMusic';

class GameOver {

	constructor(){
		var url = window.location.href;
		if (url.indexOf("gameover")>-1){
			

			var startAudio= function()  {
				
				//window.location.replace("./knob.html");
			}
			setTimeout(startAudio, 15000);
			//gameOverId
			
			document.addEventListener('DOMContentLoaded', function(){
				
				let gameOverId = document.getElementById("gameOverId");
			
				var num = Math.floor(Math.random() * 6);
				
				gameOverId.src = "./image/GameOver"+num+".jpg";
				console.log(  "Inj =    " +localStorage.getItem('Volume') );
				var playMusic = new PlayMusic(localStorage.getItem('Volume'));
				
			});
		}
		

	}

}

export { GameOver }