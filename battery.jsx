export const command = "bash Uberbar/scripts/battery"

export const refreshFrequency = 10000

export const render = ({ output }) => {
  return (
    <div className="screen">
      <div className="battery">{ output }</div>
    </div>
  )
}
