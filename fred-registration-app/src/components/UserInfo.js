import Icon from '@mdi/react';
import styles from './UserInfo.module.css'; // Import CSS module
import { mdiAccount } from '@mdi/js';

const UserInfo = ({classname}) => {
  //const { user } = useAuth0();
  return (
    <div className={`${classname} ${styles.container}`}>
        <div className={styles.info}>
            {/*<img src={user.picture} alt={user.name} />*/}
            <Icon path={mdiAccount} title="User Profile" size={2} />
            {/*<h2>{user.name}</h2>*/}
            {/*<p>{user.email}</p>*/}
            User Name
        </div>
      
    </div>
  );
}


export default UserInfo;