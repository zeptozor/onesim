import Footer from "@/components/Footer";
import Advantages from "@/components/Home/Advantages";
import Feedback from "@/components/Home/Feedback";
import Head from "@/components/Home/Head";
import HowDoesItWork from "@/components/Home/HowDoesItWork";
import Offers from "@/components/Home/Offers";
import PaymentMethods from "@/components/Home/PaymentMethods";
import Regions from "@/components/Home/Regions";
import Nav from "@/components/Nav";
import Questions from "@/components/Questions";
import WhyUs from "@/components/WhyUs";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <div>
      <Wrapper>
        <Nav />
      </Wrapper>
      <Wrapper maxw='none'>
        <Head />
      </Wrapper>
      <Wrapper>
        <Regions />
      </Wrapper>
      <Wrapper maxw='none'>
        <Advantages />
      </Wrapper>
      <Wrapper>
        <Offers />
      </Wrapper>
      <Wrapper maxw='none'>
        <WhyUs />
      </Wrapper>
      <Wrapper>
        <HowDoesItWork />
      </Wrapper>
      <Wrapper maxw='none'>
        <PaymentMethods />
      </Wrapper>
      <Wrapper>
        <Questions />
      </Wrapper>
      <Wrapper maxw='none'>
        <Feedback />
      </Wrapper>
      <Wrapper maxw='none'>
        <Footer />
      </Wrapper>
    </div>
  )
}
