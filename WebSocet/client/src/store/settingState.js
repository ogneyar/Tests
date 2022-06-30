import { makeAutoObservable } from "mobx";

class SettingState {    
    defaultLineWidth = 5
    constructor() {
        makeAutoObservable(this)
        this.lineWidth = this.defaultLineWidth
        this.strokeColor = "#000"
    }

    setLineWidth(width) {
        this.lineWidth = width
    }

    setStrokeColor(color) {
        this.strokeColor = color
    }
}

export default new SettingState()