import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import React from "react";

class ViewMain extends React.Component{
	count=0;
constructor(props){
	super(props)
	console.log("start");
	this.startTimer = this.startTimer.bind(this);
	//this.startTimer();
}
startTimer(param){
	console.log("start =",param);
	document.getElementById("startGame").play();
	setInterval(()=>{
		this.count++;
		//console.log("this.count ="+this.count);
	},1000);
}
render() {
	
		return (
			<div>
					<div className="centerHref"> 
					<a href="./setup.html">Start Menu</a>

					<p></p>
					<img src="./image/Cover.png" alt="Logo"  className="center" />
					<h3>
					Пиво <FaBeer />?
					</h3>
					</div>
					<button type='button' className="btn-default btn" onClick={()=>{this.startTimer(666)}}>

					</button>
					<audio id="startGame" src="./8BitMusic.mp3" preload="auto"></audio>
			</div>
		)
		}
	
}
export { ViewMain }