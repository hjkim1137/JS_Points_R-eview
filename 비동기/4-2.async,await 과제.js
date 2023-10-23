// then 대신 async/await 사용하여 바꾸기
// 예제1- async와 await를 사용하여 코드 변경하기
function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}
loadJson('no-such-user.json').catch(alert); // Error: 404

// 예제1 정답:
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}
loadJson('no-such-user.json').catch(alert); // Error: 404

// 1. 함수 loadJson은 async 함수가 된다.
// 2. 함수 안의 .then을 전부 await로 바꿉니다.
// 3. loadJson에서 던지는 에러는 .catch에서 처리됩니다.

// 예제2- async와 await를 사용해서 '다시 던지기' 예시 재작성하기
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}

// 유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
function demoGithubUser() {
  let name = prompt('GitHub username을 입력하세요.', 'iliakan');

  return loadJson(`https://api.github.com/users/${name}`)
    .then((user) => {
      alert(`이름: ${user.name}.`);
      return user;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('일치하는 사용자가 없습니다. 다시 입력해 주세요.');
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}
demoGithubUser();

// 예제2 정답:
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
async function loadJson(url) {
  let res = await fetch(url);
  if (response.status == 200) {
    let json = res.json();
    return json;
  }
  throw new HttpError(response);
}

// 유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
async function demoGithubUser() {
  let user; // 밑의 user.name이 전역으로 접근하도록 최상단에 입력

  while (true) {
    let name = prompt('GitHub username을 입력하세요.', 'iliakan');
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // 에러 없으므로 반복문 빠져나옴
    } catch (err) {
      // 에러 처리
      if (err instanceof HttpError && err.response.status == 404) {
        alert('일치하는 사용자가 없습니다. 다시 입력해 주세요.'); // 404 에러
      } else {
        throw err; // 기타 에러
      }
    }
  }
  alert(`이름: ${user.name}.`);
  return user;
}
demoGithubUser();

// 예제 3- async가 아닌 함수에서 async 함수 호출하기
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  // ...코드...
  // async wait()를 호출하고 그 결과인 10을 얻을 때까지 기다리려면 어떻게 해야 할까요?
  // f는 일반 함수이기 때문에 여기선 'await'를 사용할 수 없다는 점에 주의하세요!
}

// 예제3 정답:
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  wait().then((result) => alert(result));
}
f();
