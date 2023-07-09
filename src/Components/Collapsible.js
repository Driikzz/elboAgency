import React from 'react';
import { useState,useRef } from 'react';
import '../App.css';
import '../materialize.css';




const Collapsible =(props)=>{
    
    const [open, setOPen] = useState(false); 
      const toggle = () => {
        setOPen(!open);
      };
      
      const contentRef = useRef();
        if (contentRef.current) console.log(contentRef.current.scrollHeight);
      return (
        <div className='collapsibles'>
            <button id='offre-button' className={open ? 'button-border': null}  onClick={() => {toggle()}}>{props.label}<i className="material-icons arrows">arrow_downward</i></button>
            <div className="content-parent" ref={contentRef} style={open ? { height: contentRef.current.scrollHeight +"px" } : { height: "0px" }} >
                <div className="content">{props.children}</div>
            </div>
        </div>
      );
}
export default Collapsible;

