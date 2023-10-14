import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";

export default function Auth() {
    return (
        <div className='md:min-h-screen flex flex-col justify-between'>
            <Wrapper className='md:min-h-[calc(100vh-260px)] md:h-[calc(100vh-260px)]'>
                <div className='w-full h-screen md:h-full md:mb-[20px] flex flex-col'>
                    <Nav />
                    <div className='w-full h-full px-20 sm:px-40 md:px-80 flex items-center justify-center'>
                        <AuthForm />
                    </div>
                </div>
            </Wrapper>
            <Wrapper maxw='none'>
                <div className='w-full hidden md:block'>
                    <Footer />
                </div>
            </Wrapper>
        </div>
    )
}