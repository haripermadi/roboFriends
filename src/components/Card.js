import React from 'react'


const Card = ({ id, name, username, email }) => {
  return (
    <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5" style={{ backgroundColor: '#00DBDE' }}>
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robo" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card