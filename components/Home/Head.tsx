import Loupe from "@/components/svg/Loupe";

export default function Head() {
    return (
        <div className='flex flex-col md:flex-row md:pl-80 gap-[37px] items-center md:gap-[56px] w-full bg-bg'>
            <div className='flex flex-col max-w-[700px] md:max-w-none gap-20 w-full h-full px-20 sm:px-40 md:px-0 pt-20 md:py-70'>
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
            </div>
                <img className='md:w-[762px] md:h-[420px] max-w-[700px] md:max-w-none' src='images/head.svg' alt='head' />
        </div>
    )
}