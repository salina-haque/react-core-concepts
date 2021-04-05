import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jashim', 'Salman', 'Sakib']
  const products = [
    { name: 'Photoshop', price: '$60.99' },
    { name: 'Illustrator', price: '$30.99' },
    { name: 'PDF reader', price: '$10.99' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }



        <Product product={products[0]}></Product>


        <p>
          I am a react Person
        </p>
        {/* <h1>my heading : {22+3}</h1> */}
        {/* <Person name={nayoks[0]} nayika = 'moushumi'></Person> */}
        <Person name='Reza' job='Tailor'></Person>
        <Person name='Sakib' job='Cricketer'></Person>

      </header>
    </div>
  );
}
//create component
function Person(props) {

  return (
    <div style={{
      color: '#784358',
      backgroundColor: 'white',
      padding: '10px', margin: '10px', width: '400px'
    }}>
      <h3>Name: {props.name}</h3>
      <p>Profession: {props.job}</p>
    </div>

  )
}
//product
function Product(props) {

  var productStyle = {
    backgroundColor: ' white',
    color: 'lightsalmon',
    border: '2px solid tomato',
    borderRadius: '5px',
    margin: '10px',
    padding: '10px',
    width: '200px',
    height: '200px'
  }
  const { name, price } = props.product
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

//counter 
function Counter() {
  const [count, setCount] = useState(0)
  const handleIncrease = () => setCount(count+1)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove= {() => setCount(count-1)}>Decrease</button>
      <button onClick = {handleIncrease} >increase</button>
    </div>
  )
}

//load dynamic data(users)
function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Dynamic users : {users.length}</h1>
      {
        console.log(users)
      }
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}


export default App;
