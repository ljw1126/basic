import React from 'react';

export default function AppCard() {
  return (
    <>
      <Card>
        <p>카드1</p>
      </Card>

      <Card>
        <h1>카드2</h1>
        <p>설명</p>
      </Card>
    </>
  )
}

function Card({children}) { // props.children 구조 할당
  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center'
      }}
    >
      {children}
    </div>
  )
}