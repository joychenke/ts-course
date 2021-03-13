// 可以往元祖里push新元素，但是不能用index访问这个新元素
let tuple: [number, string] = [0, '1']
tuple.push(2)
console.log(tuple, tuple[0], tuple[1])

// number类型数组的注解
let arr1: number[] = [1,2,3]
let arr2: Array<number | string> | null = [3,4,'2']

// 给函数加上类型注解, 返回值的类型可以不用标注，用的是类型推断
// 定义函数的参数类型
let add = (x: number, y: number) => x + y
console.log(add(3, 5))
// 定义函数类型addFn
let addFn: (x: number, y: number) => number
// 实现函数addFn，此时参数的定义不需要添加类型注解
addFn = (a, b) => a + b

// 对象，定义的时候，注解上对象的成员类型
let obj: {x: number, y: number} = {x: 1, y: 2};
obj.x = 5
console.log('obj', obj)

// symbol 唯一的数据类型
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2) // false

// undefined类型的变量只能是undefined；null类型的变量只能是null
let un: undefined = undefined
let nu: null = null
arr2 = null

// void操作符，让任何表达式返回undefined。因为undefined在js中不是一个保留字
let und = void 0
console.log("und: >>", und)
// 没有任何返回值的函数，是void类型, 变量noReturn 是void类型
let noReturn = () => {}

// 不指定一个变量的类型，它就是any类型 
let x
x = 1
x = true
console.log(x)

// never类型，永远没有返回值
let error = () => {
  throw new Error("error")
}
let endless = () => {
  while(true){}
}
