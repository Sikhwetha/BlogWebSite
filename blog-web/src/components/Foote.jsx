import React, { useEffect } from "react";



const Foote = () => {
 
  return (
    <div className="bg-black text-white">
      <div className="px-4 pt-16 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-2 lg:px-4">
        <div className="p-1">
          <div>
            <div className="flex flex-col md:flex-row md:w-full ">
              <div className="md:w-[40%] p-2">
                <h1 className="text-3xl  py-5">Get In Touch</h1>
                <p className="">Contact : 072 1962 692</p>
                <p className="">Email : Sikhwethamulanga@gmail.com</p>
                <h3 className="">Portfolio : https://msportfolio.co.za/</h3>
              </div>

              <div className="md:w-1/3">
                <h1 className="text-3xl py-5">About</h1>
                <p>Web Developer</p>
                <p>Mobile</p>
                <p>FullStack developer</p>
              </div>

              <div className="md:w-1/3">
                <h1 className="text-3xl py-5 ">Technelogy</h1>
                <p>React js</p>
                <p>Next js</p>
                <p>Django</p>
                <p>Tailwind.css</p>
              </div>

              <div className="md:w-1/3">
                <h1 className="text-3xl py-5 ">social Media </h1>
                <li className="hover:text-orange-500"><a href="https://www.instagram.com/sikhweth_mulanga/">Instgram</a></li>
                <li className="hover:text-orange-500"><a href="https://x.com/home">Twitter</a></li>
                <li className="hover:text-orange-500"><a href="https://www.facebook.com/mulanga.sikhwetha.7">Facebook</a></li>
                <li className="hover:text-orange-500"><a href="https://www.tiktok.com/@mulangasikhwetha">TikTok</a></li>
                <li className="hover:text-orange-500"><a href="https://msportfolio.co.za/">Portfolio</a></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foote;
