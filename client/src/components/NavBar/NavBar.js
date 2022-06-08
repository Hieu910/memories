import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles"
import memories from "../../img/memories.png"
import { useDispatch } from "react-redux";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { LOGOUT } from "../../redux/actions/actionTypes";
import  decode  from "jwt-decode"
const NavBar = () => {

    const classes = useStyles()
    const [user,setUser] =useState(JSON.parse(localStorage.getItem("profile")));
    const navigate = useNavigate()
    const location =useLocation()
    const dispatch = useDispatch()
    useEffect(()=>{

      const token = user?.token;
      if(token){
        const decodeToken = decode(token)
        if(decodeToken.exp * 1000 < new Date().getTime){
          logout()
        }
      }
      setUser(JSON.parse(localStorage.getItem("profile")))
    },[location])
    
    const logout = ()=>{
      dispatch({
        type:LOGOUT
      })
      setUser(null)
      navigate('/auth');
    }
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
    <div className={classes.brandContainer}>
    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img
        src={memories}
        className={classes.image}
        alt="memories"
        height="60"
      />
    </div>
    <Toolbar className={classes.toolbar}>
        {user?.result ? (
        <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6"> 
                {user?.result.name}
            </Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
        </div>): (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
        )}
    </Toolbar>
    </AppBar>
  );
};

export default NavBar
