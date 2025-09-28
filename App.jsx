
import Navbar from './components/Navbar'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './page/homepage/Home'
import Liststudy from './page/homepage/Liststudy'
import About from './page/homepage/About'
import Contact from './page/homepage/Contact'
import RootLayout from './layout/RootLayout'

export default function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
          <Route>
      <Route path='/' element={<RootLayout/>}>
        <Route  index element={<Home/>}/>
        <Route path='/list-study' element={<Liststudy/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Route>
    )

  )
  return (
    <div>
  <RouterProvider router={router}/>
 
    </div>
  )
}
