"use client"
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
   { name: 'Home', href: './', linkType: 'image', class: 'HomeLink' },
   { name: 'About', href: '/About', linkType: 'normal', class: 'PageLink' },
   { name: 'News/Blog', href: '/Content', linkType: 'normal', class: 'PageLink' },
   {
      name: 'Process', href: '/Process', linkType: 'dropdown', class: 'PageLink', dropdownLinks: [
         { name: 'Family Based', href: '/Step1', class: 'DropdownLink' },
         { name: 'Study & Exhange', href: '/Step2', class: 'DropdownLink' },
         { name: 'Temporary Employment', href: '/Step3', class: 'DropdownLink' },
      ]
   },
   {
      name: 'Applicants', href: '/Applicants', linkType: 'dropdown', class: 'PageLink', dropdownLinks: [
         { name: 'Family Based', href: '/ApplyNow', class: 'DropdownLink' },
         { name: 'Study & Exhange', href: '/Requirements', class: 'DropdownLink' },
         { name: 'Temporary Employment', href: '/FAQ', class: 'DropdownLink' },
      ]
   },
   { name: 'Partnership', href: '/Partnership', linkType: 'normal', class: 'PageLink' }
];

const NavDropdown = ({ link, isOpen, toggleDropdown }) => {
   return (
      <div className="DropdownContainer">
         <div className={`PageLink ${link.class}`} onClick={toggleDropdown}>
            {link.name}
         </div>
         {isOpen && (
            <div className="DropdownContent">
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

   // Track the state for each dropdown
   const [dropdownStates, setDropdownStates] = useState(normalLinks.map(() => false));

   // Function to toggle the dropdown state
   const toggleDropdown = (index) => {
      const newStates = dropdownStates.map((state, i) => i === index ? !state : false);
      setDropdownStates(newStates);
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