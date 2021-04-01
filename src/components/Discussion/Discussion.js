import React, {useState, useEffect} from 'react'
import '../Dashboard/style.css'

function Discussion({location}) {
    const {state} = location;
    const[replies, setReplies] = useState([])
    const {chats, index, name} = state;
    console.log(location)
    const [discuss, setDiscuss] = useState("");
    const handleDiscussion=(e)=>{
        setDiscuss(e.target.value);
        
    }
    useEffect(() => {
        let discussion = localStorage.getItem(`replies${index}`);
        let discussionObj;
        if(discussion==null)
    {
         discussionObj=[];
    }
    else
    {
        discussionObj = JSON.parse(discussion);
    }
        setReplies(discussionObj)
        chats.replies=replies;
       
    }, []);
    const handleButton=()=>{
        let discussion = localStorage.getItem(`replies${index}`);
        let discussionObj;
        if(discussion==null)
    {
         discussionObj=[];
    }
    else
    {
        discussionObj = JSON.parse(discussion);
    }
        discussionObj.push({text: discuss, time :new Date().toLocaleString(), name: name});
        localStorage.setItem(`replies${index}`,JSON.stringify(discussionObj));
        setReplies(discussionObj)
        chats.replies=replies;
        console.log(replies);
    }
   
    return (
        <div className="dashboard">

            <div className="welcome">Welcome</div>
            <div className="dashboard__chats"  >
                        <p>{chats[index].text}</p>
                    <h4 className="dashboard_created_by">Created by: {chats[index].name}, Time: {chats[index].time} , Replies: {replies.length}</h4>
                    </div>
            <hr/>
            <h3 style={{marginLeft: "10px", marginTop:"10px"}}>Replies</h3>
                    {
                replies.map((chat,index)=>{
                    return (
                      
                       <div className="dashboard__chats" key={index} >
                        <p>{chat.text}</p>
                    <h4 className="dashboard_created_by">Created by: {chat.name}, Time: {chat.time}</h4>
                    </div>
                      
                    )
                    
                    
                })
            }
            <div style={{marginBottom:"50px"}}></div>
            <div className="dashboard__input" style={{position:"fixed", bottom:"10px", width:"100%"}}>
                <input style={{}} className="input__dashboard" type="text" placeholder="Start discussion" onChange={handleDiscussion}/>
                <button style={{}} className="input__button" type="button" onClick={handleButton}>Start</button>
           </div>
        </div>

    )
}

export default Discussion
