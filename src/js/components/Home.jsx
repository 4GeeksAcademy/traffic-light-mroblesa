import React, { useState } from "react";


//create your first component
const Home = () => {

	const [activeLight, setActiveLight] = useState (null);

	const light = {
		redLight: {
			opacity: activeLight === 'redLight' ? 1 : 0.3,
			cursor: 'pointer'
		},
		yellowLight: {
			opacity: activeLight === 'yellowLight' ? 1 : 0.3,
			cursor: 'pointer'
		},
		greenLight: {
			opacity: activeLight === 'greenLight' ? 1 : 0.3,
			cursor: 'pointer'
		}
	}

	return (
		<div className="text-center">
		<h1 className="m-4 ">My traffic Light</h1>
		<div className="d-flex justify-content-center myContainer "> 
           <div className="trafficLight">
			<div className="redLight" style={light.redLight} onClick={() => setActiveLight('redLight')}></div>
			<div className="yellowLight" style={light.yellowLight} onClick={() => setActiveLight('yellowLight')}></div>
			<div className="greenLight" style={light.greenLight} onClick={() => setActiveLight('greenLight')}></div>
		   </div>
		</div>
		</div>
	);
};

export default Home;