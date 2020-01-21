const myCustomMapFunction = function (cb){
    const newArray = []
    for(let i = 0; i<this.length; i++){
        newArray[i] = cb(this[i],i)
    }
    return newArray
}
Array.prototype.map = myCustomMapFunction

let test = [1,2,3]
let result = test.map(e=>e * 2)
