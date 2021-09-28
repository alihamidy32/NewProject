<template>
  <header>
    <div class="main">
      <div class="card" v-for="(item , index) in shop " :key="index">
        <div class="card-flex">
          <div class="img">
            <img :src="require(`@/assets/images/${item.photo}.jpg`)" width="480" height="350">
          </div>
          <h3 class="type">
            {{item.type}}
          </h3>
          <div class="colors">
            <h3>Colors :{{item.colors}}</h3>
            <input type="checkbox">
          </div>
          <div class="sizes">
            <h3>Sizes : {{item.sizes}}</h3>
            <input type="checkbox">
          </div>
          <div class="flex-inventory">
            <h4>
              Inventory Status : {{item.status}}
            </h4>
            <h4>
              Physical Inventory : {{item.physicalInventory}}
            </h4>
          </div>
          <div class="flex-btn">
            <button class="btn">Buy</button>
            <button class="btn">Reservation</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      shop:[
        {
          photo:'logo',
          type:'Shoes Adidas AIRFLY 5843',
          colors:'',
          sizes:'',
          physicalInventory:null,
          status : '',
        }
      ]
    }
  },
}
</script>
<style scoped>
.main{
  display: flex;
  justify-content: center;
  align-items: center;
}
.card{
  width: 30rem;
  height: 40rem;
  padding: 1.5rem;
  background-color: rgba(199, 224, 224, 0.822);
  border-radius: 2rem;
  box-shadow: 2rem 2rem 2rem rgba(0, 0, 0, 0.363);
}
.card-flex{
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.img{
  align-self: center;
  margin: 0 auto;
}
h3{
  margin: .5rem  0;
}
.flex-btn , .flex-inventory{
  width: 100%;
  display: flex;
  justify-content: space-between;

}
</style>