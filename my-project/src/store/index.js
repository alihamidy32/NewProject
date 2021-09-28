import { createStore } from "vuex";

export default createStore({
  state: { 
    size : '',
    color : '',
    image : '' ,
    inventoryStatus : '',
    inventoryAdd : null,
    initialInventory : 100,
    physicalInventory : null,
    order : null,
    error:''
  },
  mutations: {
    increementCounter(state){
      state.physicalInventory =state.inventoryAdd + state.initialInventory - state.order
    },
    updateValue(state , payload){
      state.inventoryAdd = payload
    },
    updateField(state , payload){
      state.upField = payload
    },
    updateSize(state , payload){
      state.size = payload
    },
    updateColor(state , payload){
      state.color = payload
    },
    updateStatus(state , payload){
      state.inventoryStatus = payload
    },
    updateOrder(state , payload){
      state.order = payload
      console.log(state.order);
    },
  },
  actions: {
    increementAction({commit}){
      commit('increementCounter')
    },
  },
  getters:{
    counter(state){
      if(state.physicalInventory < 0){
        return state.error = "*Something Went Wrong*"
      }else{
        return state.physicalInventory
      }
    },
  },
  modules: {},
});
