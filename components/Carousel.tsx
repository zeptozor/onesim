export default function Carousel({ items }: { items: React.ReactNode[] }) {
    return (
        <div className={`relative flex items-center max-w-max`}>
            <div className='w-full overflow-hidden flex max-w-max gap-[20px]'>
                {
                    items.map(i => i)
                }
            </div>
            <svg className={`absolute w-[42px] h-[42px] right-[40px] cursor-pointer`} xmlns='http://www.w3.org/2000/svg' width='42' height='42' viewBox='0 0 42 42' fill='none'>
                <circle cx='21' cy='21' r='21' fill='orange'/>
                <path d='M17 13L25 21L17 29' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
        </div>
    )
}