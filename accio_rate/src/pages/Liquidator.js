import React from 'react';
import SimplePaper from '../components/Liquidator/TradeCard';
import BackMp4 from "../components/img/FONDO.mp4";

const Liquidator = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Center',
		alignItems: 'Center',
		height: '100vh'
	}}
	>
	<SimplePaper />
		<video autoPlay loop muted style={{
			position: "absolute",
			width: "100%",
			left: "50%",
			top: "60%",
			objectFit: "cover",
			transform: "translate(-50%, -50%)",
			zIndex: "-1",

		}}> 
			<source src={BackMp4} type="video/mp4" />
		</video>
	</div>
);
};

export default Liquidator;
