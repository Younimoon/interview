const obj = {
    name:"huang",
    age:10
}
const proxy = new Proxy(obj,{
    get:function(target,key){
        // console.log(target[key]);
        console.log('读取');
        return target[key]
    },
    set:function(target, propKey, value){
        // console.log(target,propKey,value);
        console.log('修改');
    },
    // defineProperty(target,propKey){
        // delete target[propKey]
        // console.log(target,propKey);
    // }
})
// delete proxy.age
// console.log(proxy.name);
// proxy.name
obj.sex = '男'
// proxy.sex
console.log(proxy);
// proxy.age = 20


//object.definepropty是只能监听对象的读取和修改set和get
//object.defineproperty一次只能监听一个属性，想一次性监听所有属性
//需要通过object.keys获取属性数组，进行遍历

//proxy更加方便,proxy是一个构造函数，proxy可以监听属性的添加但是必须是添加在
//原对象上，而不是在实例对象这样具有响应式