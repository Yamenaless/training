import categoriesData from "@/data/categories.json"
import coursesData from "@/data/courses.json"

export interface Category {
  id: string
  title: string
  description: string
  image: string
  courseCount: number
}

export interface Course {
  id: string
  title: string
  code: string
  duration: string
  category: string
  image: string
  description: string
}

export function getAllCategories(): Category[] {
  return categoriesData.categories
}

export function getCategoryById(id: string): Category | undefined {
  return categoriesData.categories.find(category => category.id === id)
}

export function getAllCourses(): Course[] {
  return coursesData.courses
}

export function getCoursesByCategory(categoryId: string): Course[] {
  return coursesData.courses.filter(course => course.category === categoryId)
}

export function getCourseById(id: string): Course | undefined {
  return coursesData.courses.find(course => course.id === id)
}
