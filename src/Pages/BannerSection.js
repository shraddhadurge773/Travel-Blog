import React from 'react'
// import banner_video from '../assets/banner_video.mp4'
import banner_video2 from '../assets/banner_video2.mp4'

const BannerSection = () => {
  return (
    <section className='bannerSection'>
        <div className='video-container position-relative vh-100'>
            <video
            className="video-bg"
            autoPlay
            loop
            muted
            >
            <source src= {banner_video2} type="video/mp4"/>
            </video>
            {/* content */}
            <div className="container position-absolute top-50 start-50 translate-middle text-center text-white">
                <h1 className="display-3 fw-bold">EXPLORE. DREAM. DISCOVER.</h1>
                <p className="lead">This is a world travel blog featuring beautiful destinations, new experiences, and hidden places around the globe. <br></br><br></br>Please tag along!</p>
                <button>START EXPLORING</button>
            </div>
        </div>
    </section>
  )
}

export default BannerSection;