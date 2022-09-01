import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { Card } from 'antd';
import Container from './../components/Container';
import { Typography } from 'antd';

const {Title} = Typography

const Student = () => {
    const [student, setStudent] = useState()
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    useEffect(()=>{
        const getStudent = async()=>{
            const result = await axios.get(`api/students/${id}`)
            setStudent(result.data)
        }
        getStudent()
        console.log(student)
    }, [id])
    return(
        <Container>
            {
                student && (
                    <>
                    <Title level = {2}>{student.name}</Title>
                    <Card title={`${student.name}`} style={{ width: 600 }}>
                        <p><strong>Skills: </strong>{student.skills.join(", ")}</p>
                        <p><strong>Batch: </strong>{student.year_of_batch}</p>
                    </Card>
                    </>
                )
            }
        </Container>
    )
}

export default Student