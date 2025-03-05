import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProviders';


const Home = () => {
  
    const authInfo = useContext(AuthContext);
    console.log(authInfo);
  
    const fakeData = [
        { id: 1, title: 'Item 1', description: 'This is the description for item 1.' },
        { id: 2, title: 'Item 2', description: 'This is the description for item 2.' },
        { id: 3, title: 'Item 3', description: 'This is the description for item 3.' },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f8ff', flexDirection: 'column' }}>
            <h1 style={{ color: '#333', fontSize: '3rem', marginBottom: '20px' }}>Welcome to the Home Section</h1>
            <p style={{ color: '#666', fontSize: '1.5rem', textAlign: 'center', maxWidth: '600px' }}>
                This is a beautiful home section with a welcoming message and a pleasant background color.
            </p>
            <div style={{ marginTop: '20px', width: '80%', maxWidth: '800px' }}>
                {fakeData.map(item => (
                    <div key={item.id} style={{ backgroundColor: '#fff', padding: '20px', marginBottom: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s' }} 
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        <h2 style={{ color: '#333', fontSize: '2rem' }}>{authInfo.username}</h2>
                        <p style={{ color: '#666', fontSize: '1.2rem' }}>{authInfo.password}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;