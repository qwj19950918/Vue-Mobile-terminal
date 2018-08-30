<template>
    <div>
      路由
      <h2>{{msg}}</h2>
      <h3>{{lastname.name}}</h3>
      <h3>{{lastname.publisher}}</h3>
      <h3>{{testData}}</h3>
      <span></span>
    </div>

</template>

<script>
  import router from "@/router";
    export default {
      name: "home",

      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          testData:''
        }
      },
      methods:{
        getlist(){
          let _this = this;
          _this.$http.get('v2/book/1220563').then(response => {
            _this.testData = response.data.summary;
          }).catch(error => {
            console.log(error)
          });
        },
      },
      computed:{
        lastname(){
          return this.$store.state.name
        }
      },
      created(){
        this.getlist();
      }
    }
</script>

<style scoped lang="scss">
  $primary-color:red;
  h3{
    color: $primary-color;
  }
  span{
    display: block;
    width: 100px;
    background: red;
    height: 100px;
    color: $primary-color;
  }
</style>
