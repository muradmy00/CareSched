import { assets } from "../assets/assets"



const Footer = () => {



  return (

    <div className="md:mx-10">
      
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* Left */}

        <div>

          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>

        </div>


        {/* Middle */}

        <div>

          <p className="text-xl font-medium mb-5">COMPANY</p>
          
          <ul className="flex flex-col gap-2 text-gray-600">

            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy policy</li>

          </ul>

        </div>



        {/* Right */}

        <div>

          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>

          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer">+0-000-000-000</li>
            <li className="cursor-pointer">example@gmail.com</li>
          </ul>
 

        </div>



      </div>

     {/* Copyright text */}
      <div>

        <hr />
        <p className="py-5 text-sm text-center">&copy;  Copyright 2024 murad00 - All Right Reserved</p>

      </div>

      
    </div>
  )
}

export default Footer
