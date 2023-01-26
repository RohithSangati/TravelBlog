
express=require('express');
var queryRoute=express();

// queryRoute.get('/',(req,res)=>{
//     var fs=requ
// })



queryRoute.post('/',(req,res)=>{
    var fs=require('fs');
    fs.readFile('files/queries.json',(err,data)=>{
        var obj=JSON.parse(data);
        obj.push(req.body);
        fs.writeFile('files/queries.json',JSON.stringify(obj),err=>{
            res.send("Sent successfully");
        })
    })
})



queryRoute.get('/',(req,res)=>{
    var fs=require('fs')
    fs.readFile('files/queries.json',(err,data)=>{
        res.send(data);
    })
})

module.exports=queryRoute;