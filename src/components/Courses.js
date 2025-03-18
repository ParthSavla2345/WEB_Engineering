import React from 'react';

const Courses = () => {
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
        },
        
        {
          id: 5,
          title: "Introduction to Machine Learning",
          description: "Understand machine learning concepts and algorithms to solve real-world problems.",
          price: "$59.99",
        },
        {
          id: 6,
          title: "Mobile App Development with React Native",
          description: "Learn to build cross-platform mobile apps using React Native for both Android and iOS.",
          price: "$79.99",
        },
        {
          id: 7,
          title: "Cloud Computing with AWS",
          description: "Learn how to design, deploy, and manage applications in the cloud using AWS.",
          price: "$69.99",
        },
        {
          id: 8,
          title: "Full Stack Development with Node.js",
          description: "Master back-end development using Node.js, Express, and MongoDB to build full-stack applications.",
          price: "$89.99",
        },
    ];
  
    return (
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
    );
}

export default Courses;
