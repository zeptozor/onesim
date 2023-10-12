import MobileMenu from "./MobileMenu";

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
    <div className='relative flex flex-col mx-auto w-full md:max-w-[1500px]'>
        {children}
        <MobileMenu />
    </div>
    )
}