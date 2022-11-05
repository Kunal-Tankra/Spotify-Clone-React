import React, { useState } from 'react'
import './SongRow.css'

const SongRow = ({ track, audioPlayer, setCurrentSong }) => {
  const [play, setPlay] = useState(true);

  const playSong = () => {
    if (track.preview_url) {
      setCurrentSong(track.preview_url)
      setTimeout(() => {
        if (play) {
          audioPlayer.current.play()
          setPlay(false)
        }
        else {
          audioPlayer.current.pause()
          setPlay(true)

        }
      }, 1);

    }


  }
  return (
    <div onClick={playSong} className='songRow'>
      <img className='songRow_album' src={track.album.images[0].url} alt="" />

      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>{track.artists.map(artist => (artist.name)).join(', ')} - {' '} {track.album.name}
        </p>
      </div>
    </div>
  )
}

export default SongRow
