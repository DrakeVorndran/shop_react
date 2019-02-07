import React from 'react'

const categoryButton = (props) => {
    const styles = { background: props.color }
    return (<button style={styles} className={'category-button '+(props.state.includes(props.cat)? 'selected': '')} onClick={props.onClick}>{props.cat}</button>)
}

export default categoryButton