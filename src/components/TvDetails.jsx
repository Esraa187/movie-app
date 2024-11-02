import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoTrailer from './VideoTrailer';
import { useParams } from 'react-router-dom';

function TvDetails() {
    const [tvDetails, setTvDetails] = useState(null)
    let parms = useParams();

    let getMovieDetails = async (id) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=2e3dcb39948dbcbe0df2fb091d0ddd80`);
        setTvDetails(data);
    }
    useEffect(() => {
        getMovieDetails(parms.id)
    }, [])
    return (
        <>
            {tvDetails ?
                <div className="container">
                    <div className='row my-5'>
                        <div className="col-md-3">
                            <img src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`} className='w-100' alt="" />
                        </div>
                        <div className='col-md-8 ps-5 '>
                            <h1>{tvDetails.name}</h1>
                            <p className='text-secondary fs-4'>{tvDetails.tagline} {tvDetails.status}</p>
                            <div className='d-flex align-items-center my-4'>
                                {tvDetails.genres.map((m, i) => <div key={i} className='px-3 py-1  me-2 rounded' style={{backgroundColor:"#024CAA"}}>
                                    {m.name}
                                </div>)}
                            </div>
                            <ul className='p-0 '>
                                <li className='py-1'>Vote : {tvDetails.vote_average}</li>
                                <li className='py-1'>Vote Count : {tvDetails.vote_count}</li>
                                <li className='py-1'>popularity : {tvDetails.popularity}</li>
                            </ul>
                            <p className='text-secondary w-75'>{tvDetails.overview}</p>
                        </div>
                    </div>
                </div> : <div className='d-flex align-items-center justify-content-center vh-100'>
                    <i className='fas fa-spinner fa-spin fs-1'></i></div>
            }
        </>
    )
}

export default TvDetails
