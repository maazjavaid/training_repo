function func2(){
  for(var i = 0; i < 3; i++){
      setTimeout(()=> console.log(i),2000);
  }
}
// func2();


// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();


let object = { id: "1", name: "user22", age: "26", work: "programmer" };

// console.log(Object.keys(obj))
// console.log(Object.values(obj).join(""))
// console.log(Object.entries(obj))

// console.log(1 +  "2" + "2");
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);




// const arr=[1,2,3,4,5,6]

// const result=arr.reduce((acc,n)=>{
//   return acc+n
// })

// console.log(result)


// const myfunc=async()=>{
//   const res=await fetch()
//   const res=
// }

//nullish coelecing
//optional chaining
//short circuiting
//Promisify

// const students = [
//   {name: 'Ali'},
//   {name: 'Raza'},
//   {name: 'Danial'}
// ]
// const result=students.reduce((acc,curr)=>{
//   acc.push(curr.name)
//   return acc
// },[])


// console.log(result)

// const revert=result.reduce((acc,curr)=>{
//   acc.push({name:curr})
//   return acc
// },[])

// console.log(revert)


// function printCustomerCity(customer) {
//   const customerCity = customer?.city ?? "Unknown city";
//   console.log(customerCity);
// }


// const foo={

// }
// foo.name.fn ??= 'MAAZ'
// console.log(foo)

const fetchData=(url)=>{
    return new Promise((resolve,reject)=>{
      const data=fetch(url).then(res=>res.json())
      resolve(data)
    })
}
const func = async () => {
  const res = await fetchData('https://dummyjson.com/products/1')
  console.log(res)
}
func()
