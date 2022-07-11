import React from 'react';

import PageTitle from '../components/pagetitle';
import Team from '../features/team/home-v2';
import dataTeam from '../assets/fake-data/data-team';


function AboutOne(props) {
    return (
        <div className='about'>
            <PageTitle title='About Us' />


            <Team data={dataTeam} />

        </div>
    );
}

export default AboutOne;