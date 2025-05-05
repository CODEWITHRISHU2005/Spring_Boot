import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, PhoneCall, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333] text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* List Your Show */}
          <div>
            <h4 className="text-white font-bold mb-4">List Your Show</h4>
            <p className="text-sm mb-4">Got a show, event, activity or a great experience? Partner with us & get listed on BookMySpot</p>
            <button className="bg-[#E23744] text-white text-sm py-2 px-4 rounded hover:bg-[#c22f3a] transition-colors">
              Contact Today
            </button>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-white font-bold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <PhoneCall className="h-4 w-4 mr-2" />
                <span>24/7 Customer Care</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>Resend Booking Confirmation</span>
              </li>
              <li><a href="/" className="hover:text-white">Help & Support</a></li>
              <li><a href="/" className="hover:text-white">FAQs</a></li>
              <li><a href="/" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="/" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Movies</a></li>
              <li><a href="/" className="hover:text-white">Events</a></li>
              <li><a href="/" className="hover:text-white">Plays</a></li>
              <li><a href="/" className="hover:text-white">Sports</a></li>
              <li><a href="/" className="hover:text-white">Gift Cards</a></li>
              <li><a href="/" className="hover:text-white">Offers</a></li>
              <li><a href="/" className="hover:text-white">Stream</a></li>
            </ul>
          </div>

          {/* Connect with us */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect with us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="/" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="/" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="/" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="/" className="text-gray-300 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <h4 className="text-white font-bold mb-2">Download the app</h4>
            <div className="flex space-x-2">
              <a href="/" className="block">
                <img 
                  src="https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="App Store" 
                  className="h-8 object-contain"
                />
              </a>
              <a href="/" className="block">
                <img 
                  src="https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Google Play" 
                  className="h-8 object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-xs">
          <p>© 2024 BookMySpot. All Rights Reserved.</p>
          <p className="mt-2">This is a demo project for educational purposes only. Not affiliated with any real booking platform.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;