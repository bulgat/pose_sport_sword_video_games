class PlayAudioEffect{
	audioSword;
	constructor(Volume){

			this.audioSword = [];
			this.audioSword[0] = new Audio("/sword.ogg");
			this.audioSword[1] = new Audio("/injure.mp3");
			
			//var playMusic = new PlayMusic(Volume);
			
			
	}
	PlayEffect= function(Sound)  {
				//audio.volume = 0;
				
				this.SetVolume(document.audio.volume);
				
				if(Sound=="Sword"){
					this.audioSword[0].play();
				}
				if(Sound=="Injure"){
					this.audioSword[1].play();
				}
	}
	SetVolume=function(Volume) {
		
		//audio.volume = Volume;
		this.audioSword[0].volume = Volume;
		this.audioSword[1].volume = Volume;
	}
}
export { PlayAudioEffect }