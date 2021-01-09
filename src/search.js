import React, { useState } from 'react'
import Axios from 'axios'
import Card from './components/card'

function Search() {
    const [text, setText] = useState('')
    const [movies, setMovies] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getData = async (e) => {
        setText(e.target.value)
        console.log(text)
        let res = await Axios.get(`http://www.omdbapi.com/?s=${text}&apikey=${process.env.REACT_APP_API_KEY}`)
        let res2 = res.data
        if (res2.Response === "True") {
            console.log("array", res2.Search)
            setMovies(res2.Search)
            setLoading(false)
        } else {
            setLoading(true)
        }
        console.log(res2)
    }
    return (
        <div>
            <input type="text" value={text} className="form-control p-3 mb-3" onChange={(e) => getData(e)} placeholder="Search" aria-describedby="basic-addon1" />
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around"
            }}>
                {movies.map((item) => (<Card item={item} />))}
                {(isLoading) ?
                    <div style={{ width: "100%", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h1 style={{ textDecoration: "underline" }}>Oops|Nothing to Show</h1>
                        <hr />
                    </div>
                    : null}
            </div>
        </div>
    );
}

export default Search;
