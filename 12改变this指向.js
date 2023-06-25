// apply（a,b）,第一个参数是改变后this的指向，第二个是函数的参数,是以数组的形式存在，注意：
// 使用apply方法改变this指向后原函数会立即执行，且此方法只是临时改变thi指向一次。
// call和apply差不多只是第二个参数是不是数组形式

function Person(name,age){
    this.name = name
    this.age = age
    this.get = function(sex="男"){
        console.log(this.age+sex);
        // console.log(this);
    }
}

const person = new Person("huang",12)
const per ={
    age:20
} 

person.get.call(per)
person.get.apply(per,['女'])
const Per =  person.get.bind(per)
Per()
