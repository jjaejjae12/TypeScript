"use strict";
//npm install -g typescript 타입스크립트 컴파일러 설치  
//npm install --save typescript @types/node @types/react @types/react-dom @types/jest 이미있는 react프로젝트에 ts설치
//npx create-react-app my-app --template typescript 처음부터 ts셋팅 react프로젝트 생성
//tsc -w ts로 작성한 파일js로 자동변환
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var LiteralTypesName;
//Literal type 지정된 값만 들어올수 있음
// LiteralTypesName = "asd" 오류 발생
var UnionLiteralType;
//Union + Literal 자동완성쉬워짐
function LiteralFunction(a) {
    //param과return값도 지정 가능
    return 1;
}
LiteralFunction('hello');
var ErrorLiteral = {
    name: 'kim'
};
/*
as const는 효과가 2개인데
1. 타입을 object의 value로 바꿔줍니다. (타입을 'kim'으로 바꿔줍니다)
2. object안에 있는 모든 속성을 readonly로 바꿔줍니다 (변경하면 에러남)
*/
function ErrorLiteralFuntion(a) {
}
//ErrorLiteralFuntion(ErrorLiteral.name); 오류 이류:함수의prams은 타입이'kim'이지만 ErrorLiteral의 name의 타임은 string이여서
ErrorLiteralFuntion(ErrorLiteral.name); //as 해결법
ErrorLiteralFuntion(ErrorLiteral.name);
//functuon alias;
var FFunction = function (a) {
    return 10;
};
var objecFunction = {
    name: 'kim',
    age: 12,
    pluson: function (x) {
        return x + 1;
    },
    changeName: function () { }
};
var HiElement = document.querySelector('#title');
//html 요소 union 타입:Element|null
//narrowing 방법
if (HiElement != null) {
    HiElement.innerHTML = '반가워요';
}
//instanceof 자식요소 체크
if (HiElement instanceof HTMLElement) {
    HiElement.innerHTML = '반가워요';
}
;
//js 신문법
if ((HiElement === null || HiElement === void 0 ? void 0 : HiElement.innerHTML) != undefined) {
    HiElement.innerHTML = '반가워요';
}
//as 사용 비추천
var AssertionElemnt = document.querySelector('#title');
AssertionElemnt.innerHTML = '반가워요';
var LinkElement = document.querySelector(".link");
if (LinkElement instanceof HTMLAnchorElement) {
    //정확한ELement타입 지정필요
    LinkElement.href = 'https://kakao.com';
}
var EventElement = document.querySelector('#button');
EventElement === null || EventElement === void 0 ? void 0 : EventElement.addEventListener('click', function () {
    //narrowing 방법
    console.log(1);
});
//class 문법 타입지정
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.classFuntion = function (a) {
        console.log(a);
        return a + 'qkr';
    };
    return Person;
}());
var ClassHumen1 = new Person('kim');
var ClassHumen2 = new Person('pak');
;
//interface object타입 지정법
var interfaceObject = { color: 'red', width: 100 };
;
var IEO = { name: "kim" };
var IET = { name: "h", age: 12 };
;
;
//중복시 자동 extends됨
var interfaceOverlapAnimal = { name: 'sa', age: 17 };
//type &로 extends구현 가능 but 중복선언 불가능
//restparameter
function restParameter() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    //restparameter ...사용시 수 상관없이 파라미터를 받을수 있음
    console.log(a);
}
restParameter(1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10);
//spread operator
var spreadOperator1 = [1, 2, 3];
var spreadOperator2 = [4, 5];
var spreadOperator3 = __spreadArray(__spreadArray([], spreadOperator1, true), spreadOperator2, true);
console.log(spreadOperator3);
//destructuring
var _a = [1, 2], one = _a[0], two = _a[1];
console.log(one);
var _b = { student: "d", age: 12 }, student = _b.student, age = _b.age;
var functionDestructuringOne = { student: "d", age: 12 };
function functionDestructuring(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
functionDestructuring(functionDestructuringOne);
function NullNarrowing(a) {
    //null and 'tpye narrowing
    if (a && typeof a === 'string') {
    }
}
//Never
function neverFumtion(parameter) {
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
    }
    else {
        parameter;
    }
}
//public,private
var publcikUser = /** @class */ (function () {
    function publcikUser() {
        this.name = 'kim';
    }
    return publcikUser;
}());
var userPublcik = new publcikUser();
userPublcik.name = 'park'; //가능
var privateUser = /** @class */ (function () {
    function privateUser() {
        this.name = 'kim';
        this.familyName = '안뇽'; //가능
    }
    return privateUser;
}());
var userPrivate = new privateUser();
userPrivate.name = 'park'; //가능
//userPrivate.familyName = 456; //에러남
//protected,static
var extendsUser = /** @class */ (function () {
    function extendsUser() {
        this.x = 10;
    }
    return extendsUser;
}());
var extendsNewUser = /** @class */ (function (_super) {
    __extends(extendsNewUser, _super);
    function extendsNewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //User을불러옴
    extendsNewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return extendsNewUser;
}(extendsUser));
var staticUser = /** @class */ (function () {
    function staticUser() {
        this.y = 20;
    }
    staticUser.x = 10;
    return staticUser;
}());
var staicKohn = new staticUser();
//staicKohn.x //불가능
staticUser.x; //가능
//Generic
function GenericFuntion(x) {
    //매개변수지정 타입 그대로 return 해줌
    return x[0];
}
var GenericA = GenericFuntion([4, 2]);
console.log(GenericA + 1); //오류뜸 
var GenericB = GenericFuntion(['2', '4']);
console.log(GenericB);
function ExtendGenericFunction(x) {
    //extends 로 narrowing , 타입제한
    return x.length;
}
;
var ExtendGenericA = ExtendGenericFunction(['100']);
