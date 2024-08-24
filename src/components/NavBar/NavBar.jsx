import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/product/:id', name: 'ProductDetail' },
        { id: 5, path: '/contact', name: 'Contact' },
    ]

    return (
        <nav className="text-black bg-yellow-200 p-5">
            <div className="md:hidden text-3xl" onClick={()=> setOpen(!open)}> 
                {
                    open === true ? <IoMdClose /> : <HiMenuAlt1 />
                }            
            </div>
            <ul className="md:flex absolute bg-yellow-200 px-5 py-3 shadow-inner border border-gray-400">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;