import React from 'react'
import toolState from '../store/toolState'
import settingState from '../store/settingState'
import '../styles/settingbar.scss'

const Settingbar = () => {
    return (
        <div className="settingbar">
            <label htmlFor="line-width">Толщина линии</label>
            <input 
                onChange={e => {
                    toolState.setLineWidth(e.target.value)
                    settingState.setLineWidth(e.target.value)
                }}
                style={{margin: "0 10px", textAlign: "center" }} 
                id="line-width" 
                type="number" 
                defaultValue={settingState.defaultLineWidth}
                min={1} 
                max={50} />
            <label htmlFor="stroke-color">Цвет линии</label>
            <input 
                onChange={e => {
                    toolState.setStrokeColor(e.target.value)
                    settingState.setStrokeColor(e.target.value)
                }}
                style={{margin: "0 10px"}} 
                id="stroke-color" 
                type="color" />
        </div>
    )
}

export default Settingbar
