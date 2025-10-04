import React from 'react'
import AppHeader from '../dashboard/_components/AppHeader';

function HistoryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <AppHeader />
            <div className='px-10 md:px-20 lg:px-40'>
                {children}
            </div>
        </div>
    )
}

export default HistoryLayout
