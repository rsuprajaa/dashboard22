import React, {useState, useEffect} from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios'
import TabularColumn from '../components/TabularColumn';
import Container from './../components/Container';
import { Typography } from 'antd';

const {Title} = Typography

const State = () => {
    const [state, setState] = useState([])
    const history = useHistory()
    const location = useLocation()
    const stateName = location.pathname.split("/")[2]
    console.log(stateName)
    useEffect(()=>{
        const fetchItem = async()=>{
            const result = await axios.get(`http://localhost:5000/api/colleges/find/location/${stateName}`)
            setState(result.data)
        }
        fetchItem()
        console.log(state)
    }, [history])
    return(
        <Container>
            <Title level = {2} style = {{textAlign: "center"}}>Colleges in {stateName}</Title>
           <TabularColumn colleges={state}/>
        </Container>
    )
}

export default State