import React from 'react'

const categoryButton = (props) => {
    return (<button className={'category-button '+(props.state.includes(props.cat)? 'selected': '')} onClick={props.onClick}>{props.cat}</button>)
}

export default categoryButton