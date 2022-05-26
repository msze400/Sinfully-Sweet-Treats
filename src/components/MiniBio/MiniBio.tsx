import React, { FC } from 'react';


interface MiniBioProps {}

const MiniBio: FC<MiniBioProps> = () => (
<div className="grid grid-cols-6 minibio mt-8">
  <div className="col-span-2 col-start-2">
    <h1 className='text-4xl text-left'>
      Home Made New Jersey Cottage Desserts 
     for Any Occasion
    </h1>
    <br></br>
    </div>
  <div className='text-center'>Made With Love</div>
  <div>And Care</div>
    <div className='col-start-2 col-span-2 text-lg'>
      Sinfully Sweet treats is dedicated to providing friends and family with a great selection of sweets and treats. Perfect for catered events to kiddies birthday parties! 
      </div>
</div>
);

export default MiniBio;
