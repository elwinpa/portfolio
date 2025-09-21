import { useEffect, useRef, useState } from "react"

export default function Experience() {


    const [companyName, setcompanyName] = useState("Cognizant");

    return (
        <div id="experience" className="experience-section">
            <div className="section-header">Where I've worked</div>
            <div className="experience-tabs">
                <div className="company-names">
                    <button className={`transparent-button ${companyName === "Cognizant" ? "transparent-button-active" : ""}`} onClick={() => setcompanyName("Cognizant")}>Cognizant</button>
                    <button className={`transparent-button ${companyName === "SCI" ? "transparent-button-active" : ""}`} onClick={() => setcompanyName("SCI")}>SCI Logistics Ltd</button>
                </div>
                <div className="experience-desc">
                    {companyName === "Cognizant" && 
                    <div>
                        <div className="company-desc">
                            <p>@Cognizant</p>
                            <p>Programmer Analyst</p>
                            <p>September 2020 - June 2022</p>
                        </div>
                        <ul>
                            <li>Developed and maintained complex React applications using functional components and React Hooks for state and lifecycle management.</li>
                            <li>Utilized Redux and Context API for efficient global state management across multiple components.</li>
                            <li>Implemented responsive design techniques ensuring seamless user experience across desktop, tablet, and mobile devices.</li>
                            <li>Wrote unit and integration tests using Jest and React Testing Library to ensure robust, error-free code.</li>
                            <li>Collaborated with UX/UI designers to translate wireframes and mockups into interactive user interfaces.</li>
                            <li>Worked with CI/CD pipelines to automate deployment and testing of React applications.</li>
                        </ul>
                    </div>
                    
                    }
                    {companyName === "SCI" && 
                        <div>
                            <div className="company-desc">
                                <p>@SCI Logistics Ltd</p>
                                <p>Service Representative</p>
                                <p>December 2023 - Present</p>
                            </div>
                            <ul>
                                <li>Collaborated with internal IT and operations teams to ensure seamless integration of logistics software with warehouse and inventory systems.</li>
                                <li>Experience with warehouse management systems like Manhattan SCALE.</li>
                                <li>Managed inventory by tracking, reporting, and reconciling stock discrepancies.</li>
                                <li>Used SQL for querying inventory and order information.</li>
                                <li>Coordinated and managed the team during the peak season to ensure smooth operations.</li>
                                <li>Developed and implemented process improvements to increase warehouse efficiency and reduce errors.</li>
                                <li>Monitored key performance indicators (KPIs) to track inventory accuracy and operational productivity.</li>
                            </ul>
                        </div>
                    }   
                </div>
            </div>
        </div>
    )
}