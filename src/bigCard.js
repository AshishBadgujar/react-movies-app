import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

export default function BigCard() {
    const [movie, setMovie] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const { id } = useParams();
    useEffect(() => {
        const getMovie = async () => {
            let res = await Axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`)
            let res2 = res.data
            setMovie(res2)
            setLoading(false)
        }
        getMovie();
    }, [])
    return (
        <div className="card mb-3 p-3" >
            {(isLoading) ?
                <div style={{ width: "100%", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={movie.Poster} style={{ width: "100%" }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body pt-0">
                            <h4 className="card-title">{movie.Title}({movie.Type})</h4>
                            <p className="card-text"><span className="bold">Country : </span>{movie.Country}</p>
                            <p className="card-text"><span className="bold">Language : </span>{movie.Language}</p>
                            <p className="card-text"><span className="bold">Genre : </span>{movie.Genre}</p>
                            <p className="card-text"><span className="bold">Director : </span>{movie.Director}</p>
                            <p className="card-text"><span className="bold">Actors : </span>{movie.Actors}</p>
                            <p className="card-text"><span className="bold">Runtime : </span>{movie.Runtime}</p>
                            <p className="card-text"><span className="bold">Year : </span>{movie.Year}</p>
                            <p className="card-text"><span className="bold">Production : </span>{movie.Production}</p>
                            <p className="card-text"><span className="bold">Released : </span>{movie.Released}</p>
                            <p className="card-text mb-1"><span className="bold">imdbRating : </span>{movie.imdbRating}</p>
                            <p>
                                <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    More Details...
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample">
                                <p className="card-text"><span className="bold">BoxOffice : </span>{movie.BoxOffice}</p>
                                <p className="card-text"><span className="bold">Awards : </span>{movie.Awards}</p>
                                <p className="card-text"><span className="bold">Metascore : </span>{movie.Metascore}</p>
                                <p className="card-text"><span className="bold">Rated : </span>{movie.Rated}</p>
                                <p className="card-text"><span className="bold">Response : </span>{movie.Response}</p>
                                <p className="card-text"><span className="bold">Writer : </span>{movie.Writer}</p>
                                <p className="card-text"><span className="bold">Plot : </span>{movie.Plot}</p>
                                <p className="card-text"><span className="bold">Website : </span>{movie.Website}</p>
                                <p className="card-text"><span className="bold">imdbVots : </span>{movie.imdbVots}</p>
                                <p className="card-text"><span className="bold">Other Ratings : </span></p>
                                {movie.Ratings.map(item => (
                                    <div>
                                        <small className="text-muted">{item.Source}({item.Value})</small><br />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
