import React from 'react';
import PropTypes from 'prop-types';
import {
Nav,
NavLink,
NavMenu,
} from './Navbar/NavbarElements';
import CssBaseline from '@material-ui/core/CssBaseline';
//import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Logo from './img/logoNav.png';



// function HideOnScroll(props) {
// 	const { children, window } = props;
// 	const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
// 	return (
// 	  <Slide appear={false} direction="down" in={!trigger}>
// 		{children}
// 	  </Slide>
// 	);
//   }
  
//   HideOnScroll.propTypes = {
// 	children: PropTypes.element.isRequired,
// 	window: PropTypes.func,
//   };



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
			<Nav>
       <NavLink to='/home' activeStyle style={{ textDecoration: 'none' }}>
          <img src={Logo} className={classes.Img}/>
        </NavLink>  
				<NavMenu>
				<NavLink to='/liquidator' activeStyle style={{ textDecoration: 'none' }}>
  
        </NavLink>
				<NavLink to='/social' activeStyle style={{ textDecoration: 'none' }}>

        </NavLink>
        <NavLink to='/team' activeStyle style={{ textDecoration: 'none' }}>

        </NavLink>
				</NavMenu>
		</Nav>
    </React.Fragment>
);
};

export default Navbar;
