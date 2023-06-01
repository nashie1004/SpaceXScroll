interface ICard{
    flightNumber: number, missionName: string, 
    launchYear: number, details: string
}

export default function Card({
    flightNumber, missionName, 
    launchYear, details
}: ICard) {
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
