// async&await 는 자바스크립트 비동기 처리 패턴 중 가장 최근에 나온 문법
// 쓰는 이유: 프로미스도 콜백지옥처럼 체이닝 계속 하다보면 코드 가독성 떨어짐
// 효과: async, await는 promise를 좀 더 간결하고 동기적으로 실행되는 것 처럼 보이게 만듦

// async 사용법: 무조건 "함수명 앞에" 위치해야 함
// async를 붙인 해당 함수는 promise를 반환

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

// 2. async, await 사용하는 방법
// async는 함수명 앞에 붙여 사용하고, await는 resolve/reject를 보낸 모 함수명 앞에 붙여 사용
// await를 만난 promise는 비동기 처리가 될 때까지 기다리다 반환해줌
// await는 "무조건" 비동기 처리 한 프로미스 객체를 반환해야 await가 의도적으로 동작함
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
