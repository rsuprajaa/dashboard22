import { Table, Tag } from 'antd';
import { useHistory } from 'react-router-dom';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Batch',
      dataIndex: 'year_of_batch',
      key: 'year_of_batch',
    },
    {
        title: 'Skills',
        dataIndex: 'skills',
        key: 'skills',
        render: (_, { skills }) => (
          <>
            {skills.map((skill) => {
              let color = 'geekblue';
    
              if (skill === 'C++') {
                color = 'volcano';
              }else if(skill === 'C'){
                color = 'orange'
              }else if(skill === 'Python'){
                color = 'purple'
              }else if(skill === 'javascript'){
                color = 'green'
              }
    
              return (
                <Tag color={color} key={skill}>
                  {skill.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
    },
  ];


const StudentsTable = ({students}) => {
    const history = useHistory()
    const redirect = (record) => {
      history.push(`/student/${record._id}`)
    }  
    return(
        <>
          <Table 
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {redirect(record)},
            };
          }}
          columns={columns} dataSource={students} />
        </>
      )
}

export default StudentsTable