"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var box1 = <div>dad</div>; //jsx타입 지정법
var box2 = <button>dasd</button>; //jsx기본타입 지정법
function App() {
    var _a = (0, react_1.useState)(["kim"]), user = _a[0], setUser = _a[1];
    return (<div>

      {box1}
      {box2}
      <h1>das</h1>
      <Profile name="Hi" age="1"/>
      <h4>sdad</h4>
    </div>);
}
function Profile(_a) {
    var name = _a.name, age = _a.age;
    return (<div>프로필입니다{name}</div>);
}
exports.default = App;
