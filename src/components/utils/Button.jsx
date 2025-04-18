import React from 'react'

function Button(
    children,
    type = "button",
    bgColor = "bg-blue-600",
    className = "",
    textColor = "text-white",
    ...props
) {
  return (
    <button
    className={`px-4 py-4 rounded-lg${className}${bgColor}${textColor}`}
    {...props}
    >
        {children}
    </button>
  )
}


export default Button
