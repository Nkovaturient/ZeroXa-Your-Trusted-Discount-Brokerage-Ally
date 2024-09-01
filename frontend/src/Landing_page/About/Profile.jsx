import React from 'react'

const Profile = ({img, name, position}) => {
  return (
    <div className="col-6 p-5 text-center">
          <img src={img} alt="Nitin Kamath" style={{borderRadius: '100%', width: '70%'}} />
          <h2 className='mt-4'>{name}</h2>
          <p className='text-muted'>{position}</p>
        </div>
  )
}

export default Profile