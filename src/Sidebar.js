import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

const Sidebar = () => {
  const [{playlists}, dispatch] = useDataLayerValue()

  return (
    <div className='sidebar'>
      <img className='sidebar_logo' src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-768x234.jpg" alt="" />

      <SidebarOption Icon={HomeIcon} title='Home' />
      <SidebarOption Icon={SearchIcon} title='Search' />
      <SidebarOption Icon={LibraryMusicIcon} title='Your library' />

      <br />
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map(playlist=>(
        <SidebarOption title={playlist.name} />

      ))}

      

    </div>
  )
}

export default Sidebar
