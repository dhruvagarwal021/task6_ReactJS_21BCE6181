import background from "./images/About.jpg"
import './About.css';
export function About() {
    return (
        <div>
            <form className="form" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div>
                    <p className="display-5 text-light text-end mydisplay3">About Me !</p>
                    <p className="text-light text-end" style={{ fontSize: "13px" }}>
                        Hello, everyone! You're here reading with Dhruv.
                        <br></br>
                        My journey in the world of technology began in 11th grade when I chose to study Informatics Practices.
                        <br></br>
                        This subject introduced me to full-scale application development using Java and MySQL with JDBC driver
                        <br></br>
                        , and I have never looked back since then.
                        <br></br>
                        <br></br>
                        As an individual, I consider myself a dedicated and hardworking person, with unwavering belief in my capabilities and abilities.
                        <br></br>
                        I often find myself deeply engrossed in work or spending my leisure time exploring historical literature and enjoying movies.
                        <br></br>
                        I am known for my simplicity, enthusiasm, and my proactive approach to seizing opportunities.
                        <br></br>
                        If you'd like further improvement or have specific areas in mind you want to work on, feel free to let me know!
                    </p>
                </div>
                <div>
                    <p className="display-5 text-light text-end mydisplay3">My Education</p>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div className="mt-2">
                            <div className="text-warning mycard" style={{ width: "100%", borderRadius: "12px" }}>
                                <div className="card-body ms-3">
                                    <h4 className="card-title text-center"><b>SSC</b></h4>
                                    <p className=""><b>School:</b>B.S Memorial School(Rajasthan)
                                        <br></br>
                                        <b>Percentge:</b>94.4 %
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 ms-2">
                            <div className="text-warning mycard" style={{ width: "100%", borderRadius: "12px" }}>
                                <div className="card-body ms-3">
                                    <h4 className="card-title text-center"><b>HSC</b></h4>
                                    <p className=""><b>School:</b>B.S Memorial School(Rajasthan)
                                        <br></br>
                                        <b>Percentge:</b>91.6 %(PCM+IP)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2" style={{ display: "flex", justifyContent: "end" }}>
                        <div className="text-warning mycard" style={{ width: "57.5%", borderRadius: "20px" }}>
                            <div className="card-body ms-3">
                                <h4 className="card-title text-center"><b>Graduation(2025)</b></h4>
                                <p className=""><b>College:</b>Vellore Intitute Of Tech.(Chennai Campus)
                                    <br></br>
                                    <b>CGPA:</b>9.1(Computer Science Core)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="display-5 text-light text-end mydisplay3 mt-3">Links</p>
                    <a className="nav-link text-end text-info" href="https://drive.google.com/file/d/1g_V5plXbNksdCgXcj-3o63zLMl_2TOtc/view?usp=drive_link">My Resume</a>
                    <a className="nav-link text-end text-info" href="https://drive.google.com/file/d/16YBUL9UMHB-P4BHTzXCffoVi_D24MtCY/view?usp=sharing">My College Grade History</a>
                </div>
                <br></br>
        <br></br>
        <br></br>
        <p className="text-light">Copyright <i class="fa-solid fa-copyright text-light mt-5"></i> 2023 - All rights reserved / Dhruv Agarwal</p>
            </form>
        </div>
    )
}
