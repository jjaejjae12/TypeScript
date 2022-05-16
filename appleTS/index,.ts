//npm install -g typescript 타입스크립트 컴파일러 설치  
//npm install --save typescript @types/node @types/react @types/react-dom @types/jest 이미있는 react프로젝트에 ts설치
//npx create-react-app my-app --template typescript 처음부터 ts셋팅 react프로젝트 생성
//tsc -w ts로 작성한 파일js로 자동변환

let tsTpye: string = "kim";
// : (type) 타입 지정

let stringArray: string[] = ["asd", "dasdd"];
//array 타입 지정

let tsobject: { name?: string } = {};
//object 타입 지정 
//object 속성이 불확실항때 ?

let strOrNum: string | number = "kim";
//Union type 중복타입 지장 

type TypeAlias = string | number;
//TypeAlias 타입 변수 제사용성 증가 다시 정의 불가능

let makeTpye: TypeAlias = 123;


type Member = [number, boolean];
//tuple타입 array에 지정자리에 지정 타입
let john: Member = [123, true];

type Members = {
    [key: string]: string | number,
};
//object 다수 속성 타입
let johns: Members = { name: 'kim', age: 123 };

let Any: any;
Any = "이름"
Any = 1;
//ts해제

let UnKnown: unknown;
//any와 비슷하지만 더 안전함 기본값
UnKnown = 123;
UnKnown = {};
UnKnown = "dasd";
UnKnown = 1;
//let h:string = UnKnown; 에러뜸

function parameAndReturn(x: number/*prame*/): number/*return*/ {
    return x * 2;
}
//functuon tpye지정

function voidFunction(x: number): void {
    x * 2;
}
//void return값이 없는 함수의 타입

function obtionFunction(x?: number): void {
    console.log("obtion을 사용하면 값이 없어도 함수를 실행해줍니다.")
}
//? = 'type'|undefined 값이 없을때에도 문제가 생기지 않음 객체 속성에도 사용가능

obtionFunction()
// narrowing 또는 assertion 
function narrowingFunction(x: number | string) {
    // console.log(x + 2); 오류코드 :  정확히 타입이 number 여야 함
    let narrowingArray: number[] = [];
    if (typeof x === "number") {
        narrowingArray[0] = x;
        console.log(narrowingArray)
        return x + 2;
    } else {
        console.log(typeof x);
        return x + '2';
    }
    //Narrowing 문법 tpyeof, in, instanceof
}
narrowingFunction(123);


function assertionFuntion(x: number | string) {
    let assertionArray: number[] = [];
    //확실한 타입만 지정해줌 (비사용)
    assertionArray[0] = x as number;
}

assertionFuntion(123);

type ReadOnlyTpye = {
    readonly name: string
    //읽기전용 속성 해당 속성의 재 할당을 막아준다
}

const readOnly = {
    name: 'Name'
}

type ExtendTpyeString = string;
type ExtendTypeNumber = number;

type SumTpye = ExtendTpyeString | ExtendTypeNumber;
//Unino type으로 타입을 함칠수있음

type ObjectExtendTypeString = { x: string };
type ObjectExtendTypeNumber = { y: number };
//&연산자로 object 타입 함치기

type NewObjectType = ObjectExtendTypeString & ObjectExtendTypeNumber;

let LiteralTypesName: 123;
//Literal type 지정된 값만 들어올수 있음

// LiteralTypesName = "asd" 오류 발생

let UnionLiteralType: '대머리' | '솔로';
//Union + Literal 자동완성쉬워짐

function LiteralFunction(a: "hello"): 1 | 0 {
    //param과return값도 지정 가능
    return 1;
}

LiteralFunction('hello');

var ErrorLiteral = {
    name: 'kim'
} as const
/*
as const는 효과가 2개인데
1. 타입을 object의 value로 바꿔줍니다. (타입을 'kim'으로 바꿔줍니다)
2. object안에 있는 모든 속성을 readonly로 바꿔줍니다 (변경하면 에러남) 
*/

