import React, { useState } from 'react';



let box1 :JSX.Element = <div>dad</div>;//jsx타입 지정법
let box2 :JSX.Element = <button>dasd</button>;//jsx기본타입 지정법


function App() {
  let [user,setUser] = useState<string[]|number[]>(["kim"]);
  return (
    <div>

      {box1}
      {box2}
      <h1>das</h1>
      <Profile name="Hi" age="1" />
      <h4>sdad</h4>
    </div>
  );
}

function Profile({name, age}:{name:string,age?:string}) : JSX.Element {
  return (
    <div>프로필입니다{name}</div>
  )
}

export default App;
