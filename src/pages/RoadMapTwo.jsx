import React from 'react';
import dataRoadmap from '../assets/fake-data/data-history';
import PageTitle from '../components/pagetitle';
import RoadMap from '../features/roadmap/home-v3';
import Collectables from '../features/Collectables/home-v2';
import dataCollectables from '../assets/fake-data/data-Collectables';


function RoadMapTwo(props) {
    return (
        <div className='page-roadmap-v2'>
            <PageTitle title='Account' />

            <Collectables data={dataCollectables} />

            <RoadMap data={dataRoadmap} />
        </div>
    );
}

export default RoadMapTwo;