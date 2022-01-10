import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {
Nav,
NavLink,
NavMenu,
} from './NavbarElements';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../img/logoNav.png';
import Button from '@material-ui/core/Button';
import {ethers} from 'ethers'
import Typography from '@material-ui/core/Typography'
//import SimpleStorage_abi from '../SimpleStorage_abi.json'
//import { mintToken } from "../../Web3Client";
// import LemonGenesis from "../../LemonTokenGen.json"
// import { render } from '@testing-library/react';
//import { ReactComponent as YourPng } from '../../img/logoNav.png';


// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider

const SimpleStorage = () => {
  const classes = useStyles();

	// deploy simple storage contract and paste deployed contract address here. This value is local ganache chain
	let contractAddress = '0xCF31E7c9E7854D7Ecd3F3151a9979BC2a82B4fe3';

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	//const [currentContractVal, setCurrentContractVal] = useState(null);

	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	//const [contract, setContract] = useState(null);

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		updateEthers();
	}

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

	const updateEthers = () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		setProvider(tempProvider);

		let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);

		//let tempContract = new ethers.Contract(contractAddress, SimpleStorage_abi, tempSigner);
		//setContract(tempContract);	
	}
	
	return (
		<div>
			<Button onClick={connectWalletHandler} variant="text" className={classes.NavButton} size="small" edge="end" style={{ textDecoration: 'none' }}>{connButtonText}</Button>
			<div>
        <Typography variant="subtitle2" color="initial">Address: {defaultAccount} </Typography>
			</div>
		</div>
	);
}

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
	return (
	  <Slide appear={false} direction="down" in={!trigger}>
		{children}
	  </Slide>
	);
  }
  
  HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
  };



const useStyles = makeStyles((theme) => ({
    NavButton: {
        marginLeft: 4, 
        '&:hover': {
            background: '#F3F4ED',
            color: "#C06014",
        }
    },

    Img: {
      height: "80%",
      width: "80%"
    }

}));


function Navbar(props) {
	const classes = useStyles();

return (
    <React.Fragment>
	    <CssBaseline />
		<HideOnScroll {...props}>
			<Nav>
       <NavLink to='/home' activeStyle style={{ textDecoration: 'none' }}>
          <img src={Logo} className={classes.Img}/>
        </NavLink>  
				<NavMenu>
				<NavLink to='/liquidator' activeStyle style={{ textDecoration: 'none' }}>
        <Button variant="text" className={classes.NavButton} size="small" edge="end">
            Liquidator
        </Button>
        </NavLink>
				<NavLink to='/social' activeStyle style={{ textDecoration: 'none' }}>
        <Button variant="text" className={classes.NavButton} size="small" edge="end">
            Fire Labs
        </Button>
        </NavLink>
        <NavLink to='/balance' activeStyle style={{ textDecoration: 'none' }}>
        <Button variant="text" className={classes.NavButton} size="small" edge="end">
            Balance
        </Button>
        </NavLink>
        <SimpleStorage />
				</NavMenu>
			</Nav>
		</HideOnScroll>
    </React.Fragment>
);
};

export default Navbar;
