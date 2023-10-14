import bodyBackground from "./images/bodybackground.jpg";
import './Home.css';
export function Home() {
  return (
    <div>
      <form className="form" style={{ backgroundImage: `url(${bodyBackground})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <div>
          <p className="text-center text-light display-4 mydisplay" style={{position:"relative",top:"15px"}}>Welcome to My Portfolio !</p>
        </div>
        <div className="text-center" style={{position:"relative",top:"30px"}}>
          <h1 className="text-light">Introduction</h1>
          <p className="text-light">
            Hello, I am a passionate computer science graduate student on an
            exhilarating journey to unravel the boundless possibilities within
            the realm of technology. With a profound curiosity for innovation, my
            academic voyage has been marked by a relentless pursuit of knowledge,
            a thirst for solving complex problems, and an unshakable belief in
            the transformative power of computer science.
            <br />
            My academic pursuits have equipped me with a robust foundation in
            algorithms, data structures, and software engineering, while my
            research endeavors have exposed me to the exciting frontiers of
            artificial intelligence, machine learning, and cybersecurity. Through
            hands-on experiences, collaboration with inspiring mentors, and a
            tireless commitment to excellence, I have honed my skills to tackle
            real-world challenges.
          </p>
        </div>
        <div className="text-center" style={{position:"relative",top:"25px"}}>
          <h1 className="text-light">About</h1>
          <p className="text-light">
            Hello People, Welcome to My enthralling journey that conclusively
            leads me to the world behind the stuff we work on every day!
            <br />
            Here you find Dhruv Agarwal. I am currently an undergraduate student
            at one of the finest tech institutions in the country, popularly
            known as VIT University, Chennai Campus.
            <br />
            About me, I am a workaholic and fun-loving person. I started with
            working on developing web pages, which has finally led me into the
            world of full-stack web development. I work on MERN technologies to
            accomplish my tasks. I have also developed many projects, including
            an age calculator, a fully working normal business calculator, and
            this portfolio, among many others.
            <br />
            <br />
            I also have a deep love and passion in the domain of competitive
            coding. I underwent an intensive training of 3 months, including
            solving more than 65 questions based on "Data structures and
            Algorithms." Consequently, I carry a very rich profile on the LeetCode
            platform. I also participated in many contests, which helped me a lot
            in enhancing my coding skills.
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <p className="text-light">Copyright <i class="fa-solid fa-copyright text-light mt-5"></i> 2023 - All rights reserved / Dhruv Agarwal</p>
      </form>
    </div>
  );
}
