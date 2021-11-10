import React from 'react'
import './MyStyle.css'

function MyStyle(props) {

    let className=props.enabled?'primary':''
    return (
        <div>
            <h2 className={className}>changing color to the text</h2>
        </div>
    )
}

export default MyStyle

