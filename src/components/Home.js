// src/components/Home.js
import React from 'react';

function Home() {
 

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn the fundamentals of React and build interactive web applications.",
    price: "$29.99",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master advanced JavaScript concepts and become an expert developer.",
    price: "$39.99",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    description: "A complete course to become a full-stack web developer from scratch.",
    price: "$99.99",
  },
  {
    id: 4,
    title: "Data Science with Python",
    description: "Learn data analysis, visualization, and machine learning with Python.",
    price: "$49.99",
  },]
  return (
    <>
    <div className="home-container">
    <h2>Welcome to Our E-Learning Platform</h2>
    <p>
      We offer a variety of courses to help you grow your skills and knowledge. 
      Browse our courses, learn from experts, and start your learning journey today!
    </p>
  </div>
    <div className="home-page">
      <h1>Available Courses</h1>
      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <span className="course-price">{course.price}</span>
          </div>
        ))}
      </div>
    </div>
    </>
);

}

export default Home;
