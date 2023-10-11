export default function Person({ className }: { className?: string }) {
    return (
        <svg className={className || ''} xmlns='http://www.w3.org/2000/svg' width='18' height='20' viewBox='0 0 18 20' fill='none'>
            <path d='M17 19C17 16.2386 13.4183 14 9 14C4.58172 14 1 16.2386 1 19M9 11C6.23858 11 4 8.76142 4 6C4 3.23858 6.23858 1 9 1C11.7614 1 14 3.23858 14 6C14 8.76142 11.7614 11 9 11Z' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    )
}