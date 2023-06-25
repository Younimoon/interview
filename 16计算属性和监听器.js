// 计算属性：
// 计算属性存在缓存（例子：点击返回一个随机数，随机数不会改变）
//         可以在template中渲染出来，不能直接传参，并且调用计算属性不能加括号
//         必须进行return 
//         进行传参只能间接传参
//           computed: {
//             Random(){
//                 return function(num){
//                     return Math.random()*num
//                 } 
//             }
//         }
//          调用Random(20)

//计算属性和监听器相比：计算属性同步执行，监听器异步执行