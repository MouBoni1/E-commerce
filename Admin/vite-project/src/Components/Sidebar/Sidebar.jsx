import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product from '../../assets/add_product.png'
import product_list from '../../assets/list_product.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'}style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={add_product} alt="" />
                <p>Add product</p>
            </div>
        
        </Link>
        <Link to={'/listproduct'}style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={product_list} alt="" />
                <p>Product List</p>
            </div>
        
        </Link>
        
        </div>
  )
}

export default Sidebar