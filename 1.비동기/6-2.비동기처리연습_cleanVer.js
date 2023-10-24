const url1 = 'http://localhost:8000/comments';
const url2 = 'http://localhost:8000/posts';

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     resolve('데이터 입니다.');
//   });
// }
// fetchData().then((data) => console.log('resolve'));
// 오답노트: new 꼭 붙이기, 함수 실행할때는 () 꼭 붙이기!

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
`오답노트:
fetch는 이미 Promise를 반환합니다. fetch 함수 자체가 이미 Promise를 반환합니다.
따라서 fetch를 사용할 때 우리는 new Promise를 사용해서 직접 Promise를 만들 필요가 없습니다.
fetch의 내부에서 이미 모든 작업이 처리되고, 성공적으로 데이터를 가져오면 resolve가 호출되며, 오류가 발생하면 reject가 호출됩니다.
간단히 말하면, fetch를 사용하면 이미 Promise 기반의 비동기 작업이 이루어지기 때문에 우리가 직접 resolve나 reject를 관리할 필요가 없습니다.
test1 함수는 fetch(url1)의 결과, 즉 Promise(데이터 잘 가져왔는 지 성공,실패여부)를 직접 반환합니다.`;

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

// function test2() {
//   let res = fetch(url1);
//   if (!res.ok) {
//     throw new Error('network error');
//   }
//   return res.json();
// }
// test2().then((data) => console.log('결과값', data));

// 오답노트:
`1. fetch "자체는" promise 객체를 반환한다.
(중요!! 즉, 먼저 then 또는 catch를 이용해 반환된 promise 후속처리 해줘야 한다.)
(위의 코드에서는 res 객체에 처리하려고 하고 있어 잘못된 시도임)
2. fetch 요청이 비동기 작업이다! 따라서 fetch 요청이 완료되길 기다리지 않고 즉시 다음 코드를 실행하면 안된다.
(이렇게 되면, res.ok를 체크하는 시점에 fetch 요청이 아직 완료되지 않아 정확한 결과 얻을 수 없음)`;

// function test3() {
//   return fetch(url1).then((res) => {
//     if (!res.ok) {
//       throw new Error('네트워크 에러');
//     }
//     return res.json();
//   });
// }
// test3.then((mydata) => console.log(mydata));

// 오답
// function test4() {
//   let res = fetch(url1);
//   res.then((res) => {
//     if (!res.ok) {
//       throw new Error('네트워크 에러');
//     }
//     return res.json();
//   });
// }
// test4().then((data) => console.log(data));

// 오답: let res = fetch(url1); 다음 줄에 있는 res에는 fetch 요청이 아직 완료되지 않은 상태의 Promise 객체가 할당됩니다.
// (중요) res.then(...)는 "fetch의 결과인 Response 객체" "에 대한" "비동기 작업을 나타내는" "Promise를 반환"하며(=비동기 작업 성공 완료! or 실패!)
// 이 Promise는 해당 작업이 "성공적으로 완료되었을 때" 결과 데이터를 제공합니다.
// 따라서 return res.then(...)는 완료된 비동기 작업을 나타내는 Promise 객체를 test4() 함수의 호출자에 반환합니다.
// (중요) 이것은 비동기 작업이 완료되어 결과가 사용 가능할 때까지 맨 아래 test4() 함수의 실행을 지연시키는 역할을 합니다.
// 이후에 .then()을 사용하여 결과를 처리할 수 있습니다.

// (정답) return을 써주는 이유:
// function test4() {
//   let res = fetch(url1);
//   return res.then((response) => {
//     if (!response.ok) {
//       throw new Error('네트워크 에러');
//     }
//     return response.json();
//   });
// }
// test4().then((data) => console.log(data));

// 개선코드2(더 관행적):
// async function test4() {
//   const res = await fetch(url1);
//   if (!res.ok) {
//     throw new Error('네트워크 에러');
//   }
//   return await res.json();
// }
// test4()
//   .then((result) => console.log('결과값', result))
//   .catch((error) => console.error('에러 발생:', error));

//개선코드3(try-catch):
// async function test4() {
//   try {
//     const res = await fetch(url1);
//     if (!res.ok) {
//       throw new Error('네트워크 에러');
//     }
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error('에러발생', error);
//     throw error; // 에러를 다시 던져서 외부에서도 처리할 수 있게 합니다.
//   }
// }
// test4();
