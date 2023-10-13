import Loupe from "@/components/svg/Loupe";

export default function Head() {
    return (
        <div className='w-full bg-bg'>
            <div className='flex overflow-hidden lg:overflow-visible relative flex-col md:flex-row items-center max-w-[1500px] mx-auto md:pl-80'>
                <div className='flex z-10 flex-col w-full md:w-[700px] gap-20 h-full px-20 sm:px-40 md:px-0 pt-20 md:py-70'>
                    <div className='md:hidden text-32 font-extrabold'>onesim</div>
                    <div className='text-gray leading-150 md:leading-100'>Лучшие предоплаченные eSIM</div>
                    <div className='text-48 font-semibold leading-[83%] md:leading-[110%]'>
                        Не теряй связь с миром
                        <div className='text-48 text-orange font-semibold leading-[83%] md:leading-[110%]'>во время путешествия!</div>
                    </div>
                    <div className='leading-150 md:leading-100 mb-20'>Путешествуйте с доступными предоплаченными картами eSIM без платы за роуминг</div>
                    <div className='flex w-full pr-20 items-center justify-between bg-white rounded border-2 border-[#E1E5EC]'>
                        <input className='outline-none pl-20 rounded text-gray w-[90%] md:w-[95%] h-[50px]' placeholder='Где вам нужна связь?' />
                        <div className='w-[18px] h-[18px]'>
                            <Loupe fill='gray' />
                        </div>
                    </div>
                    <div className='md:hidden h-[260px] w-[1000px] sm:w-full overflow-hidden flex sm:justify-center'>
                        <img className='h-full' src='images/head.svg' />
                    </div>
                </div>
                <div className='hidden md:block h-[420px] absolute top-0 left-[820px] w-[765px] overflow-hidden lg:overflow-visible'>
                    <img src='images/head.svg' alt='head' />
                </div>
            </div>
        </div>
    )
}