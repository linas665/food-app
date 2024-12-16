import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore_menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Whether you're craving something hearty and filling or light and refreshing, our menu is packed with a variety of dishes that are as diverse as your taste buds. With every option made to order, you're guaranteed a fresh, satisfying meal every time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return ( 
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className="explore-menu-list-item">
                       <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                      <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
