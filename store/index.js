// import actions from './actions';
// import getters from './getters';
// import mutations from './mutations';

export const state = () => ({
  title: "",
  body: "",
  ArticleList:"",
});

export const mutations = {
  updateTitle(state, newTitle) {
    state.title = newTitle
  },
  updateBody(state, newBody) {
    state.body = newBody
  },
  getArticleList(state,getArticleList){
    state.ArticleList = getArticleList;
  }
}


