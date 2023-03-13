function closure() {
    let counter = 0;
    return {
        count: counter,
        increment: function() {
            this.count++;
        }
    };
}

// const counter = closure();
// console.log(counter.count);
// counter.increment();
// console.log(counter.count);


// const counter2 = closure();
// console.log(counter2.count);
// counter2.increment();
// console.log(counter2.count);


function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return  //---------------------here js Engine puts auto semicolon and it returned undefined
  {
      bar: "hello"
  };
}


//console.log(foo1())
//console.log(foo2())

const myFunc=(a,b,...rest)=>{
    console.log(a,b)
    console.log(rest)
}

console.log(myFunc("hello","my","name","is","maaz"))


