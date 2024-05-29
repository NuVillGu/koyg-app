import React from 'react';
import Image from '@/node_modules/next/image';
import ej from '../../../public/ej.jpg';


export const DescriptionLists = () => {
    
    return (
        <div className="flex items-center">
            <div>
                <Image className="h-18 w-16 rounded" src={ej} width={0} height={0} alt="codigo-color"/>
            </div>
            <div className="pl-3">
                <div className="font-medium pb-1">Violet Romance Plus Long Coat</div>
                    <div className="flex items-center">
                        <div className="code-p_list text-xs mr-0.5 text-gray-500">APC00001</div>
                        <div className="color-p_list border border-gray-700 h-3 w-3 rounded-full ml-0.5" style={{backgroundColor:"lime"}}></div>
                    </div>
            </div>
        </div>
    );
}