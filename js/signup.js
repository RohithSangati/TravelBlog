window.onload=function(){
    localStorage.setItem("k",1);
  }


  function addlocal(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("user_email").value;
    var password=document.getElementById("password").value;
    if(window.localStorage.getItem(email)!==null){
      alert("User already exits");
      return;
    }
    var obj={
      fname:fname,
      lname:lname,
      email:email,
      password:password
    }
    if(localStorage.getItem("totalusers")==null){
      localStorage.setItem("totalusers",JSON.stringify([]))
    }
    var arr=JSON.parse(localStorage.getItem("totalusers"));
    arr.push(obj);
    localStorage.setItem("totalusers",JSON.stringify(arr));
    var jobj=JSON.stringify(obj);
    window.localStorage.setItem(email,jobj);
    window.localStorage.setItem("k",window.localStorage.getItem(email));
    window.location.href="index.html";
  }

  function validate(){
            
    var user=document.getElementById("user_login").value;
    var password=document.getElementById("user_pass2").value;
    if(window.localStorage.getItem(user)!==null){
      var obj=JSON.parse(window.localStorage.getItem(user));
      if(obj.password===password){
        window.localStorage.setItem("k",window.localStorage.getItem(user));
        window.location.href="index.html";
      }
      else{
        alert("Invalid password");
      }
    }
    else{
      alert("Not Registered!plese signup...")
    }
  }