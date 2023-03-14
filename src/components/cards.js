import { useState } from 'react'
import data from './data'

export default function Cards(props){
    const [fav, setFav]= useState(true);
    
    function handleFavClick(){
        setFav(!fav)
    }
    function cart_btn(){
        return(
            <>
                <button onClick={handleFavClick} className="submit">Add to cart</button>
            </>
        )
    }

    function star_img(){
        return(
            <>
                <img onClick={handleFavClick} className='star_img' src={require(`../images/filled_star.png`)} alt="" onClick={handleFavClick} />
            </>
        )
    }

    let fav_img= fav? cart_btn() : star_img();
    return(
        <>
            <div className="card">
                <img className='card_image' src={props.img} alt="" />
                <h3 className="title">{props.title}</h3>
                {/* <span className="price">Price: ${props.price}</span> */}
                {/* <span className='rating'>Rating:{props.rating.rate}({props.rating.count})</span> */}

                <span >
                    <h4 className="price" style={{display:'inline'}}>Price: ${props.price}</h4>
                    <h4 className='rating' style={{display:'inline'}}>Rating:{props.rating.rate}({props.rating.count})</h4>
                </span>
                <div className="buy_cart">
                    <button className="submit" >Buy</button>
                    {/* <img className='star_img' src={require(`../images/${fav_img}.png`)} alt="" onClick={handleFavClick} /> */}
                    {fav_img}
                </div>
            </div>
        </>
    )
}