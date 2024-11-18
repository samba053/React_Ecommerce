import { useForm } from "react-hook-form";
import axios from 'axios'; // Don't forget to import axios

function EditCustomer(props) {
    const { setIsEditCustomerVisible } = props;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const registerCustomer = async (formValues) => {
        console.log(formValues);
        try {
            const response = await axios.put('http://localhost:3000/customers', formValues);
            setIsEditCustomerVisible(false);
        } catch (error) {
            console.error("Error registering customer:", error);
        }
    }

    return (
        <div>
            <form className="max-w-md mx-auto p-4 border rounded-lg shadow-md" onSubmit={handleSubmit(registerCustomer)}>
                <h2 className="text-2xl font-bold mb-4">Add Customer</h2>
                <button className="bg-red-500 text  px-2 py-1 rounded me-2">Edit</button>
                
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        {...register('name',{required : 'Name is Required', minLength:{value:3, message:' Minimum 3 charcter'}})} // Correct usage here
                        type="text"
                        name="name"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                       
                    />
                    <p className="text-red-500">{errors['name']?.message}</p>
                   
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        {...register('email')} // Changed 'Email' to 'email'
                        type="email"
                        id="email"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                        {...register('age')} // Changed 'Age' to 'age'
                        type="number"
                        id="age"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                        required
                    />
                    {errors.age && <p className="text-red-500 text-xs">{errors.age.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        {...register('location')} // Changed 'Location' to 'location'
                        type="text"
                        id="location"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                        required
                    />
                    {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
                </div>

                <button
                    type="button"
                    className="w-full bg-gray-300 text-gray-800 font-bold py-2 rounded hover:bg-gray-400 transition duration-200"
                    onClick={() => setIsEditCustomerVisible(false)}>
                    Cancel
                </button>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200">
                    Submit
                </button>

            </form>
            
        </div> 
    );
}

export default EditCustomer;
