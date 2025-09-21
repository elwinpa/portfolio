import profilePic from '/assets/profile-pic2.png'
import Image from 'next/image'; 

export default function AboutMe() {
    return (
        <div id="about" className="about-section">
            <div className="section-header">About Me</div>
            <div className="about-desc">
                <div className="about-desc-content">
                    <div>
                        <p>
                            Hi there! I'm Elwin Paulson. I'm a Full Stack Developer with a strong passion for building modern, responsive web applications. My expertise lies in React, where I focus on creating clean, interactive user interfaces that deliver great user experiences. With a solid understanding of both frontend and backend development, I enjoy working across the entire stack — from crafting scalable APIs to integrating databases and deploying full-featured applications.
                        </p>

                        <p>
                            I’m always eager to learn and build solutions that are not only functional but also efficient and maintainable. I take pride in writing clean, modular code and following best practices to ensure long-term project success. Whether it's enhancing performance, debugging complex issues, or collaborating with cross-functional teams, I strive to add real value at every stage of development.
                        </p>

                        <p>
                            Above all, I’m driven by curiosity, a growth mindset, and a genuine passion for creating products that make a difference.
                        </p>
                    </div>
                    <div>
                        Here are some of the technologies that I've been working lately:
                        <ul className="diamond-list">
                           <li>React</li>
                           <li>Next.js</li>
                           <li>NodeJS</li>
                           <li>Typescript</li>
                        </ul>
                    </div>
                </div>
                <div className="profile-pic-wrapper">
                    <div className="circle-border"></div>
                    <Image
                        src="/assets/profile-pic2.png" 
                        alt="Profile"
                        height={300} width={300}
                        className="profile-pic"
                    />
                </div>  
            </div>
        </div>
    );
}