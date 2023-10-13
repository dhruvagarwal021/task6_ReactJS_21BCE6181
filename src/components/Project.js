import background from "./images/ProjectBackground.jpg";
import './Project.css';

export function Project() {
    return (
        <div>
            <form className="form" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }}>
                <p className="display-3 text-center text-light mydisplay1">Projects</p>
                <div className="text-center">
                    <p className="mt-2" style={{ color: "#FFFF00" }}>
                        This is a fully working age calculator.<br />
                        It gives you , the exact age in days, months, year for the entered birthdate.
                        <br />This app is designed using ReactJS and deployed using Github and Vercel.</p>
                    <iframe
                        title="Embedded Website"
                        src="https://task5-21bce6181-react-js.vercel.app"
                        width="30%"
                        style={{
                            borderRadius: "10px",
                            border: "none",
                        }}
                    />
                </div>
                <div className="d-flex justify-content-between"> 
                    <div className="text-start">
                        <p className="mt-2" style={{ color: "#00FF00" }}>
                            This is a fully working general purpose calculator.<br />It helps in fast calculation of rigorous problems.<br />It has clear button which clears all the stuff at once if required<br />This app is designed using ReactJS <br />and deployed using Github and Vercel.
                        </p>
                        <iframe
                            title="Embedded Website"
                            src="https://21-bce-6181-task2.vercel.app"
                            width="80%"
                            style={{
                                borderRadius: "10px",
                                border: "none",
                            }}
                        />
                    </div>
                    <div className="text-end">
                        <p className="mt-2" style={{ color: "#FF00FF" }}>
                        This is a responsive word counter.<br />
                        Through this app you can count the exact number <br />of word
                        simultaneously while typing them.<br/>This app is designed using ReactJS 
                        <br/>and deployed using Github and Vercel.
                        </p>
                        <iframe
                            title="Embedded Website"
                            src="https://task1-reactjs-21-bce-6181.vercel.app"
                            width="100%"
                            style={{
                                borderRadius: "10px",
                                border: "none",
                            }}
                        />
                    </div>
                </div>
            </form>
            {/* <img src={background} alt="Project Background" className="background-image" />
            <h1 className="project-title">Projects</h1>
            <div className="proj1">
                <h2 className="proj-head">Age calculator</h2>
                <p>This is a fully working age calculator.<br/>It gives you , the exact age in days, months, year for the <br/>entered birthdate.<br />This app is designed using ReactJS <br/>and deployed using Github and Vercel.</p>
                <iframe
                    title="Embedded Website"
                    src="https://task5-21bce6181-react-js.vercel.app"
                    width="100%" // Set the width to 30% of the parent container
                    height="100%" // Set a specific height value to make the frame visible
                    style={{
                        borderRadius: "10px",
                        border: "none", // Remove the iframe border
                    }}
                />

            </div>
            <div className="proj2">
                <h2 className="proj-head">Genral Use calculator</h2>
                <p>This is a fully working general purpose calculator.<br />It helps in fast calculation of rigorous problems.<br />It has clear button which clears all the stuff at once if required<br />This app is designed using ReactJS <br/>and deployed using Github and Vercel.</p>
                <iframe
                    title="Embedded Website"
                    src="https://21-bce-6181-task2.vercel.app"
                    width="100%" // Set the width to 30% of the parent container
                    height="100%" // Set a specific height value to make the frame visible
                    style={{
                        borderRadius: "10px",
                        border: "none", // Remove the iframe border
                    }}
                />

            </div>
            <div className="proj3">
                <h2 className="proj-head">Genral Use calculator</h2>
                <p>This is a responsive word counter.<br />Through this app you can count the exact number of word simultaneously while typing them.<br/>This app is designed using ReactJS and deployed using Github and Vercel.</p>
                <iframe
                    title="Embedded Website"
                    src="https://task1-reactjs-21-bce-6181.vercel.app"
                    width="100%" // Set the width to 30% of the parent container
                    height="100%" // Set a specific height value to make the frame visible
                    style={{
                        borderRadius: "10px",
                        border: "none", // Remove the iframe border
                    }}
                />

            </div> */}
        </div>
    );
}
