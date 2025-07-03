import React from 'react'
import { useNavigate } from 'react-router-dom';
import BannerSection from './BannerSection';
import USA_Today from '../assets/USA_Today.jpg';
import NBC_News from '../assets/NBC_News.png';
import BBC_Travel from '../assets/BBC_Travel.jpg';
import Travel_Leisure from '../assets/Travel_Leisure.jpg';
import Time_history from '../assets/Time_history.jpg';
//  Import category images properly:
import BeachesImg from '../assets/beaches.jpg';
import MountainImg from '../assets/mountain.avif';
import CitiesImg from '../assets/cities.jpg';
import AdventureImg from '../assets/adventure.jfif';
// popular destination
import BaliImg from '../assets/bali.jpg';
import ParisImg from '../assets/paris.jpg';
import DubaiImg from '../assets/dubai.jpg';
import SingaporeImg from '../assets/singapore.jpg';

const Home = () => {
  const navigate = useNavigate();
  const handleDestinationClick = (name) => {
    navigate(`/traveldescription/${name.toLowerCase()}`);
  };
  
  const categories = [
    { name: "Beaches", image: BeachesImg },
    { name: "Mountain", image: MountainImg },
    { name: "Cities", image: CitiesImg },
    { name: "Adventure", image: AdventureImg },
  ];
  const  popular_destination= [
    { name: "Bali", image: BaliImg},
    { name: "Paris", image: ParisImg},
    { name: "Dubai", image: DubaiImg},
    { name: "Singapore", image: SingaporeImg},
  ];
  return (
    <div>
      <BannerSection/>
      <section className='featured_section mt-5 pt-3'>
        <div className='CustContainer'>
            <h1 className='fw-bold'>Featured</h1>
            <div className='featured_new_img'>
              <img src={USA_Today} alt="Logo" width="140" height="111" />
              <img src={NBC_News} alt="Logo" width="140" height="111" />
              <img src={Time_history} alt="Logo" width="140" height="111" />
              <img src={BBC_Travel} alt="Logo" width="140" height="111" />
              <img src={Travel_Leisure} alt="Logo" width="140" height="111" />
            </div>
        </div>
      </section>

      {/* categories Section */}
      <section className='categories_section pt-3 mt-5'>
      <div className='container'>
        <h1 className='fw-bold mb-4'>Categories</h1>
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={category.image}
                  alt={category.name}
                  className="card-img-top"
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                <h5 className="card-title">{category.name}</h5>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
           
      {/* Popular Destination Section */}
      <section className='popular_destination pt-3 mt-5'>
      <div className='container'>
        <h1 className='fw-bold mb-4'>Popular Destination</h1>
        <div className="row">
          {popular_destination.map((destination, index) => (
            <div key={index} className="col-md-3 mb-4" onClick={() => handleDestinationClick(destination.name)}
            style={{ cursor: 'pointer' }}>
              <div className="card h-100 shadow-sm">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="card-img-top"
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                <h5 className="card-title">{destination.name}</h5>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  )
}

export default Home;