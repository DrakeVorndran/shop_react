import React from 'react'

const Item = (props) => {
    const style = {background: props.color}
    console.log(props.color)
    return(
        // className={props.cat===props.item.category?'':'hidden'}
        <div className="item" style={style}>
          <h3 className="item-name">{props.item.name}</h3>
          <h4 className="item-cat"> {props.item.category}</h4>
        </div>
    )
}

export default Item