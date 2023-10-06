import { useEffect, useState } from "react";

const Job = (props) => {

    const {
        company,
        contract,
        featured,
        id,
        languages,
        level,
        location,
        logo,
        position,
        postedAt,
        role,
        tools,
    }=props.data;

    let keywords = [role,level,...languages,...tools]
    
   
    return ( 
      
        <div className={featured? "job-container job-container--green-border" : "job-container"}>
            <div className="logo">
                <img src={logo} alt={company} />
            </div>
            <div className="left">
                <div className="company">
                    <div className="cname">{company}</div>
                    {props.data.new && <span className="new">NEW!</span>}
                    {props.data.featured && <span className="featured">FEATURED</span>}
                </div>
                <div className="position">{position}</div>

                <div className="details">
                    <span>{postedAt}</span><span>.</span>
                    <span>{contract}</span><span>.</span>
                    <span>{location}</span>
                </div>
            </div>
            <hr></hr>

            <div className="right">
                {keywords.map((key, id)=>(
                    <button className="btns" onClick={()=> props.setKeywords(key)} key={id}>{key}</button>
                ))}
            </div>
        </div>

     );
}
 
export default Job;