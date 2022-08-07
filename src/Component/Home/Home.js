import React from 'react';
import Notice from '../Header.js/Notice';
import RequestHistory from './RequestHistory';
import Wallet from './Wallet';

const Home = () => {
    return (
        <>
            <Notice></Notice>
            <div className='bg-blue-500'>
                <div className="max-w-7xl mx-auto">
                    <div className='py-6'>
                    <h1 className='text-4xl font-bold'>Request testent Link</h1>
                    <p className='w-full md:w-1/2 mt-5'>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
                    </div>
                    <Wallet></Wallet>
                    <RequestHistory></RequestHistory>
                </div>
            </div>
        </>
    );
};

export default Home;