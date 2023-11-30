import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import React from "react";

class ViewMain extends React.Component{
	count=0;
constructor(props){
	super(props)
	console.log("start");
	this.startTimer = this.startTimer.bind(this);
	this.startTimer();
}
startTimer(){
	console.log("start 0000");
	setInterval(()=>{
		this.count++;
		console.log("this.count ="+this.count);
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
					<button ></button>
			</div>
		)
		}
	
}
export { ViewMain }