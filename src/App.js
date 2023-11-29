import logo from './logo.svg';
import './App.css';

import React, { useRef } from "react";
import "./App.css";
import "./Canvas.js";
import { GameParam } from './GameParam';

import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton, drawSegment } from "./utilities";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

function App() {
//
	//const CANVAS_WIDTH =new GameParam().CANVAS_WIDTH;
	//const CANVAS_HEIGHT =new GameParam().CANVAS_HEIGHT;
	
	
	 const webcamRef = useRef(null);
  const canvasRef = useRef(null);
	
	 //  Load posenet
  const runPosenet = async () => {
    const net = await posenet.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });
    //
    setInterval(() => {
      detect(net);
    }, 100);
  };
	
	
  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Make Detections
      const pose = await net.estimateSinglePose(video);
	  
	 // console.log(pose.keypoints[0].part+"  x = "+pose.keypoints[0].position.x+"  y = "+pose.keypoints[0].position.y);
	  //console.log(pose.keypoints[7].part+"  x = "+pose.keypoints[7].position.x+"  y = "+pose.keypoints[7].position.y);
	  //console.log(pose.keypoints[8].part+"  x = "+pose.keypoints[8].position.x+"  y = "+pose.keypoints[8].position.y);
	  
	   //console.log(pose.keypoints[7].part+"  score = "+pose.keypoints[7].score+"  score = "+pose.keypoints[8].score);
	
	  window.Nose = pose.keypoints[0];
	  window.RightArm = pose.keypoints[8];
	  window.LeftArm = pose.keypoints[7];
      

      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
	  	
		
    }
  };
	

	
	
	
	const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
		const ctx = canvas.current.getContext("2d");
		canvas.current.width = videoWidth;
		canvas.current.height = videoHeight;

	   drawKeypoints(pose["keypoints"], 0.6, ctx);
	   drawSkeleton(pose["keypoints"], 0.7, ctx);
	   
	    //var kol = pose["keypoints"];
		
		
	   //var ctx = context.getContext("2d");
	   //localStorage.getItem('heightArm');
	   
	  //var heightArm = new GameParam().HeightArm;
	   
	  
	   
	   var heightArm = localStorage.getItem('heightArm');
		if (heightArm == null) {
			heightArm = new GameParam().HeightArm;
			localStorage.setItem('heightArm', heightArm);
			console.log(  " Z = "  );
		} else {
			
		}
		
	    drawSegment([heightArm, 0], [heightArm, 650], 0.6, 1, ctx);
		/*
		var ctxK = canvas.getContext("2d");
			ctxK.moveTo(0, 0);
				ctxK.lineTo(200, 100);
				ctxK.stroke();
				
				
				/**
 * Draws a line on a canvas, i.e. a joint

export function drawSegment([ay, ax], [by, bx], color, scale, ctx) {
				*/
	   //drawCanvasBattle();
  };
	
	runPosenet();
	
	
//var gameOver =>{
	
	
//}(100);

	
  	
//const root = React.createElement('div',{},"TTTTTTTTTTTT");
	
	//class MyReact extends Component {
		
	//};
///
class Hell extends React.Component{
	render() {
		return (
		<div>
			<h5>kol</h5>
			<h6>krikunov</h6>
		</div>
		)
	}
}
/*
class ClockHell extends React.Component{
	construct(props){
		super(props);
		this.launchClock()
		this.state={
			currentTime:(new Date()).toLocaleString()
		}
	}
	launchClock() {
		setInterval(()=>{
		console.log("============")
		this.setState({
			currentTime:(new Date()).toLocaleString()
		})
		},1000)
	}
	render() {
		return <div>{this.state.currentTime}</div>
	}
}
*/

class ClockHell extends React.Component{
	state={
			counter:0
	}
	construct(props){
		//super();
		
		this.state={
			counter:0
		}
	}
	handleClick(event)
	{
		this.setState({counter:++this.state.counter});
	}
	render() {
		return (
			<button
				onClick={this.handleClick.bind(this)}
				className="btn btn-primary">
			Don click {this.state.counter} time
			</button>
		)
	}
}
class ClockInput extends React.Component{
	state ={title : "M kol"};
	
	handleChange(event){
		this.setState({title: event.target.value})
	}
	render() {
		return <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)}/>
	}
}

