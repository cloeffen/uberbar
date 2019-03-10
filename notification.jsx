export const command = "cat /tmp/notification"

export const refreshFrequency = false

export const render = ( output ) => {
  return (
    <div className="screen" dangerouslySetInnerHTML={{ __html: output }} />
  );
}

export const updateState = (event, previousState) => {
  return `<div class="notify">${event.output}</div>`
}
