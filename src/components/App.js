import Cards from "./cards";
import Group from "./group";
import Navbar from "./navbar";
import data from "./data";
import boxes_data from "./boxes_data";
import { useEffect, useState } from "react";
import Box from "./box";
import Jokes from "./jokes/jokes";
import jokes_data from "./jokes/jokes_data";
import Messages from "./messages";
import Forms from "./forms";

export default function App(){
  const [filter,setFilter]=useState('')
  const data_card=filter.length===0?data.map((dataa)=>{
    return(
      <Cards  key={dataa.id} title={dataa.title} price={dataa.price} description={dataa.description} category={dataa.category} img={dataa.image} rating={dataa.rating}/>
      )
    })
    :
    data.map((dataa)=>{
      return (
      dataa.description.toLowerCase().includes(filter) && 
      <Cards  key={dataa.id} title={dataa.title} price={dataa.price} description={dataa.description} category={dataa.category} img={dataa.image} rating={dataa.rating}/>
      
      ) 
        
    })
    


    
    function handleSearch(e){
      e.preventDefault()
      let searchInputValue=e.target.value.toLowerCase()
      setFilter(searchInputValue)
    }

  const [squares,setSquares] = useState(boxes_data)

  function toggle(id){
    setSquares((squares)=>{
      return squares.map((square)=>{
      return  square.id === id ? {...square, on: !square.on} :square
      })
    })    
  }

  const squaresElement = squares.map((square)=>(
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle}/>
  ))
  
  const jokedata=jokes_data.map((data)=>{
    return <Jokes key={data.id} setup={data.setup} punchline={data.punchline} />
  })
  return(
    <>
      <Navbar />
      <Group />
      <hr />
      <div className="cards_display">
        <div className="search">
            <input type="text" onChange={handleSearch}/>
        </div>
        {data_card}</div>
      <hr />
      <div className="boxes">{squaresElement}</div>
      {jokedata}
      <Messages />
      <hr />
      <Forms />
    </>
  )
}