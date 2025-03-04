import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import blogService from '../appwrite/blog'
import storageService from '../appwrite/storage'
import Container from '../components/container/Container'
import Button from '../components/Button'
import parse from 'html-react-parser'


function Post() {

  const [post, setPost] = useState(null)
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)
  const isAuthor = post && userData ? post.userId === userData.$id : false
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

  const deletePost = () => {
    blogService.deletePost(post.$id)
      .then((status) => {
        if (status) {
          storageService.deleteFile(post.featuredImage)
          navigate("/")
        }
      })
  }

  return post ? (
    <div className="py-8">
      <Container>
        <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
          <img src={blogService.getPreviewFile(post.featuredImage)} alt={post.title} className='rounded-xl' />
          {
            isAuthor && (
              <div className="absolute-right-6 top-6">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-500" className="mr-3">Edit</Button>
                </Link>
                <Button onClick={deletePost} bgColor="bg-red-500" >Delete</Button>
              </div>
            )
          }
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <div className="browser-css">
            {parse(post.content)}
          </div>
        </div>
      </Container>
    </div>
  ) : null
}

export default Post