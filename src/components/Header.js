import React from 'react'

function Header({title, subTitle}) {
    return (
        <div className="title">{title}
            <span>{subTitle}</span>
        </div>
    )
}

export default Header