import React from 'react'

import { FaLocationArrow } from 'react-icons/fa'
import './styles/courses.css'
import Navbar from '../components/views/partialComponents/navbar';

export default function Courses () {
  const coursesData = [
    {
        "courseTitle": "HTML",
        "courseIcon": "icon1",
        "courseCategory": "Développement web front-end",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "CSS",
        "courseIcon": "icon2",
        "courseCategory": "Développement web front-end",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Javascript",
        "courseIcon": "icon3",
        "courseCategory": "Développement web front-end",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Bootstrap",
        "courseIcon": "icon8",
        "courseCategory": "Développement web front-end",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "React JS",
        "courseIcon": "icon9",
        "courseCategory": "Développement web front-end",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Node JS",
        "courseIcon": "icon10",
        "courseCategory": "Développement web front-end",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Express JS",
        "courseIcon": "icon11",
        "courseCategory": "Développement web front-end",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Angular JS",
        "courseIcon": "icon12",
        "courseCategory": "Développement web front-end",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Tailwind CSS",
        "courseIcon": "icon14",
        "courseCategory": "Développement web front-end",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Spring Boot",
        "courseIcon": "icon18",
        "courseCategory": "Développement web back-end",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "JEE",
        "courseIcon": "icon22",
        "courseCategory": "Développement web back-end",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Laravel",
        "courseIcon": "icon23",
        "courseCategory": "Développement web back-end",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "SQL",
        "courseIcon": "icon4",
        "courseCategory": "Base de données",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "PostgreSQL",
        "courseIcon": "icon5",
        "courseCategory": "Base de données",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "PL/SQL",
        "courseIcon": "icon6",
        "courseCategory": "Base de données",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Oracle",
        "courseIcon": "icon7",
        "courseCategory": "Base de données",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Mongo DB",
        "courseIcon": "icon13",
        "courseCategory": "Base de données",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Python",
        "courseIcon": "icon15",
        "courseCategory": "Langage de Programmation",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Java",
        "courseIcon": "icon16",
        "courseCategory": "Langage de Programmation",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "C#",
        "courseIcon": "icon24",
        "courseCategory": "Langage de Programmation",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "PHP",
        "courseIcon": "icon25",
        "courseCategory": "Langage de Programmation",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "C",
        "courseIcon": "icon26",
        "courseCategory": "Langage de Programmation",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "C++",
        "courseIcon": "icon27",
        "courseCategory": "Langage de Programmation",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "UML",
        "courseIcon": "icon17",
        "courseCategory": "Conception et Modélisation",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Design Graphique",
        "courseIcon": "icon19",
        "courseCategory": "Conception et Modélisation",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Design UI UX",
        "courseIcon": "icon20",
        "courseCategory": "Conception et Modélisation",
        "courseDetails": "+20 séances de cours et d'excercices"
    },
    {
        "courseTitle": "Algorithmes",
        "courseIcon": "icon21",
        "courseCategory": "Conception et Modélisation",
        "courseDetails": "+20 séances de cours et d'excercices"
    }
];
  return (
    <>
        <Navbar></Navbar>
    
    <div className='courses m-0 p-0 col'>
      <h1 className='ourServicesTitle fw-bold text-center display-4'>
        Explorer Nos Cours{' '}
      </h1>
      <p className='mt-2 p-2 text-center'>
        Rejoignez-nous sur WeeCode, où chaque moment d'apprentissage devient une
        pierre précieuse sur le chemin de votre réussite.
      </p>
      <div className='row m-0 p-0 justify-content-center coursesContainer'>
        {coursesData.map((course, index) => (
          <div key={index} className='col-lg-auto col-md-4 col-sm-6 courseBox m-1 p-1 '>
            <div className='courseIcon py-2 col-12'>
              <div className={`icon${course.courseIcon}`} id={`icon${index + 1}`}></div>
            </div>
            <div className='courseDescription p-2 text-center col-12'>
              <h3>{course.courseTitle}</h3>
              <p className='lead courseParagraph'>{course.courseCategory}</p>
              <button className='btn seeMore'>
                Plus de détails <FaLocationArrow></FaLocationArrow>
              </button>
            </div>
          </div>
        ))} 
      </div>
    </div>
    </>
    
  );
}