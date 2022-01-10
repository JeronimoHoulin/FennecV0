import React from 'react';
import BackMp4 from "../components/img/FONDO.mp4";


const Social = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}>
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
 
export default Social;
