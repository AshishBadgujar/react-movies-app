import React from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

export default function Card({ item }) {
    const history = useHistory();

    const handleClick = async (movieId) => {
        let res = await Axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=${process.env.REACT_APP_API_KEY}`)
        let res2 = res.data
        history.push({
            pathname: `/${movieId}`,
            state: {
                data: res2
            },
        });
    }
    return (
        <div className="card my-2 shadow" style={{ width: "18rem", height: "auto" }} onClick={() => handleClick(item.imdbID)}>
            <img src={item.Poster} style={{ height: "14.5rem" }} className="card-img-top" alt="/moviePost.jpg" />
            <div className="card-body">
                <h5 className="card-title m-0">{item.Title}</h5>
            </div>
            <div style={{ display: 'flex', justifyContent: "space-between" }} className="card-footer text-muted">
                <p className="card-text m-0"><span className="bold">Type : </span>{item.Type}</p>
                <p className="card-text m-0"><span className="bold">Year : </span>{item.Year}</p>
            </div>
        </div>
    )
}
