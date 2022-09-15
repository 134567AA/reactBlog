import React from 'react';
import './write.css'
import Sidebar from '../../comp/sidebar/Sidebar'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import  ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const Write = () => {
 


  return (
    <>
    <div className='container write'>
  
    <div className='editor'>
        <input type="text" placeholder='제목' name='title' />
        <input type="text" name="register" placeholder='작성자' />
    <CKEditor editor={ ClassicEditor }  config={{
            placeholder: "내용을 입력하세요.",
        }}/>
    <button className='submitbtn' >등록하기</button>
    </div>
            <Sidebar />  

    </div>
      
</>
  )
}

export default Write
