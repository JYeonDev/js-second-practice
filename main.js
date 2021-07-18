import _ from 'lodash'
import getType from './getType'
// import { random, user as heropy } from './getRandom'
// 객체구조 분해에서 데이터에 이름을 :(콜론)을 통해 바꿀수있었는데
// ex) user: heropy import에서는 :(콜론)대신 as 를 통해 바꿀수 있다.
import * as R from './getRandom'
// import 안에 내용을 한번에 가져올때 사용 *(와일드카드)
import myData from './myData.json'
import axios from 'axios'

/* console.log(myData);

const usersA = [
  { userId: '1', name: 'HEROPY'},
  { userId: '2', name: 'NEO'}
]

const usersB = [
  { userId: '1', name: 'HEROPY'},
  { userId: '3', name: 'AMY'}
]
const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD) */

function fetchMovies() {
  axios
  .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
  .then(res => {
    console.log(res)
    const h1El = document.querySelector('h1')
    const imgEl = document.querySelector('img')
    h1El.textContent = res.data.Search[0].Title
    imgEl.src = res.data.Search[0].Poster
  })
}
fetchMovies()