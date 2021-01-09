import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Card({ item }) {
    const history = useHistory();

    const handleClick = (movieId) => {
        console.log(movieId)
        history.push(`/${movieId}`)
    }
    return (
        <div className="card my-2" style={{ width: "18rem", height: "auto" }} onClick={() => handleClick(item.imdbID)}>
            <img src={item.Poster} style={{ height: "14.5rem" }} className="card-img-top" alt="..." />
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
