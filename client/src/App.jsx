
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import {logo} from './assets';
import {Home,CreatePost} from './pages';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b 
      border-b-[#e6ebf4]'>
      <Link to='/'>
      <div className='logodiv'>
      <img src={logo} alt='logo' className=' object-contain logo react'/>
      <p className='logofont px-1 font-extrabold text-xl flex justify-center align-middle'>OpenAI</p>
      </div>
      </Link>
      <Link to="/create-post" className='font-inter hover:bg-[#6450ff] font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
        Create
      </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-post' element={<CreatePost />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App