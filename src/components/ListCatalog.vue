<template>
  <div>
    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>

  <ul>
    <div v-for="bookList in bookLists" :key="bookList.id">
      <p>{{ bookList.name }}</p>

      <router-link class="navbar-brand"
        :to="{ name: 'BookList', params: { id: bookList.id } }"
      >
        Ver {{bookList.name}}
      </router-link>
      <button @click="removeBookList(bookList.id)">Remove Book List</button>
    </div>

    <input v-model.trim="newBookList" placeholder="Book list name">
    <button @click="addBookList">Add book</button>

  </ul>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      errors: [],
      newBookList: '',
      headers: [
        {
          text: 'Name',
          align: 'center',
          sortable: true,
          value: 'title'
        }
      ],
      bookLists: []
    }
  },
  created: function () {
    // firebase.database().ref('bookLists').push({name: 'pruebaBookList', books: ''})
    var booksRef = firebase.database().ref('/bookLists')
    booksRef.on('value', (snapshot) => {
      const bookListsIDs = snapshot.val()
      this.bookLists = Object.keys(bookListsIDs).map(id => Object.assign({}, bookListsIDs[id], { id }))
    })
  },
  methods: {
    addBookList: function () {
      firebase.database().ref('/bookLists').push(this.newBookList)
      this.newBookList = ''
    },
    removeBookList: function (id) {
      firebase.database().ref(`/bookLists/${id}`).once('value').then((snapshot) => {
        snapshot.ref.remove()
      })
    }
  }
}
</script>

<style>
  input {
    border: 1px solid grey;
  }
</style>
