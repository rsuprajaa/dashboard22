import React, {useState, useEffect} from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios'
import { Card } from 'antd';
import StudentsTable from './../components/StudentsTable';
import Container from './../components/Container';
import { Typography } from 'antd';
import TabularColumn from './../components/TabularColumn';

const {Title} = Typography

const College = () => {
    const [college, setCollege] = useState()
    const [students, setStudents] = useState()
    const [nearbyColleges, setNearbyColleges] = useState()
    const history = useHistory()
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    useEffect(()=>{
        const fetchCollege = async()=>{
            const result = await axios.get(`api/colleges/${id}`)
            setCollege(result.data)
        }
        fetchCollege()
        const getStudents = async()=>{
            const result = await axios.get(`api/students/college/${id}`)
            setStudents(result.data)
        }
        getStudents()
    }, [history, id])
    useEffect(()=>{
        const getCollegesbyState = async()=>{
            const result = await axios.get(`api/colleges/find/location/${college.state}`)
            setNearbyColleges(result.data)
        }
        if(college){
            getCollegesbyState()
        }
    }, [college])
    return(
        <Container>
            
            {
                college && (
                    <>
                    <Title level = {2}>{college.name}</Title>
                    <Card title={`${college.name}`} style={{ width: 600 }}>
                        <p><strong>City: </strong>{college.city}</p>
                        <p><strong>State: </strong>{college.state} , {college.country}</p>
                        <p><strong>Courses: </strong>{college.courses.join(", ")}</p>
                        <p><strong>Year founded: </strong>{college.year_founded}</p>
                        <p><strong>Number of Students: </strong>{college.no_of_students}</p>
                    </Card>
                    </>
                )
            }
            {
                students && (
                    <>
                    <StudentsTable students = {students}/>
                    </>
                )
            }{
                college && <>
                <Title level = {2} style = {{textAlign: "center"}}>Colleges in {college.state}</Title>
                <TabularColumn colleges={nearbyColleges}/>
                </>
            }
        </Container>
    )
}

export default College