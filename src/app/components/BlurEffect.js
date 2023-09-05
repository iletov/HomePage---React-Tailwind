import React from 'react'

const BlurEffect = ({bgColor, height, hidden}) => {
  return (
    <div className={` 
    absolute 
    w-full left-0 bottom-0  
    group-hover:block 
    transition-all duration-200 
    
    rounded-b-md
    bg-gradient-to-b 
    ${bgColor ? bgColor : ''} 
    ${height ? height : ''}
    ${hidden ? 'hidden' : ''}
    `}
    > 
    </div>
  )
}

export default BlurEffect