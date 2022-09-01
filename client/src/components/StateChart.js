import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const StateChart = () => {
  const [count, setCount] = useState([])
  const history = useHistory()
  useEffect(() => {
    const fetchItems = async()=>{
        const result = await axios.get(`api/colleges/count/state`)
        setCount(result.data)
    }
    console.log(count)
    fetchItems()
  }, [])

  const config = {
    appendPadding: 10,
    data: count,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'outer',
      content: function content(_ref) {
        return ''.concat(_ref.value, '%');
      },
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };

  return (
    <>
    {count && <Pie {...config} onReady= {(plot) => {
            plot.on('element:click', (evt) => {
            const {data} = evt
            const state = data.data.type
            history.push(`/state/${state}`)
        });
    }}/>}
    </>
  );
};

export default StateChart