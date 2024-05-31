'use client'

import React, { useState } from 'react';
import GlobalCarousel from './GlobalCarousel';

import img1 from '../public/docs/products images/VES00001_000000_1.jpg';
import img2 from '../public/docs/products images/VES00001_000000_2.jpg';
import img3 from '../public/docs/products images/VES00001_000000_3.jpg';

const Tabs = () => {
  
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const images = [img1, img2, img3];

    return (
        <div>
            
            <div className="tabs flex border-b border-gray-100">
                <button
                className={`border py-3 px-4 min-w-[10em] rounded-tl-md rounded-tr-md text-xs border-slate-200 text-slate-400 ${activeTab === 'tab1' ? 'shadow-inner shadow-slate-100 border-b-0 text-slate-500 bg-slate-200' : 'bg-slate-100'} hover:bg-purple-100 hover:text-purple-400`}
                onClick={() => handleTabClick('tab1')}
                >
                GENERAL INFORMATION
                </button>
                <button
                className={`border py-3 px-4 text-xs min-w-[10em] rounded-tl-md rounded-tr-md border-l-0 border-slate-200 text-slate-400 ${activeTab === 'tab2' ? 'shadow-inner shadow-slate-100 border-b-0 text-slate-500 bg-slate-200' : 'bg-slate-100'} hover:bg-purple-100 hover:text-purple-400`}
                onClick={() => handleTabClick('tab2')}
                >
                REVIEWS
                </button>
                <button
                className={`border py-3 px-4 text-xs min-w-[10em] rounded-tl-md rounded-tr-md border-l-0 border-slate-200 text-slate-400 ${activeTab === 'tab3' ? 'shadow-inner shadow-slate-100 border-b-0 text-slate-500 bg-slate-200' : 'bg-slate-100'} hover:bg-purple-100 hover:text-purple-400`}
                onClick={() => handleTabClick('tab3')}
                >
                LIKES
                </button>
            </div>
            

            <div className="tab-content p-10 border border-gray-100 shadow-inner shadow-slate-100 border-t-0 bg-slate-50">
                {activeTab === 'tab1' && 
                    <div id="tab1" className="text-xs grid grid-cols-5">


                            <div className="grid grid-cols-1 gap-5 place-content-end">
                                <div>
                                    <div className="font-semibold text-sm mb-0.5">Main information</div>
                                    <div className="description_viewdetail-P">
                                        <ul>
                                            <li>Smooth fabric</li>
                                            <li>Semi-transparent</li>
                                            <li>Bandeau style</li>
                                            <li>Skin-tight fit</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-semibold text-sm mb-0.5">Additional information</div>
                                    <div>
                                        Fabric: soft and elastic
                                        <br/>Main: 95% polyester, 5% elastane.
                                        <br/>Model height: 178 cm
                                        <br/>Model is wearing: S
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-4 grid grid-cols-4">
                                <div className="col-span-2">
                                    <GlobalCarousel value={images}/>
                                </div>

                                <div className="col-span-2 grid grid-cols-3 gap-5 place-content-start">
                                    
                                    <div>
                                        <div className="font-semibold text-sm mb-0.5">Product code</div>
                                        <div>VES00001</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm mb-0.5">Category</div>
                                        <div>VES (Dresses)</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm mb-0.5">Price</div>
                                        <div className="flex">
                                            <div className="text-red-600">89.99€</div>
                                            <div className="line-through mx-2">99€</div>
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <div className="font-semibold text-sm mb-0.5">Name</div>
                                        <div>Public Desire Short Strapless</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm mb-0.5">Brand</div>
                                        <div className="text-gray-400">No information</div>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-sm mb-0.5">Sizes</div>
                                        <div>
                                            <div className="flex my-1.5 items-center">
                                                <div className="border border-black min-w-[2.7rem] rounded-full px-2 text-center">XS</div>
                                                <div className="mx-2">|</div>
                                                <div>200</div>
                                            </div>
                                            <div className="flex my-1.5 items-center">
                                                <div className="border border-black min-w-[2.7rem] rounded-full px-2 text-center">S</div>
                                                <div className="mx-2">|</div>
                                                <div>500</div>
                                            </div>
                                            <div className="flex my-1.5 items-center">
                                                <div className="border border-gray-400 min-w-[2.7rem] bg-gray-200 text-gray-400 rounded-full px-2 text-center">M</div>
                                                <div className="mx-2 text-gray-400">|</div>
                                                <div className="text-gray-400">0</div>
                                            </div>
                                            <div className="flex my-1.5 items-center">
                                                <div className="border border-black min-w-[2.7rem] rounded-full px-2 text-center">L</div>
                                                <div className="mx-2">|</div>
                                                <div>30</div>
                                            </div>
                                            <div className="flex my-1.5 items-center">
                                                <div className="border border-black min-w-[2.7rem] rounded-full px-2 text-center">XL</div>
                                                <div className="mx-2">|</div>
                                                <div>100</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm mb-0.5">Colors</div>
                                        <div>
                                            <div className="rounded-full border border-gray-500 w-5 h-5 my-1.5"></div>
                                            <div className="rounded-full border border-gray-500 w-5 h-5 my-1.5"></div>
                                            <div className="rounded-full border border-gray-500 w-5 h-5 my-1.5"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm mb-0.5">Family color</div>
                                        <div className="flex tems-center border border-black p-2 rounded-full mt-1 items-center">
                                            <div className="rounded-full border border-gray-500 w-5 h-5 mx-0.5"></div>
                                            <div className="mx-1">Name</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm mb-0.5">Entry date</div>
                                        <div>20/5/24</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm mb-0.5">Update date</div>
                                        <div>21/5/24</div>
                                    </div>
                                </div>
                            </div>
                    </div>
                }
                {activeTab === 'tab2' && 
                    <div id="tab2">

                    </div>
                }
                {activeTab === 'tab3' && 
                    <div id="tab3">
                        
                    </div>
                }
            </div>
        </div>
    );
};

export default Tabs;
