import React from 'react'
import image1 from '../../assets/images/img_0.jpg'
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
                    <img src={image1} alt="" className='w-42 h-42 object-cover' />
                    <h1 className="text-2xl font-extrabold gradient-text">
                        THÔNG BÁO CHÍNH SÁCH THÁNG 02/2025
                    </h1>
                </div>
                <div className='flex mx-56 my-6 space-x-4'>
                    <img src={image1} alt="" className='w-42 h-42 object-cover' />
                    <h1 className="text-2xl font-extrabold gradient-text">
                        THÔNG BÁO CHÍNH SÁCH THÁNG 02/2025
                    </h1>
                </div>
                <div className='flex mx-56 my-6 space-x-4'>
                    <img src={image1} alt="" className='w-42 h-42 object-cover' />
                    <h1 className="text-2xl font-extrabold gradient-text">
                        THÔNG BÁO CHÍNH SÁCH THÁNG 02/2025
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default News