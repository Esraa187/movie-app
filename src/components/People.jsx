import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';


function Home() {
  const [trendingpeople, setTrendingPeople] = useState([])
  const [page, setPage] = useState(1);

  let getTrendingPeople = async (pageNum) => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=2e3dcb39948dbcbe0df2fb091d0ddd80&page=${pageNum}`)
    setTrendingPeople(data.results)
  }
  const handleChange = (event, value) => {
    setPage(value);
    console.log(`Current page: ${value}`);
    getTrendingPeople(value);
  };
  useEffect(() => {
    getTrendingPeople(1);
  }, [])
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className='col-md-4 d-flex align-items-center'>
            <div className="title">
              <h2>Trending <br /> People <br /> To Watch Right Now</h2>
              <p className='text-secondary'>Top Trending People by month</p>
            </div>
          </div>
          {trendingpeople.map((person, index) => <div key={index} className='col-md-2'>
            <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} className='w-100' alt="" />
            <h3 className='h6 my-3'>{person.name}</h3>
          </div>)}
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

export default Home

