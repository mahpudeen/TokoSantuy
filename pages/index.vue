<template>
  <div>
    <VmHero></VmHero>
    <VmProductsList></VmProductsList>
  </div>
</template>

<script>
import VmProductsList from '@/components/products_list/ProductsListContainer';
import VmHero from '@/components/hero/Hero';
import produk from "../api/produk/index";

export default {
  name: 'index',
  components: {
    VmProductsList,
    VmHero
  },
  computed: {
    products () {
      let self = this
      produk.getProduk(window).then(function(datas){
          self.$store.commit('SET_CATALOG', datas);
          return datas
      }).catch(function(err) {
        console.log(err)
      });
    }
  },
  beforeCreate () {
    let self = this
    produk.getProduk().then(function(ref){
        self.$store.commit('SET_CATALOG', ref);
        return ref
    }).catch(function(err) {
      console.log(err)
    });
  }
};
</script>
