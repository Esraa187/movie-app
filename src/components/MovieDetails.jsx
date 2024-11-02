import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VideoTrailer from './VideoTrailer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieDetails() {
    let parms = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [movieDetails, setMovieDetails] = useState(null)
    const [similarMovie, setSimilarMovie] = useState(null)

    let getMovieDetails = async (id) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2e3dcb39948dbcbe0df2fb091d0ddd80`)
        setMovieDetails(data)
    }

    let getSimilarMovies = async (simId) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${simId}/similar?api_key=2e3dcb39948dbcbe0df2fb091d0ddd80`)
        setSimilarMovie(data.results)
    }
    useEffect(() => {
        getMovieDetails(parms.id)
        getSimilarMovies(parms.id)
    }, [])
    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            {movieDetails ?

                <div className="container" >
                    <div className='row my-5'>

                        <div className="col-md-3">
                            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} className='w-100' alt="" />
                        </div>
                        <div className='col-md-8 ps-5 '>
                            <h1 className='fw-bold'>{movieDetails.title}</h1>
                            <p className='text-secondary fs-4'>{movieDetails.tagline} {movieDetails.name}</p>
                            <div className='d-flex align-items-center my-4'>
                                {movieDetails.genres.map((m, i) => <div key={i} className='px-3 py-1 me-2 rounded' style={{backgroundColor:"#024CAA"}}>
                                    {m.name}
                                </div>)}
                            </div>
                            <ul className='p-0 '>
                                <li className='py-1'>Vote : {movieDetails.vote_average}</li>
                                <li className='py-1'>Vote Count : {movieDetails.vote_count}</li>
                                <li className='py-1'>popularity : {movieDetails.popularity}</li>
                                <li className='py-1'>Release Date : {movieDetails.release_date}</li>
                            </ul>
                            <p className='text-secondary w-75'>{movieDetails.overview}</p>
                            <a className='text-danger' onClick={() => setModalShow(true)}>
                                <i className="fa-solid fa-play me-2 p-2 border border-2 rounded-circle border-danger"></i> Watch Trailer
                            </a>
                        </div>
                        <VideoTrailer show={modalShow} onHide={() => setModalShow(false)} movieid={parms.id} />
                    </div>
                    <h2 className='fw-semibold mt-5'>Similer</h2>
                    {similarMovie ? <div className="row mt-4">
                        <Slider {...settings} >
                           
                            {similarMovie.map((s, i) => <div key={i} className=''>
                                <img src={`https://image.tmdb.org/t/p/w500${s.poster_path}`} className='w-75  rounded ' alt="" />
                                <h3 className='h6 my-3 w-75'>{s.title}</h3>
                            </div>)}
                 
                        </Slider>
                    </div> : ""}
                </div>
                : <div className='d-flex align-items-center justify-content-center vh-100'>
                    <i className='fas fa-spinner fa-spin fs-1'></i></div>
            }

        </>
    )
}

export default MovieDetails
