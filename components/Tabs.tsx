'use client'

import React, { useState } from 'react';
import GlobalCarousel from './GlobalCarousel';


const Tabs = () => {
  
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

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
            

            <div className="tab-content p-4 border border-gray-100 shadow-inner shadow-slate-100 border-t-0 bg-slate-50">
                {activeTab === 'tab1' && 
                    <div id="tab1">
                        <div className="absolute max-w-[30em] border border-red-500">
                        <GlobalCarousel/>
                        </div>
                    </div>
                }
                {activeTab === 'tab2' && <div id="tab2">Content for Tab 2</div>}
                {activeTab === 'tab3' && <div id="tab3">Content for Tab 3</div>}
            </div>
        </div>
    );
};

export default Tabs;
