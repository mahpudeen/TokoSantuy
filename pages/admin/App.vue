<template>
  <div class="container mt-4" >

    <table class="table table-bordered mt-4">
      <thead class="thead-light">
        <tr>
          <th width="1">Id</th>
          <th width="10%">Title</th>
          <th width="200">Description</th>
          <th width="10%">Price</th>
          <th width="1">Ratings</th>
          <th width="1">Review</th>
          <th width="10">URL</th>
          <th width="200">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <span v-if="editIndex !== index">{{ item.title }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.title">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.description }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.description">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.price | money }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" type="number" v-model="item.price">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.ratings }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" type="number" min="1" max="10" v-model.number="item.ratings">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.reviews }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" type="number" min="1" max="10" v-model="item.reviews">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.url }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model.number="item.url">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index && tambahkan === false">
              <button @click="edit(item, index)" class="btn btn-sm btn-outline-secondary mr-2">Edit</button>
              <button @click="deleteProduct(item.id)" class="btn btn-sm btn-outline-secondary mr-2">Remove</button>
            </span>
            <span v-else-if="editIndex === index && tambahkan === true">
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="cancel(item)">Cancel</button>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="addProduct(item)">Tambahkan</button>
            </span>
            <span v-else-if="editIndex === index && tambahkan === false">
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="cancel(item)">Cancel</button>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="updateProduct(item)">Save</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="col-3 offset-9 text-right my-3">
      <button v-show="!editIndex" @click="add" class="btn btn-sm btn-secondary">Tambah barang</button>
    </div>

  </div>
</template>

<script>
import produk from "../../api/produk/index";
export default {

  name: 'Uhuy',

  filters: {
    money: (value) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value)
  },

  data() {
    return {
      editIndex: null,
      originalData: null,
      items: [],
      tambahkan: false,
    }
  },

  methods: {

    deleteProduct (id) {
        console.log(id)
        this.$store.dispatch('removeProduct', id)
        window.location.reload();
    },

    addProduct (item) {
        console.log('model', item)
        this.$store.dispatch('addProduct', item)
        window.location.reload();
    },

    updateProduct (item) {
        console.log('model', item)
        this.$store.dispatch('updateProduct', item)
        window.location.reload();
    },

    delete() {
      let self = this;
      produk.deleteProduk(window, self.param).then(function(res){
          return res
      }).catch(function(err){
        console.log(err)
      });
    },

    add() {
      this.originalData = null
      this.items.push({ ids: this.items.length + 1 ,title: '', description: '', price: 1286000, ratings: 3, reviews: 7, url: 'haha' })
      this.editIndex = this.items.length - 1
      this.tambahkan = true
    },

    edit(item, index) {
      this.originalData = Object.assign({}, item)
      this.editIndex = index
    },

    cancel(item) {
      this.editIndex = null
      this.tambahkan = false

      if (!this.originalData) {
        this.items.splice(this.items.indexOf(item), 1)
        return
      }

      Object.assign(item, this.originalData)
      this.originalData = null
    },

    remove(item, index) {
      this.items.splice(index, 1)
    },

    save(item) {
      this.originalData = null
      this.editIndex = null
    },

    subtotal(item) {
      return (item.qty * item.price) - (item.qty * item.price * item.discount / 100)
    }

  },

  computed: {
    produk(){
    let self = this
    produk.getProduk().then(function(datas) {
        return datas
    }).then(function(res){
        console.log(res)
        self.items = res
    }).catch(function(err){
        console.log(err)
    })
  }
  },

  beforeCreate(){
    let self = this
    produk.getProduk().then(function(datas) {
        return datas
    }).then(function(res){
        console.log(res)
        self.items = res
    }).catch(function(err){
        console.log(err)
    })
  }

}
</script>

<style>
  input[type="number"] {
    text-align: right;
  }
</style>
