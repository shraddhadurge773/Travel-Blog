import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const TravelDescription = () => {
  const { name } = useParams();
  const API_URL = `https://dummyjson.com/c/7405-d0f7-45fb-80c1`

  const [travelData, setTravelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch travel data');
        }
        return response.json();
      })
      .then((data) => {
        let found = null;

        // ✅ Update this part to look into blogs array
        if (Array.isArray(data.blogs)) {
          found = data.blogs.find(
            (item) => item.name?.toLowerCase() === name.toLowerCase()
          );
        }

        setTravelData(found || null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [API_URL, name]);


  return (
    <div className="container mt-5">
      <h1 className="fw-bold text-capitalize">{name} Travel Guide</h1>
      <p>This is the travel guide page for {name}.</p>
      <div>
        {loading && <p>Loading travel information...</p>}
        {error && <p className="text-danger">Error: {error}</p>}
        {travelData ? (
          <div className="mt-4">
            {/* <h2>Travel Information</h2> */}
            <div style={{ background: 'transparent', padding: '1rem', borderRadius: '5px' }}>
             {travelData?.description && (
              <div className="mt-3 d-flex" style={{justifyContent: "center"}}>
                <img src={travelData.image} alt={travelData.name} width="100%" height="auto" style={{maxWidth: "560px"}} />
                <p style={{fontSize: "20px",lineHeight: "30px",color: "#000000",textAlign: "left",padding: "30px 15px 30px 15px"}}>{travelData.description} <br></br><br></br>Explore iconic landmarks, savor local cuisine, and immerse yourself in the vibrant atmosphere of this incredible place.<br></br><br></br>"A perfect blend of adventure, relaxation, and tradition awaits in this unforgettable destination."</p>
                
              </div>
            )}
            </div>
            

          </div>
        ) : (
          !loading && !error && (
            <p>No travel information found for "{name}".</p>
          )
        )}
      </div>
    </div>
  )
};

export default TravelDescription;