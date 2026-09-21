// src/App.tsx
import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css"; 

const App: React.FC = () => {
  useEffect(() => {
    // Typewriter functionality
    function initTypewriter() {
      const dynamicWordsEl = document.getElementById("dynamicWords");
      if (!dynamicWordsEl) {
        setTimeout(initTypewriter, 100);
        return;
      }

      const phrases = [
        "Tamara Zawadi",
        "A Cybersecurity Enthusiast",
        "A Tech Innovator"
      ];

      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
          dynamicWordsEl!.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
        } else {
          dynamicWordsEl!.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
        }

        dynamicWordsEl!.textContent += "|";

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentPhrase.length) {
          typeSpeed = 2000;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
      }

      type();
    }

    // Counter animation
    function initCounters() {
      const counters = document.querySelectorAll('[data-counter-target]');
      counters.forEach(counter => {
        const targetAttr = counter.getAttribute('data-counter-target');
        const target = targetAttr ? parseInt(targetAttr) : NaN;
        if (!isNaN(target)) {
          let current = 0;
          const interval = setInterval(() => {
            if (current < target) {
              current += Math.ceil(target / 100);
              if (current > target) current = target;
              counter.textContent = current.toLocaleString();
            } else {
              clearInterval(interval);
            }
          }, 20);
        }
      });
    }

    // Logo animation
    function initLogoAnimation() {
      const logo = document.getElementById('hacker-logo');
      if (!logo) return;
      
      logo.style.display = 'flex';
      logo.style.opacity = '0';
      logo.style.transform = 'translate3d(50px, 20px, 0) rotate(5deg)';
      logo.style.transition = 'all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      
      requestAnimationFrame(() => {
        logo.style.opacity = '1';
        logo.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
      });
    }

    // Start all animations in sequence
    initTypewriter();
    const logoTimer = setTimeout(initLogoAnimation, 300);
    const counterTimer = setTimeout(initCounters, 1000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(counterTimer);
    };
  }, []);

  return (
    <>
      <Nav />
      <main id="home" className="w-full">
       {/* Floating light elements contained within the hero section */} 

        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      
      {/* #### HERO SECTION #### */}
      
      <section className="pt-20 md:pt-0 bg-white dark:bg-black">

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
        <h1
            id="dynamicHeadline"
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Hi, I'm{" "}
            <span id="dynamicWords" className="text-green-500 font-bold">
              Tamara Zawadi
            </span>
          </h1>

          <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-3xl dark:text-gray-400">
          Merging clean software engineering with defensive security to write efficient code,
           secure network boundaries, and protect digital assets.

          </p>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text:3xl text-center text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            More About Me
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
          >
            Contact Me!
          </a>
        </div>
        <div 
          id="hacker-logo" 
          className="lg:mt-0 lg:col-span-5 lg:flex relative z-10"
          style={{ opacity: 0 }}  // This ensures it's initially invisible but still rendered
        >
          <img
            src="./assets/images/ProfilePhoto.jpeg"
            alt="Zawadi"
          />
        </div>
      </div>
    </section>

    {/* {#### ACCOLADES SECTION ####} */}
        <section className="bg-white dark:bg-black ">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-28 lg:px-6 border-4 border-solid border-green-700 bg-white dark:bg-black relative z-20">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="2">0</span>
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Years of Experience</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="10">0</span>+
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Certificates Earned</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="10">0</span>+
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Projects Completed</dd>
              </div>
          </dl>
          </div>
        </section>


         {/* #### ABOUT SECTION #### */}
       <section id="about" className="bg-white dark:bg-black">
  <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    
    {/* Left Column: Heading, Paragraphs, and Button wrapped together */}
    <div className="mt-4 md:mt-0">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        About Me,
      </h2>
      <p className="mb-4 text-3xl text-gray-700 dark:text-gray-300">
        I’m a computer technology student and security enthusiast who loves working 
        under the hood—from optimizing Python automation to analyzing network traffic 
        and exploring cybersecurity frameworks. 
        I believe the best software isn't just functional; it's resilient, secure, 
        and built to withstand modern threats.
      </p>
      <p className="text-xl text-gray-600 dark:text-gray-400">
        My approach combines creative problem-solving with rigorous methodology, ensuring no stone is left unturned in the pursuit of robust security.
      </p>
      <a 
        href="#" 
        className="inline-flex mt-8 items-center justify-center px-5 py-4 text-base font-medium text-center text-gray-900 border-4 border-green-300 hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
      >
        Download C.V.
      </a>
    </div>

    {/* Right Column: Image */}
    <div>
      <img
        className="w-full transition-opacity duration-300 hover:opacity-70"
        src="./assets/images/data.png"
        alt="dashboard image"
      />
    </div>

  </div>
</section>
        {/*#### RESUME SECTION####*/}
        <section id="resume" className="py-12 px-4 max-w-screen-xl mx-auto bg-white dark:bg-black text-gray-900 dark:text-white">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold tracking-tight">Resume</h2>
    <p className="mt-2 text-xl text-gray-500 dark:text-gray-400">
      A structured overview of my academic foundation, technical skills, and credentials.</p>
  </div>

  <div className="grid md:grid-cols-2 gap-12">
    {/* Left Column: Education & Certifications */}
    <div>
      <h3 className="text-2xl font-bold mb-6 border-b-2 border-green-500 pb-2">Academic Background</h3>
      <div className="mb-8">
        <h4 className="text-xl font-semibold">Computer Science and Technology</h4>
        <p className="text-gray-600 dark:text-gray-400">Jomo Kenyatta University of Agriculture and Technology • [2024 - Present]</p>
      </div>

      <h3 className="text-2xl font-bold mb-6 border-b-2 border-green-500 pb-2">Certifications & Training</h3>
      <ul className="space-y-4">
        <li>
          <a 
            href="https://www.example-credential-link.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-medium hover:text-green-500 dark:hover:text-green-400 underline flex items-center gap-2"
          >
            <span>Cloud and Network Security</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
          <p className="text-gray-600 dark:text-gray-400">CyberShujaa • [Sept 2026- Present]</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Hands-on training in cloud and network security,
            covering network protection, cloud security concepts,
            access control, vulnerabilities, threat detection, 
            and cybersecurity best practices.
</p>
        </li>
        <li>
          <a 
            href="/public/assets/Reports/LinuxEssentialsCert.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-medium hover:text-green-500 dark:hover:text-green-400 underline flex items-center gap-2"
          >
            <span>Linux Essentials</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
           <p className="text-gray-600 dark:text-gray-400">CISCO Academy</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built foundational Linux skills through hands-on practice with the command line, 
            file management, permissions, processes, users and groups, shell commands, 
            and basic system administration.</p>
        </li>
      </ul>
    </div>

    {/* Right Column: Experience & Technical Skills */}
    <div>
      <h3 className="text-2xl font-bold mb-6 border-b-2 border-green-500 pb-2">Badges</h3>
           <a 
            href="https://www.credly.com/badges/3b91beea-96f3-4db5-b880-4951d9b49276/public_url" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-medium hover:text-green-500 dark:hover:text-green-400 underline flex items-center gap-2"
          >
            <span>Red Hat System Administration I (RH124 - RHA) - Ver. 10</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
           <a 
            href="https://www.credly.com/badges/9274e1e9-ffe4-448a-ac7c-d72b95ff2dbc/public_url" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-medium hover:text-green-500 dark:hover:text-green-400 underline flex items-center gap-2"
          >
            <span>Cloud Security</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
           <a 
            href="https://www.credly.com/badges/a0ec48d8-115e-4b90-ada4-5111aeccc921/public_url" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-medium hover:text-green-500 dark:hover:text-green-400 underline flex items-center gap-2"
          >
            <span>System and Network Security</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
           <a 
            href="https://www.credly.com/badges/e11429c2-fced-45d6-abb1-2596d1426c55/public_url" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-medium hover:text-green-500 dark:hover:text-green-400 underline flex items-center gap-2"
          >
            <span>Introduction to CyberSecurity</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
          <div className="mt-8 text-center">
  <p className="text-gray-600 dark:text-gray-400 mb-4">
    Want to explore my full collection of badges and verified credentials?
  </p>
  <a 
    href="https://www.credly.com/users/tamara-zawadi/edit/badges/credly" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 bg-transparent border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-white dark:text-white dark:border-green-400 dark:hover:bg-green-600 dark:hover:text-white transition-all duration-300 shadow-sm"
  >
    <span>View More on Credly</span>
    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
    </svg>
  </a>
</div> <br />


      <h3 className="text-2xl font-bold mb-6 border-b-2 border-green-500 pb-2">Technical Skills</h3>
      <div className="flex flex-wrap gap-2">
        {["Python","Linux / CLI", "Git & GitHub", "Networking (TCP/IP, ARP, IGMP)", "Cybersecurity Frameworks", "Packet Analysis (Wireshark)"].map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
            {skill}
          </span>
        ))}

      </div>
    </div>
  </div>
