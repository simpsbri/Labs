const startTimeoutButton = document.getElementById('start-timeout')
const timeoutDisplay = document.getElementById('timeout-display')
const startIntervalButton = document.getElementById('start-interval')
const intervalDisplay = document.getElementById('interval-display')

startTimeoutButton.addEventListener('click', startTimeout)
startIntervalButton.addEventListener('click', startInterval)

function startTimeout() {
  timeoutDisplay.textContent = 'Getting ready...'

  const timeoutTimer = setTimeout(() => {
    timeoutDisplay.textContent = 'READY!'
  }, 5000)
}

let count = 5
let intervalTimer

function startInterval() {
  intervalDisplay.textContent = count

  clearInterval(intervalTimer)

  intervalTimer = setInterval(() => {
    if (count > 0) {
      intervalDisplay.textContent = --count
    } else {
      intervalDisplay.textContent = 'GO!'
      clearInterval(intervalTimer)
    }
  }, 1000)
}
