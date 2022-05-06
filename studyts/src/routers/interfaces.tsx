//interfaces
type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

//interface Hello = string 오류 코드

type Type = {
    nickname: string
    team: Team
    health: Health
}

interface Person {//오브젝트 type만 지정 가능
    nickname: string
    team: Team
    health: Health
}

interface USer {// == tpye USer =
    name: string
}


interface PLayer extends USer {// == type Player = User &
    //다른 type을 상속받을수 있다 
}

interface Human {//interfaces중첩 기능 tpye은 불가능
    name: string
}
interface Human {//interfaces중첩 기능
    llastName: string
}
interface Human {//interfaces중첩 기능
    health: number
}

const nico: Human = {
    name: "nico",
    llastName: "n",
    health: 10
}

const nnico: PLayer = {
    name: "nico"
}

interface User {//abstract class
    // constructor(
    //     protected firstName:string,
    //     protected lastName:string
    // ) {}
    firstName: string
    lastName: string
    sayHi(name: string): string
    fullName(): string
}

interface Humans {
    health:number
}
class Player implements User,Humans {
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ){}
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    sayHi(name: string) {
        return `Hello ${name}.My name is ${this.fullName}`
    }
}

function makeUser(user:User):User{
    return {
        firstName:"nico",
        lastName:"las",
        fullName:() => "xx",
        sayHi:(name) => "string"
    }
}

makeUser({
    firstName:"nico",
    lastName:"las",
    fullName:() => "xx",
    sayHi:(name) => "string"
})

function Interfaces() {
    return (
        <div>
            d
        </div>
    )
}

export default Interfaces;