import React, { useState } from "react";
import axios from "axios";
import Popup from '../PopUp_city/popUp';
import boat from "../../assets/places/boat.jpg";
import lakshadweepImg from "../../assets/places/Lakshadweep.jpeg";
import GoaImg from "../../assets/places/Goa.jpeg";
import PondicherryImg from "../../assets/places/Pondicherry.jpeg";
import './styles.css';
const Places = ({ handleOrderPopup }) => {
  // State variables for capturing user preferences
  const [climatePreference, setClimatePreference] = useState("");
  const [countryPreference, setCountryPreference] = useState("");
  const [activityPreference, setActivityPreference] = useState("");
  const [budgetPreference, setBudgetPreference] = useState("");
  const [accommodationPreference, setAccommodationPreference] = useState("");
  const [travelStylePreference, setTravelStylePreference] = useState("");
  const [foodPreferences, setFoodPreferences] = useState("");
  const [interestsHobbies, setInterestsHobbies] = useState("");
  const [transportationPreference, setTransportationPreference] = useState("");
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [languagePreference, setLanguagePreference] = useState("");
  const [travelDatesFlexibility, setTravelDatesFlexibility] = useState("");
  
  const [isOpen, setIsOpen] = useState(false);
  const [cities, setCities] = useState([]);

  // Options for climate preference
  const climateOptions = ["Mountaineous", "Alpine", "Polar"];

  // Options for activity preference
  const activityOptions = ["Relaxing", "Cultural", "Sporty"];

  // Options for accommodation preference
  const accommodationOptions = ["Hotels", "Resorts", "Hostels",];

  // Options for travel style preference
  const travelStyleOptions = ["Solo Travel", "Family Travel", "Luxury Travel"];

  // Options for food preferences
  const foodPreferenceOptions = [ "Vegan", "Gluten-Free", "Local Cuisine"];

  // Options for interests and hobbies
  const interestsHobbiesOptions = ["Outdoor Activities", "Cultural Experiences", "Entertainment"];

  // Options for transportation preference
  const transportationOptions = [ "Rental Cars", "Biking", "Guided Tours"];

  // Options for special requirements
  const specialRequirementsOptions = ["Accessibility Needs", "Traveling with Pets", "Health Conditions"];

  // Options for language preference
  const languageOptions = ["English", "Spanish", "French"];

  // Options for travel dates flexibility
  const travelDatesFlexibilityOptions = ["Flexible", "Specific Dates"];

 


  const handleSubmit = async () => {
    try {
      setIsOpen(true);

      // Simulate loading travel options (dummy data)
      const dummyCities = [
        { name: 'Lakshadweep', image: lakshadweepImg },
        { name: 'Goa', image: GoaImg },
        { name: 'Pondicherry', image: PondicherryImg},
        // Add more dummy city data as needed
      ];
  
      // Set the dummy data as the list of cities
      setCities(dummyCities);
      // Send user preferences to the server
      const response = await axios.post("http://localhost:3000/api/preferences", {
        climatePreference,
        countryPreference,
        activityPreference,
        accommodationPreference,
        travelStylePreference,
        foodPreferences,
        interestsHobbies,
        transportationPreference,
        specialRequirements,
        languagePreference,
        travelDatesFlexibility,
       
      });
      // Handle response from the server
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderOptions = (options, state, setState) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`bg-gray-100 rounded-lg p-4 cursor-pointer ${
              state === option ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => setState(option)}
          >
            {option}
          </div>
        ))}
      </div>
    );
  };
  
  const handleClosePopup = () => {
    // Hide the popup
    setIsOpen(false);
  };

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container">
          {/* Additional section for helping users find a destination */}
          <div className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Don't have a specific destination in mind? Let's help you out!
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-md overflow-hidden shadow-lg">
              <div className="bg-gray-50 p-4">
                <h2 className="opacity-70 block">Preferred Climate</h2>
                {renderOptions(climateOptions, climatePreference, setClimatePreference)}
              </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg">
              <div className="bg-gray-50 p-4">
                <h2 className="opacity-70 block">Preferred Country</h2>
                <input
                  type="text"
                  name="countryPreference"
                  id="countryPreference"
                  placeholder="Enter Country"
                  className="w-full bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                  value={countryPreference}
                  onChange={(e) => setCountryPreference(e.target.value)}
                />
              </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg">
              <div className="bg-gray-50 p-4">
                <h2 className="opacity-70 block">Preferred Activity</h2>
                {renderOptions(activityOptions, activityPreference, setActivityPreference)}
              </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg">
  <div className="bg-gray-50 p-4">
    <h2 className="opacity-70 block">Budget Preference</h2>
    <input
      type="number"
      name="budgetPreference"
      id="budgetPreference"
      placeholder="Enter Budget"
      className="w-full bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
      value={budgetPreference}
      onChange={(e) => setBudgetPreference(e.target.value)}
    />
  </div>
</div>

<div className="rounded-md overflow-hidden shadow-lg">
  <div className="bg-gray-50 p-4">
    <h2 className="opacity-70 block">Preferred Accommodation</h2>
    {renderOptions(accommodationOptions, accommodationPreference, setAccommodationPreference)}
  </div>
</div>

<div className="rounded-md overflow-hidden shadow-lg">
  <div className="bg-gray-50 p-4">
    <h2 className="opacity-70 block">Travel Style Preference</h2>
    {renderOptions(travelStyleOptions, travelStylePreference, setTravelStylePreference)}
  </div>
</div>

<div className="rounded-md overflow-hidden shadow-lg">
  <div className="bg-gray-50 p-4">
    <h2 className="opacity-70 block">Food Preferences</h2>
    {renderOptions(foodPreferenceOptions, foodPreferences, setFoodPreferences)}
  </div>
</div>

<div className="rounded-md overflow-hidden shadow-lg">
  <div className="bg-gray-50 p-4">
    <h2 className="opacity-70 block">Interests and Hobbies</h2>
    {renderOptions(interestsHobbiesOptions, interestsHobbies, setInterestsHobbies)}
  </div>
</div>

<div className="rounded-md overflow-hidden shadow-lg">
  <div className="bg-gray-50 p-4">
    <h2 className="opacity-70 block">Transportation Preference</h2>
    {renderOptions(transportationOptions, transportationPreference, setTransportationPreference)}
  </div>
</div>

<div className="rounded-md overflow-hidden shadow-lg">
  <div className="bg-gray-50 p-4">
    <h2 className="opacity-70 block">Special Requirements</h2>
    {renderOptions(specialRequirementsOptions, specialRequirements, setSpecialRequirements)}
  </div>
</div>

<div className="rounded-md overflow-hidden shadow-lg">
  <div className="bg-gray-50 p-4">
    <h2 className="opacity-70 block">Preferred Language</h2>
    {renderOptions(languageOptions, languagePreference, setLanguagePreference)}
  </div>
</div>

<div className="rounded-md overflow-hidden shadow-lg">
  <div className="bg-gray-50 p-4">
    <h2 className="opacity-70 block">Travel Dates Flexibility</h2>
    {renderOptions(travelDatesFlexibilityOptions, travelDatesFlexibility, setTravelDatesFlexibility)}
  </div>
</div>

          </div>

          <button
            className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200"
            onClick={handleSubmit}
          >
            Submit Preferences
          </button>
          <Popup isOpen={isOpen} onClose={handleClosePopup} cities={cities} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Here, you can render the PlaceCard components with the selected preferences */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
