import Tool from './Tool'

export default class Brush extends Tool {
    constructor(canvas, socket, id) {
        super(canvas, socket, id)
        this.listen()
    }
    
    listen() {
        // прослушивание событий мыши
        this.canvas.onmousedown = this.mouseDownHandler
        this.canvas.onmouseup = this.mouseUpHandler
        this.canvas.onmousemove = this.mouseMoveHandler
        // прослушивание событий тачскрина
        // this.canvas.addEventListener("touchstart", this.mouseDownHandler)
        // this.canvas.addEventListener("touchend", this.mouseUpHandler)
        // this.canvas.addEventListener("touchmove", this.mouseMoveHandler)
    }

    mouseDownHandler = e => {
        // console.log("onMouseDown or  touchStart")
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }

    mouseUpHandler = () => {
        // console.log("onMouseUp or touchEnd")
        this.mouseDown = false
        this.socket.send(JSON.stringify({
            method: 'draw',
            id: this.id,
            figure: {
                type: 'finish'
            }
        }))
    }

    mouseMoveHandler = e => {
        // console.log("onMouseMove or touchMove")
        if (this.mouseDown) {
            // this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
            this.socket.send(JSON.stringify({
                method: 'draw',
                id: this.id,
                figure: {
                    type: 'brush',
                    x: e.pageX - e.target.offsetLeft,
                    y: e.pageY - e.target.offsetTop
                }
            }))
        }
    }

    static draw(ctx, x, y) {
        ctx.lineTo(x, y)
        ctx.stroke()
    }

    
    // draw(x, y) {
    //     this.ctx.lineTo(x, y)
    //     this.ctx.stroke()
    // }

}