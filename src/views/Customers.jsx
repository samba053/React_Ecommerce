import axios from 'axios';
import { useEffect, useState } from 'react';
import AddCustomer from '../components/AddCustomer';
import EditCustomer from '../components/EditCustomer';




function Custemers() {
  const[isAddCustomerVisible, setIsAddCustomerVisible] = useState(false);
  const[isEditCustomerVisible,setIsEditCustomerVisible] = useState(false)

  useEffect(() => {
    getAllCustomers();

  }, []);
  const getAllCustomers = async () => {
    try {
      const respone = await axios.get('http://localhost:3000/customers');
      console.log(respone.data);
     } catch (error) {

    }

  }

  return (
    <div>
      <div className='flex justify-end'>

        <button className='bg-blue-500 text-white py-1 px-10 rounded' onClick={ ()=>setIsAddCustomerVisible(true)}>+Add Customer</button>


      </div>
      <h1></h1>
      {isAddCustomerVisible && <AddCustomer setIsAddCustomerVisible={setIsAddCustomerVisible}/>}
      {isEditCustomerVisible && <EditCustomer setIsEditCustomerVisible={setIsEditCustomerVisible}/>}
    </div>
  )
    
          
      
}
export default Custemers;