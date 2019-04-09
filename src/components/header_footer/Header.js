import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';

export default class componentName extends Component {
  state ={
    drawerOpen: false
  }
  componentDidMount(){
    window.addEventListener('scroll',this.handlwSccroll);
  }
  handlwSccroll=(event)=>{
      if(window.scrollY){
          this.setState({
            headerShow:true
          });
      }else{
        this.setState({
          headerShow:false
        });
      }
  }
  toggleDrawer=(values)=>{
    this.setState({
      drawerOpen: values,
      headerShow:false
    })
  }
 
  render() {
    return (
      <AppBar  
        position="fixed"
        style={{
          backgroundColor:this.state.headerShow?'#2f2f2f':'transparent',
          boxShadow: 'none',
          padding: '1rem 0'
        }}
        
      >
      <Toolbar style={{direction:"ltr"}}>
        <div className="header_logo">
            <div className="font_righteous header_logo_lab">LabTalks</div>
            <div className="header_logo_title">Tech Conference</div>
        </div>
        <IconButton>
          <MenuIcon className="white-color"
          aria-label="Menu"
        
          onClick={()=> this.toggleDrawer(true)}
          />
        </IconButton>
        <SideDrawer 
        open={this.state.drawerOpen}
        onClose={(values)=> this.toggleDrawer(values)}
        />
      </Toolbar>
      </AppBar>
    )
  }
}
