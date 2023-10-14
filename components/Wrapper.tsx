export default function Wrapper({ children, pb, maxw, className = '' }: { children: React.ReactNode, pb?: string, maxw?: string, className?: string }) {
    return (
    <div className={'flex w-full mx-auto ' + className} style={{ maxWidth: (maxw ?? '1500px') }}>
        {children}
    </div>
    )
}