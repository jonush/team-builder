import React, { useState } from 'react'

function Member({ details }) {
  const [edit, setEdit] = useState(false);
  const [style, setStyle] = useState({});
  const [toggleE, setToggleE] = useState({display: 'block'});
  const [toggleS, setToggleS] = useState({display: 'none'});

  const editMember = event => {
    setEdit(true);
    setStyle({
        backgroundColor: 'white',
        color: 'royalblue',
        borderRadius: '5px',
        padding: '5px',
    })
    setToggleE({
        display: 'none',
    })
    setToggleS({
        display: 'block',
    })
  }

  const saveMember = event => {
    setEdit(false);
    setStyle({
        backgroundColor: 'royalblue',
        color: 'white',
    })
    setToggleS({
        display: 'none',
    })
    setToggleE({
        display: 'block',
    })
  }

  if (!details) {
    return <h3>Loading the member&apos;s details...</h3>
  }
  return (
    <div className='profile'>
        <div className='content'>
            <h2 className='name' contentEditable={edit} style={style}>{details.name}</h2>
            <p>EMAIL <span contentEditable={edit} style={style}>{details.email}</span></p>
            <p>ROLE <span contentEditable={edit} style={style}>{details.role}</span></p>
        </div>

        <div>
            <div className='edit' onClick={editMember} style={toggleE}>Edit</div>
            <div className='save' onClick={saveMember} style={toggleS}>Save</div>
        </div>
    </div>
  )
}

export default Member;