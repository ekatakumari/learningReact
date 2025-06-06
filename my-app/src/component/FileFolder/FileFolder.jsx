import "./FileFolder.css"
import data from "./data.json"
import FileList from "./FileList"
import {useState} from "react"
const FileFolder=()=>{
    const [dataItem,setDataItem]=useState(data)
    const handleAddItem = (id) => {
        let name = prompt("Enter File/Folder Name");
        if (!name) return;
    
        let isFolder = window.confirm("Is this a folder?");
        let newItem = {
            name: name,
            id: Date.now().toString(),
            isFolder: isFolder,
            children: [],
        };
    
        const addItem = (items) => {
            return items.map((item) => {
                if (item.id === id && item.isFolder) {
                    return {
                        ...item,
                        children: [...item.children, newItem],
                    };
                }
                if (item.children.length > 0) {
                    return {
                        ...item,
                        children: addItem(item.children),
                    };
                }
                return item;
            });
        };
    
        setDataItem((prev) => addItem(prev));
    };
    const handleDeleteItem=(deletId)=>{
        const updateItem=(item)=>{
           return  item.filter((data)=>data.id!=deletId).map((item)=>{
                if(item.children && item.children.length>0){
                    return {
                        ...item,
                        children:updateItem(item.children)
                    }
                }
                return item
            })
        }
        setDataItem((prev)=>updateItem(prev))
    }
    return <div className="file-folder-container"> 
          <div className="file-folder-list">
               <FileList list={dataItem} handleAddItem={handleAddItem} handleDeleteItem={handleDeleteItem}/>
          </div>
    </div>
}
export default FileFolder