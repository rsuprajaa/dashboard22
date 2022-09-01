import React, {useState, useEffect} from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios'
import TabularColumn from '../components/TabularColumn';
import Container from './../components/Container';
import { Typography } from 'antd';

const {Title} = Typography

const Course = () => {
    const [colleges, setColleges] = useState([])
    const history = useHistory()
    const location = useLocation()
    const courseName = location.pathname.split("/")[2]
    console.log(courseName)
    useEffect(()=>{
        const fetchItem = async()=>{
            const result = await axios.get(`api/colleges/find/courses/${courseName}`)
            setColleges(result.data)
        }
        fetchItem()
        console.log(colleges)
    }, [history])
    return(
        <Container>
            <Title level = {2} style = {{textAlign: "center"}}>Colleges with {courseName}</Title>
           <TabularColumn colleges={colleges}/>
        </Container>
    )
}

export default Course