// 참고: https://velog.io/@bining/javascript-JSON-%EC%A0%95%EC%9D%98%EC%99%80-%EB%A9%94%EC%84%9C%EB%93%9C

`JSON이란?
서버에서 클라이언트로 데이터를 보낼 때 사용하는 양식이다.
클라이언트가 사용하는 언어에 상관없이 통일된 데이터를 주고 받을 수 있도록 만들어진 텍스트 기반의 데이터 교환 표준이다.
자바스크립트 객체에 프로퍼티 값들을 넣어 JSON형태로 Ajax에 전달한다.
기본 형태는 JSON Object 형태로 객체와 비슷한 형태지만 key와 value의 string 타입은 ""를 붙여 나타낸다.`;

// JSON 메서드
// 1. JSON.stringify() - javascript 객체를 JSON 문자열로 변환한다.

JSON.stringify(value, replacer[optional], space[optional]);
let obj = {
  string: 'coffee',
  number: 5,
  boolean: true,
  arr: [],
};
let toJSON = JSON.stringify(obj);

// 2. JSON.parse() - JSON 문자열을 javascript 객체로 변환한다.
`let json = {
  "drink": "coffee",
  "appetizer": "banana",
  "confirm": 56
}`;
JSON.parse(json);

// 3. fetch json() 메서드
// res.json()
// fetch API의 응답(response) 객체는json()를 제공하고 있어 JSON.parse() 대신 사용할 수 있다

// 4. JSON.parse()와 response.json()의 차이
`JSON.parse()에는 응답(response) 바디만을 넣어야한다. 바디와 헤더가 들어가면 데이터를 읽어오지 못한다.
response.json()에는 응답 헤더가 들어가도 바디만 읽어서 불러온다.`;
