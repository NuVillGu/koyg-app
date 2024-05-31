'use client'

import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin7Line } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import ej from "../../../../public/ej.jpg";
import Image from "@/node_modules/next/image";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { PiFileCsvLight } from "react-icons/pi";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { SelectLists, SizeLists, DescriptionLists, PriceLists } from "@/components/index";
import Link from "@/node_modules/next/link";
import { MdOutlineAdd } from "react-icons/md";
import Tabs from "@/components/Tabs";




export default function ProductsList() {

    /**
     * (Nota: cuando se seleccione el check de un tr habrá que ponerlo en color bg-slate-200)
     */
    const [open, setOpen] = useState(true);
    
    return (
        <>
            
            <div>

                

                <div className="mb-10">
                    <div className="text-xs flex items-center">
                        <Link href="/" className="mr-1">PRODUCTS</Link>
                        <div className="mr-1">/</div>
                        <Link href="/" className="mr-1">PRODUCTS</Link>
                        <div className="mr-1">/</div>
                        <Link href="#" className="text-gray-400">PRODUCTS LIST</Link>
                    </div>
                    <div className="font-bold text-2xl mt-14">PRODUCTS LIST</div>
                </div>

                <div>
                    <Tabs/>
                </div> 

                <div className="flex items-center py-5 justify-end max-w-full">
                    <MdOutlineAdd className="text-xl mx-1"/>
                    <PiFileCsvLight className="text-2xl mx-0.5"/>
                    <IoFilterOutline className="text-2xl mx-1.5" onClick={() => setOpen(!open)}/>
                    <div className="relative ml-1.5">
                        <input className="rounded-full border border-black placeholder-gray-800 m-1 text-xs focus:outline-none py-2 pl-8 pr-3" type="text" placeholder="Search..."/>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <IoIosSearch className="text-sm text-gray-900"/>
                        </div>
                    </div>
                </div>
                <div className="flex items-center px-3 pb-2">
                    <div className="text-sm mr-5"><b>1</b> Item selected</div>
                    <div className="border border-fuchsia-200 bg-violet-400 shadow-inner shadow-purple-300 rounded-full py-2 px-3 text-xs text-center text-white min-w-[6rem]">REMOVE ITEMS</div>
                </div>

                <div className={`border mr-4 ${open ? "ml-2" : "hidden"}`}>
                        <div>
                            <div>CATEGORY</div>
                            <div className="flex align-items text-xs">
                                <div className="m-1 p-2 text-center border border-black rounded-full">Shoes</div>
                                <div className="m-1 p-2 text-center border border-black rounded-full">Accesories</div>
                                <div className="m-1 p-2 text-center border border-black rounded-full">Hoodies & Jumpers</div>
                                <div className="m-1 p-2 text-center border border-black rounded-full">Coats & Jackets</div>
                                <div className="m-1 p-2 text-center border border-black rounded-full">Dresses</div>
                                <div className="m-1 p-2 text-center border border-black rounded-full">T-Shirts & Shirts</div>
                                <div className="m-1 p-2 text-center border border-black rounded-full">Trousers & Jeans</div>
                                <div className="m-1 p-2 text-center border border-black rounded-full">Skirts</div>
                            </div>
                        </div>
                        <div>
                            <div>FAMILY COLOR</div>
                            <div className="flex">
                                <div className="m-1 border border-black text-center text-xs w-[4rem] min-h-[5rem]">
                                    <div className="bg-red-300 w-full grid place-items-center h-[2.5rem]"></div>
                                    <div className="p-1 grid place-items-center">SALMON</div>
                                </div>
                                <div className="m-1 border border-black text-center text-xs w-[4rem] min-h-[5rem]">
                                    <div className="bg-violet-300 w-full grid place-items-center h-[2.5rem]"></div>
                                    <div className="p-1 grid place-items-center">cerc</div>
                                </div>
                                <div className="m-1 border border-black text-center text-xs w-[4rem] min-h-[5rem]">
                                    <div className="bg-orange-600 w-full grid place-items-center h-[2.5rem]"></div>
                                    <div className="p-1 grid place-items-center">SALMON</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>SIZE</div>
                            <div>Clothes | Accesories</div>
                            <div className="flex items-center text-xs">
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">O/S</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">XS</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">S</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">M</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">L</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">34</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">36</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">38</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">40</div>
                            </div>
                            <div>Shoes</div>
                            <div className="flex items-center text-xs">
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">37</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">38</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">39</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">39.5</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">40</div>
                                <div className="m-1 p-2 text-center border border-black min-w-[2.5rem] rounded-full">40.5</div>
                            </div>
                        </div>
                        <div>PRICE</div>
                    </div>


                    <div>
                        <table className="table-auto w-full mt-5 mb-4">
                            <thead className="text-xs font-bold border-b border-black">
                                <tr>
                                    <td className="pt-1.5 px-3 text-center">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="py-2 px-3">
                                        <div className="flex items-center">
                                            <div>DESCRIPTION</div>
                                            <div className="text-sm ml-1">
                                                <IoMdArrowDropup className="text-blue-700 relative bottom-[-3px]"/>
                                                <IoMdArrowDropdown className="text-gray-400 relative top-[-3px]"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 px-3">
                                        <div className="flex items-center">
                                            <div>CATEGORY</div>
                                            <div className="text-sm ml-1">
                                                <IoMdArrowDropup className="text-gray-400 relative bottom-[-3px]"/>
                                                <IoMdArrowDropdown className="text-gray-400 relative top-[-3px]"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 px-3">
                                        <div className="flex items-center">
                                            <div>BRAND</div>
                                            <div className="text-sm ml-1">
                                                <IoMdArrowDropup className="text-gray-400 relative bottom-[-3px]"/>
                                                <IoMdArrowDropdown className="text-gray-400 relative top-[-3px]"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 px-3">SIZE</td>
                                    <td className="py-2 px-3">
                                        <div className="flex items-center">
                                            <div>PRICE</div>
                                            <div className="text-sm ml-1">
                                                <IoMdArrowDropup className="text-gray-400 relative bottom-[-3px]"/>
                                                <IoMdArrowDropdown className="text-gray-400 relative top-[-3px]"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 px-3">
                                        <div className="flex items-center">
                                            <div>ENTRY DATE</div>
                                            <div className="text-sm ml-1">
                                                <IoMdArrowDropup className="text-gray-400 relative bottom-[-3px]"/>
                                                <IoMdArrowDropdown className="text-gray-400 relative top-[-3px]"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 px-3">
                                        <div className="flex items-center">
                                            <div>UPDATE DATE</div>
                                            <div className="text-sm ml-1">
                                                <IoMdArrowDropup className="text-gray-400 relative bottom-[-3px]"/>
                                                <IoMdArrowDropdown className="text-gray-400 relative top-[-3px]"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 px-3">ACTIONS</td>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-gray-100 hover:bg-slate-400 hover:shadow-inner hover:shadow-slate-300 hover:text-white">
                                    <td className="p-3 text-center">
                                        <input type="checkbox" className="custom-checkbox"/>
                                    </td>
                                    <td className="p-3">
                                        <DescriptionLists/>
                                    </td>
                                    <td className="p-3">APC</td>
                                    <td className="p-3">Violet Romance Curve</td>
                                    <td className="p-3">
                                        <SizeLists/>
                                    </td>
                                    <td className="p-3">
                                        <PriceLists/>
                                    </td>
                                    <td className="p-3">20/5/24</td>
                                    <td className="p-3">21/5/24</td>
                                    <td className="p-3">
                                        <div className="flex items-center">
                                            <LuPencil className="text-lg text-gray-700 mr-1.5"/>
                                            <RiDeleteBin7Line className="text-lg text-gray-700 mr-1.5"/>
                                            <LuEye className="text-xl text-gray-700 mr-1.5"/>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-xs">
                                <div className="mr-2">Items per page: </div>
                                <SelectLists/>
                            </div>
                            <div className="text-xs">Showing 5 items of 167</div>
                        </div>
                        <div className="flex justify-end">
                            <ul className="flex items-center">
                                <li><span><MdOutlineKeyboardDoubleArrowLeft/></span></li>
                                <li><span><MdOutlineKeyboardArrowLeft/></span></li>
                                <li><span>1</span></li>
                                <li><span>2</span></li>
                                <li><span><MdOutlineKeyboardArrowRight/></span></li>
                                <li><span><MdOutlineKeyboardDoubleArrowRight/></span></li>
                            </ul>
                        </div>
                    </div>  
            </div>


            
            


            
        </>
    );
  }