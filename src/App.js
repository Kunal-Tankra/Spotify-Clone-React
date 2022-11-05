import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue(); 
  
  console.log(token)
  
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    
    const _token = hash.access_token;
    
    if (_token) {
      
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      
      
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        // console.log('user')

        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })

      spotify.getPlaylist('37i9dQZEVXcQGjuFj0ZKM3').then(response=>{
        
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })
      

    }

    // eslint-disable-next-line
  }, []);


  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}

    </div>
  );
}

export default App;