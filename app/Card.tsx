interface ICard{
  image: string,
    flightNumber: number, missionName: string, 
    launchYear: number, details: string
}

export default function Card({
  image,
    flightNumber, missionName, 
    launchYear, details
}: ICard) {
  return (
    <div className="card">
        <img src={image} className="img" />
        <div className="info">
            <h3>{flightNumber}: {missionName} ({launchYear})</h3>
            <p>{!details ? "No Details" : details.slice(0, 70) + "..."}</p>
        </div>
    </div>
  )
}
