import { useEffect, useState } from "react"
import CardComponent from "./CardComponent"
import "./Pagignation.css"
const Pagignation = () => {
    const [productResult, setProductResult] = useState([])
    const [current, setCurrent] = useState(0)
    const handleChange = (n) => {
        setCurrent(n)
    }
    let total = productResult.length
    const PAGE_SIZE = 10
    const noOfPage = Math.ceil(total / PAGE_SIZE)

    let start = current * PAGE_SIZE
    let end = start + PAGE_SIZE

    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products?limit=500')
        const result = await data.json()
        setProductResult(result.products)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return <div className="pagignation-container">
        <h2> Pagignation Machine Code</h2>
        <div className="product-container">
            {productResult.slice(start, end).map((p) => <CardComponent key={p.id} image={p.thumbnail} title={p.title} />)}
        </div>
        <div classNmae="pagignation-number">
            <button className="page-no" disabled={current == 0} onClick={() => setCurrent((prev) => prev - 1)}>left</button>
            {[...Array(noOfPage).keys()].map((p) => <button className={"page-no "+ (current==p?"active":"")} onClick={() => handleChange(p)} key={p}>{p}</button>)}
            <button  className="page-no" disabled={current == noOfPage - 1} onClick={() => setCurrent((prev) => prev + 1)}>right</button>
        </div>
    </div>
}
export default Pagignation