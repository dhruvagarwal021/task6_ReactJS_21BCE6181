import background from "./images/ProjectBackground.jpg";
import './Project.css';

export function Project() {
    return (
        <div>
            <form className="form" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <p className="display-3 text-center text-light mydisplay1">Projects</p>
                <div className="text-center">
                    <p className="mt-2" style={{ color: "#FFFF00" }}>
                        This is a fully working age calculator.<br />
                        It gives you , the exact age in days, months, year for the entered birthdate.
                        <br />This app is designed using ReactJS and deployed using Github and Vercel.</p>
                    <iframe
                        title="Embedded Website"
                        src="https://task5-21bce6181-react-js.vercel.app"
                        width="80%"
                        height="300px"
                        style={{
                            borderRadius: "10px",
                            border: "none",
                        }}
                    />
                </div>
                <div className="text-center">
                    <p className="mt-2" style={{ color: "#00FF00" }}>
                        This is a fully working general purpose calculator.<br />It helps in fast calculation of rigorous problems.<br />It has clear button which clears all the stuff at once if required.
                    </p>
                    <iframe
                        title="Embedded Website"
                        src="https://21-bce-6181-task2.vercel.app"
                        width="80%"
                        height="800px"
                        style={{
                            borderRadius: "10px",
                            border: "none",
                        }}
                    />
                </div>
                <div className="text-center">
                    <p className="mt-2" style={{ color: "#FF00FF" }}>
                        This is a responsive word counter.<br />
                        Through this app you can count the exact number <br />of word
                        simultaneously while typing them.
                    </p>
                    <iframe
                        title="Embedded Website"
                        src="https://task1-reactjs-21-bce-6181.vercel.app"
                        width="80%"
                        height="400px"
                        style={{
                            borderRadius: "10px",
                            border: "none",
                        }}
                    />
                </div>
                <p className="display-3 text-center text-light mydisplay1 mt-4">Competitve Coding Profiles</p>
                <div className="text-center">
                    <p className="mt-2" style={{ color: "#00FFFF" }}>
                        This is my Leet Code profile.
                        <br></br>
                        This profile showcases statiscal data of my daily questions solved and contests particpated.
                        <br></br>
                        I have solved almost 67 questions till date which includes almost all topics of Data Structures and Algos.
                    </p>
                    <iframe
                        title="Embedded Website"
                        src="https://leetcode.com/dhruv02s/"
                        width="80%"
                        height="400px"
                        style={{
                            borderRadius: "10px",
                            border: "none",
                        }}
                    />
                </div>
                <br></br>
        <br></br>
        <br></br>
        <p className="text-light">Copyright <i class="fa-solid fa-copyright text-light mt-5"></i> 2023 - All rights reserved / Dhruv Agarwal</p>
            </form>
        </div>
    );
}
