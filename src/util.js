function getRandom(min, max){
    return Math.random()* ( max + 1 - min) + min
}
export {
    getRandom
}