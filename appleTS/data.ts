//글로벌모듈에 로컬 모듈로 바꿔줌

/*export*/var a = 10;//전역변수

declare global {
    //로컬모듈에서 클로벌모듈로 바꿔줌
    type Dog = string;
}
export{}