import React from 'react'
import TabularColumn from '../components/TabularColumn'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Container from './../components/Container';
import { Typography } from 'antd';

const {Title} = Typography

const Home = () => {
    const [colleges, setColleges] = useState([])
    useEffect(() => {
        const fetchItems = async()=>{
            const result = await axios.get(`api/colleges`)
            setColleges(result.data)
        }
        fetchItems()
    }, [])
    return(
        <Container> 
            <Title level = {2} style = {{textAlign: "center"}}>All colleges</Title>
            <TabularColumn colleges = {colleges}/>
        </Container>
    )
}

export default Home