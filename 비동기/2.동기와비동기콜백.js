// *** 인수는 함수를 "호출" 하면서 넘긴다!!!
// 함수의 선언과 호출을 구분하여 호출이 어느시점에 되고 인수로 무엇을 넘기는 지 확인하기
// 인수를(예: 콜백함수) 받는 쪽에서는 받는 인수의(콜백함수) 이름을 임의로 설정할 수 있다.

console.log('1'); // 1. 바로실행
setTimeout(() => console.log('2'), 1000); // 2. 1초뒤에 실행
console.log('3'); // 1. 바로실행

// 동기식 콜백
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));
// 1. 바로실행
// 인수: 익명함수 print / 콜백함수 --> () => console.log('hello')

// 비동기식 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);
// 3. 2초 뒤에 실행
// 인수1: 익명함수 print / 콜백함수 --> () => console.log('async callback')
// 인수2: timeout --> 2000
// 즉 ('async callback')라는 문구를 2초뒤에 콘솔 출력한다.

///////////////////
//////////// 실행결과
// 1
// 3
// hello
// 2  -> 1초뒤에 실행
// async callback -> 2초뒤에 실행
///////////////////
///////////////////
