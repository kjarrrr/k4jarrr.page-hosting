import Youtube from '../assets/youtubeog.svg'
import Twitter from '../assets/TwitterOg.svg'
import Tumblr from '../assets/TumblrOg.svg'
import DeviantArt from '../assets/DeviantArtOg.svg'
export function About() {


  return (
    <>
      <div className="squarefied ">
        <h1 className="about text-center text-3xl md:text-7xl font-bold mt-10 underline">About me</h1>
        <img className="mefr w-80 m-15 mr-3  flex self-center" src="img/meFr4.png" alt="" />
        <h2 className="text-center md:text-7xl underline indent-3">k4jarrr/artist-818</h2>
        <h4 className="text-center md:text-4xl mt-7 font-bold indent-3">Digital Illustrator</h4>
        <p className="text-center text-lg md:text-4xl mt-10">Hey how are ya? <br />
          This is a website where i promote my webcomics projects, art and social-media. <br />
          The page will continue to be updated as things develop, with more information
          about the projects, stay tuned for updates on the homepage or my social media.

          <br />
          <br />
          <br />
        </p>
        <div className="squarefied-mini">
          <h2 className="text-5xl text-left my-10 mx-10 font-serif font-semibold underline">Profile</h2>
          <div className="flex flex-col gap-8 ">
            <p className="text-lg md:text-4xl mx-10 font-serif">Just a beginner on creating webcomics/comics, animation, web development and writing</p>
            <p className="text-lg md:text-4xl mx-10 font-serif"><span className="font-semibold">Art Tools: </span>Firealpaca</p>
            <p className="text-lg md:text-4xl mx-10 font-serif"><span className="font-semibold">Website launch date:  </span> April 26, 2026 </p>
            <p className="text-lg md:text-4xl mx-10 font-serif"><span className="font-semibold">Contact: </span>k4jarrr.mailcontact@gmail.com </p>
          </div>
          <div className="flex flex-row justify-center gap-8 mx-10 mt-15">

            <a href="https://www.deviantart.com/artist-818"
              target="_blank"
              rel="noopener noreferrer">
              <img src={DeviantArt} width="50" />
            </a>

            <a href="https://www.youtube.com/@k4jarrr"
              target="_blank"
              rel="noopener noreferrer">
              <img className="mt-2" src={Youtube} width="50" />
            </a>

            <a href="https://x.com/k4jarrr"
              target="_blank"
              rel="noopener noreferrer">
              <img className="mt-2" src={Twitter} width="50" />
            </a>

            <a href="https://www.tumblr.com/artist-818"
              target="_blank"
              rel="noopener noreferrer">
              <img src={Tumblr} width="50" />
            </a>

          </div>
          <h2 className="text-5xl text-left mt-30 mb-10 mx-10 font-serif font-semibold underline">Works</h2>
          <div className="flex flex-col gap-8">
            <p className="text-lg md:text-4xl mx-10 font-serif font-extralight before:content-['•'] before:mr-2">Yellow Space Xanthophobia/YSX - (Current: Chapter 3)</p>
            <p className="text-lg md:text-4xl mx-10 font-serif before:content-['•'] before:mr-2">Internal Intention</p>
          </div>
        </div>
      </div >
    </>
  )
}