</section>

        {/* #### PROJECTS SECTION #### */}
          <section id="projects" className="pt-8 pb-12 bg-white dark:bg-black flex justify-center items-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">

              <div className="max-w-screen-md mb-8 lg:mb-12 mx-auto">
                <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Breaking Systems, Building Security
                </h2>
              </div>

              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg 
                      className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                      aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1" 
                        d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Investigate the TCP/IP and OSI models</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                      Used Packet Tracer to explore how the TCP/IP protocol suite operates in a live
                       network environment. Simulation mode allows for the direct visualization of data
                       encapsulation and Protocol Data Units as packets move across network layers.
                  </p>
                  <a 
                    href="/public/assets/Reports/Week1Assignment2.pdf"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex mt-8 items-center justify-center px-5 py-4 text-base font-medium text-center text-gray-900 border-4 border-green-300 hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800">
                    View Report
                   </a>
                </div>

                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"/>
                </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Packet Analysis & Traffic Inspection</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                    Used Wireshark to capture and analyze ICMP traffic, investigating the TCP/IP protocol suite to visualize data encapsulation and packet structures.
                  </p>
                   <a 
                    href="/public/assets/Reports/Week1Assignment1.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex mt-8 items-center justify-center px-5 py-4 text-base font-medium text-center text-gray-900 border-4 border-green-300 hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800">
                    View Report
                   </a>
                </div>
              </div>
            </div>
          </section>
         
        {/* #### CONTACT SECTION #### */}
        <section id="contact" className="bg-white dark:bg-black transition-all duration-300 hover:scale-105">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Me
            </h2>
            <form action="#" className="space-y-8">
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50  border-4 border-green-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  shadow-sm border-4 border-green-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lx font-medium text-center text-white bg-green-600 hover:bg-green-700 border-2 border-green-600 rounded-none sm:w-fit focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:border-green-600 dark:focus:ring-green-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;