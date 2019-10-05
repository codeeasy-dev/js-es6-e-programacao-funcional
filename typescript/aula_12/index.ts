// My setTimeout
const ceStop = (time): Promise<void> => new Promise(
  (resolve, reject) => setTimeout(resolve, time)
)

ceStop(2000).then(() => {
  console.log('0-1')
  ceStop(3000).then(() => {
    console.log('0-2')
    ceStop(4000).then(() => {
      console.log('0-3')
    })
  })
})

// Async Await

async function exec01(): Promise<void> {
  await ceStop(2000)
  console.log('1-1')
  await ceStop(3000)
  console.log('1-2')
  await ceStop(4000)
  console.log('1-3')
}

const exec02 = async (): Promise<void> => {
  try {
    await ceStop(2000)
    console.log('2-1')
    await ceStop(3000)
    console.log('2-2')
    await ceStop(4000)
    console.log('2-3')
  } catch(error) {
    console.log(error)
  }
}

exec01()
exec02()
