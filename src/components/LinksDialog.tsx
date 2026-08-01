import DialogWrapper from './DialogWrapper'

interface SocialLink {
  href: string
  imgSrc: string
  imgClass: string
  label: string
  containerClass: string
  pClass: string
}

const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://www.tumblr.com/artist-818', imgSrc: 'img/tumblr.png',     imgClass: 'tumblr',     label: 'tumblr',     containerClass: 'tumblrContainer',     pClass: 'tumblr-p' },
  { href: 'https://x.com/k4jarrr', imgSrc: 'img/twitter.png',    imgClass: 'twitter',    label: 'twitter',    containerClass: 'twitterContainer',    pClass: 'twitter-p' },
  { href: 'https://k4jarrrr.newgrounds.com/', imgSrc: 'img/newgrounds.png', imgClass: 'newgrounds', label: 'newgrounds', containerClass: 'newgroundsContainer', pClass: 'newgrounds-p' },
  { href: 'https://ko-fi.com/k4jarrr', imgSrc: 'img/kofi.png',       imgClass: 'kofi',       label: 'ko-fi',      containerClass: 'kofiContainer',       pClass: 'kofi-p' },
  {href: 'https://www.youtube.com/@k4jarrr', imgSrc: 'img/youtube.png',       imgClass: 'youtube',       label: 'youtube',      containerClass: 'youtubeContainer',       pClass: 'youtube-p'},
  {href: 'https://www.deviantart.com/artist-818', imgSrc: 'img/deviantart.png',       imgClass: 'deviantart',       label: 'deviantart',      containerClass: 'deviantContainer',       pClass: 'deviant-p'}
]

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function LinksDialog({ isOpen, onClose }: Props) {
  return (
    <DialogWrapper isOpen={isOpen} onClose={onClose} className="tree" innerClassName="allpoppie">
      <div className="allpoppie">

        <div className="buttoncancelContainer">
          <div className="closerContainer" onClick={onClose}>
            <img className="closer"  src="img/close.png"  width="50" height="50" alt="close" />
            <img className="closer2" src="img/close2.png" width="50" height="50" alt="close hover" />
          </div>
        </div>

        <div className="blueheaderContainer">
          <div className="square12">
            <p className="textlinks">Links!!!</p>
          </div>
        </div>

        <div className="iconsContainer">
          {SOCIAL_LINKS.map(link => (
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
