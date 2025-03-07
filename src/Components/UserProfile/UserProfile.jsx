import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProviders';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(() => {
                console.log('User logout successfully');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                {
                    user && <div>
                        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
                        <p className="text-gray-700">{user.email}</p>
                        <button className='w-[150px] h-[50px] text-[20px] font-bold text-red-500' onClick={handleLogout}>Logout</button>
                    </div>
                }
                {
                    !user && <Link to="/login"><button className='w-[150px] h-[50px] text-[20px] font-bold text-green-500'>Please login</button></Link>
                }
            </div>
        </div>
    );
};

export default UserProfile;