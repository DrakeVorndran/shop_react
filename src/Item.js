import React from 'react'

const Item = (props) => {
    return(
        // className={props.cat===props.item.category?'':'hidden'}
        <div >
          <h3>{props.item.name}</h3>
          <h4>{props.item.category}</h4>
        </div>
    )
}

export default Item