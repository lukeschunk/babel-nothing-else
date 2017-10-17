const test = 'hi'
import { something } from 'test-file-two'

setInterval(() => {
  console.log('this is test', something)
}, 1000)
