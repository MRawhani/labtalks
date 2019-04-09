import React from 'react'
import{scroller} from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default (props) => {

        const scrollToElement=(element)=>{
                scroller.scrollTo(element,{
                        duration:1500,
                        delay:100,
                        smooth:true,
                        offset:-100
                })
                props.onClose(false)
        }
  return (
    <div>
        <Drawer
        anchor="right"
        open={props.open}
        onClose={()=> props.onClose(false)}
        >
        <List component="nav" className="font-medium">
        {/**button makes it ripple */}
        <ListItem button onClick={()=>scrollToElement('header')}> 
                    موعد الفعالية
            </ListItem>
            <ListItem button onClick={()=>scrollToElement('info')}> 
                    معلومات عن الفعالية
            </ListItem>
            <ListItem button onClick={()=>scrollToElement('highlights')}> 
                    نبذه عن الفعالية
            </ListItem>
            <ListItem button onClick={()=>scrollToElement('pricing')}> 
                    قدم للحضور
            </ListItem>
            <ListItem button onClick={()=>scrollToElement('location')}> 
                    المكان
            </ListItem>
        </List>
        </Drawer>
    </div>
  )
}
