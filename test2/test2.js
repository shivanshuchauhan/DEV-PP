// let a = ["a", "b"];
// a[2] = a ;
// console.log(a);
// function globalFunction(x) {
//     return function outerFunction(y) {
//       return function innerFunction(z) {
//         return x + y + z;
//       };
//     };
//   }
  
//   let instance1 = globalFunction(2);
//   var instance2 = instance1(3);
//   console.log(instance2());
  
// let arr = ["a", "b", "c", "d", 1, 2, 3, 4];

// arr.map(function (e) {
//   return 2 * e;
// });

// (function () {
//   arr.filter(function () {});
// })();

// console.log(arr);

// let nArr;
// nArr = arr.filter(function (e) {
//   return Number.isInteger(e);
// });
// nArr = new Array();
// console.log(nArr);

// nArr = arr
//   .filter(function (e) {
//     return !Number.isInteger(e);
//   })
//   .map(function (e) {
//     return e + 1;
//   });

// console.log(nArr);

// let count = 0;
// let interval = setInterval(function () {
//   console.log(count);
//   count++;
// }, 100);

// setTimeout(function () {
//   clearInterval(interval);
//   interval = setInterval(function () {
//     console.log(count);
//     count--;
//     if (count < 0) clearInterval(interval);
//   });
// }, 500);




// //ques6
// let i=1;
//  setTimeout(result,2000);
//  function result(){
//      console.log("Hello !!!  ", i);
//      i++;
//      if(i<=10){
//          setTimeout(result,2000);
//      }
//  }



// let obj = {
//     1: 0,
//     2: 1,
//     3: 2,
//     4: 3,
//     5: 4,
//     length: 5,
//   };
//   console.log(obj.length);
//   function f() {
//     for (let i = 1; i < obj.length; i++) {
//       obj[i] = obj[i] + 1;
//     }
//     delete obj["length"];
//     for (let x in obj) {
//       console.log(`at index ${x} we have value ${obj[x]}`);
//     }
//   }
  
//   f();




// let arr = [1, 2, 3, 4];

// function f(arr) {
//     let arrn=[];
//     for (x in arr) {
//         arrn.push(0);
//     }
//     return arrn;
// }

// console.log(arr);

// console.log(f(arr));

// console.log(arr);





//if(typeof myVar === 'undefined')






//ques3
// let mul= function(x,y) {
//     if(typeof y ==='undefined'){
//         return function(z){
//             return x*z;
//         }
//     }else{
//         return x*y;
//     }
// }

// console.log(mul(3,4));
// console.log(mul(3)(4));



let obj = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    length: 5,
  };
  
  function f() {
      let objn=obj;
    for (let i = 1; i < objn.length; i++) {
      objn[i] = objn[i] + 1;
    }
    delete objn["length"];
    // for (let x in objn) {
    //   console.log(`at index ${x} we have value ${objn[x]}`);
    // }
    return objn;
  }
  
  //f();
  function g(objn){
    for (let x in objn) {
        console.log(`at index ${x} we have value ${objn[x]}`);
    }
  }
  g(f());










