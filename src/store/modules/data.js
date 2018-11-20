const state = {
    data: [],
};

const getters = {
    getData(state) {
        return state.data;
    },
};

const actions = {
    setData({ commit }, data) {
        commit('setData', data);
    }
};

const mutations = {
    setData(state, data) {
        state.data = [...data];
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
