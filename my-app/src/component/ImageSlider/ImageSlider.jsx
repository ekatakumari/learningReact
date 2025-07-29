import "./ImageSlider.css"
import { useState, useEffect } from "react"
const ImageSlider = () => {
    const [result, setResult] = useState([])
    const [index, setIndex] = useState(0)
    const fetchData = async () => {
        const data = await fetch("https://www.reddit.com/r/aww/top/.json?t=all")
        const response = await data.json()
        const list = response.data.children.map((item) => item.data.thumbnail)
        console.log(list)
        setResult(list)
    }
    const handleImageChange = (dir) => {
        let lastIndex = result.length - 1
        if (dir == "left") {
            if (index == 0) {
                setIndex(lastIndex)
            }
            else {
                setIndex((prev) => prev - 1)
            }
        }
        if (dir == "right") {
            if (index == lastIndex) {
                setIndex(0)
            }
            else {
                setIndex((prev) => prev + 1)
            }
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        let timer = setTimeout(() => {
            handleImageChange("right")
        }, 6000)
        return () => clearTimeout(timer)
    }, [index])
    return <div >
        <h2 className="image-crousel-box">Image Crousel</h2>
        <div className="image-slider-container">
            {result.length == 0 && <div>Loading...</div>}
            {result.length > 0 && <div>
                <button onClick={() => handleImageChange("left")} className="crousel-button">{"<"}</button>
                <img className="image-slider-url" src={result[index]} />
                <button onClick={() => handleImageChange("right")} className="crousel-button">{">"}</button>
            </div>}
        </div>
    </div>
}
export default ImageSlider