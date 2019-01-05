export const durationFormater = (durationAsInt) => {
  if (typeof durationAsInt === 'number' && (durationAsInt % 1) === 0) {
    let hours = Math.floor(durationAsInt / 3600)
    let minutes = Math.floor((durationAsInt - (hours * 3600)) / 60)
    let seconds = durationAsInt - (hours * 3600) - (minutes * 60)

    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }

    return hours + ':' + minutes + ':' + seconds
  } else {
    return ''
  }
}

export default durationFormater
