

const Semester = ({number, data}) => {

  return (
      <div className='text-black p-5 bg-[#dadada] shadow-md'>
      <div className='text-[1.5rem] font-bold border-b border-[#383737]'>
        Semester {number}
      </div>
      <table className='table-auto'>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody className='[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-gray'>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.CourseCode}</td>
            <td>{item.Title}</td>
            <td>{item.Credits}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
  }
export default Semester;