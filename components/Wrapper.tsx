export default function Wrapper({ children, pb, maxw }: { children: React.ReactNode, pb?: string, maxw?: string }) {
    return (
    <div className='flex w-full mx-auto' style={{ maxWidth: (maxw ?? '1500px') }}>
        {children}
    </div>
    )
}