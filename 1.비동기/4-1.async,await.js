// 참고: https://ko.javascript.info/async-await

// async&await 는 자바스크립트 비동기 처리 패턴 중 가장 최근에 나온 문법
// 쓰는 이유: 프로미스도 콜백지옥처럼 체이닝 계속 하다보면 코드 가독성 떨어짐
// 효과: async, await는 promise를 좀 더 간결하고 동기적으로 실행되는 것 처럼 보이게 만듦

// async 사용법: 무조건 "함수명 앞에" 위치해야 함
// async를 붙인 해당 함수는 항상 promise를 반환한다!

// 1. 함수 선언식
async function fetchUser1() {
  return 'hello';
}
// 2. 함수 표현식
const fetchUser2 = async function () {
  return 'hello';
};
// 3. 화살표 함수
const fetchUser3 = async () => {
  return 'hello';
};
const user = fetchUser3();
user.then((data) => console.log(data)); // Promise { 'hello' }
console.log(user); // hello

// await 사용법(차이비교)
// 1. 일반적인 방법
function hello() {
  return new Promise((reslove, reject) => {
    let data = [3, 6, 9];
    reslove(data);
  });
}
hello().then((result) => {
  console.log(result); // [3, 6, 9]
});

// 2. async, await 사용하는 방법 (then을 사용하지 않음)
// 자바스크립트는 await를 만나면 프라미스가 처리 될 때까지 기다리고, 결과는 그 이후 반환해줌

// 예제 2-1.
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('완료!'), 1000);
  });
  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
  alert(result); // "완료!"
}
f();
// 함수를 호출하고, 함수 본문이 실행되는 도중에 (*)로 표시한 줄에서 실행이 잠시 '중단’되었다가 프라미스가 처리되면 실행이 재개됨.
// await는 말 그대로 프라미스가 처리될 때까지 함수 실행을 기다리게 만듦. 프라미스가 처리되면 그 결과와 함께 실행이 재개됨.
// await는 .then보다 좀 더 세련되게 프라미스의 result 값을 얻을 수 있도록 해주는 문법으로 promise.then보다 가독성 좋고 쓰기 쉬움

// 예제 2-2.
function hello() {
  return new Promise((resolve, reject) => {
    let data = [3, 6, 9];
    resolve(data);
  });
}
async function result() {
  let result = await hello();
  console.log(result); // [3,6,9]
}
result();

// * async 함수가 아닌데 await을 사용하면 문법 에러가 발생:
// * await는 "무조건" 비동기 처리 한 프로미스 객체를 반환해야 await가 의도적으로 동작함
function f() {
  let promise = Promise.resolve(1);
  // let result = await promise; // Syntax error
}

// await는 최상위 레벨 코드에서 작동하지 않음
// 최상위 레벨 코드에선 문법 에러가 발생함.
// 그렇기 때문에 관행처럼 .then/catch를 추가해 최종 결과나 처리되지 못한 에러를 다룹니다.
let response = await fetch('/article/promise-chaining/user.json');
let user2 = await response.json();

// 때문에, 익명 async 함수로 감싸면 최상위 레벨에서도 사용 가능
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user2 = await response.json();
})();

// async-await 에러 핸들링
// 프라미스가 정상적으로 이행되면 await promise는 프라미스 객체의 result에 저장된 값을 반환합니다.
// 반면 프라미스가 거부되면 마치 throw문을 작성한 것처럼 에러가 던져집니다.
async function f() {
  await Promise.reject(new Error('에러 발생!'));
}

// await가 던진 에러는 throw가 던진 에러를 잡을 때처럼 try..catch를 사용해 잡을 수 있습니다.
async function f() {
  try {
    let response = await fetch('http://유효하지-않은-주소');
    let user = await response.json();
  } catch (err) {
    // fetch와 response.json에서 발행한 에러 모두를 여기서 잡습니다.
    alert(err);
  }
}
f();
