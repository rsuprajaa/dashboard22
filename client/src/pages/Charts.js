import React from 'react'
import CourseChart from '../components/CourseChart';
import StateChart from './../components/StateChart';
import Container from './../components/Container';
import { Typography } from 'antd';

const {Title} = Typography

const Charts = () => {
    return(
        <Container>
            <Title level = {3} style = {{textAlign: "center"}}>State-wise data</Title>
            <StateChart/>
            <Title level = {3} style = {{textAlign: "center"}}>Course-wise data</Title>
            <CourseChart/>
        </Container>
    )
}

export default Charts