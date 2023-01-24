window.onload=function(){
    if(window.localStorage.getItem("k")!=null && window.localStorage.getItem("k")!=1){
        document.getElementById("intro1").className="nav-item intro-tag";
        document.getElementById("intro2").className="nav-item";
        document.getElementById("intro3").className="nav-item";
        var ans=JSON.parse(window.localStorage.getItem("k"));
        if(ans.email=="sangatirohith@gmail.com"){
            document.getElementById("admin").style.display="block";
        }
        document.getElementById("introuser").innerHTML="Hello "+ans.fname+"!";
    }


}

let video = document.querySelector('.video-wrapper video');
document.getElementById('play-btn').addEventListener('click', () => {
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
});

function logout(){
    window.localStorage.setItem("k",1);
    document.getElementById("intro1").className="nav-item";
    document.getElementById("intro2").className="nav-item intro-tag";
    document.getElementById("intro3").className="nav-item intro-tag";
}