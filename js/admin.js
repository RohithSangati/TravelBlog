window.onload=function(){
    // if(localStorage.getItem("enquiries")!=null){
    //     var obj=JSON.parse(localStorage.getItem("enquiries"));
        // document.getElementById("countOfQuiries").innerHTML=obj.length;
        // for(x in obj){
        //     var ele=document.getElementById("enquiries");
        //     var appEle=document.createElement("tr");
        //     appEle.innerHTML="<td></td><td></td><td></td>";
        //     appEle.childNodes[0].innerHTML=obj[x].name;
        //     appEle.childNodes[1].innerHTML=obj[x].email;
        //     appEle.childNodes[2].innerHTML=obj[x].subject;
        //     ele.appendChild(appEle);
        // }
    // } 



    $(document).ready(function(){
        $.get("http://localhost:5501/queries",function(data,status){
            var obj=JSON.parse(data);
            document.getElementById("countOfQuiries").innerHTML=obj.length;
            for(x in obj){
                console.log(obj[x]);
                var ele=document.getElementById("enquiries");
                var appEle=document.createElement("tr");
                appEle.innerHTML="<td></td><td></td><td></td>";
                appEle.childNodes[0].innerHTML=obj[x].name;
                appEle.childNodes[1].innerHTML=obj[x].email;
                appEle.childNodes[2].innerHTML=obj[x].subject;
                ele.appendChild(appEle);
    }})})

    // var xhttp=new XMLHttpRequest();
    // xhttp.open("GET","http://localhost:5501/queries")
    // xhttp.send()
    // xhttp.onload=()=>{
    //     var obj=JSON.parse(xhttp.responseText);
    //     document.getElementById("countOfQuiries").innerHTML=obj.length;
    //     for(x in obj){
    //         var ele=document.getElementById("enquiries");
    //         var appEle=document.createElement("tr");
    //         appEle.innerHTML="<td></td><td></td><td></td>";
    //         appEle.childNodes[0].innerHTML=obj[x].name;
    //         appEle.childNodes[1].innerHTML=obj[x].email;
    //         appEle.childNodes[2].innerHTML=obj[x].subject;
    //         ele.appendChild(appEle);
    //     }
    // }



    if(localStorage.getItem("cardData")!=null){
        obj1=JSON.parse(localStorage.getItem("cardData"));
        document.getElementById("countOfPlaces").innerHTML=obj1.length+8;
    } 
    var t=0;
    

    
    var req=new XMLHttpRequest();
    req.open("GET","https://reqres.in/api/users?page=2");
    req.send();
    req.onload=function(){
        var obj=JSON.parse(req.responseText);
        for(x in obj.data){
            t++;
            var ele=document.getElementById("userdata");
            var appEle=document.createElement("tr");
            appEle.innerHTML="<td></td><td></td><td></td><td></td>";
            appEle.childNodes[0].innerHTML=parseInt(x)+1;
            appEle.childNodes[1].innerHTML=obj.data[x].email;
            appEle.childNodes[2].innerHTML=obj.data[x].first_name;
            appEle.childNodes[3].innerHTML=obj.data[x].last_name;
            ele.appendChild(appEle);
        }
        if(localStorage.getItem("totalusers")!=null){
            var obj=JSON.parse(localStorage.getItem("totalusers"));
            for(x in obj){
                var ele=document.getElementById("userdata");
                var appEle=document.createElement("tr");
                appEle.innerHTML="<td></td><td></td><td></td><td></td>";
                appEle.childNodes[0].innerHTML=parseInt(x)+1+t;
                document.getElementById("countOfusers").innerHTML=parseInt(x)+1+t;
                appEle.childNodes[1].innerHTML=obj[x].email;
                appEle.childNodes[2].innerHTML=obj[x].fname;
                appEle.childNodes[3].innerHTML=obj[x].lname;
                ele.appendChild(appEle);
            }
        }
    }
    
}

function addcard(){
    var obj={
        
        url:$("#addCardImUrl").value,
        name:document.getElementById("addCardName").value,
        about:document.getElementById("addCardAbout").value
    }
    
    // if(localStorage.getItem("cardData")==null){
    //     var x=[]
    //     localStorage.setItem("cardData",JSON.stringify(x))
    // }
    // obj1=JSON.parse(localStorage.getItem("cardData"));
    // obj1.push(obj);
    // localStorage.setItem("cardData",JSON.stringify(obj1));

    
    // var xhttp=new XMLHttpRequest();
    // xhttp.open("POST",'http://127.0.0.1:5501/places');
    // xhttp.setRequestHeader('Content-type', 'application/json');
    // xhttp.send(JSON.stringify(obj));
    // xhttp.onload=()=>{
    //     alert(xhttp.responseText);
    // }

    $.post("http://127.0.0.1:5501/places",obj,function(xhr,status,responseText){
        alert(responseText);
    })
    // window.location.href="blog.html";
}


function displayUsers(){
    document.getElementById("usersData").style.display="table";
    document.getElementById("addPlaceData").style.display="none";
    document.getElementById("enquiries").style.display="none";
}


function displayPlaces(){
    document.getElementById("usersData").style.display="none";
    document.getElementById("addPlaceData").style.display="block";
    document.getElementById("enquiries").style.display="none";
}

function displayqueries(){
    document.getElementById("usersData").style.display="none";
    document.getElementById("addPlaceData").style.display="none";
    document.getElementById("enquiries").style.display="table";
}

function logout(){
    window.localStorage.setItem("k",1);
}



function displayOption(){
    document.getElementById("postAjaxForm").style.display="block";
    document.getElementById("postAjaxForm1").style.display="none";
}

function postUsingAjax(){
    var req=new XMLHttpRequest();
    req.open("POST","https://reqres.in/api/users");
    var obj=JSON.stringify({
        "name":document.getElementById("namee").value,
        "job": document.getElementById("jobb").value
    });
    req.setRequestHeader("content-type","application/json");
    req.send(obj);
    req.onload=function(){
        alert("Added user"+":"+JSON.parse(req.responseText).name);
    }
}

