import React from 'react';
import BackMp4 from "../components/img/FONDO.mp4";
import Typography from '@mui/material/Typography'


const Home = () => {
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
		<Typography variant="h1" color="primary" align="center">
			WELCOME TO FENNEC
			<br />
			INVEST FREELY AND EJOY YOUR REVENUES
			<br />
		    WAGMI
		</Typography>
	</div>
);
};

export default Home;
