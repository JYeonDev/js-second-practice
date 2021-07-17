export default function (data) {  // 함수명 생략가능
  return Object.prototype.toString.call(data).slice(8, -1)
};
// export default 는 이름을 지정해주지 않아도 상관없다.
// import에서도 이름을 맘대로 지정해도 상관없다