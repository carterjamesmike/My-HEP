import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center bg-blue-100 mt-2">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Profile
          </h2>

          <p className="text-gray-600"> </p>
            
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            See the exercise video below!
          </h2>
          <div className='flex justify-center items-center mb-8'>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/g_tea8ZNk5A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className='max-w-md mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
            ullamcorper risus, id placerat justo. Etiam rutrum in nunc ut
            imperdiet. Praesent ac justo vestibulum ipsum malesuada molestie a
            eu risus. Maecenas mattis sed sapien vel malesuada. Aenean maximus
            tristique neque, id faucibus nulla vehicula bibendum. Sed finibus
            fermentum turpis ac consequat. Nulla id erat in orci efficitur
            lobortis vitae id urna. 
            
            Aliquam eros nisi, sodales id interdum in,
            tempor sed diam. Etiam tristique facilisis ante ut ornare. Praesent
            sagittis neque dui, a gravida mi pretium in. Etiam tincidunt
            pellentesque elit. Fusce dapibus venenatis egestas. Nunc metus
            magna, tincidunt id dui a, rhoncus luctus felis. Morbi suscipit,
            tellus non commodo condimentum, sapien nisi eleifend justo, quis
            laoreet metus neque eget nulla. Nullam laoreet laoreet ornare. Donec
            dui nulla, dictum vitae interdum nec, fermentum ut libero. Nam
            laoreet metus sem, ac hendrerit dolor pulvinar a. Nulla euismod
            dapibus risus eu ullamcorper. Phasellus eget purus interdum, posuere
            purus ut, vulputate nunc.
          </p>
          <div>
          
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
