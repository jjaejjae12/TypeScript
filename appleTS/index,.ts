//npm install -g typescript 타입스크립트 컴파일러 설치  
//npm install --save typescript @types/node @types/react @types/react-dom @types/jest 이미있는 react프로젝트에 ts설치
//npx create-react-app my-app --template typescript 처음부터 ts셋팅 react프로젝트 생성
//tsc -w ts로 작성한 파일js로 자동변환

let tsTpye : string = "kim";
// : (type) 타입 지정

let stringArray : string[] = ["asd","dasdd"];
//array 타입 지정

let tsobject : { name? : string } = {  };
//object 타입 지정 
//object 속성이 불확실항때 ?

let strOrNum : string | number = "kim";
//Union type 중복타입 지장 

type TypeAlias = string | number;
//TypeAlias 타입 변수 제사용성 증가 다시 정의 불가능

let makeTpye:TypeAlias = 123;


type Member = [number,boolean];
//tuple타입 array에 지정자리에 지정 타입
let john:Member = [123,true];

type Members = {
    [key : string] : string | number,
};
//object 다수 속성 타입
let johns:Members = { name : 'kim',age:123};

let Any:any;
Any = "이름"
Any = 1;
//ts해제

let UnKnown : unknown;
//any와 비슷하지만 더 안전함 기본값
UnKnown = 123;
UnKnown = {};
UnKnown = "dasd";
UnKnown = 1;
//let h:string = UnKnown; 에러뜸

function parameAndReturn(x : number/*prame*/) : number/*return*/ {
    return x * 2;
}
//functuon tpye지정

function voidFunction(x:number):void {
    x * 2;
}
//void return값이 없는 함수의 타입

function obtionFunction(x?:number):void {
    console.log("obtion을 사용하면 값이 없어도 함수를 실행해줍니다.")
}
//? = 'type'|undefined 값이 없을때에도 문제가 생기지 않음 객체 속성에도 사용가능

obtionFunction()
// narrowing 또는 assertion 
function narrowingFunction(x:number|string) {
    // console.log(x + 2); 오류코드 :  정확히 타입이 number 여야 함
    let narrowingArray : number[] = [];
    if ( typeof x === "number") {
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


function assertionFuntion(x:number|string) {
    let assertionArray : number[] = [];
    //확실한 타입만 지정해줌 (비사용)
    assertionArray[0] = x as number;
}

assertionFuntion(123);

type ReadOnlyTpye = {
    readonly name : string
    //읽기전용 속성 해당 속성의 재 할당을 막아준다
}

const readOnly = {
    name:'Name'
}

type ExtendTpyeString = string;
type ExtendTypeNumber = number;

type SumTpye = ExtendTpyeString | ExtendTypeNumber;
//Unino type으로 타입을 함칠수있음

type ObjectExtendTypeString = {x:string};
type ObjectExtendTypeNumber = {y:number};
//&연산자로 object 타입 함치기

type NewObjectType = ObjectExtendTypeString & ObjectExtendTypeNumber;