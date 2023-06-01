'use client'
import { useEffect, useState } from "react"
import Card from "./Card"
import ReactLoading from 'react-loading';
const URL = 'https://api.spacexdata.com/v4/launches'

export default function Page() {
  const [data, setData] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0)

  function detectScroll(){
    if (window.innerHeight + 
      document.documentElement.scrollTop + 40 >=
      document.documentElement.scrollHeight
    ){
      setPageNumber(prev => prev + 1)
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', detectScroll)

    fetch(URL).then(res => res.json()).then(data => {
      setLoading(true)
      setData(data) 
      setPageNumber(1)
      setCurrentCards(data.slice(0, 10 * 1))
    })
  }, [])

  useEffect(() => {
    setCurrentCards((prev): any => {
      return data.slice(0, 10 * pageNumber)
    })
  }, [pageNumber])

  function changeInput(e: any){
    if (e.target.value !== ''){
      const pattern = new RegExp(e.target.value, "gi");
      setCurrentCards(prev => {
        const newArray = data.filter(item => {
          return (
            pattern.test(item['name']) ||
            pattern.test(item['details']) ||
            pattern.test(item['missionName']) && item 
          )
        })
        return newArray
      })

    } else {
      setCurrentCards(data.slice(0, 10 * 1))
    }
  }

  return (
    <>
      <header>
        <input type="text" 
        onChange={changeInput}
        placeholder='Enter keywords' />
      </header>
      <main>
        {
          loading ? (
            currentCards.length !== 0 ? (
              currentCards.map((item: any, i) => {
                return <Card 
                  key={i} 
                  image={item.links.patch.small ? item.links.patch.small : ""}
                  flightNumber={item.flight_number}
                  missionName={item.name}
                  launchYear={item.date_local}
                  details={item.details}
                />
              })
            ) : (
              <>
                No Match 
              </>
            )
          ) : (
            <>
              <ReactLoading className="load" type={'balls'} color={"rgb(163, 153, 153)"} height={'20%'} width={'20%'} />
            </>
          )
        }
      </main>
      {
        (
          currentCards.length === data.length &&
          currentCards.length !== 0 && data.length !== 0
        ) && (
          <div className="end">No more data :/</div>  
        )
      }
    </>    
  )
}
