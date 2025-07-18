<script setup lang="ts">
const route = useRoute()
const { course, prevCourse, nextCourse } = useCourse(
  route.params.courseSlug.toString(),
)
console.log('[courseSlug].vue 컴포넌트 setup hooks')
/**
 * 메타 데이터정의
 * key는 페이지 key를 설정하는 방법, 리렌더링을 제어할 수 있음
 * 매크로 함수이기 때문에 meta 정보 정의시 setup hook에 있는 변수를 사용할 수 없음
 */
definePageMeta({
  key: route => route.fullPath,
  // title: title.value, // 이렇게 하면 오류가 발생합니다.
  title: 'My home page',
  pageType: '',
  keepalive: true,
  alias: ['/lecture/:courseSlug'],
})

const memo = ref('')
const completed = ref(false)
</script>

<template>
  <div>
    <AppCard>
      <template #header>
        <div class="text-h5 text-weight-medium">{{ course?.title }}</div>
        <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
          <span class="flex items-center">
            <q-icon name="star" size="16px" color="orange" />
            <span>{{ course?.rating }}</span>
          </span>
          <span> {{ course?.reviewsCount }}개의 수강평 </span>
          <span>&middot;</span>
          <span>{{ course?.studentCount }}명의 수강생</span>
          <q-space />
          <a class="text-bold" :href="course?.reviewsUrl" target="_blank">
            수강평 보기
          </a>
        </div>
      </template>
      <div class="q-mb-md">
        <VideoPlayer :src="course?.video" />
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <q-btn
            label="인프런에서 수강하기"
            unelevated
            class="full-width"
            color="primary"
            :href="course?.inflearnUrl"
            target="_blank"
          />
        </div>
        <div class="col-6">
          <q-btn
            label="짐코딩 클럽에서 수강하기"
            unelevated
            class="full-width"
            color="red"
            :href="course?.gymcodingUrl"
            target="_blank"
          />
        </div>
      </div>
      <p class="q-mt-lg text-grey-8">
        {{ course?.content }}
      </p>
      <q-separator class="q-mb-lg" />
      <q-form class="q-gutter-y-md">
        <q-btn
          label="수강완료"
          class="full-width"
          color="green"
          unelevated
          :outline="completed ? false : true"
          :icon="completed ? 'check' : undefined"
          @click="completed = !completed"
        />
        <q-input
          v-model="memo"
          type="textarea"
          outlined
          dense
          placeholder="메모를 작성해주세요."
          rows="3"
          autogrow
        />
      </q-form>
      <template #footer>
        <ClientOnly>
          <q-btn
            v-if="prevCourse"
            label="이전 강의"
            color="primary"
            unelevated
            :to="prevCourse.path"
          ></q-btn>
          <q-btn
            v-if="prevCourse"
            label="쿼리 추가"
            color="dark"
            unelevated
            :to="{ path: $route.path, query: { timestamp: Date.now() } }"
          ></q-btn>
          <q-space />
          <q-btn
            v-if="nextCourse"
            label="다음 강의"
            color="primary"
            unelevated
            :to="nextCourse.path"
          ></q-btn>
        </ClientOnly>
      </template>
    </AppCard>
  </div>
</template>

<style scoped></style>
