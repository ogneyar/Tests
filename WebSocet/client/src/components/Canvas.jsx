import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef, useState } from 'react'
import canvasState from '../store/canvasState'
import toolState from '../store/toolState'
import '../styles/canvas.scss'
import Brush from '../tools/Brush'
import Rect from '../tools/Rect'
import { Modal, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const Canvas = observer(() => {
    const canvasRef = useRef()
    const usernameRef = useRef()
    const [modal, setModal] = useState(true)
    const params = useParams()

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
    }, [])
    
    useEffect(() => {
        if (canvasState.username) {
            const socket = new WebSocket('ws://localhost:5000/')
            canvasState.setSocket(socket)
            canvasState.setSessionId(params.id)
            toolState.setTool(new Brush(canvasRef.current, socket, params.id))
            socket.onopen = () => {
                console.log("Подключение установлено")
                socket.send(JSON.stringify({
                    method: 'connection',
                    id: params.id,
                    username: canvasState.username
                }))
            }
            socket.onmessage = (event) => {
                let msg = JSON.parse(event.data)
                // eslint-disable-next-line
                switch (msg.method) {
                    case 'connection':
                        console.log(`Пользователь ${msg.username} присоединился`);
                        break
                    case 'draw':
                        drawHandler(msg)
                        break

                }
            }
        }
    // eslint-disable-next-line
    }, [canvasState.username])

    function drawHandler(msg) {
        const figure = msg.figure
        const ctx = canvasRef.current.getContext('2d')
        // eslint-disable-next-line
        switch (figure.type) {
            case "brush":
                Brush.draw(ctx, figure.x, figure.y)
                break
            case "rect":
                Rect.staticDraw(ctx, figure.x, figure.y, figure.width, figure.height)
                break
            case "finish":
                ctx.beginPath()
                break
        }
    }

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    const connectHandler = () => {
        canvasState.setUsername(usernameRef.current.value)
        setModal(false)
    }
    

    return (
        
        <div className="canvas">
            <React.StrictMode>
            <Modal show={modal} onHide={()=>{}}>
                <Modal.Header>
                    <Modal.Title>
                        Введите Ваше имя
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" ref={usernameRef}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => connectHandler()}>
                        Войти
                    </Button>
                </Modal.Footer>
            </Modal>
            </React.StrictMode>

            <canvas 
                onMouseDown={() => mouseDownHandler()}
                ref={canvasRef} 
                width={600} 
                height={400} />
        </div>
        
    )
})

export default Canvas
