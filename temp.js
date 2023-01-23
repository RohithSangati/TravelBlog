arr=[1,2,3,4,5,6,7,8];
sum=0;
for(var i=0;i<arr.length;i++){
  sum+=arr[i];
}
userfeedbacks=[
    {
        name:"gova",
        feedback:4
    },
    {
        name:"pronoy",
        feedback:3
    },
    {
        name:"meghana",
        feedback:4
    }
]
add(userfeedbacks)


// userfeedbacks[3]={
//     name:"priyanshu",
//     feedback:3
// }


// userfeedbacks.push({
//     name:"priyanshu",
//     feedback:3
// })

// var obj=JSON.stringify({name:"Rohith"})
// console.log(obj);

// console.log(userfeedbacks)

// for(let i=0;i<userfeedbacks.length;i++){
//     console.log(userfeedbacks[i].name+":"+userfeedbacks[i].feedback);
// }

// userfeedbacks.pop()
// userfeedbacks.shift()
// userfeedbacks.unshift("")



// push()
// pop()
// shift()
// unshift()
// splice(1,2,"")
// slice(2)
// slice(1,3)
// .length
// arr1.concat(arr2)

var obj=adduser({email:"abc@gmail.com",name:"Rohith"})

function adduser(obj){
    var jobj=JSON.stringify(obj);
    window.localStorage.setItem(obj.email,jobj)
    console.log(window.localStorage.getItem(obj.email));
}


function add(us){
    us.push(1);
}

console.log(userfeedbacks);