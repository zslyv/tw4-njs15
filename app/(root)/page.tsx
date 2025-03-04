import React from 'react'
import Navbar from '../components/Navbar';
import StartupCard from '../components/StartupCard';
// import SearchForm from '../components/SearchForm'

const Home = async ({searchParams}: {searchParams: Promise<{query?: string}>}) => {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt: 'Yesterday',
    views: 55,
    author: {authorId: 1, name: 'Slyv'},
    _id: 1,
    description: 'Rhis is a description.',
    image: 'public/yeah_image.jpg',
    category: 'Anime',
    title: 'Project Sekai',
  }];
  return (
    <div >
      <Navbar />
      <div className='flex flex-col items-center'>
      <h1 className='heading'>Home</h1>
      {/* <SearchForm query={query}/> */}

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for ${query}`: `All results`}
        </p>

        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post:StartupCardType) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ):(
            <p className='no-results'>No startups found.</p>
          )}
        </ul>
      </section>
      </div>
    </div>
  )
}

export default Home