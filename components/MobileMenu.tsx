import Person from "@/components/svg/Person";

export default function MobileMenu({ active }: { active: 'directions' | 'home' | 'cabinet' | 'help' }) {
    return (
        <div className='w-full sm:px-40 z-50 bg-white fixed left-0 bottom-0 md:hidden h-[50px] px-20 flex items-center justify-between'>
            <div className='flex items-center flex-col gap-7'>
                <div className='w-[15px] h-[13px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M16.5 13.0629V8.15427V8.1536C16.5 7.6636 16.5 7.41847 16.4391 7.19036C16.3851 6.98811 16.2963 6.79632 16.1763 6.62337C16.041 6.42821 15.8527 6.26677 15.4757 5.94381L10.9757 2.0888C10.2758 1.48917 9.92579 1.1894 9.53192 1.07536C9.18487 0.974879 8.81513 0.974879 8.46808 1.07536C8.07443 1.18934 7.72481 1.48885 7.02562 2.08782L7.02448 2.0888L2.52448 5.94381L2.52357 5.94458C2.14717 6.26703 1.95885 6.42836 1.82364 6.62337C1.70372 6.79632 1.61489 6.98811 1.56091 7.19036C1.5 7.41858 1.5 7.66382 1.5 8.15427V13.0629C1.5 14.091 1.5 14.605 1.70436 14.9977C1.88413 15.3431 2.17076 15.624 2.52356 15.8C2.92448 16 3.44964 16 4.49886 16H4.50018H13.5002H13.5015C14.5507 16 15.0751 16 15.476 15.8C15.8289 15.624 16.1161 15.3431 16.2958 14.9977C16.5 14.6054 16.5 14.092 16.5 13.0659V13.0629Z" stroke={(active == 'home') ? 'orange' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className='text-gray text-[10px] font-semibold'>Главная</div>
            </div>
            <div className='flex items-center flex-col gap-7'>
                <div className='w-[12px] h-[15px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                        <path d="M1 6.85166C1 10.9526 4.63813 14.3439 6.24846 15.6441L6.2491 15.6446C6.48001 15.8311 6.5955 15.9243 6.7676 15.9721C6.90149 16.0093 7.09841 16.0093 7.2323 15.9721C7.40456 15.9243 7.52036 15.8309 7.75169 15.6441C9.36203 14.3439 13 10.9526 13 6.85164C13 5.29968 12.3679 3.81131 11.2427 2.71391C10.1174 1.61651 8.59136 1 7.00005 1C5.40875 1 3.88259 1.6165 2.75736 2.7139C1.63214 3.81129 1 5.29971 1 6.85166Z" stroke={(active == 'directions' ? 'orange' : 'black')} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className='text-gray text-[10px] font-semibold'>Направления</div>
            </div>
            <div className='flex items-center flex-col gap-7'>
                <div className='w-[15px] h-[17px]'>
                    <Person stroke={(active == 'cabinet' ? 'orange' : 'black')} />
                </div>
                <div className='text-gray text-[10px] font-semibold'>Личный каб</div>
            </div>
            <div className='flex items-center flex-col gap-7'>
                <div className='w-[15px] h-[15px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M9 7.66667V11.8333M9 16C4.85786 16 1.5 12.6421 1.5 8.5C1.5 4.35786 4.85786 1 9 1C13.1421 1 16.5 4.35786 16.5 8.5C16.5 12.6421 13.1421 16 9 16ZM9.0415 5.16667V5.25L8.9585 5.24998V5.16667H9.0415Z" stroke={(active == 'help') ? 'orange' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className='text-gray text-[10px] font-semibold'>Помощь</div>
            </div>
        </div>
    )
}