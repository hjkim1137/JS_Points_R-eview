// 참고: https://joy-codeing-lee.tistory.com/94
// promise는 비동기 처리에 사용되는 object 이다.
// 비동기 작업을 좀 더 수월하게 처리하기 위에 ES6에 도입된 기능

// 0. promise의 states
// promise는 생성하고 종료될 때까지 3가지 상태를 갖는다
// 1. pending(대기): 비동기 처리 로직이 아직 완료되지 않은 상태
// 2. fulfiled(이행): 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
// 3. rejected(실패): 비동기 처리가 실패하거나 오류가 발생한 상태

// promise는 reslove와 reject를 인자로 갖는 함수를 만든다.
// 이때 resolve와 reject는 콜백함수의 인자이다.

// 1. "resolve"를 호출하면
// 이는 후속처리 메소드인 then()을 이용해 처리 결과 값을 받을 수 있고
// 이를 "fulfiled(이행) 상태"라고 한다.

// 2. "reject"를 호출하면
// 이는 후속처리 메소드인 catch()을 이용해 처리 결과 값을 받을 수 있고
// 이를 "rejected(실패) 상태"라고 한다.

// then, catch로 받을 때 인수 이름은 자유!

// promise의 기본 구조 만들기
const promise = new Promise((resolve, reject) => {
  resolve(console.log('프로미스 이행')); // resolve 호출
});
promise.then(() => {
  console.log('프로미스 실행'); // then으로 resolve 후속처리
});

// promise를 이용해 데이터 담기
const promise2 = new Promise((resolve, reject) => {
  let data = '데이터 입니다.';
  resolve(data); // resolve 호출
});
promise2.then((resolvedData) => {
  // then으로 reslove 후속처리, 인수 이름은 자유
  // resolve 결과값 data를 resolvedData로 받음
  console.log(resolvedData);
});

// promise와 setTimeout 활용하기
const promise3 = new Promise((resolve, reject) => {
  console.log('시작');
  setTimeout(() => {
    resolve(console.log('2초 뒤에 찍기'));
  }, 2000);
});
// 이렇게도 쓸 수 있다. **************************************
// const promise3 = new Promise((resolve, reject) => {
//   console.log('시작');
//   setTimeout(resolve(console.log('2초 뒤에 찍기')), 2000);
// });
// *******************************************************

promise3.then(() => {
  console.log('프로미스 이행');
});

// promise 에러처리(reject - catch)
const promise4 = new Promise((resolve, reject) => {
  console.log('시작');
  setTimeout(() => {
    reject('에러입니다.');
  }, 2000);
});
promise4
  .then(() => {
    console.log('이건 안 찍힙니다.');
  })
  .catch((err) => console.log(err));
