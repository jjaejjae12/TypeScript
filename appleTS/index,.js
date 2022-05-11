//npm install -g typescript 타입스크립트 컴파일러 설치  
//npm install --save typescript @types/node @types/react @types/react-dom @types/jest 이미있는 react프로젝트에 ts설치
//npx create-react-app my-app --template typescript 처음부터 ts셋팅 react프로젝트 생성
//tsc -w ts로 작성한 파일js로 자동변환
var tsTpye = "kim";
// : (type) 타입 지정
var stringArray = ["asd", "dasdd"];
//array 타입 지정
var tsobject = {};
//object 타입 지정 
//object 속성이 불확실항때 ?
var strOrNum = "kim";
//TypeAlias 타입 변수 제사용성 증가 다시 정의 불가능
var makeTpye = 123;
//tuple타입 array에 지정자리에 지정 타입
var john = [123, true];
//object 다수 속성 타입
var johns = { name: 'kim', age: 123 };
var Any;
Any = "이름";
Any = 1;
//ts해제
var UnKnown;
//any와 비슷하지만 더 안전함 기본값
UnKnown = 123;
UnKnown = {};
UnKnown = "dasd";
UnKnown = 1;
//let h:string = UnKnown; 에러뜸
function parameAndReturn(x /*prame*/) {
    return x * 2;
}
//functuon tpye지정
function voidFunction(x) {
    x * 2;
}
//void return값이 없는 함수의 타입
function obtionFunction(x) {
    console.log("obtion을 사용하면 값이 없어도 함수를 실행해줍니다.");
}
//? = 'type'|undefined 값이 없을때에도 문제가 생기지 않음 객체 속성에도 사용가능
obtionFunction();
// narrowing 또는 assertion 
function narrowingFunction(x) {
    // console.log(x + 2); 오류코드 :  정확히 타입이 number 여야 함
    var narrowingArray = [];
    if (typeof x === "number") {
        narrowingArray[0] = x;
        console.log(narrowingArray);
        return x + 2;
    }
    else {
        console.log(typeof x);
        return x + '2';
    }
    //Narrowing 문법 tpyeof, in, instanceof
}
narrowingFunction(123);
function assertionFuntion(x) {
    var assertionArray = [];
    //확실한 타입만 지정해줌 (비사용)
    assertionArray[0] = x;
}
assertionFuntion(123);
var readOnly = {
    name: 'Name'
};
