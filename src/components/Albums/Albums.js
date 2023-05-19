import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Albums.css';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`).then((response) => {
      setAlbums(response.data);
    });
    setIsLoaded(false);
  }, [userId]);

  return (
    <div className='main'>
      <div className='main-div'>
        <h2 className='main-title'>Albums</h2>
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
        albums.map((album) => (
          <div key={album.id} className='main-info'>
            <h4 className='album-title'>Album: </h4>
            <p className='album-text'>{album.title}</p>
            <Link to={`/albums/${album.id}/photos`} className='link'>
              Photos
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Albums;
