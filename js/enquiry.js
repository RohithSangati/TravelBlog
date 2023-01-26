window.onload=function(){
    if(window.localStorage.getItem("k")!=null && window.localStorage.getItem("k")!=1){
        document.getElementById("intro1").className="nav-item intro-tag";
        document.getElementById("intro2").className="nav-item";
        document.getElementById("intro3").className="nav-item";
        var ans=JSON.parse(window.localStorage.getItem("k"));
        document.getElementById("introuser").innerHTML="Hello "+ans.fname+"!";
    }
    // var info=JSON.parse(localStorage.getItem("servicesinfo"));
    var index=JSON.parse(window.localStorage.getItem("serviceindex"));
    
    // document.getElementById("service-img").src=info[index+1].img;
    // document.getElementById("service-heading").innerHTML=info[index+1].name;
    // document.getElementById("service-about").innerHTML=info[index+1].subject;
    var xhttp=new XMLHttpRequest();
    xhttp.open("GET","http://localhost:5501/services")
    xhttp.send()
    xhttp.onload=()=>{  
        var info=JSON.parse(xhttp.responseText);
        document.getElementById("service-img").src=info[index].img;
        document.getElementById("service-heading").innerHTML=info[index].name;
        document.getElementById("service-about").innerHTML=info[index].subject;
    }
}
function logout(){
    window.localStorage.setItem("k",1);
    document.getElementById("intro1").className="nav-item";
    document.getElementById("intro2").className="nav-item intro-tag";
    document.getElementById("intro3").className="nav-item intro-tag";
}
function sendToAdmin(){
    var name=document.getElementById("enq-name").value;
    var email=document.getElementById("enq-email").value;
    var subject=document.getElementById("enq-subject").value;
    // if(localStorage.getItem("enquiries")==null){
    //     localStorage.setItem("enquiries",JSON.stringify([]))
    // }
    var obj={
        name:name,
        email:email,
        subject:subject
    }
    // var arr=JSON.parse(localStorage.getItem("enquiries"));
    // arr.push(obj);
    // localStorage.setItem("enquiries",JSON.stringify(arr));
    
    var xhttp=new XMLHttpRequest();
    xhttp.open("POST","http://localhost:5501/queries");
    xhttp.setRequestHeader("content-type","application/json");
    xhttp.send(JSON.stringify(obj));
    xhttp.onload=()=>{
        alert(xhttp.responseText);
    }
}