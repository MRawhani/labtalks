import React, { Component } from 'react';
import MyButton from '../urils/MyButton';
import Zoom from 'react-reveal/Zoom';
import mem from '../../resources/images/icons/mem.png'
import mic from '../../resources/images/icons/mic.png'
import icon_calender from '../../resources/images/icons/calendar.png'

class Pricing extends Component {

    state = {
        types:['حضور',"متحدث","عضو لجنة"],
        logos:[icon_calender,mic,mem],
        desc:[
            'دون دفّة قائمة اليابان أم, على مادون دفّة قائمة اليابان أم, على مادون دفّة قائمة اليابان أم, على ما',
            'دون دفّة قائمة اليابان أم, على مادون دفّة قائمة اليابان أم, على مادون دفّة قادون دفّة قادون دفّة قائمة اليابان أم, على ما',
            'دون دفّة قائمة اليابان أم, على ماد, على ماد, على مادونمادونمادونمادونمادون دفّة قائمة اليابان أم, على ما.'
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],
        delay:[500,0,500],
        colors:['bck_yellow','bck_red','bck_yellow'],
        buttpnColors:['#006064','#ffa800','#006064']

    }
    //we loop the types to get the index
    
    showBoxes = () => (
        this.state.types.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                         <div className={`lab_icon_square ${this.state.colors[i]}`}>                    
                         </div>     
                                        <div className="lab_icon"
                                        style={{
                                            background:`url(${this.state.logos[i]})`
                                        }} >
                                        </div>
                        
                        <div className="pricing_title">
                            <span>{this.state.types[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <div className="desc_content">
                            {this.state.desc[i]}
                            </div>
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="قدم الآن"
                                bck={this.state.buttpnColors[i]}
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
       
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>شاركنا كـ</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;