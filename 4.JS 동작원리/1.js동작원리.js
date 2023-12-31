// 참고: https://www.youtube.com/watch?v=v67LloZ1ieI
// https://velog.io/@sharphand1/%EB%8B%A4%EC%8B%9C-%ED%95%9C%EB%B2%88-%EC%A0%95%EB%A6%AC%ED%95%B4%EB%B3%B4%EB%8A%94-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%99%80-Promise

// 이벤트 루프: 자바스크립트 엔진과 브라우저를 연결해 자바스크립트 동시성을 지원

// 웹 브라우저의 역할: 자바스크립트 실행 , API를 제공해 비동기 함수를 사용할 수 있게 함
// 웹 브라우저: 크롬, 익스플로러, 엣지 등

// 자바스크립트 엔진의 역할: 함수의 순서를 기억하는 콜스택과 동적인 변수가 저장되는 힙 메모리로 구성
// 순서대로 코드를 평가하고 실행하는 기능만 한다!!

// 1. 스택 - 코드를 실행해 주는 공간
// console.log(1+1)
// console.log(2+2)
// 스택을 실행하다가 변수를 만나면(console.log(i)) 힙에서 참조
// 특징: 스택은 하나밖에 없음. 한번에 하나 밖에 실행못함(= 싱글 스레드)

// 2. 힙 - 변수들이 저장되어 있는 곳
// i = {age:20}
// j = {name: "kim"}

// 3. WebAPI(대기실)
// setTimeout 같은 함수는 그럼 브러우저 내부에서 어떻게 실행될까?
// 바로 실행되는 코드가 아니기 때문에, 스택이 아닌 대기실에 보내짐
// 대기실에 보내는 코드들:
// ajax 요청, 이벤트리스너, setTimeout
// 대기실에서 4번의 큐로 보내진다.

// 4. 콜백 큐(=이벤트 큐)
// 대기가 끝난 코드들은 큐에서 대기하다가 스택이 "비면" 하나씩 보내진다.
// 콜백함수를 보관하는 곳

// 그렇기 때문에,
// for 반복문(천만번 돌리기, 10초 소요) - 자바스크립트 시키면 안됨
// 10초동안 스택에서 연산하면서 스택을 비우지 않기 때문에 다른 비동기코드들 실행 못함

// 교훈
// 1. stack을 바쁘게 만들면 안된다 (유저들은 사이트 느리다고 생각하게 됨)
// 2. queue를 바쁘게 만들면 안된다(이 또한 사이트 느려짐)

// 자바스크립트는 동기적으로 처리된다(한번에 한줄 순서대로)
// 가끔 비동기적인 처리도 가능(setTimeout, 이벤트리스터, ajax 등)
// 시간 오래 걸리는 것은 제껴두고 빨리 되는 것부터 먼저 하는 것
