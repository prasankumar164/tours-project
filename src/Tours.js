import React from 'react';
import Tour from './Tour';
const Tours = ({data,removeTour}) => {
  return <section>
    <div className="title">
        <h2>Total tours : {data.length}</h2>
        <div className="underline"></div>
      </div>
      <div>
         {
           data.map((data) => {
             return <Tour key={data.id} {...data} removeTour={removeTour} />
           })
         }
      </div>
  </section>
};

export default Tours;
