interface Props {
  onOpen: () => void
}

export default function WorkWindow({ onOpen }: Props) {
  return (
    <div className="square8">
      <div className="square10">
        <img className="work" src="img/Work.png" alt="Work" />
      </div>
      <img className="gallery" src="img/carpet.gif" alt="" />
      <button onClick={onOpen} className="button2">
        Here
      </button>
    </div>
  )
}
