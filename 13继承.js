function Person(name,age){
    this.name = name
    this.age = age 
    this.friends = {
        name:"huang",
        age:123
    }
    this.arr = [1,2,3]
    this.get= function(){
        console.log(this.age, '13继承.js-第5行')
    }
}
//构造函数添加新属性
Person.prototype.set = function(type){
    this.type = type
}
function Per(){

}
//原型继承
//弊端：对同一个继承的构造函数进行实例化,修改其中一个实例的复杂数据类型的属性，其他实例化对象也会响应修改
Per.prototype = new Person('huang',20)
const per = new Per()
const per1 = new Per()
per.age = 12
per.arr.push(4)
console.log(per.arr,per1.arr);


// --------------------------------------------

//构造函数继承，通过call
//弊端：原构造函数在原型上添加属性是不会被继承的
//但是解决是浅拷贝问题
function Parent(){
    this.name = 'father'
    this.arr = [1,2,3]
}
Parent.prototype.age = 20 
function Child(){
    this.type = this
    Parent.call(this)
}
const child = new Child()
child.arr.push(4)
const child1 = new Child()
child1.name = "younimoon"
console.log(child.arr,child1.arr, '13继承.js-第48行')
console.log(child.name,child.age, '13继承.js-第33行')

// 组合继承
//将前两种结合起来

//原型式继承，主要通过Object.create()
//也是一种浅拷贝，容易被篡改
let Myself = {
    name:"younimoon",
    age:10
}
Myself.friend = {
    name:"bt",
    sex:"女"
}
let myself = Object.create(Myself)
let my = Object.create(Myself)
myself.friend.sex = '男'
console.log(myself.friend,my.friend, '13继承.js-第61行')


//寄生式继承
//和原型式继承如出一辙,弊端也差不多
let Myself1 = {
    name:"younimoon",
    age:10
}
function clone(kind){
    let clone = Object.create(kind)
    clone.getfriend = function(){
        return this.name
    }
    return clone
}
let my1 = clone(Myself1)
console.log(my1.name, '13继承.js-第82行')




//寄生组合式继承
//避免了实例化继承同一个构造函数后实例化后的浅拷贝
function Clone(parent,child){
    child.prototype = Object.create(parent.prototype)

    // Person.prototype.constructor === Person // false
    //修改构造函数的属性
    child.prototype.constructor = child;
}
function Parent1(){
    this.name = 'loveinmoon'
    this.friend = [1,2,3],
    this.myfriend = {
        name:"hwp"
    }
}
Parent1.prototype.getname = function(){
    console.log(this.name, '13继承.js-第93行')
}
function Child2(){
    Parent1.call(this)
    this.friends = 'w s n erzi '
}
Clone(Parent1,Child2)
const child2 = new Child2()
const child3 = new Child2()
child2.myfriend.name = 'bt'

console.log(child2.myfriend,child3.myfriend, '13继承.js-第112行')



// const person = new Person('huang',20)
// person.set('男')
// console.log(person.__proto__);
// console.log(Person.prototype);
// console.log(person);
// console.log(Person.say());
const You = function(){
    this.namee = "123"
    this.age = 2
}
You.prototype.sex = "男"
// console.log(You.prototype.constructor===You, '13继承.js-第115行')
// console.log(You, '13继承.js-第116行')