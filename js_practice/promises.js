// function callApi() {
//     return fetch('https://dummyjson.com/products/1')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("API call failed");
//         }
//         return response.json();
//       })
//       .catch(error => {
//         console.log(error.message);
//         // retry the API call after a delay of 1 second
//         return new Promise(resolve => setTimeout(resolve, 1000)).then(callApi);
//       });
// }
  
// callApi().then(console.log)




//the issue why its giving undefined because even if we return from frist then success/error case it will go for the next then 
// and will use the value returned by last then success/fail

// function callApi() {
//     return fetch('https://dumyjson.com/products/1')
//         .then(
//             res => {
//                 return res.json()
//             },
//             error => {
//                 console.log('error occurred')
//                 return fetch('https://dummyjson.com/products/1')
//                     .then(
//                         res => {
//                             console.log('error handled')
//                             return res.json()
//                         }
//                     )
//             }
//         )
//         .then(
//             res => {
//                 return res
//             },
//             error => {

//             }
//         )
// }

// Promise.resolve(callApi()).then(res => console.log(res))


function callApi(url){
    return fetch(url)
    .then(res=>res.json())
    .catch(error=>{
        throw new Error(error)
    })
}

const p1=callApi("https://dummyjson.com/products/1")
const p2=callApi("https://dummyjson.com/products/2")
const p3=callApi("https://dumyjson.com/products/3")

Promise.allSettled([p1,p2,p3]).then(res=>{
    res.forEach(element => {
        console.log(element)
    });
})