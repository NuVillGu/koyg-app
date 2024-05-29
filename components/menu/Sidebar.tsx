'use client';

import React, { useState } from 'react';
import Link from '@/node_modules/next/link';
import Image from "@/node_modules/next/image";
import { usePathname } from '@/node_modules/next/navigation';

import logo from "../../public/lp4.png";
import logoshort from "../../public/lp4s.png";

import { AiOutlineProduct } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { LuTimerReset, LuPackagePlus, LuPackageMinus } from "react-icons/lu";
import { MdQueryStats, MdFormatColorFill, MdOutlineLogout } from "react-icons/md";
import { PiListStar } from "react-icons/pi";
import { RiListCheck2 } from "react-icons/ri";
import { TbFolderHeart, TbListTree } from "react-icons/tb";


/** Cuando se pulse en el link tendrá que cambiar el color del fondo y tendrá un border en el bottom y otro en el lado derecho */


export const Sidebar = () => {

    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState({});
    const [auxmenuOpen, setAuxmenuOpen] = useState({});

    const toggleSubmenu = (index) => {
        setSubmenuOpen({...submenuOpen, [index]: !submenuOpen[index]});
    };

    const toggleAuxmenu = (index) => {
        setAuxmenuOpen({...auxmenuOpen, [index]: !auxmenuOpen[index]});
    };

    const pathname = usePathname();

    const sidebaritems = [
        {
            title: "DASHBOARD",
            href: "/dashboard", 
            icon: <MdQueryStats className={`text-xl ${open && "ml-2"}`}/>
        },
        {
            title: "PRODUCTS",
            separation: true,
            submenu: true,
            icon: <AiOutlineProduct className={`text-xl ${open && "ml-2"}`} onClick={() => !open && setOpen(true)}/>,
            items: [
                { 
                    title: "ADD PRODUCT",
                    href: "/products/create",
                    icon: <BsPlus className={`text-xl ${open && "ml-2"}`}/>
                },
                { 
                    title: "LIST PRODUCTS",
                    href: "/products/list",
                    icon: <TbListTree className={`text-xl ${open && "ml-2"}`}/>
                },
                {
                    title: "CATEGORIES",
                    submenu: true,
                    icon: <RiListCheck2 className={`text-xl ${open && "ml-2"}`}/>,
                    items: [
                        { 
                            title: "ADD CATEGORY",
                            href: "/products/categories/create",
                            icon: <BsPlus className={`text-xl ${open && "ml-2"}`}/>
                        },
                        { 
                            title: "LIST CATEGORIES",
                            href: "/products/categories/list",
                            icon: <TbListTree className={`text-xl ${open && "ml-2"}`}/>
                        }
                    ]
                },
                {
                    title: "FAMILY COLORS",
                    submenu: true,
                    icon: <MdFormatColorFill className={`text-xl ${open && "ml-2"}`}/>,
                    items: [
                        { 
                            title: "ADD FAMILY COLOR",
                            href: "/products/family-colors/create",
                            icon: <BsPlus className={`text-xl ${open && "ml-2"}`}/>
                        },
                        { 
                            title: "LIST FAMILY COLORS",
                            href: "/products/family-colors/list",
                            icon: <TbListTree className={`text-xl ${open && "ml-2"}`}/>
                        },
                    ]
                }
            ]
        },
        {
            title: "USERS",
            submenu: true,
            icon: <FiUser className={`text-xl ${open && "ml-2"}`} onClick={() => !open && setOpen(true)}/>,
            items: [
                { 
                    title: "ADD USER",
                    href: "/users/create",
                    icon: <BsPlus className={`text-xl ${open && "ml-2"}`}/>
                },
                { 
                    title: "LIST USERS",
                    href: "/users/list",
                    icon: <TbListTree className={`text-xl ${open && "ml-2"}`}/>
                }
            ]
        },
        {
            title: "LOGISTIC",
            submenu: true,
            icon: <LiaTruckLoadingSolid className={`text-xl ${open && "ml-2"}`} onClick={() => !open && setOpen(true)}/>,
            items: [
                { 
                    title: "ORDERS",
                    href: "/logistic/orders",
                    icon: <LuPackagePlus className={`text-xl ${open && "ml-2"}`}/>
                },
                { 
                    title: "RETURNS",
                    href: "/logistic/returns",
                    icon: <LuPackageMinus className={`text-xl ${open && "ml-2"}`}/>
                },
                { 
                    title: "TRACK ORDER",
                    href: "/logistic/track",
                    icon: <LuTimerReset className={`text-xl ${open && "ml-2"}`}/>
                }
            ]
        },
        { 
            title: "REVIEWS",
            href: "/reviews/list",
            separation: true,
            icon: <PiListStar className={`text-xl ${open && "ml-2"}`}/>
        },
        { 
            title: "WISHES",
            href: "/wishes",
            icon: <TbFolderHeart className={`text-xl ${open && "ml-2"}`}/>
        },
        { 
            title: "SETTINGS",
            href: "/settings",
            separation: true,
            setting: true,
            icon: <IoSettingsOutline className={`text-xl ${open && "ml-2"}`}/>
        },
        { 
            title: "LOGOUT",
            href: "/jjjj",
            setting: true,
            icon: <MdOutlineLogout className={`text-xl ${open && "ml-2"}`}/>
        }
    ]

    return (
        <div className={`h-screen overflow-y-auto overflow-x-hidden bg-slate-600 text-white pt-5 pb-10 duration-700 border-r ${open ? "w-72 px-6" : "w-20 px-4"}`}>
            <div className="flex justify-center pt-1 pb-6 hover:cursor-pointer" onClick={() => setOpen(!open)}>
                
                {
                    open ? (
                        <Image src={logo} width={125} height={400} alt="KOYG"/>
                    ) : (
                        <Image src={logoshort} width={35} height={400} alt="KOYG"/>
                    )
                }
            </div>
            <ul>
                { sidebaritems.map((item, index) => (
                    <>
                        <li onClick={() => toggleSubmenu(index)} key={index} className={` ${pathname === item.href && "border-white bg-slate-500"} flex items-center p-1.5 rounded-full border hover:bg-slate-500 hover:cursor-pointer ${!open && "justify-center"} ${item.separation ? "mt-10" : "mt-4" } ${item.setting ? "shadow-inner shadow-slate-800 border-slate-500" : "border-transparent" }`}>
                            
                            { item.href ? 
                                    <Link className={`flex items-center ${open && "w-full"}`} href={item.href}>
                                        {item.icon && item.icon}
                                        <span className={`text-xs mr-1 ml-2 duration-200 ${!open && "hidden"}`}>{item.title}</span>
                                    </Link>
                                :
                                    <>
                                        {item.icon && item.icon}
                                        <span className={`text-xs mr-1 ml-2 duration-200 ${!open && "hidden"}`}>{item.title}</span>
                                    </>
                            }

                            { item.submenu && open && (
                                <IoMdArrowDropdown className={`text-sm ${submenuOpen[index] && "rotate-180"}`}/>
                            )}
                        </li>
                        { item.submenu && submenuOpen[index] && open && (
                            <ul>
                            { item.items.map((subitem, index) => (
                                <>
                                    <li onClick={() => toggleAuxmenu(index)} key={index} className={` ${pathname === subitem.href && "border-white bg-slate-500"} flex items-center mt-2 p-1.5 pl-6 rounded-full border border-transparent hover:bg-slate-500 hover:cursor-pointer`}>
                                        
                                        { subitem.href ? 
                                                <Link className={`flex items-center w-full`} href={subitem.href}>
                                                    {subitem.icon && subitem.icon}
                                                    <span className="text-xs mr-1 ml-2">{subitem.title}</span>
                                                </Link>
                                            :
                                                <>
                                                    {subitem.icon && subitem.icon}
                                                    <span className="text-xs mr-1 ml-2">{subitem.title}</span>
                                                </>
                                        }

                                        { subitem.submenu && (
                                            <IoMdArrowDropdown className={`text-sm ${auxmenuOpen[index] && "rotate-180"}`}/>
                                        )}
                                    </li>
                                    { subitem.submenu && auxmenuOpen[index] && (
                                        <ul>
                                            { subitem.items.map((auxsubitem, index) => (
                                                <>
                                                    <li key={index} className={` ${pathname === auxsubitem.href && "border-white bg-slate-500"} flex items-center mt-2 p-1.5 rounded-full border border-transparent hover:bg-slate-500 hover:cursor-pointer`}>
                                                        <Link className={`flex items-center w-full pl-9`} href={auxsubitem.href}>
                                                            {auxsubitem.icon && auxsubitem.icon}
                                                            <span className="text-xs mr-1 ml-2">{auxsubitem.title}</span>
                                                        </Link>
                                                    </li>
                                                </>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ))}
                            </ul>
                        )}
                    </>
                ))}
            </ul>
        </div>
    );
}