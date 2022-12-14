<template>
    <PageComponent title="Dashboard">
        <div v-if="loading" role="status" class="flex justify-center">
            <svg
                aria-hidden="true"
                class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                />
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
        <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-700"
        >
            <DashboardCard
                class="order-1 lg:order-2"
                style="animation-delay: 0.1s"
            >
                <!-- <template v-slot:title>Total Surveys</template> -->
                <h3 class="text-2xl font-semibold">Total Surveys</h3>
                <div
                    class="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center"
                >
                    {{ data.totalSurveys }}
                </div>
            </DashboardCard>

            <DashboardCard
                class="order-2 lg:order-4"
                style="animation-delay: 0.2s"
            >
                <!-- <template v-slot:title>Total Answers</template> -->
                <h3 class="text-2xl font-semibold">Total Answers</h3>
                <div
                    class="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center"
                >
                    {{ data.totalAnswers }}
                </div>
            </DashboardCard>

            <DashboardCard
                class="order-3 lg:order-1 row-span-2"
                style="animation-delay: 0.2s"
            >
                <!-- <template v-slot:title>Latest Survey</template> -->
                <h3 class="text-2xl font-semibold">Latest Survey</h3>
                <div v-if="data.latestSurvey">
                    <img
                        :src="data.latestSurvey.image_url"
                        class="w-[240px] mx-auto"
                        alt=""
                    />

                    <h3 class="font-bold text-xl mb-3">
                        {{ data.latestSurvey.title }}
                    </h3>

                    <div class="flex justify-between text-sm mb-1">
                        <div>Create Date:</div>
                        <div>{{ data.latestSurvey.created_at }}</div>
                    </div>

                    <div class="flex justify-between text-sm mb-1">
                        <div>Expire Date:</div>
                        <div>{{ data.latestSurvey.expire_date }}</div>
                    </div>

                    <div class="flex justify-between text-sm mb-1">
                        <div>Status:</div>
                        <div>
                            {{ data.latestSurvey.status ? "Active" : "Draft" }}
                        </div>
                    </div>

                    <div class="flex justify-between text-sm mb-1">
                        <div>Questions:</div>
                        <div>{{ data.latestSurvey.questions }}</div>
                    </div>

                    <div class="flex justify-between text-sm mb-3">
                        <div>Answers:</div>
                        <div>{{ data.latestSurvey.answers }}</div>
                    </div>

                    <div class="flex justify-between">
                        <TButton
                            :to="{
                                name: 'SurveyView',
                                params: { id: data.latestSurvey.id },
                            }"
                            link
                        >
                            <PencilIcon class="w-5 h-5 mr-2" />
                            Edit Survey
                        </TButton>

                        <TButton link>
                            <EyeIcon class="w-5 h-5 mr-2" />
                            View Answers
                        </TButton>
                    </div>
                </div>
                <div v-else class="text-gray-600 text-center py-16">
                    Your don't have surveys yet
                </div>
            </DashboardCard>

            <DashboardCard
                class="order-4 lg:order-3 row-span-2"
                style="animation-delay: 0.3s"
            >
                <template v-slot:title>
                    <div class="flex justify-between items-center mb-3 px-2">
                        <h3 class="text-2xl font-semibold">Latest Answers</h3>

                        <a
                            href="javascript:void(0)"
                            class="text-sm text-blue-500 hover:decoration-blue-500"
                        >
                            View all
                        </a>
                    </div>
                </template>

                <div v-if="data.latestAnswers.length" class="text-left">
                    <a
                        href="#"
                        v-for="answer of data.latestAnswers"
                        :key="answer.id"
                        class="block p-2 hover:bg-gray-100/90"
                    >
                        <div class="font-semibold">
                            {{ answer.survey.title }}
                        </div>
                        <small>
                            Answer Made at:
                            <i class="font-semibold">{{ answer.end_date }}</i>
                        </small>
                    </a>
                </div>
                <div v-else class="text-gray-600 text-center py-16">
                    Your don't have answers yet
                </div>
            </DashboardCard>
        </div>
    </PageComponent>
</template>

<script setup>
import { EyeIcon, PencilIcon } from "@heroicons/vue/solid";

import DashboardCard from "../components/core/DashboardCard.vue";
import TButton from "../components/core/TButton.vue";
import PageComponent from "../components/PageComponent.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const loading = computed(() => store.state.dashboard.loading);
const data = computed(() => store.state.dashboard.data);

store.dispatch("getDashboardData");
</script>

<style scoped></style>
