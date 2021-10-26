// let a = 2;
// {
//   let a = 3;
//   {
//     let a = 4;
//     {
//       let a = 5;
//       console.log(a);
//     }
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);

// let input=[
//     { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
//     { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
//   ];
// let output=[];
//   for(let i=0 ;i<input.length  ; i++){
//       let obj={};
//       obj.name=input[i].name;
//       let rain =input[i].rainfall;
//       let avg=0;
//       for(let j=0;j<rain.length;j++){
//           avg+=rain[j];

//       }
//       avg=avg/rain.length;
//       obj.avgRainfall=avg;
//       output.push(obj);

//   }
//   console.log(output);


let input= {
            name: {
                  first: "robin",
                  last: "negi",
                  },
            address: {
                     city: {
                           name: "Gwalior",
                           },
                     landmark: "Badri Marg",
                     street: "22",
                     },
    };

console.log(ofunction(input));

function ofunction(input){
    let output={};
    Object.keys(input).forEach(key => {
        const value=input[key];
        if(typeof value != "object"){
             
        }else if(typeof value =="object"  ){
            let key2=key;
            let recobj=ofunction(input[key]);
            delete input.key;
            Object.keys(recobj).forEach(key =>{
                input[key2+"."+key]=recobj[key];
            })
            
            
            
            
            
        }
    })

    return input;

}



const fs = require("fs");
let f1kapromise=fs.promises.readFile("./f1.txt");
f1kapromise.then(function(data){
    console.log(data+"");
    let f2kapromise=fs.promises.readFile("./f2.txt");
    return f2kapromises;
})
.then(function(data){
    console.log(data+"");
    let f3kapromise=fs.promises.readFile("./f3.txt");
    return f3kapromise;
})
.then(function(data){
    console.log(data+"");
})


const id="foyiwe8460@aramidth.com";
const pw="qwer1234";























