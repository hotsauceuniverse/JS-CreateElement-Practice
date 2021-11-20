// 문서객체 생성, 제거, 이동

// 2번
const header = document.createElement('h2')
header.textContent = '안녕하세요'
const first = document.querySelector('.first')
const second = document.querySelector('.second')
first.appendChild(header)
const toFirst = function () {
  first.appendChild(header)
  setTimeout(toSecond, 1000)
}
const toSecond = function () {
  second.appendChild(header)
  setTimeout(toFirst, 1000)
}
toFirst()