import { Config } from "@testing-library/react";
import { type } from "os";

//Overloading

type Add = {
    (a: number, b: number): number//함수 타입지정
    (a: number, b: string): number
}


const add: Add = (a, b) => {
    if (typeof b === "string") return a
    return a + b
};

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {//Overloading
    if (typeof config === "string") { console.log(config) }
    else {
        console.log(config)
    }
}

type Addd = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
}

const addd: Addd = (a, b, c?: number) => {
    if (c) {
        console.log(a + b + c)
        return a + b + c
    } else {
        console.log(a + b)
        return a + b
    }
}

addd(1, 2)
addd(1, 2, 3)

//Ploymorphism

type SuperPrint = {
    <T, M>(arr: T[], b: M): T//placeholder 다양한 type적용
}



const superPrint: SuperPrint = (arr) => arr[0]

//generic
const a = superPrint([1, 2, 3, 4], 1)
const b = superPrint([true, false, true], "s")
const c = superPrint(["a", "b", "C"], false)
const d = superPrint([1, 2, , true, false, "hello"], [1, 2])

type Player<E> = {
    name: string
    extraInfo: E

}

type NicoExtra = {
    favFood: string
}

type NicoPlayer = Player<NicoExtra>

const nico: NicoPlayer ={
    name:"nico",
    extraInfo:{
        favFood:"kimchi"        
    }
}

const lynn:Player<null> = {
    name:"lynn",
    extraInfo:null
}

function TsFuction() {
    return (
        <div>
            Function
        </div>
    )
}

export default TsFuction;