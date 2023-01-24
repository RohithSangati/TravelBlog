window.onload=function(){
    if(window.localStorage.getItem("k")!=null && window.localStorage.getItem("k")!=1){
        document.getElementById("intro1").className="nav-item intro-tag";
        document.getElementById("intro2").className="nav-item";
        document.getElementById("intro3").className="nav-item";
        var ans=JSON.parse(window.localStorage.getItem("k"));
        document.getElementById("introuser").innerHTML="Hello "+ans.fname+"!";
    }
}
function logout(){
    window.localStorage.setItem("k",1);
    document.getElementById("intro1").className="nav-item";
    document.getElementById("intro2").className="nav-item intro-tag";
    document.getElementById("intro3").className="nav-item intro-tag";
}