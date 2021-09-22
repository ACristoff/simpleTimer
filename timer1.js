process.stdout.write('\x07');

const alarms = process.argv.slice(2).map( x => x*1000).sort((a, b) => { return a - b })

// console.log(alarms)

const alarmFunc = (alarmParam) => {
  for (const alarm of alarmParam) {
    setTimeout(() => {
      console.log(`hello this is the timer here to wake you`)
    }, alarm)
  }
  return
}

alarmFunc(alarms)