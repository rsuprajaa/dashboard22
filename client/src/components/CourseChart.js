import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const CourseChart = () => {
  const [count, setCount] = useState([])
  const history = useHistory()
  useEffect(() => {
    const fetchItems = async()=>{
        const result = await axios.get(`api/colleges/count/courses`)
        setCount(result.data)
    }
    fetchItems()
  }, [])

  const config = {
    appendPadding: 10,
    data: count,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.5,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },  
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,      
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: "",
      },
    }
  }

  return (
    <>
    {count && <Pie {...config} onReady= {(plot) => {
            plot.on('element:click', (evt) => {
            const {data} = evt
            const course = data.data.type
            history.push(`/course/${course}`)
        });
    }}
    />}
    </>
    )
};

export default CourseChart