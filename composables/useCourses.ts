import courses from '~/assets/data/course'

export const useCourses = () => {
  const format = courses.map(course => ({
    ...course,
    rating: course.rating.toFixed(1),
    reviewsCount: course.reviewsCount.toLocaleString(),
    studentCount: course.studentCount.toLocaleString(),
    path: `/course/${course.courseSlug}`,
  }))
  return {
    courses: format,
  }
}
