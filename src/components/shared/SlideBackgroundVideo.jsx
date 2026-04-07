import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

const isHlsSource = (src) => String(src || '').toLowerCase().includes('.m3u8')

const SlideBackgroundVideo = ({ src }) => {
  const videoRef = useRef(null)
  const hlsRef = useRef(null)
  const sourceRef = useRef('')

  useEffect(() => {
    const video = videoRef.current
    if (!video || !src) return undefined

    if (sourceRef.current !== src) {
      if (hlsRef.current) {
        hlsRef.current.destroy()
        hlsRef.current = null
      }

      if (isHlsSource(src)) {
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = src
        } else if (Hls.isSupported()) {
          const hls = new Hls({
            enableWorker: true,
            lowLatencyMode: true
          })
          hls.loadSource(src)
          hls.attachMedia(video)
          hlsRef.current = hls
        }
      } else {
        video.src = src
      }

      sourceRef.current = src
    }

    video.play().catch(() => {})

    return () => {
      if (hlsRef.current && sourceRef.current !== src) {
        hlsRef.current.destroy()
        hlsRef.current = null
      }
    }
  }, [src])

  useEffect(() => {
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-black/36" />
    </div>
  )
}

export default SlideBackgroundVideo
