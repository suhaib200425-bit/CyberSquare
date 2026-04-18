import CapIcon from "../assets/capicon.svg"

import DefalutImage from '../assets/DefalutImage.jpg'
import ProfileImage from '../assets/ProfileImage.jpg'
import DemoVideo from '../assets/DemoVideo.mp4'
export {
    DefalutImage,
    ProfileImage,
    CapIcon,
    DemoVideo
}


export const Courses=[
  {
    "id": 1,
    "level": "Beginner",
    "category": "Web Development",
    "title": "Complete React Developer Bootcamp 2024",
    "description": "Master React 18, Redux Toolkit, Next.js & TypeScript from scratch.",
    "duration": "42h 30m",
    "lessons": 10,
    "sections":4,
    "instructor": {
      "name": "Sarah Johnson",
      "avatarInitial": "S"
    },
    "rating": 4.8,
    "reviews": 2340,
    "students": 12500,
    
    "price": {
      "original": 99.99,
      "discounted": 49.99,
      "currency": "USD",
      "isFree": false
    },
    "image": "react-course-image.jpg"
  },
  {
    "id": 2,
    "level": "Beginner",
    "category": "Data Science",
    "title": "Python for Data Science & Machine Learning",
    "description": "Learn Python, NumPy, Pandas, Matplotlib, and basic ML concepts.",
    "duration": "38h 15m",
    "lessons": 12,
    "sections":4,
    "instructor": {
      "name": "Michael Chen",
      "avatarInitial": "M"
    },
    "rating": 4.9,
    "reviews": 1890,
    "students": 9800,
    "price": {
      "original": 89.99,
      "discounted": 39.99,
      "currency": "USD",
      "isFree": false
    },
    "image": "python-data-science.jpg"
  },
  {
    "id": 3,
    "level": "All Levels",
    "category": "Design",
    "title": "UI/UX Design Masterclass with Figma",
    "description": "Design beautiful and user-friendly interfaces using Figma and design systems.",
    "duration": "27h 45m",
    "lessons": 8,

"sections":4,    "instructor": {
      "name": "Emily Parker",
      "avatarInitial": "E"
    },
    "rating": 4.7,
    "reviews": 1560,
    "students": 7300,
    "price": {
      "original": 0,
      "discounted": 0,
      "currency": "USD",
      "isFree": true
    },
    "image": "figma-uiux-course.jpg"
  },
  {
    "id": 4,
    "level": "Intermediate",
    "category": "Web Development",
    "title": "Full-Stack JavaScript: Node.js, Express & MongoDB",
    "description": "Build scalable backend APIs and full-stack apps using modern JavaScript tools.",
    "duration": "51h 20m",
    "lessons": 14,
    "sections":4,
    "instructor": {
      "name": "David Williams",
      "avatarInitial": "D"
    },
    "rating": 4.6,
    "reviews": 1740,
    "students": 8600,
    "price": {
      "original": 109.99,
      "discounted": 55.99,
      "currency": "USD",
      "isFree": false
    },
    "image": "node-express-mongodb.jpg"
  },
  {
    "id": 5,
    "level": "Beginner",
    "category": "Cloud Computing",
    "title": "AWS Cloud Practitioner Certification Prep",
    "description": "Understand AWS core services, pricing, security, and cloud fundamentals.",
    "duration": "19h 10m",
    "lessons": 9,

"sections":4,    "instructor": {
      "name": "Michael Chen",
      "avatarInitial": "M"
    },
    "rating": 4.8,
    "reviews": 1210,
    "students": 6400,
    "price": {
      "original": 79.99,
      "discounted": 39.99,
      "currency": "USD",
      "isFree": false
    },
    "image": "aws-cloud-course.jpg"
  },
  {
    "id": 6,
    "level": "Advanced",
    "category": "Business",
    "title": "Digital Marketing & SEO Mastery",
    "description": "Master SEO, social media marketing, paid ads, and content strategy.",
    "duration": "31h 50m",
    "lessons": 11,
    "sections":4,
    "instructor": {
      "name": "Emily Parker",
      "avatarInitial": "E"
    },
    "rating": 4.8,
    "reviews": 2100,
    "students": 10200,
    "price": {
      "original": 0,
      "discounted": 0,
      "currency": "USD",
      "isFree": true
    },
    "image": "digital-marketing-course.jpg"
  },
  {
    "id": 7,
    "level": "Intermediate",
    "category": "Mobile Development",
    "title": "React Native: Build Mobile Apps",
    "description": "Create cross-platform Android and iOS apps with React Native and Expo.",
    "duration": "34h 40m",
    "lessons": 13,
    "sections":4,
    "instructor": {
      "name": "Sarah Johnson",
      "avatarInitial": "S"
    },
    "rating": 4.7,
    "reviews": 1430,
    "students": 7800,
    "price": {
      "original": 94.99,
      "discounted": 45.99,
      "currency": "USD",
      "isFree": false
    },
    "image": "react-native-course.jpg"
  },
  {
    "id": 8,
    "level": "Advanced",
    "category": "Cybersecurity",
    "title": "Ethical Hacking & Cybersecurity Fundamentals",
    "description": "Learn penetration testing, network security, and ethical hacking tools.",
    "duration": "46h 25m",
    "lessons": 15,
    "sections":4,
    "instructor": {
      "name": "David Williams",
      "avatarInitial": "D"
    },
    "rating": 4.9,
    "reviews": 2670,
    "students": 11300,
    "price": {
      "original": 119.99,
      "discounted": 59.99,
      "currency": "USD",
      "isFree": false
    },
    "image": "cybersecurity-course.jpg"
  },
  {
    "id": 9,
    "level": "Beginner",
    "category": "Photography",
    "title": "Photography Masterclass: Complete Guide",
    "description": "Learn camera basics, lighting, composition, editing, and portrait techniques.",
    "duration": "22h 35m",
    "lessons": 7,

"sections":4,    "instructor": {
      "name": "Emily Parker",
      "avatarInitial": "E"
    },
    "rating": 4.8,
    "reviews": 1980,
    "students": 8900,
    "price": {
      "original": 69.99,
      "discounted": 34.99,
      "currency": "USD",
      "isFree": false
    },
    "image": "photography-course.jpg"
  },
  {
    "id": 10,
    "level": "Advanced",
    "category": "Web Development",
    "title": "Advanced TypeScript & Design Patterns",
    "description": "Write scalable TypeScript apps using clean architecture and design patterns.",
    "duration": "29h 20m",
    "lessons": 10,
    "sections":4,
    "instructor": {
      "name": "Sarah Johnson",
      "avatarInitial": "S"
    },
    "rating": 4.9,
    "reviews": 1675,
    "students": 7200,
    "price": {
      "original": 89.99,
      "discounted": 44.99,
      "currency": "USD",
      "isFree": false
    },
    "image": "typescript-course.jpg"
  }
]