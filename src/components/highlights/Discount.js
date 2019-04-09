import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
import MyButton from '../../components/urils/MyButton'


export default class Discount extends Component {
    state={
        discountStart:0,
        discountEnd:35,

    }
    percantage=()=>{
        if(this.state.discountStart < this.state.discountEnd){
                this.setState({
                    discountStart:this.state.discountStart +1
                })
        }
    }
    componentDidUpdate(){
        setTimeout(() => {
            this.percantage()
        }, 80);
    }
    render() {
    return (
      <div className="center_wrapper">
            <div className="discount_wrapper">
            <Fade
            onReveal={()=> this.percantage()}
            >
            <div className="discount_porcentage">
                      <span>أكثر من </span>
                        <span>{this.state.discountStart} </span>
                        <span>متحدث</span>
                </div>
            </Fade>

            <Slide left>
            <div className="discount_description">
                    <h3>ألهم الآخرين وأخبرهم بقصتك</h3>
                    <p>ألهم الآخرين وأخبرهم بقصتكألهم الآخرين وأخبرهم بقصتكألهم الآخرين وأخبرهم بقصتكألهم الآخرين وأخبرهم بقصتكألهم الآخرين وأخبرهم بقصتكألهم الآخرين وأخبرهم بقصتك
                    ألهم الآخرين وأخبرهم بقصتكألهم الآخرين وأخبرهم بقصتكألهموأخبرهم بقصتكألهم الآخرين وأخبرهم بقصتك
                    ألهم الآخرين وأخبرهم بقصتك
                    </p>
                    <div>
                        <MyButton className="center-sm" link="https://www.google.com/"
                        bck="#006064"
                        color="#fff"
                        text="قدم الآن للتحدث"
            
                        />
                    </div>
                </div>
         
            </Slide>
               
                  </div>
      </div>
    )
  }
}
