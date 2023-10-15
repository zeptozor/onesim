import Carousel from "../Carousel"
import Category from "../Category"
import Region from "../Region"
import Switch, { Mobile } from "../Switch"

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
                <div className='hidden sm:block w-[530px] h-[50px] mt-20'>
                    <Switch options={[
                        {
                            label: 'Самые популярные',
                            value: 'popular'
                        },
                        {
                            label: 'Региональные eSIM',
                            value: 'regional'
                        },
                        {
                            label: 'Локальные eSIMs',
                            value: 'local'
                        }
                    ]} onChange={() => {}} />
                </div>
                <div className='sm:hidden w-full mt-20'>
                    <Mobile options={[
                        {
                            label: 'Самые популярные',
                            value: 'popular'
                        },
                        {
                            label: 'Региональные eSIM',
                            value: 'regional'
                        },
                        {
                            label: 'Локальные eSIMs',
                            value: 'local'
                        }
                    ]} />
                </div>
            </div>
            <Carousel items={regions.map(i => <Region key={i.region} region={i.region} categories={i.categories} forRegion={i.forRegion} price={i.price} />)} />
        </div>
    )
}