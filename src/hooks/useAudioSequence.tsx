import { useRef, useState, useCallback } from 'react'

type TrackId = 'Fuse' | 'Stick' | 'Closing'

interface Track {
  id: TrackId
  src: string
  label: string
}

const TRACKS: Track[] = [
  { id: 'Fuse',    src: 'audio/03 Fuse (2019 Remastered).mp3',                 label: "Fuse by Xero 818" },
  { id: 'Stick',   src: 'audio/04 Stick N Move (2019 Remastered).mp3',         label: "Stick N'Move by Xero 818" },
  { id: 'Closing', src: 'audio/Xero - Closing - Linkin Park Live Archive.mp3', label: "Closing by Xero 818" },
]

export function useAudioSequence() {
  const audioRefs = useRef<Record<TrackId, HTMLAudioElement | null>>({
    Fuse: null, Stick: null, Closing: null,
  })
  const [nowPlaying, setNowPlaying] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const setRef = useCallback((id: TrackId) => (el: HTMLAudioElement | null) => {
    audioRefs.current[id] = el
  }, [])

  const playSequence = useCallback(() => {
    if (isPlaying) return

    setIsPlaying(true)
    let index = 0

    const playNext = () => {
      if (index >= TRACKS.length) {
        setNowPlaying(null)
        setIsPlaying(false)
        return
      }
      const track = TRACKS[index]
      const audio = audioRefs.current[track.id]
      if (!audio) return

      setNowPlaying(track.label)
      audio.play()
      audio.onended = () => {
        index++
        playNext()
      }
    }

    playNext()
  }, [isPlaying])

  return { TRACKS, setRef, nowPlaying, playSequence }
}
