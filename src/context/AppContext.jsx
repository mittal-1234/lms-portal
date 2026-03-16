import { createContext, useState, useEffect, useContext } from 'react';
import { mockCourses } from '../data/mockCourses';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // State for enrolled courses
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const saved = localStorage.getItem('enrolledCourses');
    return saved ? JSON.parse(saved) : [];
  });

  // State for course progress (which modules are completed)
  // Format: { courseId: { moduleId: true/false } }
  const [courseProgress, setCourseProgress] = useState(() => {
    const saved = localStorage.getItem('courseProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // Save to local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(courseProgress));
  }, [courseProgress]);

  // Actions
  const enrollInCourse = (courseId) => {
    const course = mockCourses.find(c => c.id === courseId);
    if (!course) return;

    if (!enrolledCourses.find(c => c.id === courseId)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const markModuleCompleted = (courseId, moduleTitle, completed) => {
    setCourseProgress(prev => ({
      ...prev,
      [courseId]: {
        ...(prev[courseId] || {}),
        [moduleTitle]: completed
      }
    }));
  };

  const isEnrolled = (courseId) => {
    return !!enrolledCourses.find(c => c.id === courseId);
  };
  
  const getEnrolledCourses = () => {
    return enrolledCourses;
  };

  const value = {
    enrolledCourses,
    getEnrolledCourses,
    enrollInCourse,
    isEnrolled,
    courseProgress,
    markModuleCompleted
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
