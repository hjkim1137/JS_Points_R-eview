// 참고: https://eblee-repo.tistory.com/37
// **작은 범위는 큰 범위를 참조할 수 있으나, 큰 범위는 작은 범위 참조 못함

//함수 레벨 스코프 - "var"
var a = "I'm a";
function foo() {
  var b = "I'm b";
  console.log(a); //I'm a - 전역변수. 출력가능.
  if (true) {
    var c = "I'm c";
    console.log(b); //I'm b - 해당 함수 내 선언한 변수. 출력 가능.
  }
  console.log(c); //I'm c - 해당 함수 내 선언한 변수. 출력 가능.
}
foo();

function bar() {
  var d = "I'm d";
  console.log(d); //I'm d - 해당 함수 내 선언한 변수. 출력 가능.
  console.log(a); //전역변수. 출력가능.
  console.log(b); //해당 함수 내 선언한 변수가 아님. Error
  console.log(c); //해당 함수 내 선언한 변수가 아님. Error
}
bar();

// var(함수스코프) - let(블록스코프) 차이
var a = 1;
let b = 1;
function foo() {
  var a = 3;
  let b = 4;
  if (true) {
    var a = 5;
    let b = 6;
    console.log('a1', a); //5
    console.log('b1', b); //6
  }
  console.log('a2', a); //5
  console.log('b2', b); //4
}
foo();

console.log('a3', a); //1
console.log('b3', b); //1
