import React from 'react'
import './contact.css'

const ContactInner = (props) => {
    console.log('props',props);
    
  return (
 <>
 <table className='tableIN'>
    <thead>
            <tr className='tabletr'>
                <th className='no'>No</th>
                <th>글 제목</th>
                <th>작성일</th>
                <th>작성자</th>
            </tr>
    </thead>
    <tbody>
        <tr >
                <th>{props.id}</th>
                <th>{props.title}</th>
                <th>{props.date}</th>
                <th>{props.register}</th>
        </tr>
</tbody>
                
         </table>
 </>
  )
}

export default ContactInner