// promise.all
// 프로미스 객체들의 배열을 받아,모든 프로미스들이 이행될 때까지 기다린 후
// 그 결과들의 배열을 반환하는 새로운 프로미스를 반환한다.

const promise1 = Promise.resolve(5);
const promise2 = '데이터';
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, '2초뒤에 결과출력');
});

//문자열임 -> Promise.all() 메서드는 각 배열 요소가 프로미스가 아닐 경우,
// 이를 Promise.resolve()를 통해 이행된 프로미스로 간주함

// (참고) setTimeout **************************************************
// 첫 번째 인자: 실행할 함수나 실행할 코드를 문자열 형태로 받음. 주로 함수가 사용됨
// 두 번째 인자: 지연 시간을 밀리초 단위로 받음. 이 시간 이후에 첫 번째 인자로 전달된 함수나 코드가 실행됨
// 세 번째 인자 이후: 첫 번째 인자로 전달된 함수에 전달될 인자들

// function greeting(name, age) {
//   console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// }
// setTimeout(greeting, 1000, 'Alice', 30);
// 1초 후 "Hello, my name is Alice and I am 30 years old." 라는 문장이 출력
// greeting 함수에 전달될 두 개의 인자 ('Alice'와 30)을 받음
// ******************************************************************

// ******************************************************************
// (참고) promise3 이렇게는 쓰지 못함:
// 세 번째 인자 이후로 제공되는 인자들은 첫 번째 인자로 제공된 함수의 인자로 전달됨.
// 따라서 '2초뒤에 결과출력'이 첫 번째 인자로 제공된 화살표 함수의 인자로 전달되어야 함
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(
//     () => {
//       resolve();
//     },
//     2000,
//     '2초뒤에 결과출력'
//   );
//* 따라서 아래와 같이 수정 필요 *******************************************
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(
//     (msg) => {
//       resolve(msg);
//     },
//     2000,
//     '2초뒤에 결과출력'
//   );
// });
// ********************************************************************

// Promise -> 대문자임/ 형식: Promise.all([])
// Promise.all() 내의 "비 프로미스 값들은" 해당 값으로 이행된 프로미스로 취급됨.
Promise.all([promise1, promise2, promise3]).then((data) => {
  console.log(data);
});
// [5, "데이터", "2초뒤에 결과출력"]

// 예제
// 체이닝-promise.all 연습
const test1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ test_1: 'test1 입니다.' });
  }, 1000);
});
const test2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ test_2: 'test2 입니다.' });
  }, 3000);
});

test1
  .then((result1) => {
    console.log('test1 =' + result1.test_1);
    return test2;
  })
  .then((result2) => {
    console.log('test2=' + result2.test_2);
  });

// 체이닝을 Promise.all로
Promise.all([test1, test2]).then((result) => {
  console.log(result[0].test_1); // test1 입니다.
  console.log(result[1].test_2); // test2 입니다.
});
