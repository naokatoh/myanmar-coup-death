const shuffleNumberCounter = (target) => {
  const targetNum = Number(target.getAttribute('data-num'))
  
  if (!targetNum) {
    return
  }

  let counterData = null
  const speed = 800 / targetNum
  let initNum = 0

  const countUp = () => {
    if (Number.isInteger(targetNum)) {
      target.innerHTML = initNum
    } else {
      target.innerHTML = `${initNum}.${Math.floor(Math.random() * 9)}`
    }

    initNum++

    if (initNum > targetNum) {
      target.innerHTML = targetNum
      clearInterval(counterData)
    }
  }
  
  counterData = setInterval(countUp, speed)
}

const target = document.querySelector('.section-head');

shuffleNumberCounter(target)

