import Tool from './Tool'

export default class Eraser extends Tool {
    radius = 10

    constructor(canvas) {
        super(canvas)
        this.listen()
    }

    listen() {
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)        
    }

    mouseUpHandler(e) {
        this.mouseDown = false
    }

    mouseDownHandler(e) {
        this.mouseDown = true
        this.ctx.beginPath()
        this.saved = this.canvas.toDataURL()
        this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)        
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            this.saved = this.canvas.toDataURL()
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }

    draw(x, y) {
        const img = new Image()
        img.src = this.saved
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.rect(x, y, this.ctx.lineWidth, this.ctx.lineWidth)
            const fill = this.ctx.fillStyle
            this.ctx.fillStyle = "#fff"
            this.ctx.fill()
            this.ctx.fillStyle = fill
        }
    }

}