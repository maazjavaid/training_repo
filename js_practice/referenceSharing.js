
//---------------------refrence sharing
const newObj={
    name:'Maaz',
    position:'Associate Software Engineer'
}
function changeObject(newObj){
    console.log(newObj)
    newObj.position='Principal Software Engineer'
}

changeObject(newObj)
console.log(newObj)
