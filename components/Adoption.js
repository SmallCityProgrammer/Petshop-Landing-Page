import React from 'react';

import Image from 'next/image';

import Img1 from '../public/img/adoption/img1.png'

const Adoption = () => {
  return <section className='bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex'>
    <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16'>
      {/* image */}
      <div className='flex-1 mb-6 lg:mb-0'>
        <Image src={Img1} width={542} height={560} alt='' />
      </div>
      {/* text */}
      <div className='flex-1'>
        <h2>Making pet parenting easy for everyone</h2>
        <p>lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. 
        </p>
        <ul>
          <li>Adoption</li>
          <li>Frozen Raw</li>
          <li>Next Day Delivery</li>
        </ul>
        <button className='btn btn-primary mx-auto lg:mx-0'>Explore</button>
      </div>
    </div>
  </section>;
};

export default Adoption;
