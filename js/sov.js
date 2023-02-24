
//const sov = (ms) => {  ingen grund til at lave lambda her
function sov(ms) {
    return new Promise(dummyFunction => setTimeout(dummyFunction, ms))
}

async function doSomethingAsync() {
    console.log("1111 før sov")
    const prom = await sov(2000)
    console.log("222 færdig med at sove")
}

console.log("start 1")
doSomethingAsync();
console.log("slut 555")