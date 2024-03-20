import React, { useState } from 'react'

const ColorPicker =()=>{
    const [color, setColor] = useState("#FFFFFF")

    const handleChange =(e)=>{
        setColor(e.target.value)
    }

    return(
        <>
        <div>
        <h2>Color Picker App</h2>
        <p>selected color: {setColor}</p>
        </div>
        <div style={{background: color, padding: '20px'}}>
            <input type="color" value={color} onChange={handleChange} />
        </div>
        </>
    )
}
export default ColorPicker