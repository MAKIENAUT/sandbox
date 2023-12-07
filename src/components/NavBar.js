"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
   { name: 'Home', href: '../', linkType: 'image', class: 'HomeLink' },
   { name: 'About', href: '/About', linkType: 'normal', class: 'PageLink' },
   { name: 'News/Blog', href: '/Content', linkType: 'normal', class: 'PageLink' },
   {
      name: 'Process ', href: '/Process', linkType: 'dropdown', class: 'PageLink', dropdownLinks: [
         { name: 'Family Based', href: '/Process/FamilyBased', class: 'DropdownLink' },
         { name: 'Study & Exchange', href: '/Process/StudyAndExchange', class: 'DropdownLink' },
         { name: 'Temporary Employment', href: '/Process/TemporaryEmployment', class: 'DropdownLink' },
      ]
   },
   {
      name: 'Applicants', href: '/Applicants', linkType: 'dropdown', class: 'PageLink', dropdownLinks: [
         { name: 'Family Based', href: '/Applicants/FamilyBased', class: 'DropdownLink' },
         { name: 'Study & Exchange (J1)', href: '/Applicants/StudyAndExchange', class: 'DropdownLink' },
         { name: 'Temporary Employment (EB3/H2A)', href: '/Applicants/TemporaryEmployment', class: 'DropdownLink' },
      ]
   },
   { name: 'Partnership', href: '/Partners', linkType: 'normal', class: 'PageLink' }
];

const NavDropdown = ({ link, isOpen, toggleDropdown, index, activeDropdownIndex }) => {
   const isActive = index === activeDropdownIndex;

   return (
      <div className={`DropdownContainer${link.name} ${isActive ? 'active' : ''}`}>
         <div className={`PageLink ${link.class}`} onClick={toggleDropdown}>
            {link.name} <FontAwesomeIcon icon={faCaretDown} />
         </div>
         {isOpen && (
            <div className={`DropdownContent${link.name} ${isActive ? 'active' : ''}`}>
               {link.dropdownLinks.map((dropdownLink) => (
                  <Link key={dropdownLink.name} href={dropdownLink.href} className={dropdownLink.class}>
                     {dropdownLink.name}
                  </Link>
               ))}
            </div>
         )}
      </div>
   );
};

export default function NavBar() {
   const adminUsername = 'Makie';

   const imageLinks = navLinks.filter((link) => link.linkType === 'image');
   const normalLinks = navLinks.filter((link) => link.linkType === 'normal' || link.linkType === 'dropdown');

   const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
   const [dropdownStates, setDropdownStates] = useState(normalLinks.map(() => false));

   // Function to toggle the dropdown state
   const toggleDropdown = (index) => {
      const newStates = dropdownStates.map((state, i) => i === index ? !state : false);
      setDropdownStates(newStates);
      setActiveDropdownIndex(newStates[index] ? index : null);
   };

   return (
      <nav>
         <div className="HomeButton">
            {imageLinks.map((link) => (
               <Link key={link.name} href={link.href} className={link.class}>
                  <img src="/wma-logo.png" alt={link.name} className={`${link.name}Image`} />
               </Link>
            ))}
         </div>

         <div className="PageButtons">
            {normalLinks.map((link, index) =>
               link.linkType === 'dropdown' ? (
                  <NavDropdown
                     key={link.name}
                     link={link}
                     isOpen={dropdownStates[index]}
                     toggleDropdown={() => toggleDropdown(index)}
                     index={index}
                     activeDropdownIndex={activeDropdownIndex}
                  />
               ) : (
                  <Link key={link.name} href={link.href} className={link.class} id={link.linkType}>
                     {link.name}
                  </Link>
               )
            )}
         </div>
      </nav>
   );
}