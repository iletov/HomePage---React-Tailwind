import React from 'react'

const Button = ({ white, label, black, custom, icon:Icon}) => {
  return (
    <button className={`
      px-3 py-2  
      rounded-md 
      sm:min-w-[100px] 
      flex items-center justify-center gap-2
      hover:bg-opacity-80 
      transition duration-200 
      font-semibold capitalize
      ${white ? "bg-white text-slate-800" : " bg-teal-400 color-component"}
      ${custom ? custom : ''}
      ${black ? "bg-[#515658]" : "" }
    `}>
    {Icon && <Icon size={20}/>}
      <div className=" hidden sm:block">
        {label} 
      </div>
    </button>
  )
}

export default Button