<template>
    <div>
      about
      <h2>{{userlist.summary}}</h2>
      <h3>{{userlist.publisher}}222</h3>
      <button @click="click()">点击</button>
    </div>
</template>

<script>

    export default {
      name: "about",
      data(){
          return{
            myself:''
          }
      },
      methods:{
        click(){
          let _this = this;
          _this.$store.dispatch('thisdata')
        },
        myarr(){
          let _this = this;
          _this.myself = ['正式','善良','勇敢'];
            console.log(_this.myself)
        }

      },
      computed:{
        userlist(){
          return this.$store.state.shoplist
        },
      },
      created(){
        this.$store.dispatch('thisdata');
        this.myarr()
      }

    }
</script>

<style scoped>

</style>
