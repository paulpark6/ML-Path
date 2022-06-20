import profileImage from './images/NikeOffWhite.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>
      My React App
     </h1>
     <h2>
      Author: Paul Park
     </h2>
     <img src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;
