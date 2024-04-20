import React, {useState} from "react";
import './AppXY.css';

export default function AppXY() {
    const [position, setPosition] = useState({x: 0, y: 0});

    return (
        <div className="container" onPointerMove={(e) => {
            setPosition({x: e.clientX, y: e.clientY});
            // 수평으로만 이동 가능하다면
            // setPosition(prev => ({x: e.clientX, y: prev.y}))
            // 만약 z 축만 이동한다면 spread operator 사용해서 아래와 같이 필요한 부분만 재정의 가능
            // setPosition(prev => ({...prev, z: e.clientZ}))
        }}>
            <div className='pointer'
                 style={{
                     transform: `translate(${position.x}px, ${position.y}px)`
                 }}
            />
        </div>
    )
}
