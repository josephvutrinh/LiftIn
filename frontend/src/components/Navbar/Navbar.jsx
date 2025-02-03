import { NavLink } from 'react-router-dom';
import { TbHome } from "react-icons/tb";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FaRegSquarePlus } from "react-icons/fa6";
import { LuDumbbell } from "react-icons/lu";
import { LuBookOpen } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

function DesktopNav() {
  return (
    <div className='fixed left-0 top-1/2 -translate-y-1/2 pl-[30px]'>
        <div className='flex flex-col gap-[25px] mb-[50px]'>
            <NavLink to="/" className="nav-link" activeClassName="active">
                <button className='text-5xl'>
                    <TbHome />
                </button>
            </NavLink>
            <NavLink to="/search" className="nav-link" activeClassName="active">
                <button className='text-5xl'>
                    <IoSearch />
                </button>
            </NavLink>
            <NavLink to="/requests" className="nav-link" activeClassName="active">
                <button className='text-5xl'>
                    <MdOutlinePersonAddAlt />
                </button>
            </NavLink>
            <NavLink to="/progress" className="nav-link" activeClassName="active">
                <button className='text-5xl'>
                    <LuDumbbell />
                </button>
            </NavLink>
            <NavLink to="/split" className="nav-link" activeClassName="active">
                <button className='text-5xl'>
                    <LuBookOpen />
                </button>
            </NavLink>
        </div>
    </div>
  )
}

function MobileNav() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2">
      <div className="flex flex-row gap-[33px] mb-[10px]">
        <NavLink to="/" className="nav-link" activeClassName="active">
            <button className='text-4xl'>
                <TbHome />
            </button>
        </NavLink>
        <NavLink to="/requests" className="nav-link" activeClassName="active">
            <button className='text-4xl'>
                <MdOutlinePersonAddAlt />
            </button>
        </NavLink>
        <NavLink to="/post" className="nav-link" activeClassName="active">
            <button className='text-4xl'>
                <FaRegSquarePlus />
            </button>
        </NavLink>
        <NavLink to="/progress" className="nav-link" activeClassName="active">
            <button className='text-4xl'>
                <LuDumbbell />
            </button>
        </NavLink>
        <NavLink to="/split" className="nav-link" activeClassName="active">        
            <button className='text-4xl'>
                <LuBookOpen />
            </button>
        </NavLink>
      </div>
    </div>
  )
}

export default function Navbar() {
  return (
    <nav className="w-full relative">
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      
      {/* Mobile */}
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </nav>
  )
}