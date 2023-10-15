import Switch, { Mobile } from "@/components/Switch";

export default function JJJ() {
    return (
        <>
            <div className='w-[400px] h-[40px]'>
                <Switch options={[
                    {
                        label: 'Особенности',
                        value: 'features'
                    },
                    {
                        label: 'Описание',
                        value: 'description'
                    },
                    {
                        label: 'Операторы',
                        value: 'operators'
                    }
                ]} />
            </div>
            <div className='w-[353px] mt-[40px]'>
                <Mobile options={[
                    {
                        label: 'Особенности',
                        value: 'features'
                    },
                    {
                        label: 'Описание',
                        value: 'description'
                    },
                    {
                        label: 'Операторы',
                        value: 'operators'
                    }
                ]} />
            </div>
        </>
    )
}