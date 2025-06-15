import Lottie from 'lottie-react';
import React from 'react';
import load from '../jsonFile/circelloader.json'

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center mx-auto'>
            <Lottie className='lg:w-96 md:w-72 w-64 ' animationData={load} />
        </div>
    );
};

export default Loading;