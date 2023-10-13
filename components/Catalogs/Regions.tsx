import Region from "../Region"

export default function Regions() {
    const regions = [
        {
            region: 'europe',
            categories: ['regional'],
            forRegion: 'Европы',
            price: '$3.90 - $29.90'
        },
        {
            region: 'usa',
            categories: ['local'],
            forRegion: 'США',
            price: '$3.90 - $29.90'
        },
        {
            region: 'france',
            categories: ['european', 'local'],
            forRegion: 'Франции',
            price: '$3.90 - $29.90'
        },
        {
            region: 'spain',
            categories: ['european', 'local'],
            forRegion: 'Испании',
            price: '$3.90 - $29.90'
        },
        {
            region: 'middle east',
            categories: ['regional'],
            forRegion: 'Ближнего востока',
            price: '$3.90 - $29.90'
        }
    ]

    return (
        <div className='w-full px-20 sm:px-40 md:px-80 py-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-40 sm:gap-20'>
            {
                regions.map((i, index) => <Region key={index} region={i.region} forRegion={i.forRegion} price={i.price} categories={i.categories} width='100%' />)
            }
        </div>
    )
}