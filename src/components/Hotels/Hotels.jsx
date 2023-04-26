import React, { useEffect, useState } from 'react';
import Hotel from './Hotel';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Hotels = () => {

    // const [hotels , setHotels] = useState([]);
    // // console.log(hotels);
    // useEffect( ()=>{
    //     fetch('http://localhost:5000/hotels')
    //     .then(res => res.json())
    //     .then(data =>setHotels(data))
    // },[])

    const data = useLoaderData();
    // console.log(data);

    return (
       <div>
         <div className="cards" >
            {
                data.map(hotel=> 
                <Hotel hotel={hotel} 
                key={hotel.id}>
                </Hotel>)
            }
        </div>
        <div className='mt-4'>
        <Footer></Footer>
        </div>
       </div>
    );
};

export default Hotels;