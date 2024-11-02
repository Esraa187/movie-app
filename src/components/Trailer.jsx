import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import "video-react/dist/video-react.css";
import axios from 'axios';

function Trailer(props) {
    const [trailers, setTrailers] = useState([]);

    const getTrailer = async () => {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${props.movieId}/videos?api_key=2e3dcb39948dbcbe0df2fb091d0ddd80`);
            setTrailers(data.results);
            console.log(data.results)
        } catch (error) {
            console.error("Error fetching trailer:", error);
        }
    };

    useEffect(() => {
        getTrailer();
    }, []);

    return (
        <div className="container">
            <div className="row">
                {trailers.length > 0 ?
                    <div>
                        <ReactPlayer
                        url={`https://www.youtube.com/embed/${trailers[3].key}`}
                        controls
                        width="100%"
                    /> 
                    </div>: <p>No trailers available</p>}
            </div>
        </div>
    );
}

export default Trailer;
