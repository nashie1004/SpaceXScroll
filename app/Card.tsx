export default function Card({
    flightNumber, missionName, 
    launchYear, details
}) {
  return (
    <div className="card">
        <div className="img"></div>
        <div className="info">
            <h3>{flightNumber}: {missionName} ({launchYear})</h3>
            <p>{!details ? "No Details" : details.slice(0, 70) + "..."}</p>
        </div>
    </div>
  )
}
