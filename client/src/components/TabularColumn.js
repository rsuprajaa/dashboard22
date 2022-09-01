import { Table, Tag } from 'antd';
import { useHistory } from 'react-router-dom';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Year Founded',
      dataIndex: 'year_founded',
      key: 'year_founded',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
        title: 'No. of students',
        dataIndex: 'no_of_students',
        key: 'no_of_students',
    },
    {
        title: 'Courses',
        dataIndex: 'courses',
        key: 'courses',
        render: (_, { courses }) => (
          <>
            {courses.map((course) => {
              let color = 'geekblue';
    
              if (course === 'IT') {
                color = 'volcano';
              }else if(course === 'Civil Engineering'){
                color = 'orange'
              }else if(course === 'Computer Science'){
                color = 'black'
              }else if(course === 'Mechanical Engineering'){
                color = 'green'
              }else if(course === 'BioTech Engineering'){
                color = 'brown'
              }else if(course === 'Maths'){
                color = 'gray'
              }else if(course === 'Physics'){
                color = 'magenta'
              }
    
              return (
                <Tag color={color} key={course}>
                  {course.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
    
    },
  ];


const TabularColumn = ({colleges}) => {
    const history = useHistory()
    const redirect = (record) => {
      history.push(`/college/${record._id}`)
    }  
    console.log(colleges)
    return(
        <>
          <Table 
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {redirect(record)},
            };
          }}
          columns={columns} dataSource={colleges} />
        </>
      )
}

export default TabularColumn