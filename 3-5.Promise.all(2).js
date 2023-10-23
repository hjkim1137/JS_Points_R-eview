// Promise.all 에러처리
// Promise.all은 "모든" 프로미스가 성공적으로 완료될 때까지 기다림.
// 하지만 주어진 프로미스 중 "하나라도" reject되면 Promise.all은 즉시 그 오류로 reject됨.
// 즉, test22의 reject로 인해 Promise.all은 reject됨.
const test11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ test_1: 'test1 입니다' });
  }, 1000);
});

const test22 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error 입니다.');
  }, 2000);
});

Promise.all([test11, test22])
  .then((result) => {
    console.log(result[0].test_1);
    console.log(result[1].test_2);
  })
  .catch((err) => {
    console.log(err);
  });

// 출력 : error 입니다.
