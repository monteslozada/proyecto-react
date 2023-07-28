


import React from 'react';
  import { useParams } from 'react-router-dom';
  import { NavLink } from 'react-router-dom';
 import Swal from 'sweetalert2';
  const Checkout = () => {
    const { orderId } = useParams(); 
  
    return (
      Swal.fire({
        icon: 'success',
        title: 'Gracias por tu compra',
        text: 'Tu número de orden es:',
        footer: `${orderId}`      }),


        <NavLink to='/'>
           <button className='button is-info'>volver al inicio</button>
         </NavLink>
            


    );
  };
  
  export default Checkout;
  