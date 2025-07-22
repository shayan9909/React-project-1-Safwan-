import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Images'
import Logo from '../assets/logo.svg'
import Button from '../components/Button'
import List from '../components/List'
const Navbar = () => {
  return (
    <section className='py-[18px]'>
      <Container>
        <Flex className="items-center">
          <div className="w-3/12">
            <a href="#">
              <Image src={Logo} />
            </a>
          </div>
          <div className="w-6/12">
            <ul className='flex gap-x-12 items-center justify-center'>
              <List text='Home' />
              <List text='Pages' />
              <List text='Services' />
              <List text='Blog' />
              <List text='Contact' />
            </ul>
          </div>
          <div className="w-3/12 flex justify-end"> 
          <Button text="Download CV" />

          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Navbar