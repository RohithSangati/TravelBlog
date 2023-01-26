placeRoute=require('express')()



placeRoute.get('/',(req,res)=>{
    var fs=require('fs');
    fs.readFile('files/places.json',(err,data)=>{
        res.send(data);
    });

})



placeRoute.post("/",(req,res)=>{
   
    var fs=require('fs');

    fs.readFile('files/places.json',(err,data)=>{
        var obj=JSON.parse(data);
        obj.push(req.body);
        fs.writeFile("files/places.json", JSON.stringify(obj),err =>{
            console.log("Done!");
        });
        
    })

    res.send("Successfully Added user..");

})


module.exports=placeRoute;