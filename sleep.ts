// awaitは処理が終わるまで次に進まないという理解は正しいか

export const promiseSleep = (n:number, s:string)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(s, 'promise sleep')
      resolve()
    }, n)
  })
}

export const sleep = (n:number, s:string)=>{
  setTimeout(()=>{
    console.log(s, 'sleep')
  }, n)
}
