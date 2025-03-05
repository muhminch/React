import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import blogService from '../appwrite/blog'
import Container from '../components/container/Container'
import PostForm from '../components/post-form/PostForm'

function EditPost() {

  const [post, setPost] = useState(null)
  const navigate = useNavigate()
  const { slug } = useParams()

  useEffect(() => {
    if (slug) {
      blogService.getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post)
          }
          else {
            navigate("/")
          }
        })
    }
  }, [slug, navigate])

  return (
    <div className='py-6'>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  )
}

export default EditPost