function outer(num) {
    function inner() {
        console.log(num)
    }
    num=1000
    return inner
}

// const myFunc=outer(10)
// myFunc()


const greeting=(name)=>{
    return ()=>{
        console.log("hello "+name)
    }
}

// const greet=greeting('Maaz')
// greet()

const increment=()=>{
    count=0
    return ()=>{
        count++
        console.log(count)
    }
}

// const counter1=increment()
// counter1()
// counter1()
// counter1()


//---------------------------memoization-----------------------
const prevNumber=[]
function fib(n,prevNumber=[]){
    if(prevNumber[n]!=null){
        return prevNumber[n]
    }
    let result;
    if(n==0||n==1){
        result= n
    }else{
        result= fib(n-1,prevNumber)+fib(n-2,prevNumber)
    }
    prevNumber[n]=result
    return result
}

console.log(fib(500))



