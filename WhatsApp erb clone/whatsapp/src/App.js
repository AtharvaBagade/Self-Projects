//import logo from './logo.svg';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Comp1 from './Components/Comp1';
import Context1 from './Context/AccountProvider';

function App() {
  let id="540751280833-jpre8k1rri9r910vv9vge0smhj1501cd.apps.googleusercontent.com"
  document.body.style.backgroundColor = `rgb(30,30,30)`
  return (
    <GoogleOAuthProvider clientId={id}>
    <Context1>
      <Comp1/>
    </Context1>
    </GoogleOAuthProvider>
  );
}

export default App;
