/*
 * @Author: your name
 * @Date: 2023-06-06 16:49:41
 * @LastEditTime: 2023-06-09 14:53:30
 * @LastEditors: localhost
 * @Description: In User Settings Edit
 * @FilePath: /vuex-test/src/index.ts
 */

import { Store, mapActions, mapMutations, mapGetters, mapState } from "vuex";
const store = new Store({
  state: {
    a: 1,
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
  },
  mutations: {
    changeState(state, data) {
      console.log(data);
    },
  },
});
console.log(store);

console.log(store.getters.doneTodos[0].id);




