import React, { useState } from "react";
import LakshadweepImg from "../assets/Map/Lakshadweep.png"
import CardOffersImg from "../assets/circle/airplane.png";
import HotelsIconImg from "../assets/circle/cab.png";
import TransportImg from "../assets/circle/hotel.png";
import VillasIconImg from "../assets/circle/creditcards.png";
import CircleRow from '../components/CircleRow/CircleRow.jsx';

const ItineraryPage = () => {
  // Dummy itinerary data for demonstration
  const images = [
    CardOffersImg,
    HotelsIconImg,
    TransportImg,
    VillasIconImg,
    // Add more image URLs here
  ];
  const [showShareForm, setShowShareForm] = useState(false);
  const [sharedWithEmail, setSharedWithEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const itineraryData = [
    {
        day: 1,
        place: "Beach Day at Agatti Island",
        details: [
          {
            time: "8:00AM",
            activity: "Breakfast at Local Cafe",
            description:
              "Start your day with a delicious breakfast at a local cafe in Agatti Island.",
            cost: "30 AED",
            duration: "1 hour",
          },
          {
            time: "10:00AM",
            activity: "Snorkeling at Coral Reefs",
            description:
              "Explore the stunning coral reefs around Agatti Island with a snorkeling trip.",
            cost: "150 AED",
            duration: "3 hours",
          },
          {
            time: "1:00PM",
            activity: "Lunch at Beachside Restaurant",
            description:
              "Enjoy a delicious seafood lunch at a beachside restaurant. ",
            cost: "100 AED",
            duration: "2 hours",
          },
          {
            time: "3:00PM",
            activity: "Explore Agatti Village",
            description:
              "Take a stroll through the charming Agatti Village, exploring local markets.",
            cost: "Free",
            duration: "1.5 hours",
          },
          {
            time: "5:00PM",
            activity: "Sunset Cruise",
            description:
              "Embark on a scenic sunset cruise around Agatti Island.",
            cost: "200 AED",
            duration: "1.5 hours",
          },
          {
            time: "7:00PM",
            activity: "Dinner at Resort",
            description:
              "Indulge in a sumptuous dinner buffet at a luxury resort.",
            cost: "250 AED",
            duration: "2 hours",
          },
        ],
      },
      {
        day: 2,
        place: "Scuba Diving at Bangaram Island",
        details: [
          {
            time: "7:00AM",
            activity: "Breakfast at Resort",
            description:
              "Start your day with a hearty breakfast at the resort, enjoying a selection of fresh fruits, pastries.",
            cost: "Included in accommodation",
            duration: "1 hour",
          },
          {
            time: "9:00AM",
            activity: "Scuba Diving Adventure",
            description:
              "Embark on an exciting scuba diving adventure in the crystal-clear waters of Bangaram Island.",
            cost: "5000 INR (inclusive of equipment rental and guide)",
            duration: "4 hours",
          },
          {
            time: "1:00PM",
            activity: "Lunch at Beach Shack",
            description:
              "Relax and unwind with a casual beachside lunch at a charming beach shack. Indulge in grilled seafood, refreshing beverages.",
            cost: "300 INR",
            duration: "2 hours",
          },
          {
            time: "3:00PM",
            activity: "Beach Exploration",
            description:
              "Spend the afternoon exploring the pristine beaches of Bangaram Island. Take leisurely walks along the sandy shores, collect seashells, and dip your toes in the turquoise waters.",
            cost: "Free",
            duration: "2 hours",
          },
          {
            time: "5:00PM",
            activity: "Sunset Yoga",
            description:
              "Join a sunset yoga session on the beach, harmonizing your mind, body, and spirit amidst the serene natural beauty of Bangaram Island. Experience deep relaxation, rejuvenation, and inner peace as you practice yoga asanas and meditation techniques guided by experienced instructors. Suitable for all skill levels. Approximately 1 hour.",
            cost: "200 INR (per person)",
            duration: "1 hour",
          },
          {
            time: "7:00PM",
            activity: "Dinner Under the Stars",
            description:
              "Dine under the starlit sky at a romantic beachfront restaurant, savoring exquisite seafood specialties, grilled delicacies, and gourmet cuisine infused with local flavors. Enjoy live music, bonfire ambiance, and personalized service for an unforgettable dining experience. Approximately 3 hours.",
            cost: "800 INR (per person)",
            duration: "3 hours",
          },
        ],
      } ,
      {
        day: 3,
        place: "Hiking at Coral Reefs",
        details: [
          {
            time: "7:00AM",
            activity: "Breakfast at Resort",
            description:
              "Start your day with a hearty breakfast at the resort, enjoying a selection of fresh fruits, pastries, and local specialties. Approximately 1 hour.",
            cost: "Included in accommodation",
            duration: "1 hour",
          },]
        } 
    // Add more days of itinerary data
  ];

 // State variable to track the active dropdown
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Function to toggle the active dropdown
  const toggleDropdown = (index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  const handleShareButtonClick = () => {
    setShowShareForm(!showShareForm);
    setIsSubmitted(false); // Reset isSubmitted state when share button is clicked
  };

  const handleSubmit = () => {
    // Implement functionality to submit sharedWithEmail
    setIsSubmitted(true);
  };

  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto py-16 md:py-24 flex mt-10">
        {/* Column for Lakshadweep map image */}
        <div>
          <img
            src={LakshadweepImg}
            alt="Lakshadweep Map"
            className="h-auto max-h-full w-full object-cover rounded-lg"
          />
        </div>
        {/* Column for itinerary container */}
        <div className="ml-8 flex-grow relative">
        <button
            className="absolute top-0 right-0 mr-4 mt-2 bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleShareButtonClick}
          >
            Share
          </button>
          {/* Share form */}
          {showShareForm && (
            <div className="absolute top-12 right-0 mr-4 bg-white shadow-md p-4 rounded-lg">
              <input
                type="text"
                placeholder="Enter email"
                value={sharedWithEmail}
                onChange={(e) => setSharedWithEmail(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 mb-2"
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Submit
              </button>
              {isSubmitted && (
                <div className="mt-2">
                  {/* Icon to indicate sharing */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-green-500 ml-1">
                    Shared with {sharedWithEmail}
                  </span>
                </div>
              )}
            </div>
          )}
          <h1 className="text-3xl font-bold mb-4 text-center">
          3 days in Lakshadweep, 29°C
          </h1>
          {/* Add an outer container with a fixed height */}
          <div className="bg-blue-300 rounded-lg p-7 h-85 overflow-y-auto">
            {itineraryData.map((item, index) => (
              <div
                key={item.day}
                className={`bg-white rounded-lg mb-8 ${
                  activeDropdown !== null && index !== activeDropdown
                    ? "hidden"
                    : ""
                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer py-4 px-8"
                  onClick={() => toggleDropdown(index)}
                >
                  <h2 className="text-2xl font-bold">
                    {`Day ${item.day}: ${item.place}`}
                  </h2>
                  <svg
                    className={`w-6 h-6 transition-transform transform ${
                      index === activeDropdown ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {index === activeDropdown && (
                  <div className="max-h-48 overflow-y-auto px-8 pb-4">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="mb-4">
                        <div className="bg-white shadow-md rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold">
                              {detail.time}
                            </h3>
                            <div className="text-gray-600">
                              {detail.duration}
                            </div>
                          </div>
                          <p className="mb-2">{detail.activity}</p>
                          <p className="text-gray-500">
                            {detail.description}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="text-center mt-4">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                        Book a Cab
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="mt-8">
              {/* Placeholder for adding another prompt */}
              <p className="text-center text-gray-500">
                Want to change your itinerary? Add another prompt here.
              </p>
            </div>
          </div>
          {/* Circle row at the bottom */}
        <div className="flex justify-center mt-4">
        <CircleRow images={images} />
        </div>
        </div>
        
       </div>
     
    </div>
  );
};

export default ItineraryPage;