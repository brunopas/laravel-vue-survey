import { renderSlot } from "vue";
import { createStore } from "vuex";
import axiosClient from "../axios.js";

const tmpSurveys = [
    {
        id: 100,
        title: "TheCodeholic YouTube Channel Content",
        slug: "thecodeholic-youtube-channel-content",
        status: "draft",
        image_url: "https://avatars.githubusercontent.com/u/4627922?v=4",
        description:
            "My name is Zuera.<br>I am Web Developer with 10+ years in Web Development. Free educational content creator. I love JavaScript, PHP and love coding challanges.",
        created_at: "2022-08-19 18:00:00",
        updated_at: "2022-08-19 18:00:00",
        expire_date: "2022-08-31 18:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                description: null,
                data: {
                    options: [
                        {
                            uuid: "487d5518-6435-4aa7-9ccb-a5397ff81cc6",
                            text: "USA",
                        },
                        {
                            uuid: "03ee20b5-81c5-47af-bbe4-26ff1750f7ce",
                            text: "Georgia",
                        },
                        {
                            uuid: "4688affa-5258-4fad-8666-7351080ff125",
                            text: "Germany",
                        },
                        {
                            uuid: "4ab7939b-b0bd-4a12-bdc1-7d330fdef5e0",
                            text: "India",
                        },
                        {
                            uuid: "b16d37df-6fe4-4c05-b16e-679905452524",
                            text: "United Kingdom",
                        },
                    ],
                },
            },
            {
                id: 2,
                type: "checkbox",
                question:
                    "Which language videos do you want to see on my channel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis felis ac dolor elementum feugiat. Mauris nec dignissim justo. Aliquam erat volutpat.",
                data: {
                    options: [
                        {
                            uuid: "8bb0dba2-1337-4679-bf32-f3e2e58a11c1",
                            text: "Javascript",
                        },
                        {
                            uuid: "13b0e225-26b5-42d8-84a6-991d7f07ffd3",
                            text: "PHP",
                        },
                        {
                            uuid: "b9e0765c-a069-4fbe-be17-a68b61c46ed5",
                            text: "HTML + CSS",
                        },
                        {
                            uuid: "c9246796-eb35-416c-a48b-70ce99f7c891",
                            text: "All of the above",
                        },
                    ],
                },
            },
            {
                id: 3,
                type: "checkbox",
                question:
                    "Which PHP framework videos do you want to see on my channel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis felis ac dolor elementum feugiat. Mauris nec dignissim justo. Aliquam erat volutpat.",
                data: {
                    options: [
                        {
                            uuid: "2bffa403-c9c8-44c1-a067-246a8d5845fb",
                            text: "Laravel",
                        },
                        {
                            uuid: "d699e187-8218-462c-8515-c00701c83780",
                            text: "Yii2",
                        },
                        {
                            uuid: "686ecd1f-6300-48ee-988f-5a80c9854b44",
                            text: "Codeigniter",
                        },
                        {
                            uuid: "73d71485-ae7f-435c-9a6b-df3d7c422bab",
                            text: "Symfony",
                        },
                    ],
                },
            },
            {
                id: 4,
                type: "radio",
                question: "Which Laravel Framework do you love most?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis felis ac dolor elementum feugiat. Mauris nec dignissim justo. Aliquam erat volutpat.",
                data: {
                    options: [
                        {
                            uuid: "980b26d5-3bfa-474e-a5b9-a5145d71b406",
                            text: "Laravel 5",
                        },
                        {
                            uuid: "79419fd6-b8b5-4d49-a851-925a95d44b9f",
                            text: "Laravel 6",
                        },
                        {
                            uuid: "f24645ee-f08f-4cc0-894c-2882e2cde97d",
                            text: "Laravel 7",
                        },
                        {
                            uuid: "d5820383-ef49-4696-9a17-fd0b18a537f1",
                            text: "Laravel 8",
                        },
                    ],
                },
            },
            {
                id: 5,
                type: "checkbox",
                question:
                    "What type of projects do you want to see on my channel built with Laravel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis felis ac dolor elementum feugiat. Mauris nec dignissim justo. Aliquam erat volutpat.",
                data: {
                    options: [
                        {
                            uuid: "f89dd1ee-9a98-48b0-bc00-55ad7efc49c3",
                            text: "REST API",
                        },
                        {
                            uuid: "d9ee6e9d-eabe-4ce2-bc0e-cfca73519286",
                            text: "Ecommerce",
                        },
                        {
                            uuid: "fc53f73e-9016-4f10-92fc-8cfaad270d36",
                            text: "Real State",
                        },
                        {
                            uuid: "5b165443-89d6-4c50-831a-bd13a20e4682",
                            text: "All of the above",
                        },
                    ],
                },
            },
            {
                id: 6,
                type: "text",
                question: "What's your favourite YouTube channel?",
                description: null,
                data: {},
            },
            {
                id: 7,
                type: "textarea",
                question: "What do you think about TheCodeholic channel?",
                description: null,
                data: {},
            },
        ],
    },
    {
        id: 101,
        title: "Laravel 8 Survey",
        slug: "laravel-8-survey",
        status: "draft",
        image_url: "https://avatars.githubusercontent.com/u/4627922?v=4",
        description: "Description<br>Laravel 8 Survey",
        created_at: "2022-08-18 18:00:00",
        updated_at: "2022-08-18 18:00:00",
        expire_date: "2022-08-31 18:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                description: null,
                data: {
                    options: [
                        {
                            uuid: "487d5518-6435-4aa7-9ccb-a5397ff81cc6",
                            text: "USA",
                        },
                        {
                            uuid: "03ee20b5-81c5-47af-bbe4-26ff1750f7ce",
                            text: "Georgia",
                        },
                        {
                            uuid: "4688affa-5258-4fad-8666-7351080ff125",
                            text: "Germany",
                        },
                        {
                            uuid: "4ab7939b-b0bd-4a12-bdc1-7d330fdef5e0",
                            text: "India",
                        },
                        {
                            uuid: "b16d37df-6fe4-4c05-b16e-679905452524",
                            text: "United Kingdom",
                        },
                    ],
                },
            },
            {
                id: 2,
                type: "checkbox",
                question:
                    "Which language videos do you want to see on my channel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis felis ac dolor elementum feugiat. Mauris nec dignissim justo. Aliquam erat volutpat.",
                data: {
                    options: [
                        {
                            uuid: "8bb0dba2-1337-4679-bf32-f3e2e58a11c1",
                            text: "Javascript",
                        },
                        {
                            uuid: "13b0e225-26b5-42d8-84a6-991d7f07ffd3",
                            text: "PHP",
                        },
                        {
                            uuid: "b9e0765c-a069-4fbe-be17-a68b61c46ed5",
                            text: "HTML + CSS",
                        },
                        {
                            uuid: "c9246796-eb35-416c-a48b-70ce99f7c891",
                            text: "All of the above",
                        },
                    ],
                },
            },
            {
                id: 3,
                type: "checkbox",
                question:
                    "Which PHP framework videos do you want to see on my channel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis felis ac dolor elementum feugiat. Mauris nec dignissim justo. Aliquam erat volutpat.",
                data: {
                    options: [
                        {
                            uuid: "2bffa403-c9c8-44c1-a067-246a8d5845fb",
                            text: "Laravel",
                        },
                        {
                            uuid: "d699e187-8218-462c-8515-c00701c83780",
                            text: "Yii2",
                        },
                        {
                            uuid: "686ecd1f-6300-48ee-988f-5a80c9854b44",
                            text: "Codeigniter",
                        },
                        {
                            uuid: "73d71485-ae7f-435c-9a6b-df3d7c422bab",
                            text: "Symfony",
                        },
                    ],
                },
            },
            {
                id: 4,
                type: "radio",
                question: "Which Laravel Framework do you love most?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis felis ac dolor elementum feugiat. Mauris nec dignissim justo. Aliquam erat volutpat.",
                data: {
                    options: [
                        {
                            uuid: "980b26d5-3bfa-474e-a5b9-a5145d71b406",
                            text: "Laravel 5",
                        },
                        {
                            uuid: "79419fd6-b8b5-4d49-a851-925a95d44b9f",
                            text: "Laravel 6",
                        },
                        {
                            uuid: "f24645ee-f08f-4cc0-894c-2882e2cde97d",
                            text: "Laravel 7",
                        },
                        {
                            uuid: "d5820383-ef49-4696-9a17-fd0b18a537f1",
                            text: "Laravel 8",
                        },
                    ],
                },
            },
            {
                id: 5,
                type: "checkbox",
                question:
                    "What type of projects do you want to see on my channel built with Laravel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis felis ac dolor elementum feugiat. Mauris nec dignissim justo. Aliquam erat volutpat.",
                data: {
                    options: [
                        {
                            uuid: "f89dd1ee-9a98-48b0-bc00-55ad7efc49c3",
                            text: "REST API",
                        },
                        {
                            uuid: "d9ee6e9d-eabe-4ce2-bc0e-cfca73519286",
                            text: "Ecommerce",
                        },
                        {
                            uuid: "fc53f73e-9016-4f10-92fc-8cfaad270d36",
                            text: "Real State",
                        },
                        {
                            uuid: "5b165443-89d6-4c50-831a-bd13a20e4682",
                            text: "All of the above",
                        },
                    ],
                },
            },
        ],
    },
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        surveys: [...tmpSurveys],
        questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
    },
    getters: {},
    actions: {
        saveSurvey({ commit }, survey) {
            let response;

            if (survey.id) {
                response = axiosClient
                    .put(`/survey/${survey.id}`, survey)
                    .then((res) => {
                        commit("updateSurvey", res.data);
                        return res;
                    });
            } else {
                response = axiosClient.post("/survey", survey).then((res) => {
                    commit("saveSurvey", res.data);
                    return res;
                });
            }

            return response;
        },
        login({ commit }, user) {
            return axiosClient.post("/login", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },
        register({ commit }, user) {
            return axiosClient.post("/register", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },
        logout({ commit }, user) {
            return axiosClient.post("/logout").then((response) => {
                commit("logout");
                return response;
            });
        },
    },
    mutations: {
        saveSurvey: (state, survey) => {
            state.surveys = [...state.surveys, survey.data];
        },
        updateSurvey: (state, survey) => {
            state.surveys = state.surveys.map((s) => {
                if (s.id == survey.data.id) {
                    return survey.data;
                }

                return s;
            });
        },
        setUser: (state, userData) => {
            state.user.data = userData.user;
            state.user.token = userData.token;

            sessionStorage.setItem("TOKEN", userData.token);
        },
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem("TOKEN");
        },
    },
    modules: {},
});

export default store;
