import { useAudioSequence } from '../hooks/useAudioSequence'

export default function Header() {
  const { TRACKS, setRef, nowPlaying, playSequence } = useAudioSequence()

  return (
    <div className="header">
      <div className="audiothing">
        {TRACKS.map(track => (
          <audio key={track.id} ref={setRef(track.id)} id={track.id}>
            <source src={track.src} type="audio/mp3" />
          </audio>
        ))}

        <div className="mimimiContainer" onClick={playSequence}>
          <img src="img/Sound1.png"  width="50" height="70" className="mimimi"  alt="play" />
          <img src="img/Sound2.png"  width="50" height="70" className="mimimi2" alt="play hover" />
        </div>

        <div className="songbox">
          <h3 className="playing">Now Playing:</h3>
          {nowPlaying && <p className="by1">{nowPlaying}</p>}
        </div>
      </div>
    </div>
  )
}
