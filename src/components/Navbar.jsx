// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import nav from '../components/nav.json'
import {utils} from './utils';

export default function Navbar() {
  
  let navObj = nav
  
  return (
    <div className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container flex py-2 justify-center md:justify-between items-center">
        <div className='grid grid-cols-1 mt-4'>
        {navObj && navObj.NavMain && navObj.NavMain.map((item, idx) => {
            return <item.tag {...item.params} key={idx} className={item.class}>{item.name}</item.tag>
          })
        }
        </div>
        <div className='space-x-6'>
          {navObj && navObj.NavItems && navObj.NavItems.map((item, idx) => {
            return <item.tag {...item.params} key={idx} href={item.href} className={item.class}>{item.name}</item.tag>
          })
          }
        </div>
        {navObj && navObj.NavButton && navObj.NavButton.map((item, idx) => {
          return <item.tag {...item.params} key={idx} className={item.class} onClick = {e=>utils[item.onClick] ? utils[item.onClick](e) : ""} >{item.name}</item.tag>
        })
        }
      </div>
    </div>
  );
}
