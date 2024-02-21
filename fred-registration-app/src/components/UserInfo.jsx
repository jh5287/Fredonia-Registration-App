import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

const UserInfo = ({classname, handleShowCGPA}) => {

  return (
    <div className={`${classname}  my-3 flex justify-between items-center`}>
        <div className='flex flex-col'>
            <Icon path={mdiAccount} title="User Profile" size={2} />
            Jane Roe
        </div>
     <div>
        <button onClick={() => handleShowCGPA()} className='py-3 px-5 bg-blue-500 text-white rounded-md'>Show CGPA</button>
     </div>
      
    </div>
  );
}


export default UserInfo;