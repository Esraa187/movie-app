import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StartUp from './StartUp'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Trailer from './Trailer';

function Home() {
  const [trendingmovies, setTrendingMovies] = useState([])
  const [trendingtv, setTrendingTv] = useState([])
  const [upComingMovies, setUpComingMovies] = useState(null)
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])



  let getTrendingMovies = async (media, callback) => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${media}/week?api_key=2e3dcb39948dbcbe0df2fb091d0ddd80`)
    callback(data.results.slice(0, 10))
  }
  let getupComingMovies = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=2e3dcb39948dbcbe0df2fb091d0ddd80`)
    setUpComingMovies(data.results.slice(0, 10))
  }
  let getNowPlayingMovies = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=2e3dcb39948dbcbe0df2fb091d0ddd80`)
    setNowPlayingMovies(data.results.slice(0, 10))
  }
  useEffect(() => {
    getTrendingMovies('movie', setTrendingMovies);
    getTrendingMovies('tv', setTrendingTv);
    getupComingMovies()
    getNowPlayingMovies()

  }, []);
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <>
      <StartUp />
      <div className="container">
        <div className="row py-5 ">
          <div className='d-flex align-items-center justify-content-between'>
            <h2 className='fw-semibold '>Trending  Movies</h2>
            <Link to={`/movies`} className='border-bottom border-danger border-2'>view more</Link>
          </div>
          <Slider {...settings}>
            {trendingmovies.map((movie, index) => <div key={index} className='col-md-2 p-3'>
              <Link to={`movieDetails/${movie.id}`}>
                <div className='img'>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-100 rounded ' alt="" />
                  <h3 className='h6 my-3'>{movie.title}</h3>
                </div>
              </Link>
            </div>)}
          </Slider>
        </div>
        {/*  */}
        <div className="row py-4 ">
          <h2 className='fw-semibold mt-5'>Now Playing Movies</h2>
          <Slider {...settings}>
            {nowPlayingMovies.map((movie, index) => <div key={index} className='col-md-2 p-3'>
              <Link to={`movieDetails/${movie.id}`}>
                <div className='img'>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-100 rounded' alt="" />
                  <h3 className='h6 my-3'>{movie.title}</h3>
                </div>
              </Link>
            </div>)}
          </Slider>
        </div>
        {/*  */}
        <div>
          <h2 className='fw-semibold mt-5'>Top Rated movies</h2>
          {upComingMovies ? <div className="row mt-4">
            <Slider {...settings} >
              {upComingMovies.map((up, i) => <div key={i} className='p-3'>
                <Link to={`movieDetails/${up.id}`}>
                  <div className='img'>
                    <img src={`https://image.tmdb.org/t/p/w500${up.poster_path}`} className='w-100  rounded ' alt="" />
                    <h3 className='h6 my-3 w-75'>{up.title}</h3>
                  </div>
                </Link>
              </div>)}

            </Slider>
          </div> : ""}
        </div>
        {/* tv */}
        <div className="row py-4">
          <h2 className='fw-semibold mt-5'>Trending Tvs Shows</h2>
          <Slider {...settings}>
            {trendingtv.map((tv, index) => <div key={index} className='col-md-2 p-3'>
              <Link to={`tvDetails/${tv.id}`}>
                <div className='img'>
                  <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} className='w-100 rounded' alt="" />
                  <h3 className='h6 my-3'>{tv.name}</h3>
                </div>
              </Link>
            </div>)}
          </Slider>
        </div>

      </div>
    </>
  )
}

export default Home
