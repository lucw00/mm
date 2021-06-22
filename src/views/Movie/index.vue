<template>
  <div id="main">    
        <Header title="电影呀" />
        <TabBar />        
 </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
export default {
  name: 'Movie',
  data() { 
    return {

    }
  },
  components:{
    Header,
    TabBar
  },
  methods:{

  },
  mounted() {

  },
 }
</script>

<style>
</style>