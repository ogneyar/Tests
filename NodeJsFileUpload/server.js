
const http = require('http')
const fs = require("fs")
// const { parse } = require('querystring') // для x-www-form-urlencoded


const server = http.createServer((req, res) => {

    if (req.method === 'GET') {

        if (req.url === "/") {
			// res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
			res.setHeader('Content-Type', 'text/html; charset=UTF-8')
            let html = fs.readFileSync("index.html")
            return res.end(html)
    
        }else if (req.url.indexOf(".") !== -1 && req.url !== "/favicon.ico") {
			let contentType = ""
			if (req.url.indexOf("html") !== -1) contentType = "text/html"
			if (req.url.indexOf("txt") !== -1) contentType = "text/plain"
			// if (contentType) res.writeHead(200, { 'Content-Type': contentType + '; charset=UTF-8' })
		if (contentType) res.setHeader('Content-Type', `${contentType}; charset=UTF-8`)
            let html = fs.readFileSync(req.url.replace("/", ""))
            return res.end(html)
    
        }else {
            return res.end("undefined")
        }

    }else if (req.method === 'POST') {

        if (req.url === "/server") {
            let separator
            let type = req.headers['content-type'] && req.headers['content-type'].split(";")

            if (type && Array.isArray(type) && type[0] === "multipart/form-data") {
				
                let boundary = "--" + type[1].trim().split("=")[1]
                let body = ''
				
                req.on('data', chunk => {
                    body += chunk//.toString() // convert Buffer to string
                    //console.log("chunk",chunk)//.toString('ascii'))
                })
				
                req.on('end', () => {
                    
                    let file = ""
                    let array = body.split(boundary)

                    array.forEach(i => {
                        if (i.trim() !== "--" && i.trim() !== "") {
                            if (i.split("\n")[2].split("; ")[0].trim() == "Content-Type: image/jpeg") {
								
                                file = "temp.jpg"
								
                                let response = i.trim().split("\n").filter((j,idx) => idx > 2).join("\n")
								
								response = Buffer.from(response, 'utf8')
                                fs.writeFileSync(file, response)
								
								// const wStream = fs.createWriteStream(file)
								// wStream.write(response)
								
                            }else
                            if (i.split("\n")[2].split("; ")[0].trim() == "Content-Type: text/plain") {
                                file = "temp.txt"
                                let response = i.trim().split("\n").filter((j,idx) => idx > 2).join("\n")
                                fs.writeFileSync(file, response)
                            }
                        }
                    })

                    return res.end(`{"files":["${file}"]}`)
					
                })
				
            }else if (type && Array.isArray(type) && type[0] === "image/jpeg") {

                const writeStream = fs.createWriteStream("temp2.jpg")
                req.pipe(writeStream)
                    .on('error', err => {
                        if (err.code === 'EEXIST') {
                            console.log("EEXIST")
                            res.statusCode = 409
                            return res.end('EEXIST')
                        }})
                    .on('close', () => {
                        console.log("create")
                        res.statusCode = 201
                        return res.end('create')
                    })
                // req.on('end', () => {
                //     console.log("end")
                //     res.statusCode = 200
                //     return res.end('end')
                // })
                
            }else {
                console.log("type",type)
                return res.end('type unknown')
            }
            
        }else {
            return res.end("undefined")
        }

    }else {
        return res.end(req.method)
    }

})

server.listen(7000, () => console.log("Server run on http://localhost:7000"))