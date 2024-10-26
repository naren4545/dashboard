import React, { useEffect, useState } from "react";
import add from '../../assests/gg_add.svg';
import Facebook from '../../assests/logos_facebook.svg';
import Twitter from '../../assests/logos_twitter.svg';
import Instagram from '../../assests/skill-icons_instagram.svg';
import LinkedIn from '../../assests/devicon_linkedin.svg';
import Website from '../../assests/mdi_web.svg';

import Image from "next/image";
import pen from '../../assests/penpdpd.svg';
import { useFormData } from "./FormContext";

const icons = {
  Instagram,
  Facebook,
  Twitter,
  LinkedIn,
  Website,
};

const SocialLinks = () => {
  const [showForm, setShowForm] = useState(true);
  const [socialLinks, setSocialLinks] = useState([]);
  const [socialProfile, setSocialProfile] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [editIndex, setEditIndex] = useState(null); // Track which item is being edited

  const { formData, updateFormData } = useFormData(); // Handle input changes for category fields and new tag
useEffect(()=>setSocialLinks(formData.socialLinks),[])
  // Handle add button click to show the form
  const handleAddClick = () => {
    setSocialProfile("");
    setSocialLink("");
    setEditIndex(null); // Reset edit index when adding a new link
    setShowForm(true);
  };

  // Handle form submission
  const handleSaveClick = () => {
    if (socialProfile && socialLink) {
      const newSocialLink = { profile: socialProfile, link: socialLink };

      setSocialLinks((prevLinks) => {
        if (editIndex !== null) {
          // Update the existing link
          const updatedLinks = [...prevLinks];
          updatedLinks[editIndex] = newSocialLink;
          updateFormData("socialLinks", updatedLinks); // Update formData
          return updatedLinks;
        } else {
          // Add new link
          updateFormData("socialLinks", [...prevLinks, newSocialLink]);
          return [...prevLinks, newSocialLink];
        }
      });

      setSocialProfile("");
      setSocialLink("");
      setEditIndex(null); // Reset edit index
      setShowForm(false); // Close the form
    }
  };

  // Handle edit button click
  const handleEditClick = (index) => {
    setSocialProfile(socialLinks[index].profile);
    setSocialLink(socialLinks[index].link);
    setEditIndex(index); // Set the index of the link being edited
    setShowForm(true); // Show the form
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-normal">Boost Your Online Presence!</h2>
        <button onClick={handleAddClick} className="text-[#EC970D] flex items-center">
          Add <span className="ml-1"><Image src={add} /></span>
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="mt-4 px-2 py-4 rounded-xl border border-[#D9D9D9] max-w-[598px]">
          <label className="block">
            Social Profile <span className="text-red-500">*</span>
            <select
              value={socialProfile}
              onChange={(e) => setSocialProfile(e.target.value)}
              className="w-full border-b border-gray-300 p-2 rounded mt-1"
            >
              <option value="" disabled>Select Social Profile</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Twitter">Twitter</option>
              <option value="Website">Other Website</option>
            </select>
          </label>
          <label className="block mt-3">
            Social Link <span className="text-red-500">*</span>
            <input
              type="text"
              className="w-full border-b border-gray-300 p-2 rounded mt-1"
              value={socialLink}
              onChange={(e) => setSocialLink(e.target.value)}
            />
          </label>
          <div className="flex justify-between mt-4 mb-6">
            <button
              onClick={handleSaveClick}
              className="bg-[#F6830E] min-w-[124px] text-white text-xl font-medium px-4 py-1 rounded-lg"
            >
              {editIndex !== null ? 'Update' : 'Save'}
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="border border-[#F6830E] px-4 text-xl text-[#F6830E] min-w-[124px] rounded-lg font-medium py-1 "
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Render added social links as cards */}
      <div className="mt-4">
        {socialLinks.map((social, index) => {
          let icon = icons[social.profile];

          return (
            <div key={index} className="border p-3 custom-bullet rounded-md max-w-[600px] mb-2">
              <div className="flex justify-between items-center">
                <p className="font-medium text-xl flex items-center gap-2">
                  <span>{social.profile === "Website" ? "Other website" : social.profile}</span>
                  <span><Image className="inline w-5 h-5" src={icon} /></span>
                </p>
                <button
                  className="text-orange-500 pen hover:text-orange-700"
                  onClick={() => handleEditClick(index)}
                >
                  <Image src={pen} className="inline" />
                </button>
              </div>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.link}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
