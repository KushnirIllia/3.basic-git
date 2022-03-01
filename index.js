const timerContainer = document.querySelector('#timer')
const clock = (container) => {
  function updateTime() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    return {
      hours,
      minutes,
      seconds
    }
  }
  const {
    hours,
    minutes,
    seconds
  } = updateTime()
  container.textContent = `${hours}:${minutes}:${seconds}`
  setInterval(() => {
    const {
      hours,
      minutes,
      seconds
    } = updateTime()
    
    container.textContent = `${hours}:${minutes}:${seconds}`
  }, 1000)
}
clock(timerContainer)