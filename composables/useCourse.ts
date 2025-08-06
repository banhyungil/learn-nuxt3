export const useCourse = (courseSlug: string) => {
  const { courses } = useCourses()

  const idx = courses.findIndex(c => c.courseSlug === courseSlug)
  const course = courses[idx]
  const prevCourse = idx - 1 < 0 ? null : courses[idx - 1]
  const nextCourse = idx + 1 >= courses.length ? null : courses[idx + 1]
  return { course, prevCourse, nextCourse }
}
