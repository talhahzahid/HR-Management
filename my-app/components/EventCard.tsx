"use client"
import React, { useState } from 'react';
import { Button } from './ui/button';

const EventCard = () => {
    const [activeTab, setActiveTab] = useState('birthday');

    return (
        // Uses w-full with a max-width and responsive padding to look great on small screens
        <div className='w-full max-w-sm sm:max-w-md mx-auto mt-6 sm:mt-5 border border-slate-200 rounded-lg p-4 sm:p-5 shadow-sm bg-white'>

            {/* Tab Navigation: flex-row ensures they stay side-by-side even on small devices */}
            <div className='flex gap-1 p-1 bg-slate-100 rounded-xl mb-5 sm:mb-6'>
                <Button
                    onClick={() => setActiveTab('birthday')}
                    className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ${activeTab === 'birthday'
                        ? 'bg-white text-slate-900 shadow-sm hover:bg-white'
                        : 'bg-transparent text-slate-500 hover:bg-slate-200/50 shadow-none'
                        }`}
                >
                    Birthday
                </Button>
                <Button
                    onClick={() => setActiveTab('anniversary')}
                    className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ${activeTab === 'anniversary'
                        ? 'bg-white text-slate-900 shadow-sm hover:bg-white'
                        : 'bg-transparent text-slate-500 hover:bg-slate-200/50 shadow-none'
                        }`}
                >
                    Anniversary
                </Button>
            </div>

            {/* Tab Content: Min-height adjusts dynamically */}
            <div className='min-h-25 sm:min-h-30 flex flex-col justify-center items-center text-center px-2 sm:px-4'>
                {activeTab === 'birthday' ? (
                    <div className='animate-fadeIn w-full'>
                        <div className='text-2xl sm:text-3xl mb-1.5 sm:mb-2'>🎂</div>
                        <h3 className='font-semibold text-base sm:text-lg text-slate-800 tracking-tight'>Upcoming Birthdays</h3>
                        <p className='text-xs sm:text-sm text-slate-500 mt-1 max-w-70 sm:max-w-none mx-auto'>
                            Sarah's birthday is coming up this Friday!
                        </p>
                    </div>
                ) : (
                    <div className='animate-fadeIn w-full'>
                        <div className='text-2xl sm:text-3xl mb-1.5 sm:mb-2'>✨</div>
                        <h3 className='font-semibold text-base sm:text-lg text-slate-800 tracking-tight'>Work Anniversaries</h3>
                        <p className='text-xs sm:text-sm text-slate-500 mt-1 max-w-70 sm:max-w-none mx-auto'>
                            Alex celebrates 3 years with the team today.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventCard;