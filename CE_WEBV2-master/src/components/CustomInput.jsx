import React from 'react'

const CustomInput = ({placeHolder} ) => {
    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder={placeHolder} aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
            </div>
        </div>
    )
}

export default CustomInput