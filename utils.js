function fn(a,b){
    var min = Math.min(a,b)
    var max = Math.max(a,b)

var res = Math.floor(Math.random()*(max - min + 1 ) + min)
return res
}