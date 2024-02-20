import React from 'react';
import { cn } from '@/lib/utils';

const CGPA = ({showCGPA, handleShowCGPA}) => {
    return (
        <div className={cn("fixed h-3/5 w-[30%] bg-zinc-400 flex flex-col duration-[1s] shadow-md",{'right-10': showCGPA, 'right-[-100%]': !showCGPA})}>
            <span className='self-end hover:cursor-pointer text-xl mr-[5%]' onClick={() => handleShowCGPA()}>&times;</span>
            
            CGPA
        </div>
    );
    }

export default CGPA;