window.onload=function(){
    if(localStorage.getItem("enquiries")!=null){
        var obj=JSON.parse(localStorage.getItem("enquiries"));
        for(x in obj){
            var ele=document.getElementById("enquiries");
            var appEle=document.createElement("tr");
            appEle.innerHTML="<td></td><td></td><td></td>";
            appEle.childNodes[0].innerHTML=obj[x].name;
            appEle.childNodes[1].innerHTML=obj[x].email;
            appEle.childNodes[2].innerHTML=obj[x].subject;
            ele.appendChild(appEle);
        }
    }
    if(localStorage.getItem("totalusers")!=null){
        var obj=JSON.parse(localStorage.getItem("totalusers"));
        for(x in obj){
            var ele=document.getElementById("userdata");
            var appEle=document.createElement("tr");
            appEle.innerHTML="<td></td><td></td><td></td><td></td>";
            appEle.childNodes[0].innerHTML=obj[x].fname;
            appEle.childNodes[1].innerHTML=obj[x].email;
            appEle.childNodes[2].innerHTML=obj[x].phone;
            appEle.childNodes[3].innerHTML=obj[x].address;
            ele.appendChild(appEle);
        }
    }
}

function addcard(){
    var obj={
        url:document.getElementById("addCardImUrl").value,
        name:document.getElementById("addCardName").value,
        about:document.getElementById("addCardAbout").value
    }
    if(localStorage.getItem("cardData")==null){
        var x=[]
        localStorage.setItem("cardData",JSON.stringify(x))
    }
    obj1=JSON.parse(localStorage.getItem("cardData"));
    obj1.push(obj);
    localStorage.setItem("cardData",JSON.stringify(obj1));
    window.location.href="blog.html";
}

function displayUsers(){
    document.getElementById("userdata").style.display="table";
    document.getElementById("addPlaceData").style.display="none";
    document.getElementById("enquiries").style.display="none";
}

function displayPlaces(){
    document.getElementById("userdata").style.display="none";
    document.getElementById("addPlaceData").style.display="block";
    document.getElementById("enquiries").style.display="none";
}

function displayqueries(){
    document.getElementById("userdata").style.display="none";
    document.getElementById("addPlaceData").style.display="none";
    document.getElementById("enquiries").style.display="table";
}

function logout(){
    window.localStorage.setItem("k",1);
}