export const command = "sh Uberbar/scripts/toggl.sh"

export const refreshFrequency = 1000

export const render = ( output ) => {
  return (
    <div className='screen'>
      <div className='toggl' dangerouslySetInnerHTML={{ __html: output }} />
    </div>
  )
}

export const updateState = (event) => {
  let date = new Date
  let day = date.getDay()
  let hour = date.getHours()
  let seconds = date.getSeconds()

  let workTime = (hour >= 9 && hour <= 17)
  let workDay = (day >= 1 && day <= 5)
  let even = (seconds % 2 == 0)
  let noTimer = (event.output.replace( /^\s+|\s+$/g, "" ) == "No timer is running.")

  if (noTimer && workTime && workDay && even) {
    return "<span class='not-active'>" + event.output + "</span>"
  } else {
    return "<span class='active'>" + event.output + "</span>"
  }
}
