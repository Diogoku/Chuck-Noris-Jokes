import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';

// css
import './css/app.css';

// images
import { chuckNorrisAproved, chuckNorrisLogo } from './images/Images' // src and alt
import { Images } from './components/images/Images';

// form
import { FormChuckJokes } from './components/forms/formChuckJokes';


function App() {
  useEffect(() => {
    //axios.get(`http://api.icndb.com/jokes/random`).then(response => console.log(response))
    console.log(document.getElementById('numberJokes').value);
  }, [])
  const { register } = useForm();

  return (
    <div className="container">
      <Images details={chuckNorrisLogo} id="chuckLogo"/>
      <div id="formContainer">
        <FormChuckJokes />
      </div>
    </div>
  );
}

export default App;
