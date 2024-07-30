import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Stores.css';

const Stores = () => {
  const [data, setData] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    fetch('/api/stores.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleStateClick = (state) => {
    setSelectedState(selectedState === state ? null : state);
    setSelectedDistrict(null);
  };

  const handleDistrictClick = (district) => {
    setSelectedDistrict(selectedDistrict === district ? null : district);
  };

  return (
    <div className="container">
      {data && (
        <>
          <div className="country">
            <h1>{data.country}</h1>
          </div>
          <div className="states">
            {data.states.map((state) => (
              <div key={state.name} className="state-item">
                <button className="btn btn-danger state-button" onClick={() => handleStateClick(state)}>
                  {state.name} {selectedState === state ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {selectedState === state && (
                  <div className="districts">
                    {state.districts.map((district) => (
                      <div key={district.name}>
                        <button className="btn btn-light district-button" onClick={() => handleDistrictClick(district)}>
                          {district.name} {selectedDistrict === district ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {selectedDistrict === district && (
                          <div className="stores">
                            {district.stores.length > 0 ? (
                              district.stores.map((store) => (
                                <div className="card mb-3 store-card" key={store.name}>
                                  <img src={store.image} className="card-img-top" alt={store.name} />
                                  <div className="card-body">
                                    <h5 className="card-title">{store.name}</h5>
                                    <p className="card-text">{store.phone}</p>
                                    <p className="card-text">{store.address}</p>
                                    <a
                                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn btn-primary see-location-button"
                                    >
                                      See Location
                                    </a>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p>No stores available in this district.</p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Stores;
