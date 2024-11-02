import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import "video-react/dist/video-react.css";
function VideoTrailer(props) {
    const [videoTrailer, setVideoTrailer] = useState([])
    let getVideoTrailer = async (id) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=2e3dcb39948dbcbe0df2fb091d0ddd80`)
        setVideoTrailer(data.results)
    }
    useEffect(() => {
        if (props.movieid) {
            getVideoTrailer(props.movieid)
        }
    }, [])
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body>
                    {videoTrailer.length > 0 && videoTrailer[0].key ?
                        <ReactPlayer url={`https://www.youtube.com/embed/${videoTrailer[0].key}`} controls  width="100%"/> : <i className='fas fa-spinner fa-spin '></i>}
                </Modal.Body>
                
            </Modal>
        </div>
    )
}

export default VideoTrailer
