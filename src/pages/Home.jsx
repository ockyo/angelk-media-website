import React from 'react'
import TopCreator from '../components/TopCreator/TopCreator'
import Section01 from '../components/Section01/Section01'
import pintopsp from "../assets/pintop-sp.png"
import TopAgency from '../components/TopAgency/TopAgency'
import event1 from "../assets/tintucvasukien/event1.png"
import event2 from "../assets/tintucvasukien/event2.png"
import event3 from "../assets/tintucvasukien/event3.png"
const Home = () => {
  return (
    <div className='bg-black'>
      {/* section1 */}
      <section className='flex justify-center items-center'>
        <div className='w-6/7 flex items-center justify-center'>
          <Section01 />
        </div>
      </section>

      {/* section2 */}
      <section className=' py-12'>
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-extrabold gradient-text">
            TOP CREATOR
          </h1>
          <p className="text-2xl font-bold gradient-text">TIKTOK LIVE</p>
        </div>
        <div class="line-container">
          <div class="line-effect"></div>
          <div class="diamond"></div>
        </div>

        <TopCreator />

      </section>

      {/* section3 */}
      <section>

        <div className='w-fit mx-auto px-6 py-1 text-md font-bold rounded-2xl text-white bg-gradient-to-bl from-black/20 to-red-300 shadow-[0_0_20px_rgba(253,223,112,0.7)]'>
          ĐẶC QUYỀN
        </div>
        <div className='flex justify-center'>
          <h1 className="text-6xl font-extrabold gradient-text">
            ANGEL K MEDIA
          </h1>
        </div>
        <div class="line-container">
          <div class="line-effect"></div>
          <div class="diamond"></div>
        </div>

        <div className='flex space-x-4 justify-center items-center' >

          <div className="bg-gradient-to-r from-[#FFE9B4] to-[#FFECBE] text-black font-bold py-2 px-4 rounded-lg shadow-lg text-center">
            PINTOP ĐỀ XUẤT <br />PHIÊN LIVE
          </div>

          <div className="flex space-x-1 h-10 items-center justify-center">
            {[4, 6, 8, 6, 4].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-[#FFE9B4] to-[#FFECBE] animate-pulse"
                style={{
                  animationDuration: `${0.8 + i * 0.1}s`,
                  height: `${h * 10}%`,
                }}
              ></div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-[#FFE9B4] to-[#FFECBE] text-black font-bold py-2 px-4 rounded-lg shadow-lg text-center">
            XÂY KÊNH / ĐẨY<br /> VIDEO XU HƯỚNG
          </div>
          <div className="flex space-x-1 h-10 items-center justify-center">
            {[4, 6, 8, 6, 4].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-[#FFE9B4] to-[#FFECBE] animate-pulse"
                style={{
                  animationDuration: `${0.8 + i * 0.1}s`,
                  height: `${h * 10}%`,
                }}
              ></div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-[#FFE9B4] to-[#FFECBE] text-black font-bold py-2 px-4 rounded-lg shadow-lg text-center">
            PK<br />QUỐC TẾ VIỆT NAM
          </div>
          <div className="flex space-x-1 h-10 items-center justify-center">
            {[4, 6, 8, 6, 4].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-[#FFE9B4] to-[#FFECBE] animate-pulse"
                style={{
                  animationDuration: `${0.8 + i * 0.1}s`,
                  height: `${h * 10}%`,
                }}
              ></div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-[#FFE9B4] to-[#FFECBE] text-black font-bold py-2 px-4 rounded-lg shadow-lg text-center">
            THAM GIA CÁC SỰ KIỆN<br /> CỦA TIKTOK
          </div>
          <div className="flex space-x-1 h-10 items-center justify-center">
            {[4, 6, 8, 6, 4].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-[#FFE9B4] to-[#FFECBE] animate-pulse"
                style={{
                  animationDuration: `${0.8 + i * 0.1}s`,
                  height: `${h * 10}%`,
                }}
              ></div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-[#FFE9B4] to-[#FFECBE] text-black font-bold py-2 px-4 rounded-lg shadow-lg text-center">
            LƯƠNG - THƯỞNG<br />HẤP DẪN
          </div>
        </div>

        <div className='flex relative justify-center items-center rounded-2xl mt-6 bg-black'>

          <img src={pintopsp} alt="" />

          <div className="absolute bottom-4">
            <button className="bg-gradient-to-r from-[#FFE9B4] to-[#FFECBE] text-black font-bold py-2 px-4 rounded-lg shadow-lg text-center" onClick={() => { console.log("clicked") }}>
              Đăng ký tại đây
            </button>
          </div>
        </div>

      </section>

      {/* section3 */}
      <section className='mt-14'>
        <div className='flex justify-center'>
          <h1 className="text-6xl font-extrabold gradient-text">
            TIN TỨC VÀ SỰ KIỆN
          </h1>
        </div>
        <div class="line-container">
          <div class="line-effect"></div>
          <div class="diamond"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 p-8">
          {[event1, event2, event3].map((event, index) => (
            <div key={index} className="w-64 bg-white/30 rounded-2xl flex flex-col items-center justify-end overflow-hidden">
              <img src={event} alt={`Event ${index + 1}`} className="w-full h-full object-cover rounded-2xl" />
            </div>
          ))}
        </div>

      </section>
      {/* section4 */}
      <section className='mt-12'>
        <TopAgency />
      </section>
      {/* section6 */}
      <section>
        <div className='flex mt-6 justify-center'>
          <h1 className="text-6xl pt-6  font-extrabold gradient-text">
            VIDEO NỔI BẬT
          </h1>
        </div>
        <div class="line-container">
          <div class="line-effect"></div>
          <div class="diamond"></div>
        </div>
        <div class="flex justify-center gap-8 p-8">
          <div class="w-64 h-96 bg-white/30 rounded-2xl flex flex-col items-center justify-end pb-8">

          </div>
          <div class="w-64 h-96 bg-white/30 rounded-2xl flex flex-col items-center justify-end pb-8">

          </div>
          <div class="w-64 h-96 bg-white/30 rounded-2xl flex flex-col items-center justify-end pb-8">

          </div>
          <div class="w-64 h-96 bg-white/30 rounded-2xl flex flex-col items-center justify-end pb-8">

          </div>
          <div class="w-64 h-96 bg-white/30 rounded-2xl flex flex-col items-center justify-end pb-8">

          </div>
        </div>
        <div class="flex justify-center gap-8 p-8">
          <div class="w-64 h-96 bg-white/30 rounded-2xl flex flex-col items-center justify-end pb-8">

          </div>
          <div class="w-64 h-96 bg-white/30 rounded-2xl flex flex-col items-center justify-end pb-8">

          </div>
          <div class="w-64 h-96 bg-white/30 rounded-2xl flex flex-col items-center justify-end pb-8">

          </div>
          <div class="w-64 h-96 bg-white/30 rounded-2xl flex flex-col items-center justify-end pb-8">

          </div>
          <div class="w-64 h-96 bg-white/30 rounded-2xl flex flex-col items-center justify-end pb-8">

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home