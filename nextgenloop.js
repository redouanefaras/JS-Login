var oldList = [1,2,3,4];
var newList = oldList.map(function(n){
    return Math.pow(n,3)
})
console.log(newList, oldList)