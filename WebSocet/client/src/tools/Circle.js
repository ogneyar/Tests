import Tool from './Tool'

export default class Circle extends Tool {
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
        this.startX = e.pageX - e.target.offsetLeft
        this.startY = e.pageY - e.target.offsetTop
        this.saved = this.canvas.toDataURL()
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            let currentX = e.pageX - e.target.offsetLeft
            let currentY = e.pageY - e.target.offsetTop
            
            let centerX = (currentX - this.startX) / 2
            let centerY = (currentY - this.startY) / 2

            let radius = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2))

            this.draw(this.startX + centerX, this.startY + centerY, radius)
        }
    }

    draw(x, y, r) {
        const img = new Image()
        img.src = this.saved
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            // рисование круга. (x, y) центр круга, r - радиус, 0 - стартовый угол, Math.PI*2 - 360 градусов,
            this.ctx.arc(x, y, r, 0, Math.PI*2)            
            this.ctx.fill()
            this.ctx.stroke()
        }
    }

}