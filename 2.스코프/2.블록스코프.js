// {}을 기준으로 경계를 구분
// 블록 스코프 변수는 함수 밖에서 선언하면 함수 스코프 변수처럼 전역 접근할 수 있음.
// 블록 안에서 선언하면 자신을 정의한 블록과 하위 블록에서만 접근이 가능.

// let
let foo = "I'm foo";
if (true) {
  let bar = "I'm bar";
  console.log(foo); //I'm foo
  console.log(bar); //I'm bar
}

console.log(foo); //I'm foo
console.log(bar); //Uncaught ReferenceError: bar is not defined.

// const
const aa = 12;
function bar() {
  console.log(aa); //12
  const bb = 13;

  if (true) {
    const cc = 14;
    console.log(bb); //13
  }
  console.log(cc); //error
}
bar();

// const dd; //error
