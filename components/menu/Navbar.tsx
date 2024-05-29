import React from 'react';
import { IoChatbubblesOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";

export const Navbar = () => {
    
    return (
                <div className="bg-violet-100 border-b flex items-center justify-between p-5 h-20 text-sm">
                    <div className="relative w-full max-w-lg">
                        <input className="rounded-full border border-violet-200 shadow-inner shadow-slate-100 placeholder-purple-900 m-1 text-xs focus:outline-none py-2 pl-8 pr-3 w-full" type="text" placeholder="Search..."/>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <IoIosSearch className="text-md text-violet-950"/>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="relative flex items-center mr-11">
                            <div className="relative">
                                <IoChatbubblesOutline className="text-xl text-purple-950 hover:cursor-pointer"/>
                                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 shadow-inner shadow-purple-500 bg-slate-400 text-white rounded-full font-bold text-xs min-w-[1.1rem] h-4.5 flex items-center justify-center px-1">2</div>
                            </div>
                            <div className="relative ml-3">
                                <GoBell className="text-xl text-purple-950 hover:cursor-pointer"/>
                                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 shadow-inner shadow-purple-500 bg-slate-400 text-white rounded-full font-bold text-xs min-w-[1.1rem] h-4.5 flex items-center justify-center px-1">10</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full bg-white w-11 h-11 border border-slate-200 shadow-inner shadow-slate-100"></div>
                            <HiOutlineDotsVertical className={`text-sm ml-1 mr-1 text-purple-950 hover:cursor-pointer`}/>
                        </div>
                    </div>
                </div>
            );
}