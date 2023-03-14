import Cards from "./cards";
import Group from "./group";
import Navbar from "./navbar";
import data from "./data";
import boxes_data from "./boxes_data";
import { useState } from "react";
import Box from "./box";
import Jokes from "./jokes/jokes";
import jokes_data from "./jokes/jokes_data";
import Messages from "./messages";
import Forms from "./forms";

export default function App(){
  const data_card=data.map((dataa)=>{
    return(
      <Cards  key={dataa.id} title={dataa.title} price={dataa.price} description={dataa.description} category={dataa.category} img={dataa.image} rating={dataa.rating}/>
    )
  })

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
      <div className="cards_display">{data_card}</div>
      <hr />
      <div className="boxes">{squaresElement}</div>
      {jokedata}
      <Messages />
      <hr />
      <Forms />
    </>
  )
}