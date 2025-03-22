import React from 'react'
import Section01 from '../../components/Section01/Section01'
import tuVanCaiDat from '../../assets/tu van cai dat.png'
import tuVanCaiDat2 from '../../assets/tu van cai dat 2.png'
const Benefit = () => {
    return (
        <div className='bg-black'>
            {/* section1 */}
            <section className='flex justify-center items-center'>
                <div className='w-6/7 flex items-center justify-center'>
                    <Section01 />
                </div>
            </section>

            <div className='flex justify-center items-center mx-4'>
                <div>
                    <img src={tuVanCaiDat} alt="tu van cai dat" />
                </div>
                <div>
                    {/* <h1>TƯ VẤN VÀ HỖ TRỢ CÀI ĐẶT CÁC PHẦN MỀM HỖ TRỢ LIVESTEAM</h1> */}
                    <img src={tuVanCaiDat2} alt="tu van cai dat 2" />
                </div>
            </div>
        </div>
    )
}

export default Benefit