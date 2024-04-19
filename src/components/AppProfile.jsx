import '../App.css';
import Profile from './Profile';

function AppProfile() {
  return (
    <>
      <Profile 
        image='https://images.pexels.com/photos/14865644/pexels-photo-14865644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        name='tester1'
        title='프론트 개발자'
        isNew='true'
      />
      <Profile 
         image='https://images.pexels.com/photos/3238529/pexels-photo-3238529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
         name='tester2'
         title='백엔드 개발자'
      />
    </>
  )
  
}

export default AppProfile;
