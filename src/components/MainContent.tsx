export default function MainContent() {
  return (
    <div className="main">
      <div className="square">
        <div className="flex flex-col items-center my-7">
          <h1 className="text-2xl md:text-4xl text-center px-2">INTERNAL INTENTION IS OUT!!!</h1>
          <a href="https://internal-intention.the-comic.org/comics/1/#content-start">
          <img src="img/InternalCover.png" className="my-4 w-[70vw] max-w-140 h-auto" alt="" />
          </a>
          <p style={{ padding: '20px', textAlign: 'center' }}><br />
            Nothing new at the moment... <br />
          </p>
          <img className="my-4 w-16 h-32 md:w-20 md:h-40" src="img/meFr2.png" alt="me" />
        </div>
      </div>
    </div>
  )
}
