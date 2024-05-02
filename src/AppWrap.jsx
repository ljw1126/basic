import React from 'react';

export default function AppWrap() {
  return (
    <div> 
      <Navbar>
        <Avatar 
          image='https://images.pexels.com/photos/14865644/pexels-photo-14865644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          name='tester'
          size={200}
        />
         <p>안녕하세요</p>
      </Navbar>
     
    </div>
  )
}

function Navbar(props) { // props.children , 구조 분해 할당
  return (<header style={{backgroundColor: 'yellow'}}>{props.children}</header>);
}

function Avatar({image, name, size}) {
  return (
    <div>
      <img src={image}
          alt={`${name}`}
          width={size}
          height={size}
          style={{borderRadius: '50%'}}
          />
    </div>
  );
}