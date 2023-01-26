serviceRoute=require('express')();

serviceRoute.post('/',(req,res)=>{
    var fs=require('fs');
    res.send(100);
    fs.writeFile('files/services.json',JSON.stringify(req.body),err=>{
      res.send({status:'200'})  
    })
    
})

serviceRoute.get('/',(req,res)=>{
    console.log(1000);
    var fs=require('fs')
    fs.readFile('files/services.json',(err,data)=>{
        res.send(data);
    })
})


module.exports=serviceRoute; 