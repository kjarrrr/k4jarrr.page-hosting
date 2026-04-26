import DialogWrapper from './DialogWrapper'

interface Props {
  isOpen: boolean
  onClose: () => void
}

interface WorkLink {
  href: string
  imgSrc: string
  imgClass: string
  label: string
  containerClass: string
  pClass: string
}

const WORKS_LINKS: WorkLink[] = [
  { href: 'https://internal-intention.the-comic.org/comics/1/#content-start', imgSrc: 'img/internal.png',     imgClass: 'internalIntention',     label: 'Internal Intention',     containerClass: 'internalContainer',     pClass: 'internal-p' },
  
]

export default function WorkDialog({ isOpen, onClose }: Props) {
  return (
    <DialogWrapper isOpen={isOpen} onClose={onClose} className="tripper" innerClassName="allpoppie2">
      <div className="allpoppie2">

        <div className="buttoncancelContainer2">
          <div className="closerContainer2" onClick={onClose}>
            <img className="closer3" src="img/close.png"  width="50" height="50" alt="close" />
            <img className="closer4" src="img/close2.png" width="50" height="50" alt="close hover" />
          </div>
        </div>

        <div className="blueheaderContainer2">
          <div className="square13">
            <p className="textWork">Work!!!</p>
          </div>
        </div>

        <div className="worksContainer">
          {WORKS_LINKS.map(link => (
            <a key={link.label} style={{ textDecoration: 'none' }} href={link.href}>
              <div className={link.containerClass}>
                <img className={link.imgClass} src={link.imgSrc} alt={link.label} />
                <div className={link.pClass}>
                  <p>{link.label}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </DialogWrapper>
  )
}
