export const command = `osascript -e 'if application "Spotify" is running then tell application "Spotify" to if player state is playing then artist of current track & " - " & name of current track'`

export const refreshFrequency = 3000

export const render = ( output ) => {
  return (
    <div className="screen">
      <div className="spotify" dangerouslySetInnerHTML={{ __html: output }} />
    </div>
  );
}

export const updateState = (event) => {
  return (event.output.length == 0) ?  "Nothing is playing" :  event.output
}
