import React from 'react'
import SearchForm from '../components/SearchForm'

const Home = async ({searchParams}: {searchParams: Promise<{query?: string}>}) => {
  const query = (await searchParams).query;
  return (
    <div className='flex flex-col items-center'>
      <h1 className='heading'>Home</h1>
      <SearchForm query={query}/>
    </div>
  )
}

export default Home