import React from 'react'
import event1 from "../../assets/tintucvasukien/event1.png"
import event2 from "../../assets/tintucvasukien/event2.png"
import event3 from "../../assets/tintucvasukien/event3.png"
const News = () => {
    return (
        <div className=' bg-black text-white'>
            <div className='flex justify-center'>
                <h1 className="text-6xl font-extrabold gradient-text">
                    TIN TỨC - SỰ KIỆN - THÔNG BÁO
                </h1>
            </div>
            <div class="line-container">
                <div class="line-effect"></div>
                <div class="diamond"></div>
            </div>

            {/* list news */}
            <div className='list-news mt-16'>
                <div className='flex mx-56 space-x-4'>
                    <img src={event1} alt="" className='w-42 h-42 object-fit' />
                    <h1 className="text-2xl font-extrabold gradient-text">
                        THÔNG BÁO CHÍNH SÁCH THÁNG 02/2025
                    </h1>
                </div>
                <div className='flex mx-56 my-6 space-x-4'>
                    <img src={event2} alt="" className='w-42 h-42 object-fit' />
                    <h1 className="text-2xl font-extrabold gradient-text">
                        THÔNG BÁO CHÍNH SÁCH THÁNG 02/2025
                    </h1>
                </div>
                <div className='flex mx-56 space-x-4'>
                    <img src={event3} alt="" className='w-42 h-42 object-fit' />
                    <h1 className="text-2xl font-extrabold gradient-text">
                        THÔNG BÁO CHÍNH SÁCH THÁNG 02/2025
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default News