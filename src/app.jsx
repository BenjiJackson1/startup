import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Post } from './post/post';
import { Feed } from './feed/feed';

export default function App() {

    const [workouts, setWorkouts] = useState([['UserX32', '9/23/2024 at 12:07 PM', 0,[['Dumbell Chest Press', [['10', '80'], ['12', '80'], ['12', '75']]],
      ['Dumbell Fly', [['100', '800'], ['120', '800']]]]],
      ['JJean', '9/21/2024 at 11:50 PM', 15, [['Leg Press', [['10', '130'], ['12', '140'], ['12', '125']]]]]])
    return (
    <BrowserRouter>
    <div className='body bg-info'>
    <header className='container-fluid'>
        <nav className='navbar fixed-top bg-light'>
          <div className='navbar-brand'>
          J4CK3D 💪<sup>&reg;</sup>
          </div>
          <menu className='navbar-nav'>
            <li className='nav-item'>
                <NavLink className='nav-link' to=''>Login</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className='nav-link' to='feed'>Feed</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className='nav-link' to='post'>Post</NavLink>
            </li>
          </menu>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/feed' element={<Feed workouts={workouts} setWorkouts={setWorkouts}/>}/>
        <Route path='/post' element={<Post />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <footer className='bg-light'>
      <div className="container-fluid">
            <span className="text-reset">Benji Jackson - Startup Project</span>
            <a className="text-reset" href="https://github.com/BenjiJackson1/startup">My GitHub</a>
        </div>
      </footer>
    </div>
    </BrowserRouter>
    );
  }

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}