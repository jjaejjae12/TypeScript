let a = "hello"//string type지정
let b: boolean = false//boolean tpye 지정
let c: number[] = []//nuber type 배열 지정
c.push(1)

console.log(c);

const player: {//object 지정
  name: string,
  age?: number//number or undefined
} = {
  name: "jjaejjae12",
}

if (player.age && player.age < 10) {
  console.log(player.age)
} else {
  console.log(player.age)
}

type Player = {//type변수 지정
  readonly name: string,//읽기전용 지정
  age?: number
}

const playerNico: Player = {
  name: "nico"
}

const playerLynn: Player = {
  name: "lynn",
  age: 12
}

console.log(playerNico, playerLynn)

function playerMaker(name: string): Player {//함수에서 type지정
  return {
    name
  }
}

const nico = playerMaker("nico")

nico.age= 12
//nico.name = "dd" 코드방지

const playerMakerTwo = (name:string) : Player => ({name})

const naco = playerMakerTwo("naco")

console.log(nico,naco)

const numbers: readonly number[] = [1,2,3,4]//읽기전용배열 적용 

console.log(numbers)

const humun: [string, number, boolean] = ["nico", 1, true]

console.log(humun)

//any ts에서 js로 타입 비활성화

let Unknown:unknown;//type지정 전까지 type보호

// let Known = Unknown + 1 보호예시
if(Unknown === "number") {
  let Known = Unknown + 1;
}

if(Unknown === "string") {
  let Known = Unknown.toUpperCase()
}

function hello() {//return값이 없을땐 void type적용
  console.log(hello)
}

function Never(name:string|number) {//return을 하지않을때발생
  if(typeof name === "string") {
    console.log(typeof name)
  } else if(typeof name === "number") {
    console.log(typeof name)
  } else { 
    console.log("never")
    throw new Error("xxx");
  }
  //error발생시 정상적으로 실행  
}


function TsType() {
  return (
    <div>
      ts
    </div>
  );
}

export default TsType;