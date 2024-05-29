import React from 'react';
import { Sidebar } from "@/components/index";
import { Navbar } from '@/components/index';

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
        <div className="w-screen h-screen bg-gray-50">
            <div className="flex">
                <Sidebar/>
                <div className="w-screen">
                    <Navbar/>
                    <div className="bg-white m-5 p-10 shadow-md shadow-gray-100 border border-gray-100">
                        {children}
                    </div>
                </div>
            </div>
        </div>
  );
}