import React from 'react';
import Button from '@material-ui/core/Button';
import TecketIcon from '../../resources/images/icons/ticket.png'


export default (props) => {
  return (
    <div>
      <Button
            href={props.link}
            variant="contained"
            size="small"
            style={{
                background: props.bck,
                color:props.color,
                fontSize:'2rem'
            }}
            className="font-arabic font-medium"
      >
          <img src={TecketIcon}
          alt="tecket"
          className="iconImage" />
          {props.text}
      </Button>
    </div>
  )
}
