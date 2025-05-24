// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import nav from '../components/nav.json'
// import png from '../../public/Azeem.png'

export default function Navbar() {
  console.log(logos);
  
  let navObj = nav
  return (
    <div className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container flex py-2 justify-center md:justify-between items-center">
        {navObj && navObj.NavMain && navObj.NavMain.map((item, idx) => {
            return <item.tag {...item.params} key={idx} className={item.class}>{item.name}</item.tag>
          })
        }
        <div className='space-x-6'>
          {navObj && navObj.NavItems && navObj.NavItems.map((item, idx) => {
            return <item.tag {...item.params} key={idx} href={item.href} className={item.class}>{item.name}</item.tag>
          })
          }
        </div>
        {navObj && navObj.NavButton && navObj.NavButton.map((item, idx) => {
          return <item.tag {...item.params} key={idx} className={item.class}>{item.name}</item.tag>
        })
        }
      </div>
    </div>
  );
}
