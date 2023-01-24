window.onload=function(){
    if(window.localStorage.getItem("k")!=null && window.localStorage.getItem("k")!=1){
        document.getElementById("intro1").className="nav-item intro-tag";
        document.getElementById("intro2").className="nav-item";
        document.getElementById("intro3").className="nav-item";
        var ans=JSON.parse(window.localStorage.getItem("k"));
        document.getElementById("introuser").innerHTML="Hello "+ans.fname+"!";
    }
    if(localStorage.getItem("cardData")!=null){
        var obj1=JSON.parse(localStorage.getItem("cardData"));
        for(x in obj1){
            var obj=obj1[x];
            var tag=document.createElement("a");
            tag.innerHTML="<div class='popular-item shadow'><img src='' alt=''><div><span></span><ul class='rating flex'><li><i class = 'fas fa-star'></i><li><i class = 'fas fa-star'></i></li><li><i class = 'fas fa-star'></i></li><li><i class = 'fas fa-star'><li><i class = 'fas fa-star-half-alt'></i></li></i></li></li><li>&nbsp;400 reviews</li></ul><p class='text'></p></div></div>";   
            tag.href="index.html";
            tag.target="_blank";
            tag.childNodes[0].childNodes[0].src=obj.url;
            tag.childNodes[0].childNodes[1].childNodes[0].innerHTML=obj.name;
            tag.childNodes[0].childNodes[1].childNodes[2].innerHTML=obj.about;
            document.getElementById("placeCards").appendChild(tag);
        }
    }
}


function logout(){
    window.localStorage.setItem("k",1);
    document.getElementById("intro1").className="nav-item";
    document.getElementById("intro2").className="nav-item intro-tag";
    document.getElementById("intro3").className="nav-item intro-tag";
}
