async function hello() {
  try {
    let url = await fetch('http://유효하지 않은 주소');
  } catch (err) {
    console.log('에러입니다:', err); // TypeError: Failed to parse URL from http://유효하지 않은 주소
  }
}
hello();

let url2 = 'http://www.thecocktaildb.com/api/json/v1/1/random.php';
async function test() {
  try {
    const res = await fetch(url2);
    if (!res.ok) {
      throw new Error('네트워크 에러입니다.');
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('에러입니다.', err);
  }
}
test();
