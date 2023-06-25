//监听对象数组里面的数据改变
class Observer{
    constructor(value){
        this.value = value
        if(Array.isArray(value)){
            //数组的逻辑
        }
        else{
            //对象的逻辑
            this.walk(value)
        }
    }
    walk(obj){
        const keys = Object.keys(obj)
        // const values = Object.values(obj)
        //获取key值和value值的数组对象
        // console.log(values);
        // console.log(keys);

        // for ( let key of obj){
        //     console.log(key);
        // }
        //for of遍历的要求是被遍历的对象要拥有iterator适合遍历数组
        //普通对象不存在接口所以不能用for of，更适合for in获取对象的key,前提是属性是可枚举属性
        // for ( let key in obj){
        //     console.log(obj[key]);
        // }
        // console.log(keys);
        for(let i = 0 ; i<keys.length;i++){
            defineReactive(obj,keys[i])
        }
    }
}
function defineReactive(obj,key,val){
    console.log(obj,key);
    //arguments代表调用函数传进函数的参数
    // if(arguments.length === 2){
    //     //传入的参数个数是两个
        val = obj[key]
    // }
    //对象里面还是对象
    if(typeof val === "object"){
        //递归
        // new Observer(val)
    }
    Object.defineProperty(obj,key,{
        // console.log(obj,key);
        enumerable:true,
        configurable:true,
        get(){
            // console.log('值被读取');
            // return 
            console.log(obj,key);
            return val
        },
        set(){
            console.log('值被修改');
        }
    })
}
const obj = new Observer({
    name:"huang"
})
// obj.value.name
console.log(obj.value.name);