<script setup lang="ts">
const { courses } = useCourses()
</script>

<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">All Courses</div>
      <p class="q-mt-sm text-grey-8">웹 개발 입문부터 실전까지 학습해보세요!</p>
      <div class="row q-col-gutter-lg">
        <div
          v-for="course in courses"
          :key="course.courseSlug"
          class="col-12 col-sm-6 col-md-4"
        >
          <NuxtLink
            v-slot="{ navigate }"
            custom
            :to="`/course/${course.courseSlug}`"
          >
            <CourseCard
              :title="course.title"
              :subtitle="course.subtitle"
              :thumbnail="course.thumbnail"
              @click="navigate"
            ></CourseCard>
          </NuxtLink>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped></style>