function ErrorLiteralFuntion(a: 'kim') {

}

//ErrorLiteralFuntion(ErrorLiteral.name); 오류 이류:함수의prams은 타입이'kim'이지만 ErrorLiteral의 name의 타임은 string이여서
ErrorLiteralFuntion(ErrorLiteral.name as 'kim');//as 해결법
ErrorLiteralFuntion(ErrorLiteral.name);

type FunctionType = (a: string)/*param*/ => number;//return
//functuon alias;

const FFunction: FunctionType = function (a) {
    return 10;
}

type MeobjecFunctionType = {
    name: string,
    age: number,
    pluson: (x: number) => number,
    changeName: () => void
}

let objecFunction: MeobjecFunctionType = {
    name: 'kim',
    age: 12,
    pluson(x) {
        return x + 1;
    },
    changeName: () => { }
}

let HiElement = document.querySelector('#title');
//html 요소 union 타입:Element|null

//narrowing 방법
if (HiElement != null) {
    HiElement.innerHTML = '반가워요';
}

//instanceof 자식요소 체크
if (HiElement instanceof HTMLElement) {
    HiElement.innerHTML = '반가워요'
};

//js 신문법
if (HiElement?.innerHTML != undefined) {
    HiElement.innerHTML = '반가워요'
}

//as 사용 비추천
let AssertionElemnt = document.querySelector('#title') as HTMLElement;
AssertionElemnt.innerHTML = '반가워요'

let LinkElement = document.querySelector(".link");
if (LinkElement instanceof HTMLAnchorElement) {
    //정확한ELement타입 지정필요
    LinkElement.href = 'https://kakao.com'
}

let EventElement = document.querySelector('#button');
EventElement?.addEventListener('click', function () {
    //narrowing 방법
    console.log(1);
})

//class 문법 타입지정
class Person {
    name: string;
    constructor(a: string) {
        this.name = a;
    }
    classFuntion(a: string): string {
        console.log(a)
        return a + 'qkr';
    }
}

let ClassHumen1 = new Person('kim');
let ClassHumen2 = new Person('pak');

interface interfaceObjectType { color: string, width: number };
//interface object타입 지정법

let interfaceObject: interfaceObjectType = { color: 'red', width: 100 };

interface interfacExtendsOne { name: string };

interface interfaceExtendsTwo extends interfacExtendsOne { age: number }

let IEO: interfacExtendsOne = { name: "kim" };

let IET: interfaceExtendsTwo = { name: "h", age: 12 };

interface interfaceOverlap { name: string };
interface interfaceOverlap { age: number };
//중복시 자동 extends됨

let interfaceOverlapAnimal = { name: 'sa', age: 17 };
//type &로 extends구현 가능 but 중복선언 불가능

//restparameter
function restParameter(...a: number[]) {
    //restparameter ...사용시 수 상관없이 파라미터를 받을수 있음
    console.log(a);
}

restParameter(1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10);

//spread operator
let spreadOperator1 = [1, 2, 3];
let spreadOperator2 = [4, 5];
let spreadOperator3 = [...spreadOperator1, ...spreadOperator2];
console.log(spreadOperator3)

//destructuring
let [one, two] = [1, 2];
console.log(one);

let { student, age: age } = { student: "d", age: 12 };
let functionDestructuringOne = { student: "d", age: 12 };

function functionDestructuring({ student, age }: { student: string, age: number }) {
    console.log(student, age);
}

functionDestructuring(functionDestructuringOne);

function NullNarrowing(a: string | undefined) {
    //null and 'tpye narrowing
    if (a && typeof a === 'string') {

    }
}

//Never
function neverFumtion(parameter: string) {
    /*
    조건 1) 절대 return을 하지 않아야하고
    조건 2) 함수 실행이 끝나지 않아야합니다 (전문용어로 endpoint가 없어야합니다)
    */
    /*
     while (true) {
         console.log(123);
     }
     */
    /*
     throw new Error('에러메세지')
     */
    if (typeof parameter === "string") {
        parameter + 1;
    } else {
        parameter;
    }
}