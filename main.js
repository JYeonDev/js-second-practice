import _ from 'lodash'
import getType from './getType'
// import { random, user as heropy } from './getRandom'
// 객체구조 분해에서 데이터에 이름을 :(콜론)을 통해 바꿀수있었는데
// ex) user: heropy import에서는 :(콜론)대신 as 를 통해 바꿀수 있다.
import * as R from './getRandom'
// import 안에 내용을 한번에 가져올때 사용 *(와일드카드)

console.log(getType(5))
// console.log(random())
//console.log(heropy);
console.log(R)

