import React from 'react'
import FlipCard from '../Components/FlipCard/FlipCard';

const BlogListing = () => {
  const testimonials = [
    {
      name: "Anika Sharma",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "VentureVista helped me plan my solo trip to Paris! The blog was super informative and beautiful.",
      location: "Delhi, India"
    },
    {
      name: "Luca Bianchi",
      photo: "https://randomuser.me/api/portraits/men/31.jpg",
      text: "The Bali travel tips were spot on. Loved the food recommendations and hidden beach suggestions!",
      location: "Milan, Italy"
    },
    {
      name: "Sarah Thompson",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "I used VentureVista’s Rome guide and it made my trip feel smooth and exciting.",
      location: "New York, USA"
    }
  ];

  return (
    <>
    {/* Banner section */}
      <section className='BlogbannerSection'>
        <div style={styles.bannerContainer}>
            <div style={styles.bannerOverlay}></div>
            <div style={styles.bannerText}>
              Start Your Journey with VentureVista
            </div>
        </div>
      </section>
      
      {/* flip card section */}
      <section className='FlipCardSection' style={{marginTop: "50px"}}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <FlipCard
        image="https://cdn.pixabay.com/photo/2019/02/21/19/00/paris-4011990_1280.jpg"
        title="Paris"
        description="Discover the romantic charm of Paris with its iconic landmarks and cozy cafés."
      />
      <FlipCard
        image="https://4.bp.blogspot.com/--IYHpKuqy5o/UiIAiPpEkkI/AAAAAAAAPQs/M9YAZvYx48c/s1600/+Brooklyn+Bridge++(3).jpg"
        title="New York"
        description="The city that never sleeps, filled with iconic landmarks, buzzing streets, and endless energy."
      />
      <FlipCard
        image="https://tse2.mm.bing.net/th/id/OIP.17GERLaCGVFYv14mVenPYQHaFG?rs=1&pid=ImgDetMain&o=7&rm=3"
        title="Rome"
        description="A timeless city of ancient ruins, art, and romance — where every corner whispers history."
      />
    </div>
    </section>

    <section>
      <div className='testimonialSection' style={{margin: "50px 0px"}}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>What Our Readers Say</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          {testimonials.map((t, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '20px',
              maxWidth: '300px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <img src={t.photo} alt={t.name} style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '15px' }} />
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>"{t.text}"</p>
              <h5 style={{ marginTop: '15px', fontWeight: 'bold' }}>{t.name}</h5>
              <span style={{ fontSize: '0.85rem', color: '#777' }}>{t.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
     
    
  )
}
const styles = {
  bannerContainer: {
    backgroundImage: "url('https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Travel-Backgrounds-Download-HD.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '400px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    color: '#fff',
    textAlign: 'center'
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // dark overlay for better text readability
    zIndex: 1
  },
  bannerText: {
    zIndex: 2,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
    padding: '0 20px'
  }
};

export default BlogListing;