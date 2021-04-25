const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const host = 'localhost';
const port = 8000;
function mainHandler(req,res){
    const requestUrl = url.parse(req.url).path;
    const fsPath = path.normalize(requestUrl);
    const filePath = path.join(process.cwd(),fsPath);
    if(!fs.existsSync(filePath)){
        res.writeHead(401);
        res.end("Page Not Found");
    }
    const indexPage = fs.readFileSync(filePath, 'utf8');

    console.log(requestUrl);
    console.log(fsPath);

    res.writeHead(200);
    res.end(indexPage);
}
const server = http.createServer(mainHandler);
server.listen(port,host,()=>{
    console.log("Server is running on: "+host+":"+port)
});