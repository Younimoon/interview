//函数参数是函数
//参数写函数名，调用函数的位置再进行调用并进行传参
// function a(b){
//     b('w s n yeye')
// }
// a((ar)=>{
//     console.log(ar, '11常见手写题.js-第32行')
// })

// 手写foreach
//修改原数组
Array.prototype.myEach = function(fn){
    for(let i = 0 ;i<this.length;i++ ){
        fn(this[i],i)
    }
}
const Arr1 = [1,2,3].myEach(function(item,index){
    console.log(item,index);
})

//手写map
//map是返回新数组
Array.prototype.myMap =  function( fn){
    const ARr = []
    for(let i = 0 ;i<this.length;i++ ){
        ARr.push(fn(this[i],i))
    }
    // console.log(ARr);
    console.log(ARr, '11常见手写题.js-第31行')
} 
const Arr2 = [1,2,3]
Arr2.myMap((item,index)=>{
    return  item*index
})



// -----------------------------------------------------

// <!-- //数组去重 -->
const arr = [1, 2, 3, 4, 1, 2, 3, 4]
const Arr = new Set(arr)
console.log(Array.from(Arr));
//在新数组中查找每个原数组的索引 或者在新数组中使用includes看是否包含该元素
(function(){
    
    const arr1 = []
    arr.forEach(item=>{
        if(!arr1.includes(item)) return arr1.push(item)
        // if(arr1.indexOf(item) === -1) return arr1.push(item)
    })
    console.log(arr1, '11常见手写题.js-第14行')

    const map = new Map()
    map.set('123',123)
    // map.set(a,b)
    //a,b是设置的键值对
    const ARR = []
    arr.forEach(item=>{
        if(!map.has(item)){
            map.set(item)
            ARR.push(item)
        }
    })
    console.log(ARR, '11常见手写题.js-第56行')
}())







    
