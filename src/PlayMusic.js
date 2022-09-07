class PlayMusic{
	audio;
	constructor(Volume){
		
		document.audio = new Audio("/BossTime.mp3");
		document.audio.volume = Volume;
		setTimeout(this.startAudio, 5000);
		
		document.addEventListener('DOMContentLoaded', this.startAudio);
		/*
		document.addEventListener('DOMContentLoaded', function(event){
			
			
			
		 
			startAudio();
			
			
			//this.audio.play(10000);
			//startAudio();
		});
		*/
		
	};
	SetVolume = function(Volume){
		
		document.audio.volume = Volume;
	};
	startAudio= function()  {

		document.audio.play(1000);
	};
	
}
export { PlayMusic }