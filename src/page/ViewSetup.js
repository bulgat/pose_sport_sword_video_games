import React from "react";
import Webcam from "react-webcam";
import { useRef } from "react";

class ViewSetup extends React.Component{
    constructor(props){

	}
    render({webcamRef,canvasRef}) {
       console.log("JJJJJJJJJJJJJJJ");
		//const webcamRef = useRef([]);
        //const canvasRef = useRef([]);
    return (
    <div>
       <div className="centerHref"><a href="./knob.html">START</a>
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
    </div>
    );
}
}
export { ViewSetup }