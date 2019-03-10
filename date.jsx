export const command =  "date +\"%a %-d %B %H:%M\""

export const refreshFrequency = 5000

export const render = ({ output }) => {
  return (
    <div className="screen">
      <div className="date">{ output }</div>
    </div>
  );
}

