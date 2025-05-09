import "./FileFolder.css"
import data from "./data.json"
import FileList from "./FileList"
import {useState} from "react"
const FileFolder=()=>{
    const [dataItem,setDataItem]=useState(data)
    const handleAddItem=(id)=>{
            const updateData=()=>{

            }
            setDataItem((prev)=>updateData(prev))
    }
    return <div className="file-folder-container"> 
          <div className="file-folder-list">
               <FileList list={dataItem} handleAddItem={handleAddItem}/>
          </div>
    </div>
}
export default FileFolder