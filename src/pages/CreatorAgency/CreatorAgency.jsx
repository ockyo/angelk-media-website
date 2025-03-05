import React from 'react'
import image1 from '../../assets/agency-angelk/01.jpg'
import image2 from '../../assets/agency-angelk/02.jpg';
import image3 from '../../assets/agency-angelk/03.jpg';
import image5 from '../../assets/agency-angelk/05.webp';
import fbIcon from "../../assets/agency-angelk/fb-icon.svg"
import insIcon from "../../assets/agency-angelk/ins-icon.svg"
import tiktokIcon from "../../assets/agency-angelk/tiktok-icon.svg"
const agencyAngelkData =
  [
    { img: image2 },
    { img: image5 },
    { img: image3 },
    { img: image5 }
  ]

const CreatorAgency = () => {

  return (

    <div className=' bg-black text-white'>

      <div className='flex justify-center'>
        <h1 className="text-6xl font-extrabold gradient-text">
          AGENCY ANGEL K MEDIA
        </h1>
      </div>
      <div class="line-container">
        <div class="line-effect"></div>
        <div class="diamond"></div>
      </div>
   
      <div className='flex justify-center space-x-3 px-6 py-6'>
        {agencyAngelkData.map((item,index) => (
          <div key={index}>
          <img src={item.img} alt={`Agency Angelk ${index + 1}`} className='w-76  rounded-3xl' />
            <div className='flex justify-center space-x-3 w-full p-4 '>
              <img src={fbIcon} alt="" className='w-1/5' />
              <img src={tiktokIcon} alt="" className='w-1/5' />
              <img src={insIcon} alt="" className='w-1/5' />

            </div>
          </div>

        ))}
      </div>
      <div className='flex justify-center space-x-3 px-6 py-6'>
        {agencyAngelkData.slice().reverse().map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={`Agency Angelk ${agencyAngelkData.length - index}`} className='w-76 rounded-3xl' />
            <div className='flex justify-center space-x-3 w-full p-4 '>
              <img src={fbIcon} alt="" className='w-1/5' />
              <img src={tiktokIcon} alt="" className='w-1/5' />
              <img src={insIcon} alt="" className='w-1/5' />

            </div>
          </div>

        ))}
      </div>

    </div>

  )
}

export default CreatorAgency