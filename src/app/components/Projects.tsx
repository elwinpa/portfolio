import { useEffect, useRef, useState } from 'react';
import project1_img1 from './assets/getdelivered/image1.png'
import project1_img2 from '../assets/getdelivered/image2.png'
import project1_img3 from '../assets/getdelivered/image3.png'


import project2_img1 from '../assets/pinnacle/image1.png'
import project2_img2 from '../assets/pinnacle/image2.png'
import project2_img3 from '../assets/pinnacle/image3.png'

import project3_img1 from '../assets/rpms/image1.png'
import project3_img2 from '../assets/rpms/image2.png'
import project3_img3 from '../assets/rpms/image3.png'

import SlidingCarousel from './SlidingCarousel';
function useInView(
  options = { threshold: 0.1, triggerOnce: true }
): [ref: React.RefObject<HTMLDivElement | null>, inView: boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.triggerOnce) observer.unobserve(entry.target);
        }
      },
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, inView];
}


export default function Projects() {
    const [ref, inView] = useInView();
    

    return(
        <div id="projects" className="projects-section">
            <div className="section-header">Where I've built </div>
                <div ref={ref} className={`project-tile ${inView ? "slide-in-left": ""}`} >
                    <div>GetDelivered</div>
                    <div className="project-content">
                      <div>
                        GetDelivered is a modern grocery delivery web application built using React. It allows users to browse a wide range of grocery items, add them to their cart, and place orders for home delivery. The site features a responsive user interface, real-time product updates, and a smooth checkout experience. Integrated with RESTful APIs enables dynamic data fetching for products, categories, and user orders.
                    </div>
                    <SlidingCarousel images={['/assets/getdelivered/image1.png','/assets/getdelivered/image2.png','/assets/getdelivered/image3.png']} />

                    </div>
                </div>
                <div className={`project-tile ${inView ? "slide-in-right": ""}`}>
                    <div>Pinnacle</div>
                    <div className="project-content"> 
                      <div>
                          Pinnacle is a secure and feature-rich online banking application built using the MERN stack (MongoDB, Express.js, React, Node.js). Designed to deliver a seamless digital banking experience, Pinnacle allows users to manage their finances with ease, while maintaining robust security and scalability.                    
                      </div>
                       <SlidingCarousel images={['/assets/pinnacle/image1.png','/assets/pinnacle/image2.png','/assets/pinnacle/image3.png']} />
                      </div>
                </div>
                <div className={`project-tile ${inView ? "slide-in-left": ""}`}>
                    <div>Rajagiri Project Management System</div>
                    <div className="project-content"> 
                    <div>
                       Rajagiri Project Management System is a comprehensive web application developed using Django and MongoDB to streamline the management of academic projects, assignments, and grading processes within the college. Designed to facilitate seamless collaboration between students and faculty, the platform enables students to submit their projects and assignments efficiently, while allowing teachers to review submissions, provide feedback, and assign grades.
                    </div>
                    <SlidingCarousel images={['/assets/rpms/image1.png','/assets/rpms/image2.png','/assets/rpms/image3.png']} />
                    </div>
                </div>
        </div>
    );
}

