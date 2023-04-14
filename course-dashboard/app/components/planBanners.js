import React from 'react';
import "../css/banners.css"
import Image from 'next/image';
import iconBook from "../../public/images/iconBook.svg"
import iconPen from "../../public/images/iconPen.svg"
import iconHeadphone from "../../public/images/iconHeadphone.svg"
import iconVolume from "../../public/images/iconVolume.svg"
import dotsMenu from "../../public/images/dotsMenu.svg"

const PlanBanners = () => {
    return (
        <>
            <div className='d-flex mt-3'>
                <div className='col1'>
                    <div className='banner'>
                        <div className='d-flex  align-items-center'>
                            <div className='div1 d-flex justify-content-center align-items-center me-3'>
                                <Image className='img' src={iconBook} alt='book icon' />
                            </div>
                            <div className='me-5'>
                                <span className='text1'>Reading - Beginner Topic 1</span><br />
                                <span className='text2'>8:00 AM - 10:00 AM</span>
                            </div>
                            <Image src={dotsMenu} alt='menu' />
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='d-flex align-items-center'>
                            <div className='div2 d-flex justify-content-center align-items-center me-3'>
                                <Image className='img' src={iconHeadphone} alt='book icon' />
                            </div>
                            <div className='me-5'>
                                <span className='text1'>Reading - Beginner Topic 1</span><br />
                                <span className='text2'>8:00 AM - 10:00 AM</span>
                            </div>
                            <Image  src={dotsMenu} alt='menu' />
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='d-flex align-items-center'>
                            <div className='div3 d-flex justify-content-center align-items-center me-3'>
                                <Image className='img' src={iconVolume} alt='book icon' />
                            </div>
                            <div className='me-5'>
                                <span className='text1'>Reading - Beginner Topic 1</span><br />
                                <span className='text2'>8:00 AM - 10:00 AM</span>
                            </div>
                            <Image src={dotsMenu} alt='menu' />
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='d-flex align-items-center'>
                            <div className='div4 d-flex justify-content-center align-items-center me-3'>
                                <Image className='img' src={iconPen} alt='book icon' />
                            </div>
                            <div className='me-5'>
                                <span className='text1'>Reading - Beginner Topic 1</span><br />
                                <span className='text2'>8:00 AM - 10:00 AM</span>
                            </div>
                            <Image src={dotsMenu} alt='menu' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='banner'>
                        <div className='d-flex align-items-center'>
                            <div className='div5 d-flex justify-content-center align-items-center me-3'>
                                <Image className='img' src={iconPen} alt='book icon' />
                            </div>
                            <div className='me-5'>
                                <span className='text1'>Reading - Beginner Topic 1</span><br />
                                <span className='text2'>8:00 AM - 10:00 AM</span>
                            </div>
                            <Image src={dotsMenu} alt='menu' />
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='d-flex align-items-center'>
                            <div className='div6 d-flex justify-content-center align-items-center me-3'>
                                <Image className='img' src={iconVolume} alt='book icon' />
                            </div>
                            <div className='me-5'>
                                <span className='text1'>Reading - Beginner Topic 1</span><br />
                                <span className='text2'>8:00 AM - 10:00 AM</span>
                            </div>
                            <Image src={dotsMenu} alt='menu' />
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='d-flex align-items-center'>
                            <div className='div7 d-flex justify-content-center align-items-center me-3'>
                                <Image className='img' src={iconHeadphone} alt='book icon' />
                            </div>
                            <div className='me-5'>
                                <span className='text1'>Reading - Beginner Topic 1</span><br />
                                <span className='text2'>8:00 AM - 10:00 AM</span>
                            </div>
                            <Image src={dotsMenu} alt='menu' />
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='d-flex align-items-center'>
                            <div className='div8 d-flex justify-content-center align-items-center me-3'>
                                <Image className='img' src={iconBook} alt='book icon' />
                            </div>
                            <div className='me-5'>
                                <span className='text1'>Reading - Beginner Topic 1</span><br />
                                <span className='text2'>8:00 AM - 10:00 AM</span>
                            </div>
                            <Image src={dotsMenu} alt='menu' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlanBanners;
