export const command = "sh Uberbar/scripts/screens"

export const refreshFrequency = 1000

export const render = ( output ) => {
  return ( 
    <div className='screen'>
      <div className='kwmmode' dangerouslySetInnerHTML={{ __html: output }} />
    </div>
  )
}

export const updateState = (event, previousState) => {
	if (!event.output) return "<small style='color: red;'>chunkwm is not running</small>"

  let values = event.output.split('@')

  let screenhtml = ""
  let mode = values[0]
  let total = parseInt(values[1])
  let active = parseInt(values[2])

  for (let i = 1; i <= total; i++) {
    if ( i == active ) {
      screenhtml += "<span class='not-active'> &times; </span>"
    } else {
      screenhtml += "<span class='active'> &middot; </span>"
    }
  }

  return screenhtml
}

export const className = `
  .kwmmode { margin-top: -2px; }
	small { font-size: 15px; }
`
