import React, { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [maxPrice, setMaxPrice] = useState(30);
  const [activityPreference, setActivityPreference] = useState("");
  const [accommodationPreference, setAccommodationPreference] = useState("");

  const handleSearch = async () => {
    try {
      // Send user inputs to the server
      const response = await axios.post("http://localhost:3000/api/itinerary", {
        destination,
        date,
        maxPrice,
        activityPreference,
        accommodationPreference
      });
      // Handle response from the server
      console.log("Server response:", response.data);

      // Redirect to itinerary page
      window.location.href = "/itinerary"; // Modify the URL as needed
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Search your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="date" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="maxPrice" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">$ {maxPrice}</p>
                  </div>
                </label>
                <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                  <input
                    type="range"
                    name="maxPrice"
                    id="maxPrice"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    value={maxPrice}
                    step="10"
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="activityPreference" className="opacity-70">
                  Activity Preference
                </label>
                <select
                  id="activityPreference"
                  name="activityPreference"
                  className="w-full bg-gray-100 my-2 rounded-full p-2"
                  value={activityPreference}
                  onChange={(e) => setActivityPreference(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="cultural">Cultural</option>
                  <option value="sightseeing">Sightseeing</option>
                  <option value="relaxing">Relaxing</option>
                </select>
              </div>
              <div>
                <label htmlFor="accommodationPreference" className="opacity-70">
                  Accommodation Preference
                </label>
                <select
                  id="accommodationPreference"
                  name="accommodationPreference"
                  className="w-full bg-gray-100 my-2 rounded-full p-2"
                  value={accommodationPreference}
                  onChange={(e) => setAccommodationPreference(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="hotels">Hotels</option>
                  <option value="airbnb">Airbnb</option>
                  <option value="hotelWithPool">Hotel with Pool</option>
                </select>
              </div>
            </div>
            <button
              className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2"
              onClick={handleSearch}
            >
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
