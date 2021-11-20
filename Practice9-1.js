// 문서객체 생성, 제거, 이동

// 1번
const header = document.createElement('h1') //createElement로 요소를 만들고
header.textContent='createElement로 만든 태그'
header.style.color = 'red'
const body = document.querySelector('body')
body.appendChild(header) //appendChild로 요소를 붙인다. => 생성
setTimeout(function () {
  //body.removeChild(header) // => 제거코드
  header.parentNode.removeChild(header) // 위 제거 코드와 동일
}, 2000)
