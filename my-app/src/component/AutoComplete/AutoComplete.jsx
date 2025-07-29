import {useState,useEffect} from 'react'
import './AutoComplete.css'
const AutoCompelete=()=>{
    const [input,setInput]=useState('')
    const[caching,setCaching]=useState({})
    const [suggestion,setSuggestion]=useState([])
    const fetchData = async () => {
        try {
            if(caching[input]){
                console.log("Cache hit")
                  return caching[input]
            }
          const response = await fetch(`https://dummyjson.com/products/search?q=${input}`);
          
          const result = await response.json();
          setSuggestion(result.products)
          setCaching((prev)=>({...prev,[input]:result.products}));
        } catch (error) {
          console.error('Failed to fetch data:', error);
          setSuggestion([]);
        }
      };
      
    useEffect(()=>{
        let timer=setTimeout(()=>{
            fetchData()
        },300)
        return ()=>clearTimeout(timer)
        },[input])
    return <div className="auto-complete">
        <div className="autocomplete-heading">Auto Complete</div>
        <div className="autocomplete-container">
              <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className="input-autocomplete"/>
              <div className="suggestion-container">
                {suggestion.length===0 && <span className="no-suggestion">No suggestion</span>}
                {suggestion.length >0 && suggestion.map((item)=> <span className="suggestion-item" key={item.id}>{item.title}</span>)}
              </div>
        </div>
    </div>
}
export default AutoCompelete
