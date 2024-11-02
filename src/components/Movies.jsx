import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '@mui/material/Pagination';

function Movies() {
  const [trendingmovies, setTrendingMovies] = useState([])
  const [page, setPage] = useState(1);
  let getTrendingMovies = async (pageNum) => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2e3dcb39948dbcbe0df2fb091d0ddd80&page=${pageNum}`)
    setTrendingMovies(data.results)

  }
  const handleChange = (event, value) => {
    setPage(value);
    console.log(`Current page: ${value}`);
    getTrendingMovies(value)
  };
  useEffect(() => {
    getTrendingMovies(1);
  }, [])
  let [movie, setMovie] = useState('')

  let changeSearch = async (e) => {
    const value = e.target.value;
    setMovie(value);
    if (value) {
      let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=2e3dcb39948dbcbe0df2fb091d0ddd80`);
      setTrendingMovies(data.results);
    } else {
      getTrendingMovies(page);
    }
  };

  return (
    <>
      <div className="container">
        <div className="search-container">
          <div className='search-group'>
            <input type="text" onChange={changeSearch} name='movie' placeholder='Search' />
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
          </div>
        </div>
        <div className="row py-5 justify-content-center">
          {trendingmovies.map((movie, index) => <div key={index} className='col-md-2 '>
            <Link to={`/movieDetails/${movie.id}`}>
              <div >
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-100' alt="" />
                <h3 className='h6 my-3'>{movie.title}</h3>
              </div>
            </Link>
          </div>)
          }
          <div>
            <Pagination className='d-flex justify-content-center mt-5 text-light'
              count={30} page={page}
              onChange={handleChange}
              color="primary"
              variant="outlined"
              sx={{ '& .MuiPaginationItem-root': { color: 'white' } }} />
          </div>

        </div>
      </div>

    </>
  )
}

export default Movies
