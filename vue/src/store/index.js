import { renderSlot } from "vue";
import { createStore } from "vuex";
import axiosClient from "../axios.js";

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        currentSurvey: {
            loading: false,
            data: {},
        },
        surveys: {
            loading: false,
            data: [],
        },
        questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
        notification: {
            show: false,
            type: null,
            message: null,
        },
    },
    getters: {},
    actions: {
        getSurveys({ commit }) {
            commit("setSurveysLoading", true);

            return axiosClient
                .get("/survey")
                .then((res) => {
                    commit("setSurveys", res.data);
                    commit("setSurveysLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setSurveysLoading", false);
                    throw err;
                });
        },
        getSurvey({ commit }, id) {
            commit("setCurrentSurveyLoading", true);

            return axiosClient
                .get(`/survey/${id}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    commit("setCurrentSurveyLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false);
                    throw err;
                });
        },
        saveSurvey({ commit }, survey) {
            delete survey.image_url;
            let response;

            if (survey.id) {
                response = axiosClient
                    .put(`/survey/${survey.id}`, survey)
                    .then((res) => {
                        commit("setCurrentSurvey", res.data);
                        return res;
                    });
            } else {
                response = axiosClient.post("/survey", survey).then((res) => {
                    commit("setCurrentSurvey", res.data);
                    return res;
                });
            }

            return response;
        },
        deleteSurvey({ commit }, id) {
            return axiosClient.delete(`/survey/${id}`);
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
        setSurveysLoading: (state, loading) => {
            state.surveys.loading = loading;
        },
        setCurrentSurveyLoading: (state, loading) => {
            state.currentSurvey.loading = loading;
        },
        setSurveys: (state, surveys) => {
            state.surveys.data = surveys.data;
        },
        setCurrentSurvey: (state, surveys) => {
            state.currentSurvey.data = surveys.data;
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
        notify: (state, { type, message }) => {
            state.notification.show = true;
            state.notification.type = type;
            state.notification.message = message;

            setTimeout(() => {
                state.notification.show = false;
            }, 3000);
        },
    },
    modules: {},
});

export default store;
