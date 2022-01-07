import React from 'react';
import PropTypes from 'prop-types';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Button } from '@material-ui/core';


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
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Nunito',
    },
    appbar: {
      background: 'none',
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    appbarTitle: {
      flexGrow: '1',
    },
    icon: {
      color: '#fff',
      fontSize: '2rem',
    },
    colorText: {
      color: '#5AFF3D',
    },
    container: {
      textAlign: 'center',
    },

    NavButton: {
        marginLeft: 4, 
        '&:hover': {
            background: '#38A3A5',
            color: "#FFEF78",
        }
    }
}));


function Navbar(props) {
	const classes = useStyles();

return (
    <React.Fragment>
	    <CssBaseline />
		<HideOnScroll {...props}>
			<Nav>
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
        <NavLink to='/team' activeStyle style={{ textDecoration: 'none' }}>
        <Button variant="text" className={classes.NavButton} size="small" edge="end">
            Team
        </Button>
        </NavLink>
				</NavMenu>
			</Nav>
		</HideOnScroll>
    </React.Fragment>
);
};

export default Navbar;
