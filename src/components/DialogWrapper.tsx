import { useEffect, useRef } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  className?: string
  innerClassName?: string
  children: React.ReactNode
}

export default function DialogWrapper({ isOpen, onClose, className, innerClassName, children }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen) dialog.showModal()
    else dialog.close()
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const inner = (e.currentTarget as HTMLElement).querySelector(`.${innerClassName}`)
    if (inner && !inner.contains(e.target as Node)) {
      onClose()
    }
  }

  return (
    <dialog ref={dialogRef} className={className} onClick={handleBackdropClick}>
      {children}
    </dialog>
  )
}
