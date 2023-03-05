import React from "react";

import CourseData from "./CourseData";
import Blog1 from "../images/B1.jpeg";
import Blog2 from "../images/B2.jpeg";
import Blog3 from "../images/B3.jpeg";

const TeachersPage = () => {
  return (

    <div className="course TeachersPage">
      <h1>Would you like to see table tennis in your school? </h1>
      <p>Sign up for a FREE exhibition for your school!</p>
      <p>Don’t wait — spots are filling up!</p>
      <p>Explore Our Solutions!</p>

      <div className="coursecard">
        <CourseData
          image={Blog1}
          heading="Motivate for Students to Come to School"
          text="School leaders should not be concerned about student’s attendance and with motivating students to come to school.However, don’t worry spin and learn has the solution to this problem!"
        />
<CourseData
          image={Blog2}
          heading="Increase Parent Involvement"
          text="When students engage in a sport that is exciting and fun they will be begging their parents to send them to school. We are sure that having this program students will learn how to become great athletes in a sport that is fun and exciting; while emphasizing the discipline required to become a successful leader and learner."
          signUp="Share with your school leader"
        />

        <CourseData
          image={Blog3}

          heading="Enhance Social-Emotional Learning"
  
          text="Spin and Learn is a fun and safe program for schools. It is a program that will meet your academic and healthy needs. We believe this program will be the perfect fit for your school and your students. With our Table Tennis program, students will fall in love with the sport and will be excited to come to school every day!"
        
          signUp="Needs SignUp button linked to sign up page"
        />
      </div>

      {/* <div className="coursecard">
        <CourseData
          image={Blog1}
          heading="Kid's Classes"
          sub_heading="Spring Season: 20-23 weeks/classes"
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="If your child is looking to improve their already-impressive skills? Whatever their age or skill level, our PODLINGS (6-11) & PODSTERS (10-14) programs are a great ways for kids to practice Table Tennis"
          price="Price: $40"
          signUp="Needs SignUp button linked to sign up page"
        />
        <CourseData
          image={Blog2}
          heading="Casual Open play"
          sub_heading="Spring Season: 20-23 weeks/classes"
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="Join us for a fun Open Play dedicated to Casual Players!  Matches will start on a first-come-first-serve (no pun) basis for each table and then rotate singles and doubles matches (if desired) around the Pod. There will be plenty of playing time for everybody and players of similar levels are matched up!"
          price="Price: $40"
          signUp="Needs SignUp button linked to sign up page"
        />
        <CourseData
          image={Blog3}
          heading="Intermediate Clinic"
          sub_heading="Spring Season: 20-23 weeks/classes"
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="This Intermediate Clinic will focus on building your fundamental strokes to help you be more consistent.
        Our PingPod Coach and US National Team player Adar Alguetti will be running this Intermediate Clinic"
          price="Price: $40"
          signUp="Needs SignUp button linked to sign up page"
        />
      </div> */}
    </div>
  );
}

export default TeachersPage;