import { useEffect, useState } from 'react'
import axios from "axios"

function Axios() {
    let [products,setProducts] = useState([])
    useEffect(()=>{
        // axios.get("https://dummyjson.com/products")
        // .then(res => console.log(res.data.products))
        // .catch(err => console.log(err))


        axios.get("https://dummyjson.com/products")
        .then(res => setProducts(res.data.products))
        .catch(err => console.log(err))
    },[])
    return (
        <>
            <h1>Axios</h1>
            {products.map(element => {
                return (
                    <>
                        {/* <div>
                            <li>{element.id}</li>
                            <li>{element.title}</li>
                            <li>{element.description}</li>
                            <li>{element.price}</li>
                            <li><img src={element.images[0]}/></li>
                        </div> */}




                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-3">
                                    <div className="card m-4" style={{Width:"18rem"}}>
                                    <img  src={element.images[3]} className="card-img-top img-fluid" style={{width : "450px"}} alt="..." />
                                        <div className="card-body">
                                            <li><b>{element.id}</b></li>
                                            <li><b>{element.title}</b></li>
                                            <li><b>{element.description}</b></li>
                                            <li><b>{element.price}</b></li>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-3">
                                    <div className="card m-4" style={{Width:"18rem"}}>
                                    <img  src={element.images[1]} className="card-img-top img-fluid" style={{width : "450px"}} alt="..." />
                                        <div className="card-body">
                                            <li><b>{element.id}</b></li>
                                            <li><b>{element.title}</b></li>
                                            <li><b>{element.description}</b></li>
                                            <li><b>{element.price}</b></li>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-3">
                                    <div className="card m-4" style={{Width:"18rem"}}>
                                    <img  src={element.images[2]} className="card-img-top img-fluid" style={{width : "450px"}} alt="..." />
                                        <div className="card-body">
                                            <li><b>{element.id}</b></li>
                                            <li><b>{element.title}</b></li>
                                            <li><b>{element.description}</b></li>
                                            <li><b>{element.price}</b></li>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-3">
                                    <div className="card m-4" style={{Width:"18rem"}}>
                                    <img  src={element.images[3]} className="card-img-top img-fluid" style={{width : "450px"}} alt="..." />
                                        <div className="card-body">
                                            <li><b>{element.id}</b></li>
                                            <li><b>{element.title}</b></li>
                                            <li><b>{element.description}</b></li>
                                            <li><b>{element.price}</b></li>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Axios
