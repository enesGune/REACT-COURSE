import 'D:/PROJE/react/GIT-COURSE/REACT-COURSE/react-complate-guide/src/assets/style/componenst/Card.css'
import React from 'react';

function Card(props) {
    //const classes = 'card' + props.className;
    return(
        <div className='card'>
            {props.children}
        </div>
    )
}

export default Card;