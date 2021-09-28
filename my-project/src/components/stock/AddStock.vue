<template>
  <article>
    <div class="main">
      <form action="" v-for="(item , index) in selecting" :key="index">
        <label>
          colors :
          <input type="text" v-model="colors" >
        </label>
        <label>
          Sizes :
          <input type="number" v-model="sizes">
        </label>
        <label >
          images : 
          <input type="file" ref="fileName" v-bind="images" accept="image/*" @change="showImages">
        </label>
        <label>
          Initial Inventory :
          <input type="number" v-model="initialInventory" disabled :placeholder="item.initialInventory">
        </label>
        <label>
          Inventory Added :
          <input type="number"  v-model.number="addedInventory" :placeholder="item.addedInventory">
        </label>
        <label>
          Final Inventory :
          <input type="number" v-model="physicalInventory" disabled :placeholder="counter">
        </label>
        <label >Status :
          <select v-model="status">
            <option value="">Set status</option>
            <option >Available</option>
            <option >Not Available</option>
          </select>
        </label>
        <label>
           Order :
          <input type="number" v-model="orders">
        </label>
        <div>
          <button type="submit" @click.prevent="submit">Buy</button>
          <button type="reset" @click.prevent="reset">Reset</button>
        </div>
          <p>
            {{this.$store.state.error}}
          </p>
      </form>
    </div>
  </article>
</template>

<script>

export default {
  name : "ErrorMessage",
  data(){
    return{
      selecting:[
        {
          name:'Shoes',
          sizes:'',
          colors: '',
          status:'',
          physicalInventory: 0,
          addedInventory: 0,
          initialInventory:100,
          orders : 0, 
          images: [],
        }
      ]
    }
  },computed: {
      counter () {
        return this.$store.getters.counter
      },
      addedInventory:{
        get(){
          return this.$store.state.inventoryAdd
        },
        set(value){
          this.$store.commit('updateValue' , value)
        }
      },
      sizes:{
        get(){
          return this.$store.state.size
        },
        set(value){
          this.$store.commit('updateSize' , value)
        },
      },
      colors:{
        get(){
          return this.$store.state.color
        },
        set(value){
          this.$store.commit('updateColor' , value)
        },
      },
      status:{
        get(){
          return this.$store.state.inventoryStatus
        },
        set(value){
          this.$store.commit('updateStatus' , value)
        }
      },
      orders:{
        get(){
          return this.$store.state.order
        },
        set(value){
          this.$store.commit('updateOrder' , value)
        }
      },
    },
  methods:{
     submit(){
       this.$store.dispatch('increementAction')
    },
    reset(){
      this.sizes = '';
      this.colors ='';
      this.status ='';
      this.orders = '';
      this.$store.state.inventoryAdd = ''
      this.$store.state.physicalInventory = ''
      this.$store.state.error = ''
    },
    showImages(){
      this.images = this.$refs.fileName.files
      console.log(this.images);
    }
  },
}
</script>

<style scoped>
article{
  display: flex;
  margin: 5rem 2rem;
}
form{
  width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
input , button{
  margin: 1rem ;
  width: 8rem;
}
p{
  color: red;
}
</style>