// promise resolve, reject 인자 둘 다 활용하는 예제
const test = new Promise((resolve, reject) => {
  let isTrue = true;
  if (isTrue) {
    resolve(console.log('실행'));
  } else {
    reject(console.log('에러'));
  }
});
test.then(() => {
  console.log('프로미스 이행완료');
});

const test2 = new Promise((resolve, reject) => {
  let isTrue = true;
  if (!isTrue) {
    resolve(console.log('실행2'));
  } else {
    reject(console.log('에러2'));
  }
});
test2
  .then(() => {
    console.log('프로미스 이행완료2');
  })
  .catch(() => {
    console.log('리젝트');
  });

// 출력 결과
// 실행
// 에러2
// 프로미스 이행완료
// 리젝트
