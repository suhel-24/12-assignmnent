import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Vector from '../assets/Vector.png'

const Navbar = () => {

  const navigate = useNavigate();
  const [login, setLogin] = useState(false);  

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');  
    if (userInfo) {
      setLogin(true);  
    }
  }, []);
  const handleLogout=()=>{
    localStorage.removeItem("userInfo");
    navigate('/');
  }

  if(!login){
    return(<div>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-11 box-border top-[0] z-[99] sticky max-w-full">
      <header className="flex-1 bg-white box-border flex flex-row items-center justify-center py-6 px-28 max-w-full border-b-[1px] border-solid border-background-divider mq450:gap-[75px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-8 w-[165px] relative"
          loading="lazy"
          alt="hello"
          src={Vector}
        />
      </header>
    </section>
  </div>)
  }
  else{
  return (
    <div className='flex justify-between'>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 box-border top-[0] z-[99] sticky max-w-full">
        <header className="flex-1 bg-white box-border flex flex-row items-center justify-center py-6 px-28 max-w-full border-b-[1px] border-solid border-background-divider mq450:gap-[75px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="h-8 w-[165px] relative"
            loading="lazy"
            alt="hello"
            src={Vector}
          />
        </header>
      </section>
      <section onClick={handleLogout} className='flex justify-center items-center pr-28 cursor-pointer'>
      <img
            className="h-8 pr-4 relative"
            loading="lazy"
            alt="hello"
            src="https://cdn.hugeicons.com/icons/logout-02-stroke-rounded.svg"
          />
    Logout
</section>
      

    </div>
  )}
}

export default Navbar