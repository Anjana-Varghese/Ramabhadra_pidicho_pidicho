'use client'

import { useEffect, useState, useRef } from 'react'
import './globals.css'

interface Position {
  x: number
  y: number
}

interface UIElement {
  id: string
  type: string
  text: string
  icon: string
  position: Position
  isVisible: boolean
  speed: number
}

const malayalamAudioFiles = [
  { file: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ipo%20entha%20indaye-otKFkA28yBUZk4TqoW1ufbw5BDAPVI.mp3', subtitle: 'ഇപ്പോ എന്താ ഇണ്ടായേ' },
  { file: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ingane%20oru%20%20kuruppine%20njn%20kandillalo-yJNWFAckjIqs0dSrrz8YFwmCHBRwEk.mp3', subtitle: 'ഇങ്ങനെ ഒരു കുറുപ്പിനെ ഞാൻ കണ്ടില്ലാലോ' },
  { file: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pidikkavane-Q6S03srVVXkbqTK0H4AWnt0Io33ywu.mp3', subtitle: 'പിടിക്കാവനേ' },
  { file: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evdeyo%20entho%20thakararu%20pole-9s80DH2UxypDnwQJcZdU0zTIIClmsp.mp3', subtitle: 'എവിടെയോ എന്തോ തകരാറു പോലെ' },
  { file: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nikkada%20avde-AKbLWOcNEmGBi0IlnLaUZKzEo6QGc5.mp3', subtitle: 'നിക്കാട അവിടെ' },
  { file: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pidicho%20pidicho-9RvOP0Inm0XBsV8o6SLkm9kHsZ91bQ.mp3', subtitle: 'പിടിച്ചോ പിടിച്ചോ' },
  { file: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/korache%20korache-FgwI6P5yy58hVVOAqQC0wh3M0PSDyE.mp3', subtitle: 'കൊറച്ചേ കൊറച്ചേ' },
  { file: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deeyyyy%20kolluda%20njn-yqm9BrCRnW03BpbRPFUFQfqSuqQP3g.mp3', subtitle: 'ദേയ്യ്യ് കൊല്ലുടാ ഞാൻ' },
  { file: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ivan%20pranthaanu-fk04fuOKP7mydmPQ6p7QBDg7CSRGYG.mp3', subtitle: 'ഇവൻ പ്രാന്താണു' },
  { file: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ayyo%20amme%20enne-W2XuiXAYrn8B2BCshnyoRKApq2am7K.mp3', subtitle: 'അയ്യോ അമ്മേ എന്നെ' }
]

const memeGifs = [
  "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
  "https://media.giphy.com/media/6nWhy3ulBL7GSuKrjm/giphy.gif",
  "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
  "https://media.giphy.com/media/3o6Zt4HU9uwXmXSAuI/giphy.gif",
]

export default function MalayalamCursorChaos() {
  const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 })
  const [elements, setElements] = useState<UIElement[]>([])
  const [timeWasted, setTimeWasted] = useState(0)
  const [rageLevel, setRageLevel] = useState(0)
  const [showPopup, setShowPopup] = useState<string | null>(null)
  const [showSubtitle, setShowSubtitle] = useState<string | null>(null)
  const [showFinalModal, setShowFinalModal] = useState(false)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Initialize UI elements with funny desktop icons
  useEffect(() => {
    const initialElements: UIElement[] = [
      { id: '1', type: 'desktop-icon', text: 'My Ex.exe', icon: '💔', position: { x: 80, y: 120 }, isVisible: true, speed: 1 },
      { id: '2', type: 'desktop-icon', text: 'Dream Job', icon: '💼', position: { x: 80, y: 220 }, isVisible: true, speed: 1 },
      { id: '3', type: 'desktop-icon', text: 'Motivation.exe', icon: '🔥', position: { x: 80, y: 320 }, isVisible: true, speed: 1 },
      { id: '4', type: 'desktop-icon', text: 'Social Life.zip', icon: '👥', position: { x: 80, y: 420 }, isVisible: true, speed: 1 },
      { id: '5', type: 'desktop-icon', text: 'Bank Balance.txt', icon: '💰', position: { x: 200, y: 120 }, isVisible: true, speed: 1 },
      { id: '6', type: 'desktop-icon', text: 'Sleep Schedule', icon: '😴', position: { x: 200, y: 220 }, isVisible: true, speed: 1 },
      { id: '7', type: 'desktop-icon', text: 'Procrastination', icon: '⏰', position: { x: 200, y: 320 }, isVisible: true, speed: 1 },
      { id: '8', type: 'desktop-icon', text: 'Recycle Bin', icon: '🗑️', position: { x: 200, y: 420 }, isVisible: true, speed: 1 },
      { id: '9', type: 'button', text: 'SUBMIT', icon: '', position: { x: 600, y: 150 }, isVisible: true, speed: 1 },
      { id: '10', type: 'button', text: 'OK', icon: '', position: { x: 700, y: 200 }, isVisible: true, speed: 1 },
      { id: '11', type: 'button', text: 'YES', icon: '', position: { x: 800, y: 250 }, isVisible: true, speed: 1 },
      { id: '12', type: 'button', text: 'CANCEL', icon: '', position: { x: 650, y: 300 }, isVisible: true, speed: 1 },
      { id: '13', type: 'dropdown', text: 'Select your destiny...', icon: '', position: { x: 400, y: 450 }, isVisible: true, speed: 1 },
      { id: '14', type: 'slider', text: 'Happiness Level: 50%', icon: '', position: { x: 500, y: 350 }, isVisible: true, speed: 1 },
      { id: '15', type: 'desktop-icon', text: 'This PC', icon: '💻', position: { x: 320, y: 120 }, isVisible: true, speed: 1 },
      { id: '16', type: 'desktop-icon', text: 'Chrome', icon: '🌐', position: { x: 320, y: 220 }, isVisible: true, speed: 1 },
      { id: '17', type: 'desktop-icon', text: 'WhatsApp', icon: '💬', position: { x: 320, y: 320 }, isVisible: true, speed: 1 },
      { id: '18', type: 'desktop-icon', text: 'Spotify', icon: '🎵', position: { x: 440, y: 120 }, isVisible: true, speed: 1 },
    ]
    setElements(initialElements)
  }, [])

  // Timer for time wasted
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeWasted(prev => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeWasted])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Keyboard easter egg
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key === 'l') {
        setShowEasterEgg(true)
        setTimeout(() => setShowEasterEgg(false), 3000)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Smooth element avoidance logic
  useEffect(() => {
    setElements(prevElements => 
      prevElements.map(element => {
        const distance = Math.sqrt(
          Math.pow(mousePos.x - element.position.x, 2) + 
          Math.pow(mousePos.y - element.position.y, 2)
        )

        if (distance < 100) {
          // Play Malayalam audio when cursor gets close
          if (!isAudioPlaying && Math.random() < 0.3) {
            playRandomMalayalamAudio()
          }
          
          // Increase rage level
          setRageLevel(prev => Math.min(prev + 1, 100))

          // Calculate smooth movement away from cursor
          const deltaX = element.position.x - mousePos.x
          const deltaY = element.position.y - mousePos.y
          const angle = Math.atan2(deltaY, deltaX)
          
          // Smooth movement with easing
          const moveDistance = 120 + Math.random() * 80
          const smoothAngle = angle + (Math.random() - 0.5) * 0.3
          
          let newX = element.position.x + Math.cos(smoothAngle) * moveDistance
          let newY = element.position.y + Math.sin(smoothAngle) * moveDistance
          
          // Keep elements within screen bounds
          const padding = 80
          newX = Math.max(padding, Math.min(window.innerWidth - 150, newX))
          newY = Math.max(padding, Math.min(window.innerHeight - 80, newY))
          
          // Smooth collision avoidance
          prevElements.forEach(otherElement => {
            if (otherElement.id !== element.id) {
              const dist = Math.sqrt(
                Math.pow(newX - otherElement.position.x, 2) + 
                Math.pow(newY - otherElement.position.y, 2)
              )
              if (dist < 100) {
                const avoidAngle = Math.atan2(newY - otherElement.position.y, newX - otherElement.position.x)
                newX = otherElement.position.x + Math.cos(avoidAngle) * 100
                newY = otherElement.position.y + Math.sin(avoidAngle) * 100
              }
            }
          })
          
          return {
            ...element,
            position: { x: newX, y: newY },
            speed: Math.min(element.speed + 0.05, 1.5)
          }
        }
        return element
      })
    )
  }, [mousePos, isAudioPlaying])

  const playRandomMalayalamAudio = async () => {
    if (isAudioPlaying) return
    
    const randomAudio = malayalamAudioFiles[Math.floor(Math.random() * malayalamAudioFiles.length)]
    
    if (audioRef.current) {
      try {
        setIsAudioPlaying(true)
        
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        audioRef.current.src = randomAudio.file
        
        await new Promise((resolve, reject) => {
          const handleCanPlay = () => {
            audioRef.current?.removeEventListener('canplay', handleCanPlay)
            audioRef.current?.removeEventListener('error', handleError)
            resolve(true)
          }
          
          const handleError = () => {
            audioRef.current?.removeEventListener('canplay', handleCanPlay)
            audioRef.current?.removeEventListener('error', handleError)
            reject(new Error('Audio failed to load'))
          }
          
          audioRef.current?.addEventListener('canplay', handleCanPlay)
          audioRef.current?.addEventListener('error', handleError)
          audioRef.current?.load()
        })
        
        await audioRef.current.play()
        setShowSubtitle(randomAudio.subtitle)
        
        if (Math.random() < 0.2) {
          const randomMeme = memeGifs[Math.floor(Math.random() * memeGifs.length)]
          setShowPopup(randomMeme)
          setTimeout(() => setShowPopup(null), 1500)
        }

        const handleAudioEnd = () => {
          setIsAudioPlaying(false)
          setShowSubtitle(null)
          audioRef.current?.removeEventListener('ended', handleAudioEnd)
        }
        
        audioRef.current.addEventListener('ended', handleAudioEnd)
        
      } catch (error) {
        console.log('Audio playback failed:', error)
        setIsAudioPlaying(false)
        setShowSubtitle(null)
      }
    }
  }

  const handleElementClick = (elementId: string) => {
    playRandomMalayalamAudio()
    setRageLevel(prev => Math.min(prev + 10, 100))
    
    if (Math.random() < 0.3) {
      setElements(prev => [
        ...prev,
        {
          id: `${elementId}-clone-${Date.now()}`,
          type: 'desktop-icon',
          text: 'Nice Try! 😏',
          icon: '🤡',
          position: { 
            x: Math.random() * (window.innerWidth - 200), 
            y: Math.random() * (window.innerHeight - 100) 
          },
          isVisible: true,
          speed: 1.5
        }
      ])
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="desktop-container">
      {/* Desktop Background with Wallpaper */}
      <div className="desktop-wallpaper" />
      
      {/* Windows Taskbar */}
      <div className="taskbar">
        <div className="start-button">
          <span className="windows-icon">⊞</span>
        </div>
        <div className="taskbar-icons">
          <div className="taskbar-icon">📁</div>
          <div className="taskbar-icon">🌐</div>
          <div className="taskbar-icon">💬</div>
          <div className="taskbar-icon">🎵</div>
        </div>
        <div className="system-tray">
          <span className="time-display">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
      </div>

      {/* UI Elements */}
      {elements.map(element => (
        <div
          key={element.id}
          className={`ui-element ${element.type}`}
          style={{
            left: element.position.x,
            top: element.position.y,
            transform: `translate3d(0, 0, 0)`,
            transition: `all ${0.6 / element.speed}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
          }}
          onClick={() => handleElementClick(element.id)}
        >
          {element.icon && <span className="element-icon">{element.icon}</span>}
          <span className="element-text">{element.text}</span>
        </div>
      ))}

      {/* Clean HUD */}
      <div className="hud-container">
        <div className="hud-card rage-card">
          <div className="hud-icon">🔥</div>
          <div className="hud-content">
            <div className="hud-label">Rage Level</div>
            <div className="rage-bar">
              <div 
                className="rage-fill" 
                style={{ width: `${rageLevel}%` }}
              />
            </div>
            <div className="hud-value">{rageLevel}%</div>
          </div>
        </div>

        <div className="hud-card time-card">
          <div className="hud-icon">⏱️</div>
          <div className="hud-content">
            <div className="hud-label">Time Wasted</div>
            <div className="hud-value time-value">{formatTime(timeWasted)}</div>
          </div>
        </div>

        {isAudioPlaying && (
          <div className="hud-card audio-card">
            <div className="hud-icon">🔊</div>
            <div className="hud-content">
              <div className="hud-label">Playing Audio</div>
            </div>
          </div>
        )}
      </div>

      {/* Subtitle Display */}
      {showSubtitle && (
        <div className="subtitle-modern">
          <div className="malayalam-text">{showSubtitle}</div>
        </div>
      )}

      {/* Meme Popup */}
      {showPopup && (
        <div className="meme-popup-modern">
          <img src={showPopup || "/placeholder.svg"} alt="Meme reaction" />
        </div>
      )}

      {/* Easter Egg */}
      {showEasterEgg && (
        <div className="easter-egg-modern">
          <div className="confetti">🎊</div>
          <div className="easter-text">Legend spotted! 🏆</div>
          <div className="confetti">🎉</div>
        </div>
      )}

      {/* Audio element */}
      <audio 
        ref={audioRef} 
        preload="none"
        onError={() => {
          setIsAudioPlaying(false)
          setShowSubtitle(null)
        }}
      />
    </div>
  )
}
