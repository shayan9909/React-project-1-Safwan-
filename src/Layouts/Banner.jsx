import Button from '../components/Button'
import Container from '../components/Container'
import bannerimg from '../assets/about.jpg'
import bgShape from '../assets/shape.svg'
import Image from '../components/Images'
const Banner = () => {
    return (
        <section className='bg-primary w-full pt-[221px] pb-[237px] relative group overflow-hidden'>
            <div className='w-[850px] h-[861px] absolute top-0 right-[-50%] group-hover:right-0 duration-500'>
                <Image src={bannerimg} className="w-full" />
            </div>
            <Image src={bgShape} className="absolute top-[54px] left-0 " />
            <Container>
                <div className="header  relative z-10">
                    <h1 className='font-voll font-bold text-[100px] text-white  leading-[110px] pb-[14px]'>Hello!
                        <p> I’m Shayan Abdullah</p>
                    </h1>
                    <p className='font-jost font-normal text-xl text-slate-500  w-[670px] pb-[50px]'>I’am freelance <span className='text-white'>Web Devloper</span> based in Bangladesh who loves to craft attractive website.</p>
                    <Button text="Contact me" />
                </div>
            </Container>
        </section>
    )
}

export default Banner