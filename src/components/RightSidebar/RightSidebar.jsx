import React from 'react';
import './RightSidebar.css'; 
import assets from '../../assets/assets';

const RightSidebar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
        <img src={assets.profile_img} alt='' />
        <h3>
          REEED <img src={assets.green_dot} className='dot' alt='' />
        </h3>
        <p>3aslema</p>
      </div>
      
      <hr />
      
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="Media 1" />
          <img src={assets.pic2} alt="Media 2" />
          <img src={assets.pic3} alt="Media 3" />
          <img src={assets.pic4} alt="Media 4" />
        </div>
      </div>
      
      <button>Log out</button>
    </div>
  );
};

export default RightSidebar;
