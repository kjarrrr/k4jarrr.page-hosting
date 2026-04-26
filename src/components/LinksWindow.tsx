interface Props {
  onOpen: () => void
}

export default function LinksWindow({ onOpen }: Props) {
  return (
    <div className="square3">
      <div className="square7">
        <img className="link" src="img/Links.png" alt="Links" />
      </div>
      <img className="linked" src="img/clicklink.gif" alt="" />
      <button onClick={onOpen} className="button1" id="buttoner1">
        Here
      </button>
    </div>
  )
}
