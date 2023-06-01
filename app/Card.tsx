import {LazyLoadImage} from "react-lazy-load-image-component";
import rocket from '@/public/rocket.png'
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ICard{
  image: string, flightNumber: number, missionName: string, 
  launchYear: String, details: string
}

export default function Card({
  image, flightNumber, missionName, launchYear, details
}: ICard) {
  return (
    <div className="card">
      <LazyLoadImage 
      placeholder={<p>test</p>}
      placeholderSrc={rocket.src}
      visibleByDefault={image === image}
      effect='opacity'
      alt={missionName} src={image} className="img" />
      <div className="info">
          <h3>{flightNumber}: {missionName} ({launchYear})</h3>
          <p>{!details ? "No Details" : details.slice(0, 70) + "..."}</p>
      </div>
    </div>
  )
}
