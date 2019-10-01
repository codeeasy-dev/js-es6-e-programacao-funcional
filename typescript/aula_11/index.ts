// ===============================
// ===============================
// Promise
// ===============================
// ===============================

const val: boolean = false

const stop_1: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1)

    if(!val) {
      reject('Erro')
      return
    }

    setTimeout(() => {
      console.log(2)
      resolve('Fim')
    }, 2000)

  }, 2000)
})

function stop_2(time: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1)

      if(!val) {
        reject('Erro')
        return
      }

      setTimeout(() => {
        console.log(2)
        resolve('Fim')
      }, time)

    }, 2000)
  })
}

stop_1.then(message => console.log(message))
  .catch(error => console.log(error))

stop_2(3000).then(message => console.log(message))
  .catch(error => console.log(error))

// ===============================
// ===============================
// Promise ALL
// ===============================
// ===============================

Promise.all([
  stop_1,
  stop_2(3000),
]).then(() => console.log('All promises completed'))
  .catch(error => console.log(error))

// ===============================
// ===============================
// Promise RACE
// ===============================
// ===============================

Promise.race([
  stop_1,
  stop_2(3000),
]).then(message => console.log('One promise completed', message))
  .catch(error => console.log(error))
