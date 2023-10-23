// promise chaining
// 후속 메서드 then()을 호출하고 나면 새로운 프로미스 객체가 반환됨
// then() 메서드를 통해서 값을 바로 전달하여 연결 가능하며, return 통해 promise를 전달하여 사용 가능

const testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then((data1) => {
    console.log(data1); //1
    return data1 + 10; // 11
  })
  .then((data2) => {
    console.log(data2); //11
    return data2 + 10; //21
  })
  .then((data3) => {
    console.log(data3); //21
  });

// 예제: 체이닝 연습
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
    console.log('test1=' + result1.test_1);
    return test2; // 프로미스 반환
  })
  .then((result2) => {
    console.log('test2=' + result2.test_2);
  });
