let test = [1,2,3,4,5,6]

const myCustomMapFunction = function(cb){
    const newArray = []
    for(let i = 0; i<this.length; i++){
        newArray[i] = cb(this[i])
    }
    return newArray
}
Array.prototype.map = myCustomMapFunction

test.map(e=>e * 2)
// output -- [ 2, 4, 6, 8, 10, 12 ]

const myCustomFilterFunction = function(cb){
    const newArray = []
    let j = 0
    for(let i = 0; i<this.length; i++){
        if(cb(this[i])){
            newArray[j++] = this[i]
        }
    }
    return newArray
}

Array.prototype.filter = myCustomFilterFunction
test.filter(x=>x%2==0)
// output -- [2,4,6]