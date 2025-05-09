import { useState } from "react"
const FileList = ({ list,handleAddItem }) => {
    const [isToggle, setToggle] = useState({})
    
    return (
        <div className="file-name">
            {list.length > 0 &&
                list.map((data) => (
                    <div key={data.id}>
                        {data.isFolder && <span onClick={() => setToggle((prev) => ({
                            ...prev,
                            [data.name]: !prev[data.name]
                        }))}><img style={{
                            width: "15px",
                            transform: isToggle[data.name] ? "rotate(0deg)" : "rotate(-90deg)",
                            transition: "transform 0.3s ease",
                        }} src="https://static.thenounproject.com/png/1123247-200.png" /></span>}
                        <span >{data.name}</span>
                       {data.isFolder &&  <span  onClick={()=>handleAddItem(data.id)}><img style={{width:"10px",marginLeft:"5px",cursor:"pointer"}} src="https://cdn-icons-png.flaticon.com/512/3979/3979527.png"/></span>}
                       <span><img src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png" style={{width:"10px",marginLeft:"5px",cursor:"pointer"}}/></span>
                        {isToggle[data.name] && data.children.length > 0 && <FileList handleAddItem={handleAddItem} list={data.children} />}
                    </div>
                ))}
        </div>
    );
};

export default FileList;
