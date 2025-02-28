import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import Signup from './pages/Signup.jsx'
import Posts from './pages/Posts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Posts from './pages/Posts.jsx'
import Post from './pages/Post.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: (
            <AuthLayout authentication={false}>
              <Login />
            </AuthLayout>
          )
        },
        {
          path: "/signup",
          element: (
            <AuthLayout authentication={false}>
              <Signup />
            </AuthLayout>
          )
        },
        {
          path: "/posts",
          element :(
            <AuthLayout authentication={true}>
              <Posts />
            </AuthLayout>
          )
        },
        {
          path: "/add-post",
          element :(
            <AuthLayout authentication={true}>
              <AddPost />
            </AuthLayout>
          )
        },
        {
          path: "/edit-post/:slug",
          element :(
            <AuthLayout authentication={true}>
              <EditPost />
            </AuthLayout>
          )
        },
        {
          path: "/post/:slug",
          element :(
            <AuthLayout authentication={true}>
              <Post />
            </AuthLayout>
          )
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
