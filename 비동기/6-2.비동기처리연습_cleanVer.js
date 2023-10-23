const url1 = 'https://jsonplaceholder.typicode.com/todos';
const url2 = 'https://jsonplaceholder.typicode.com/users';

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     resolve('데이터 입니다.');
//   });
// }
// fetchData().then((data) => console.log('resolve'));
// // 오답노트: new 꼭 붙이기, 함수 실행할때는 () 꼭 붙이기!

// 오답
// function test1() {
//   return new Promise((resolve, reject) => {
//     let res = fetch(url1);
//     let data = res.json();
//     resolve(res);
//   });
// }
// test1().then((result) => console.log('결과값', result));

// error.msg : res.json() is not a function
// 오답노트:
// fetch는 이미 Promise를 반환합니다. fetch 함수 자체가 이미 Promise를 반환합니다.
// 따라서 fetch를 사용할 때 우리는 new Promise를 사용해서 직접 Promise를 만들 필요가 없습니다.
// fetch의 내부에서 이미 모든 작업이 처리되고, 성공적으로 데이터를 가져오면 resolve가 호출되며, 오류가 발생하면 reject가 호출됩니다.
// 간단히 말하면, fetch를 사용하면 이미 Promise 기반의 비동기 작업이 이루어지기 때문에 우리가 직접 resolve나 reject를 관리할 필요가 없습니다.
// test1 함수는 fetch(url1)의 결과, 즉 Promise(데이터 잘 가져왔는 지 성공,실패여부)를 직접 반환합니다.

// 개선 코드1:
// function test1() {
//   return fetch(url1).then((res) => {
//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return res.json();
//   });
// }
// test1().then((result) => console.log('결과값', result));

// 개선코드2:
async function test1() {
  const res = await fetch(url1);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return await res.json();
}
test1()
  .then((result) => console.log('결과값', result))
  .catch((error) => console.error('에러 발생:', error));
