import React, {useState, useEffect} from 'react';
import './style.css';
import {useHistory, Link} from 'react-router-dom';


function Dashboard({location}) {
    const [chats, setChats]= useState([])
    const [discuss, setDiscuss] = useState("");
   const {state} = location;
 const{name} = state;
    console.log(location)
    const handleDiscussion=(e)=>{
        setDiscuss(e.target.value);
        
    }
    useEffect(() => {
        let discussion = localStorage.getItem("discussion");
        let discussionObj;
        if(discussion==null)
    {
         discussionObj=[];
    }
    else
    {
        discussionObj = JSON.parse(discussion);
    }
        setChats(discussionObj)
       
    }, []);
    const handleButton=()=>{
        let discussion = localStorage.getItem("discussion");
        let discussionObj;
        if(discussion==null)
    {
         discussionObj=[];
    }
    else
    {
        discussionObj = JSON.parse(discussion);
    }
        discussionObj.push({text: discuss, time :new Date().toLocaleString(), name: name, replies: []});
        localStorage.setItem("discussion",JSON.stringify(discussionObj));
        setChats(discussionObj)
        console.log(chats);
    }
    let history=useHistory();
    const handleDivClick=(chats, index, name)=>{
        let obj = {chats, index, name}
        history.push('./discussion',obj)
    }
    return (
        
        <div className="dashboard">

            <div className="welcome">Welcome</div>
            <h3 style={{marginLeft:"10px", marginTop:"10px"}}>Dashboard</h3>

            {
                chats.map((chat,index)=>{
                    return (
                      
                       <div className="dashboard__chats" key={index} onClick={(e)=>handleDivClick(chats, index, name)}>
                        <p>{chat.text}</p>
                    <h4 className="dashboard_created_by">Created by: {chat.name}, Time: {chat.time}</h4>
                    </div>
                      
                    )
                    
                    
                })
            }
           
            
           <div style={{marginBottom:"50px"}}></div>


           <div className="dashboard__input" style={{position:"fixed", bottom:"10px", width:"100%"}}>
                <input className="input__dashboard" type="text" placeholder="Start discussion" onChange={handleDiscussion}/>
                <button className="input__button" type="button" onClick={handleButton}>Start</button>
           </div>
        </div>
        
    )
}

export default Dashboard