class ClickCounterButton extends React.Component{
	render() {
		return <button
		onclick={this.props.handler}
		className="btn btn-danger">
		IncreaseVolume (Current volume is {this.props.counter})
		</button>
	}
}
/*
	<div><ClickCounterButton
	counter={this.state.counter}
	handler={this.handleClick}/>
	</div>
*/
	let kol = React.createElement('a',{href:'oper.ru'},'web_')
	let ttt = React.createElement('div',null,kol,kol)
///

	function MyForm() {
		var url = window.location.href;
		
		//game
		if (url.indexOf("knob")>-1){
			return (
  
				   <div className="App">
					
				   <canvas id="myCanvas" width={1280} height="420"  style={{textAlign: "center",marginLeft: "auto",marginRight: "auto",top:30}}></canvas>
				   
				   <script src="scriptCanvas/scriptCanvas.js"></script>

				   
				   <div>
				   <label  id="ScoreValue"  color="red">Score:0</label><span></span>&nbsp;&nbsp;&nbsp;
				   <label  id="MuscleValue"  color="red">Muscle:0</label>&nbsp;&nbsp;&nbsp;
				   <label  id="LeftArmValue"  color="red">Left:0</label>&nbsp;&nbsp;&nbsp;
				   <progress  className="w3-container w3-red" id="health" value="100" max={new GameParam().MaxHealthHero}></progress>&nbsp;&nbsp;&nbsp;
				  <label  id="RightArmValue"  color="red">Right:0</label>
				   </div>
				   
					  
					   
						<Webcam
						  ref={webcamRef}
						  style={{
							position: "absolute",
							marginLeft: "auto",
							marginRight: "auto",
							left: 0,
							right: 0,
							textAlign: "down",
							zindex: 9,
							width: 320,
							height: 240,
						  }}
						/>

						<canvas
						  ref={canvasRef}
						  style={{
							position: "absolute",
							marginLeft: "auto",
							marginRight: "auto",
							left: 0,
							right: 0,
							textAlign: "down",
							zindex: 9,
							width: 320,
							height: 240,
						  }}
						/>

					</div>
				
			  );
		}
		//setup
		if (url.indexOf("setup")>-1){
			return (<div className="centerHref"><a href="./knob.html">START</a>
			<p></p>
				<img src="./image/WomenRed.png" alt="Logo"  className="center" />
				<div>
				<h5>SOUND</h5>
				<p></p>
					<input type="range" id="volume" name="volume" min="0" max="100"/>
					<label for="volume" color="red" >Volume</label>
					<label id="volumeValue" color="red" >Volume</label>
					<p></p>
					<h5>RAISE A HAND</h5>
				<p></p>
					<input type="range" id="heightArm" name="volume" min="0" max="450"/>
					<label for="heightArm" color="red" >Height </label>
					<label id="heightArmValue" color="red" >Vol</label>
				</div>
				<Webcam
						  ref={webcamRef}
						  style={{
							position: "absolute",
							marginLeft: "auto",
							marginRight: "auto",
							left: 0,
							right: 0,
							textAlign: "down",
							zindex: 9,
							width: 320,
							height: 240,
						  }}
						/>

						<canvas
						  ref={canvasRef}
						  style={{
							position: "absolute",
							marginLeft: "auto",
							marginRight: "auto",
							left: 0,
							right: 0,
							textAlign: "down",
							zindex: 9,
							width: 320,
							height: 240,
						  }}
						/>
			</div>
			);
		}
		//gameover
		if (url.indexOf("gameover")>-1){
			
			return (<div className="centerHref"><a href="./knob.html">START</a>
			<p></p>
				<img src="./image/GameOver0.jpg" id="gameOverId" alt="GameOver"   className="centerGameOver" />	
				<a href="./setup.html">MENU</a>
			</div>
			);
		}
		//index
	return (
		<div>
	<div className="centerHref"> <ClockHell/><ClockInput/><ClickCounterButton/><a href="./setup.html">Start Menu</a>

		<p></p>
		<img src="./image/Cover.png" alt="Logo"  className="center" />
		<h3>
      Пиво <FaBeer />?
    </h3>
		</div>
		</div>
		);
	}
	////// 

  return (
  
   MyForm()
	
  );
  

  
}

export default App;
