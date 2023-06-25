// Basic Types
let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'hello']

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]
//Tuple Array
let employee: [number, string] []

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
]

// Union
let pid: string | number

pid = '22'

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log(Direction1.Up)

//Objects
type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John',
}

// Type Assertion
let cid: any = 1
//let customerID = <number>cid
let customerID = cid as number

// Function
function addNum(x: number, y: number): number {
    return x + y
}

// Void
function log(message: string | number): void {
    console.log(message)
}

// Interfaces
interface UserInterface  {
    id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}

type Point = number | string
const p1: Point = 1

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface  {
    id: number
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registerd`
    }
}



const brad = new Person(1, 'Jurij')
const mike = new Person(2, 'Ema')

// Subclasses
class Employee extends Person{
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad','john','jill'])

numArray.push(3)
strArray.push('Jurij')