import React from 'react'
import icon_calender from '../../resources/images/icons/calendar.png'
import icon_location from '../../resources/images/icons/location.png'
import Zoom from 'react-reveal/Zoom'
export default () => {
  return (
    <div className="bck_black">
        <div className="center-wrapper">
            <div className='lab_wrapper'>
            <Zoom duration={500}>
            <div className="lab_item">
                        <div className="lab_outer">
                                <div className="lab_inner">
                                        <div className="lab_icon_square bck_red">                    
                                        </div>
                                        <div className="lab_icon"
                                        style={{
                                            background:`url(${icon_calender})`
                                        }}
                                        >

                                        </div>
                                        <div className="lab_title">
                                                تاريخ ووقت الفعالية
                                        </div>
                                        <div className="lab_desc">
                                               4 ديسمبر 2019 @10:00 صباحاً
                                        </div>
                                </div>
                        </div>
                </div>
             
            </Zoom>
             <Zoom duration={500} delay={500}>
             <div className="lab_item">
                        <div className="lab_outer">
                                <div className="lab_inner">
                                        <div className="lab_icon_square bck_yellow">                    
                                        </div>
                                        <div className="lab_icon"
                                        style={{
                                            background:`url(${icon_location})`
                                        }}
                                        >

                                        </div>
                                        <div className="lab_title">
                                                مكان الفعالية
                                        </div>
                                        <div className="lab_desc">
                                               القاعة الكبرى لكلية الطب | جامعة العلوم
                                        </div>
                                </div>
                        </div>
                </div>
                
             </Zoom>
            </div>
        </div>
    </div>
  )
}
