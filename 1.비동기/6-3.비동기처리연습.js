// 실제 예제를 통한 비동기 처리 연습
// 참고: https://velog.io/@5o_hyun/%EB%B9%84%EB%8F%99%EA%B8%B0%EC%B2%98%EB%A6%AC%EC%97%B0%EC%8A%B5

// JSONPlaceholder
const url1 = 'https://jsonplaceholder.typicode.com/todos';
const url2 = 'https://jsonplaceholder.typicode.com/users';

// 1. Promise
// 1-1. 화살표 함수 -> 오답
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve(data), 1000);
// });
// promise1
//   .then((receivedData) => console.log('data1', receivedData))
//   .catch((err) => console.log('err1', err));

// 오답 노트
// - setTimeout에 전달된 함수는 콜백이여야 함.
// - data가 선언되지 않았음.

// 1-1. 화살표함수 -> 개선안
const promise1 = new Promise((resolve, reject) => {
  let data = '데이터 입니다.';
  setTimeout(() => resolve(data), 1000);
});
promise1
  .then((receivedData) => console.log('data1', receivedData))
  .catch((err) => console.log('err1', err));

// 1-2. 함수 선언식 -> 오답
// function test1() {
//   let data = '데이터 입니다.';
//   let promise2 = new Promise((resolve, reject) => {
//     resolve(data);
//   });
// }
// test1.then((receivedData) => console.log('data1', receivedData));

// 오답노트
// 1. then()을 실행하지 않았다. test1은 단순 함수 선언식이다.
// 2. test1 함수는 아무것도 반환하지 않고 있다.(promise를 생성하였으나 이를 다른 곳에서 쓰고 있지 않음)

// 1-2. 함수 선언식 -> 개선안
function test1() {
  let data = '데이터 입니다.';
  let promise2 = new Promise((resolve, reject) => {
    resolve(data);
  });
  return promise2; // promise 객체 반환
}
test1().then((receivedData) => console.log('data1', receivedData));

// 그러면 여기서..왜 1-1은 return을 안쓰지?
// new Promise(...)를 사용하여 직접 Promise 객체를 생성하면,
// 해당 Promise 객체는 이미 존재하고 있으므로 별도의 return 문이 필요하지 않습니다.
// 제시된 코드에서 promise1은 new Promise(...)의 결과를 저장하는 변수입니다.
// 따라서 promise1 변수는 이미 Promise 객체를 참조하고 있습니다.
// 이는 함수 내에서 값을 반환하는 것과는 다른 개념입니다.
// 만약 이 Promise를 생성하는 로직이 함수 내부에 있다면,
// 그 함수가 해당 Promise를 반환하도록 만들려면 return 키워드를 사용해야 합니다.

function fetchData() {
  return new Promise((resolve, reject) => {
    let data = '데이터 입니다.';
    setTimeout(() => resolve(data), 1000);
  });
}
fetchData()
  .then((receivedData) => console.log('data1', receivedData))
  .catch((err) => console.log('err1', err));

// 2. Promise.all

// 3. async-await

// 4. try-catch
