// 1 დავალება)
let  user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
};

  console.log(user.studentstatus);
//   -----

// 2 დავალება)
let Names = ['19','48','36','74'];

for(let i = 0; i < Names.length;i++){
    console.log(Names[i]);
}

let item = 0;
while (item < Names.length) {
    console.log(Names[item]);
    item++
}
// -----

// 3 დავალება)
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89]; 

for (let x = 0; x <numbers.length; x++){
    if (numbers[x] > 5) {
    console.log(numbers[x]);
    }
}
// -----

// 4 დავალება)
let users =  [
    {username:'test1', status: false},
    {username:'test2', status: false},
    {username:'test3', status: true}
];

for(let x = 0; x < users.length; x++){
    if(users[x].status == true){
    console.log(users[x]);
    }
}
// -----

// 5 დავალება) 
let user = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}

if (user.age > 18 && user.studentstatus === 'active') {
    console.log("HELLO");
}

if(user.name === 'giorgi'){
    console.log("hello giorgi");
}

if(user.studentstatus ==='active'|| user.age < 25){
   console.log("hello world");
}else{
    console.log("error");
}
// -----

// 6 დავალება) 
let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];

for(let y = 0; y < array.length; y++){
    if(typeof array[y] === "string"){
    console.log(array[y]);
    }
}
// -----