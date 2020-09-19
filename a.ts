import {sleep, promiseSleep} from './sleep'

(async()=>{
  await promiseSleep(1000, '1')
  await Promise.all([sleep(1000, '2'), promiseSleep(1000, '3')])
  console.log('end')
})()

// 1 promise sleep
// 2 sleep
// 3 promise sleep
// end