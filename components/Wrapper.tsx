import MobileMenu from "./MobileMenu";

export default function Wrapper({ children, pb }: { children: React.ReactNode, pb?: string }) {
    return (
    <div className='flex h-screen md:h-auto  md:pb-0 overflow-scroll flex-col mx-auto w-full md:max-w-[1500px]' style={{ paddingBottom: (pb ? pb : '50px') }}>
        {children}
        <MobileMenu />
    </div>
    )
}