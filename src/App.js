import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateSurvey from './components/CreateSurvey';
import Menu from './components/Menu';
import Published from './components/Published';
import Logo from "./logo.png";

function App() {

  const [squestions, setSquestions] = useState([]);

  return (
    <>
      <div className="col-md-10 offset-md-1 col-12 text-center">
        <BrowserRouter>
          <Link to="/">
            <img className="col-md-6 img-fluid m-4" alt="logo" src={Logo} />
          </Link>

          <Routes>
            <Route path="/" element={<Menu />} exact />
            <Route path="/create" element={
                <CreateSurvey
                  squestions={squestions}
                  setSquestions={setSquestions}
                />
              }
              exact
            />
            <Route path="/published" element={<Published questions={squestions} />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
