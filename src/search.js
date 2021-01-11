import React, { useState } from 'react'
import Axios from 'axios'
import Card from './components/card'

function Search() {
    const [text, setText] = useState('')
    const [movies, setMovies] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getData = async (e) => {
        setText(e.target.value)
        let res = await Axios.get(`https://www.omdbapi.com/?s=${text}&apikey=${process.env.REACT_APP_API_KEY}`)
        let res2 = res.data
        if (res2.Response === "True") {
            setMovies(res2.Search)
            setLoading(false)
        } else {
            setLoading(true)
        }
    }
    return (
        <>
            <div className="shadow" style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./moviePost2.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                height: 400
            }}>
                <div className="container p-5">
                    <h1><i class="fas fa-search"></i> Search Movies,TV series...</h1>
                    <input type="text" value={text} className="form-control p-3 mb-3 mt-3" onChange={(e) => getData(e)} placeholder="Search Movies,TV series..." aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="container" style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around"
            }}>
                {movies.map((item) => (<Card item={item} />))}
                {(isLoading) ?
                    <>
                        <div className="card my-2 shadow" style={{ width: "18rem", height: "auto", backgroundColor: "#f7f7f7" }}>
                            <div style={{ height: "14.5rem", width: "100%" }}></div>
                            <div style={{ display: 'flex', justifyContent: "space-between", height: 20 }} className="card-footer text-muted"></div>
                        </div>
                        <div className="card my-2 shadow" style={{ width: "18rem", height: "auto", backgroundColor: "#f7f7f7" }}>
                            <div style={{ height: "14.5rem", width: "100%" }}></div>
                            <div style={{ display: 'flex', justifyContent: "space-between", height: 20 }} className="card-footer text-muted"></div>
                        </div>
                        <div className="card my-2 shadow" style={{ width: "18rem", height: "auto", backgroundColor: "#f7f7f7" }}>
                            <div style={{ height: "14.5rem", width: "100%" }}></div>
                            <div style={{ display: 'flex', justifyContent: "space-between", height: 20 }} className="card-footer text-muted"></div>
                        </div>

                    </>
                    : null}
            </div>
        </>
    );
}

export default Search;
