import React, { useId } from 'react'

function Input({
    label,
    type = 'text',
    className = "",
    ...props
}) {
    const id = useId
    return <div className='w-full'>
        {label && (<label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>)}
        <input
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        type={type}
        ref = {ref}
        id ={id}
        {...props}
        />


    </div>
}

export default React.forwardRef(Input)