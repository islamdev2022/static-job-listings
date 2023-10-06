import { useEffect, useState } from "react"
import Job from "./Job"
const Jobs = ({data, setKeywords, keywords}) => {
    console.log(data)

    const [filteredData,setFilteredData]=useState([])

    const modifiedData = ()=>{
        if (keywords && keywords.length > 0){
            const newData = filteredData.filter((d)=>{
                return keywords.every((key)=>{
                    return (
                        d.role == key ||
                        d.level == key || 
                        d.languages.includes (key)||
                        d.tools.includes(key)
                        )
                    })   
                })
        setFilteredData(newData)
    } else {
        setFilteredData(data)
        }
    }
    // useEffect(() => {
    //     // Initialize filteredData with the original data when the component mounts
    //     setFilteredData(data);
    //   }, [data]);
    
    useEffect(()=> {
        modifiedData();
     }, [keywords]);
    return (
    <div className="jobs">
        {filteredData.map((d)=>{
            return <Job key={d.id} data={d} setKeywords={setKeywords}/>;
        })}
    </div> 
    )
}
 
export default Jobs;