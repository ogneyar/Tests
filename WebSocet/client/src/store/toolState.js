import { makeAutoObservable } from "mobx";
import settingState from './settingState'

class ToolState {
    tool = null
    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool        
        this.tool.lineWidth = settingState.lineWidth
        this.tool.strokeColor = settingState.strokeColor
    }

    setFillColor(color) {
        this.tool.fillColor = color       
    }

    setStrokeColor(color) {
        this.tool.strokeColor = color
    }

    setLineWidth(width) {
        this.tool.lineWidth = width
    }

}

export default new ToolState()