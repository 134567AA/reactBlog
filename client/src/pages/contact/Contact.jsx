import React,{useState,useEffect} from 'react'
import './contact.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
import ContactInner from './ContactInner';


export default function Contact(){

    const [list,setList] = useState([]);
    
    useEffect(()=>{
        axios.get('/api/list')
        .then(res=>setList(res.data));
    },[]);

   
    return(
     <>
        <div className='contact container'>   
        <h3>LIST</h3>
        <div>
            
        { // eslint-disable-next-line
        list.map(i=>(
            <ContactInner
            key={i.id}
            id={i.id}
            title={i.title}
            date={i.listDate}
            register={i.register}
            />
        ))}
         </div>
         <Link to="/write"><button className='writebtn'> 글 쓰기</button></Link>
        </div>
        </>
)
}