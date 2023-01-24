window.onload=function(){
    if(window.localStorage.getItem("k")!=null && window.localStorage.getItem("k")!=1){
        document.getElementById("intro1").className="nav-item intro-tag";
        document.getElementById("intro2").className="nav-item";
        document.getElementById("intro3").className="nav-item";
        var ans=JSON.parse(window.localStorage.getItem("k"));
        document.getElementById("introuser").innerHTML="Hello "+ans.fname+"!";
    }
    var servicesarr={
        1:{
            img:"images/gallery-1.jpg",
            name:"Photography",
            subject:"Using a camera to find beauty in the things and people around us, helps us to see things in a different light. A wonderful therapeutic benefit of photography, is that it can help us see the beauty surrounding us we just have take a moment to stop and look!"
        },
        2:{
            img:"images/gallery-3.jpg",
            name:"Vediography",
            subject:"Unlike cinematography, which involves highly planned and produced complex projects, the purpose of videography is to capture live events. Videographers live in the moment, not only capturing the footage, but fixing the lighting and inserting music and sound effects when needed."
        },
        3:{
            img:"images/gallery-5.jpg",
            name:"Lodging",
            subject:"Lodging means accommodation for a period or a place to sleep for one or more nights. Fancy hotels, youth hostels, elder hostels, campgrounds, motels and other businesses that provide a place for people to sleep overnight are all in the lodging industry."
        },
        4:{
            img:"images/gallery-7.jpg",
            name:"Transportation",
            subject:"The principal role of transport is to provide or improve access to different locations for individuals and businesses. Transport thus facilitates a wider range of social and economic interactions than would otherwise be possible. "
        },
        5:{
            img:"images/gallery-9.jpg",
            name:"Food",
            subject:"Food is the substance we eat every day for energy and strength. There are many different types of food, such as fruits, vegetables, rice, and pasta. We need to eat a variety of foods to get all the essential nutrients the body needs. "
        },
        6:{
            img:"images/gallery-11.jpg",
            name:"Shipping",
            subject:"Shipping helps ensure that the benefits of trade and commerce are more evenly spread. No country is entirely self-sufficient, and every country relies on maritime trade to sell what it has and buy what it needs."
        },
    }
    window.localStorage.setItem("servicesinfo",JSON.stringify(servicesarr));
}
function logout(){
    window.localStorage.setItem("k",1);
    document.getElementById("intro1").className="nav-item";
    document.getElementById("intro2").className="nav-item intro-tag";
    document.getElementById("intro3").className="nav-item intro-tag";
}

function updateServiceIndex(i){
    window.localStorage.setItem("serviceindex",i);
}
