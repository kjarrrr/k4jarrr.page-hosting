import { useEffect, useRef } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  className?: string
  innerClassName?: string
  children: React.ReactNode
}

export default function DialogWrapper({ isOpen, onClose, className, children }: Props) {
  if (!isOpen) return null

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <div className={className}>
        {children}
      </div>
    </div>
  )
}
