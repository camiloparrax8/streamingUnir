import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';

export const NotFound = () => {
  return (
    <div className='container-streaming'>
      <div className='not-found-page'>
        <FontAwesomeIcon icon={faFaceSadTear}></FontAwesomeIcon>
        <h1>404</h1>
        <h3>Página no encontrada</h3>
      </div>
    </div>
  )
}
