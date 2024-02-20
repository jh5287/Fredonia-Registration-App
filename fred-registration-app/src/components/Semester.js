

const Semester = ({number, data}) => {
  console.log('DATA INSIDE SEM COMPONENT', data);
  console.log('CourseCodde INSIDE SEM COMPONENT', data[0].CourseCode);
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
            <th className="w-20">Credits</th>
          </tr>
        </thead>
        <tbody className='[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-gray'>
         {data.map((item, index) => (
          <tr>
            <td>{item.CourseCode}</td>
            <td>{item.Title}</td>
            <td className='text-center'>{item.Credits}</td>
        </tr>))}
        </tbody>
      </table>
    </div>
  )
  }
export default Semester;