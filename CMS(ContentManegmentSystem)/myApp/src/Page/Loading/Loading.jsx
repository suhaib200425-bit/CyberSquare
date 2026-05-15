import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
    return (
        <div className="flex item-center h-screen">
            <DotLottieReact
                src="https://lottie.host/29529c08-6d70-47bd-bc9a-e2c417a418b8/EhyNBgLkuQ.lottie"
                loop
                autoplay
            />
        </div>
    );
};

export default Loading