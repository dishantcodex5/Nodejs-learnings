const http=require('http')
const server =http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("<h1>i amd dishant bhavsar</h1>");
        res.end();
    }
    if(req.url==='/source-code'){
        res.write("i dont have any souce code khud se likh hahah majak kar rhaa hu ");
        res.end();
    }
     if(req.url==='/contact'){
        res.setHeader("Content-Type","text/plain")
        res.write("insta me dm karo aur  50 LPA ki job paao");
        res.end();
    }
});



const port=3000;
server.listen(port,()=>{
    console.log(`listenig on port ${port}`);
})