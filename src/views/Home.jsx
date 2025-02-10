import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {

    const {role} = useSelector(state => state.auth)

    return (
        <div>
           <h1>Home page 222 </h1>
        </div>
    );
};

export default Home;