import React, { useEffect, useState } from 'react'
import blogService from '../appwrite/blog'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'

function Posts() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    blogService.getPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents)
        }
      })
  }, [])

  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {
            posts.map((post) => (
              <div className="p-2 w-1/4" key={post.$id}>
                <PostCard {...post} />
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Posts