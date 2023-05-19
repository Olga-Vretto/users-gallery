import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Photos.css';

const Photos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).then((res) => {
      setPhotos(res.data);
    });
    setIsLoaded(false);
  }, [albumId]);

  return (
    <div className='main'>
      <div className='main-div'>
        <h2 className='main-title'>Photos</h2>
        <div className='buttons'>
          <button className='btn' onClick={() => navigate(-1)}>
            Back
          </button>
          <Link to={'/'} className='btn'>
            Home
          </Link>
        </div>
      </div>
      {isLoaded ? (
        <div className='loader'></div>
      ) : (
        photos.map((photo) => (
          <div className='main-info photo' key={photo.id}>
            <img className='img' src={photo.url} alt={photo.title} />
            <p className='img-text'>{photo.title}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Photos;
