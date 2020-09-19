import {sleep, promiseSleep} from './sleep'

(async()=>{
  await promiseSleep(1000, '1')
  await Promise.all([sleep(2000, '3'), promiseSleep(1000, '2')])
  console.log('end')
})()

// 1 promise sleep
// 2 promise sleep
// end
// 3 sleep