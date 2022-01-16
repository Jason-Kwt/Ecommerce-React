import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'



export default function ProductsList() {

 /*    let productsList = [
        {"id":1, "name":"Apple", "price":5, "image":"img_apple.jpg", "description":"An apple from Japan"},
        {"id":2, "name":"orange", "price":5, "image":"img_orange.jpg", "description":"An orange from Japan"},
        {"id":3, "name":"mango", "price":5, "image":"img_mango.jpg", "description":"A mango from Japan"},
        {"id":4, "name":"watermelon", "price":5, "image":"img_watermelon.jpg", "description":"A watermelon from Japan"},
        {"id":5, "name":"blueberry", "price":5, "image":"img_blueberry.jpg", "description":"A blueberry from Japan"},
        {"id":6, "name":"strawberry", "price":5, "image":"img_strawberry.jpg", "description":"A strawberry from Japan"}
    ] */

    const [productsList, setproductsList] = useState([])




    //useEffect
    useEffect(()=>{
        //1. Without Dependency Array: every render
        //2. [] : run when the first render
        //3. Dependency Array have [XXX] : run when the first render and when the XXX is changed
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
            .then(Response=>Response.json())
            .then(data=>setproductsList(data))
    },[]) // <== Dependency Array


    const [showproduct, setshowproduct] = useState(false)

    return (
        <div>

            <Title mainTitle="請選擇要購買的產品"/>

{/*             {showproduct && <button onClick={()=>{setshowproduct(false)}}>hide product</button>}
            {!showproduct && <button onClick={()=>{setshowproduct(true)}}>show product</button>} */}
            <div>
                {
                    /* showproduct &&  */productsList.map((product)=>{
                        return(
                            <div key={product.id}>
                                {product.name}<br/>
                                {product.id}<br/>
                                {product.price}<br/>
                                <Link to={"/product/" + product.id}>
                                <img src={process.env.PUBLIC_URL + "/images/" + product.image} className="imgBorder" width={200}/> <br/>
                                </Link>
                                <br/>
                                {product.description}<br/>

                            </div>   
                        )

                    })
                }
            </div>
        </div>
    )
}
