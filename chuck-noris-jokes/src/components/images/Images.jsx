import React from 'react'

export const Images = (props) => {

    return <img src={props.details.image} id={props.id} alt={props.details.alt}/>
}
