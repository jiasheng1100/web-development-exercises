import React from 'react'

const Button = ({handler, text}) => (  
    <div>
      <button onClick={handler}>{text}</button>
    </div>
  )

export default Button