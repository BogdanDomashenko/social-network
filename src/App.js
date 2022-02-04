import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content block">
          <Routes>
            <Route path='dialogs' element={<DialogsContainer />} />
            <Route path='profile' element={<ProfileContainer />} />
            <Route path='news' element={<News />}/> 
            <Route path='settings' element={<Settings />} /> 
            <Route path='music' element={<Music />} /> 
            <Route path='users' element={<UsersContainer />} />
          </Routes>
          {/* <Dialogs /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
