export default function Loupe({ fill }: { fill?: string }) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
            <path className={`fill-${fill ? fill : 'black'}`} d='M13.7071 12.2929C13.3166 11.9024 12.6834 11.9024 12.2929 12.2929C11.9024 12.6834 11.9024 13.3166 12.2929 13.7071L13.7071 12.2929ZM18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L18.2929 19.7071ZM8 14C4.68629 14 2 11.3137 2 8H0C0 12.4183 3.58172 16 8 16V14ZM2 8C2 4.68629 4.68629 2 8 2V0C3.58172 0 0 3.58172 0 8H2ZM8 2C11.3137 2 14 4.68629 14 8H16C16 3.58172 12.4183 0 8 0V2ZM14 8C14 11.3137 11.3137 14 8 14V16C12.4183 16 16 12.4183 16 8H14ZM12.2929 13.7071L18.2929 19.7071L19.7071 18.2929L13.7071 12.2929L12.2929 13.7071Z' />
        </svg>
    )
}