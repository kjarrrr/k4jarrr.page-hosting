import { useState } from 'react'
import DialogWrapper from '../components/DialogWrapper'
import { NavLink } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

interface ArtworkImage {
  imgSrc: string
  imgSrcfull: string
  imgClass: string
  label: string
  pClass: string
}

const ARTWORK_IMAGES: ArtworkImage[] = [
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785432757/000_uxcd3d.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785507306/one_suopq5.webp', imgClass: 'frontpage', label: 'low-effort cover', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785430330/030_f8ctkk.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785430330/030_f8ctkk.webp', imgClass: 'frontpage', label: 'character-doodles1', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/v1785432520/pip1_postsq.gif', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/v1785432520/pip1_postsq.gif', imgClass: 'frontpage', label: 'scrapped storyboard animation', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785507272/Four_d8et32.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785507272/Four_d8et32.webp', imgClass: 'frontpage', label: 'red-eye-sheet', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785507279/five_zfqchh.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785507279/five_zfqchh.webp', imgClass: 'frontpage', label: 'grace-sheet', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785507285/seven_eorbvv.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785507285/seven_eorbvv.webp', imgClass: 'frontpage', label: 'cap-sheet', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785507516/six_1_ov0shg.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785507516/six_1_ov0shg.webp', imgClass: 'frontpage', label: 'fancypants-sheet', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/v1785432519/pip4_hlsela.gif', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/v1785432519/pip4_hlsela.gif', imgClass: 'frontpage', label: 'Versions (scrapped)', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/v1785432520/pip3_a9qr3o.gif', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/v1785432520/pip3_a9qr3o.gif', imgClass: 'frontpage', label: 'The Grey animation-test', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785432593/Scratcher1_llgnvl.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785432593/Scratcher1_llgnvl.webp', imgClass: 'frontpage', label: 'Scr4tches: mangastyle-page1', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785432593/Scratcher2_ijmltc.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785432593/Scratcher2_ijmltc.webp', imgClass: 'frontpage', label: 'Scr4tches: mangastyle-page2', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785432590/Scratcher3_mtikh6.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785432590/Scratcher3_mtikh6.webp', imgClass: 'frontpage', label: 'Scr4tches: mangastyle-page3', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785432594/Scratcher4_vtt5le.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785432594/Scratcher4_vtt5le.webp', imgClass: 'frontpage', label: 'Scr4tches: mangastyle-page4', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785507276/eight_c8rmnu.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785507276/eight_c8rmnu.webp', imgClass: 'frontpage', label: 'character-doodles2', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785507272/nine_qwrk19.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785507272/nine_qwrk19.webp', imgClass: 'frontpage', label: 'character-doodles3', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/v1785432520/pip2_amdurz.gif', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/v1785432520/pip2_amdurz.gif', imgClass: 'frontpage', label: 'short scrapped storyboard animation', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785432592/Scratch2_i5mpvy.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785432592/Scratch2_i5mpvy.webp', imgClass: 'frontpage', label: 'Scr4tches: scrapped high-mansheet1 ', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785432591/Scratch3_zxvapz.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785432591/Scratch3_zxvapz.webp', imgClass: 'frontpage', label: 'Scr4tches: scrapped high-mansheet2', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785432591/Scratch1_q3yziw.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785432591/Scratch1_q3yziw.webp', imgClass: 'frontpage', label: 'Scr4tches: scrapped high-mansheet3', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785432592/Scratch4_idwscq.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785432592/Scratch4_idwscq.webp', imgClass: 'frontpage', label: 'Scr4tches: scrapped high-mansheet4', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785507289/three_uf2gro.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785507289/three_uf2gro.webp', imgClass: 'frontpage', label: 'red-eyes-doodles', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785430331/031_v4dorg.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785430331/031_v4dorg.webp', imgClass: 'frontpage', label: 'grace-doodles', pClass: 'frontpage-p' },
  { imgSrc: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_600,q_auto,f_auto/v1785432822/YSX_Logo_-_2_hceztl.webp', imgSrcfull: 'https://res.cloudinary.com/dnbcjgprk/image/upload/w_1600,q_auto,f_auto/v1785432822/YSX_Logo_-_2_hceztl.webp', imgClass: 'frontpage', label: 'alternatetitlecolor', pClass: 'frontpage-p' },
];

function MaxImage({ isOpen, onClose, imgSrcfull, label }: {
  isOpen: boolean
  onClose: () => void
  imgSrcfull: string
  label: string
}) {
  return (
    <DialogWrapper isOpen={isOpen} onClose={onClose}>
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-55%, -60%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxHeight: '90vh',
          zIndex: 1000
        }}
      >
        <img
          src={imgSrcfull}
          alt={label}
          style={{
            maxWidth: '100%',
            maxHeight: '100vh',
            objectFit: 'contain'
          }}
        />

      </div>
      <p className='absolute bottom-0 left-0 right-0 bg-black text-white text-3xl p-2 font-bold text-center'>{label}</p>
    </DialogWrapper>

  )
}

export function Artworks() {
  const [selectedImage, setSelectedImage] = useState<ArtworkImage | null>(null)

  return (
    <>
      <header>
        <h1 className='text-5xl my-5 text-center text-amber-400 '>YELLOW SPACE XANTHOPHOBIA <br />
          Art Dump</h1>
      </header>
      <NavLink to={"/Artpage"} className='absolute top-50 left-20'>
        <div>
          <p className='text-5xl'><IoArrowBackCircleOutline /> Back</p>
        </div>
      </NavLink>
      <div className="artworksGrid">
        {ARTWORK_IMAGES.map(image => (
          <div key={image.imgSrc} className="artworkItem"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.imgSrc} alt={image.label} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <MaxImage
          isOpen={true}
          onClose={() => setSelectedImage(null)}
          imgSrcfull={selectedImage.imgSrcfull}
          label={selectedImage.label}
        />
      )}
    </>
  )
}