import Carousel from "../Carousel"
import Category from "../Category"
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
        <div className='w-full mb-40'>
            <div className='w-full max-w-[1500px] mx-auto my-40 px-20 sm:px-40 md:px-80'>
                <div className='text-28 sm:text-36 font-semibold leading-120'>Куда вы отправитесь в следующий раз?</div>
                <div className='flex gap-10 sm:gap-20 sm:p-[10px] mt-20 flex-wrap sm:inline-flex sm:justify-center sm:items-center sm:rounded sm:bg-bg'>
                    <Category active={true} category='Самые популярные' />
                    <Category active={false} category='Региональные eSIM' />
                    <Category active={false} category='Локальные eSIMs' />
                </div>
            </div>
            <div className='md:pl-80 lg:pl-[calc(50%-750px+80px)] pl-20 sm:pl-40'>
                <Carousel items={regions.map(i => <Region key={i.region} region={i.region} categories={i.categories} forRegion={i.forRegion} price={i.price} />)} />
            </div>
        </div>
    )
}