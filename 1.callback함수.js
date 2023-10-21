// * 참고자료: https://joy-codeing-lee.tistory.com/75?category=961871

// * 콜백함수:
// - 어떤 함수의 인수로 사용되는 함수
// - 어떤 이벤트에 의해 호출 되는 함수
// - 선언만 해두고 필요한 시점에 불러 사용하는 함수

// 인수는 함수를 "호출" 하면서 넘긴다!!!

// 일반 함수
function timeout() {
  // 함수선언
  setTimeout(() => {
    console.log('hello');
  }, 3000);
}
timeout(); // 함수호출
console.log('done!'); // 함수호출

//***실행결과***//
// done!
// 3초 후
// hello
//*************

// 콜백 함수 사용
function timeout(callback) {
  // 함수선언
  // 2. 인수를 받아 줄 매개변수
  setTimeout(() => {
    console.log('hello');
    callback(); // 3. 콜백함수호출
  }, 3000);
}
// 콜백함수
timeout(() => {
  // 1. timeout 함수호출(인자: 익명함수)
  console.log('done!'); // 함수호출
});

//***실행결과***//
// 3초 후
// hello
// done!
//*************
