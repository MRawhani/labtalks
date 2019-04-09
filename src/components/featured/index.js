import React from 'react';
import Carrousel from './Carrousel'
import CountUntill from './CountUntill';
import Fade from 'react-reveal/Fade';
export default () => {
  return (
    <div style={{position:'relative'}}>
      <Carrousel />
      
      <div className="global-description">
      <Fade bottom delay={500}>
            <div className="wrapper">
                <h2>أكبر فعالية للطلاب اليمنيين</h2>
            </div>
        </Fade>
      </div>
      
      <CountUntill />
    </div>
  )
}
