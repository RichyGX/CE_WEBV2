import React from 'react'
const CustomButton = ({title, onClick}) => {

  return (
    <button  onClick={onClick}  className ="btn btn-primary" style={{width:'50%', alignSelf:'center'}}>{title}</button>

  )
}
export default CustomButton