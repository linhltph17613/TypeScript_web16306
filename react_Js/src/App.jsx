import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

function App() {
  // const products = [
  //   { id: 1, name: "products 1", desc: "so beutifull" },
  //   { id: 2, name: "products 3", desc: "so unbeutifull" },
  //   { id: 3, name: "products 2", desc: "i hate" },
  //   { id: 4, name: "products 1", desc: "so beutifull" }

  // ]
  const [count, setCount] = useState(0);
  const [myName, setMyname] = useState("Linnn")
  const [status, setStatus] = useState(false)
  const [products, setProducts] = useState([
    { id: 1, name: "products 1", desc: "so beutifull" },
    { id: 2, name: "products 3", desc: "so unbeutifull" },
    { id: 3, name: "products 2", desc: "i hate" },
    { id: 4, name: "products 1", desc: "so beutifull" }
  ])
  return (
    <div>
      count: {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <hr />

      {myName} <button onClick={() => setMyname("Trang")}>Change name</button>
      <hr />

      <button onClick={() => setStatus(!status)}>Toggled</button>
      {status ? products.map((item, index) => <div key={index}>{item.name} <p> Mô tả: {item.desc}</p></div>) : ""}
      <hr />

      <ShowInfo name="Diu Linhhh" />
      <ShowInfo name="Diu Trag" />
      <ShowInfo name="Diu hunn" />
    </div>
  )
}

export default App
