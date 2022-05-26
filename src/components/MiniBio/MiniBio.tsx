import React, { FC } from 'react';


interface MiniBioProps {}

const MiniBio: FC<MiniBioProps> = () => (
<div className="grid grid-cols-4 minibio">
  <div className="col-span-2">
    <h1 className='text-4xl text-right pr-9'>
      Home made New Jersey Cottage Law, 
      <br></br> for Pickup
    </h1>
    <br></br>
    <h2>Sinfully Sweet treats is dedicated to providing friends and family with a great selection of sweets and treats. Perfect for catered events to kiddies birthday parties! </h2>
    </div>
  <div>Made With Love</div>
  <div>And Care</div>
</div>
);

export default MiniBio;
