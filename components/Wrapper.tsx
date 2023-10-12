import MobileMenu from "./MobileMenu";

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
    <div className='flex h-screen md:h-auto pb-[50px] md:pb-0 overflow-scroll flex-col mx-auto w-full md:max-w-[1500px]'>
        {children}
        <MobileMenu />
    </div>
    )
}