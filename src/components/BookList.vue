<template>
  <div>
    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
    <table>
      <tr>
        <th v-for="header in headers" :key="header.text">
          {{header.text}}
        </th>
      </tr>
      <tr v-for="book in books" :key="book.title">
        <td> {{ book.title }} </td>
        <td> {{ book.author }} </td>
        <td> {{ book.owned }} </td>
        <td> {{ book.read }} </td>
        <td><button @click="removeBook(book.id)">RemoveBook</button></td>
      </tr>
      <tr>
        <td><input v-model.trim="newBook.title" placeholder=""></td>
        <td><input v-model="newBook.author" placeholder=""></td>
        <td><input v-model="newBook.owned" placeholder=""></td>
        <td><input v-model="newBook.read" placeholder=""></td>
        <td><button @click="addBook">Add book</button></td>
      </tr>
    </table>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      errors: [],
      newBook: {
        title: '',
        author: '',
        owned: '',
        read: ''
      },
      headers: [
        {
          text: 'Title',
          align: 'center',
          sortable: true,
          value: 'title'
        },
        {
          text: 'Author',
          align: 'center',
          sortable: true,
          value: 'author'
        },
        {
          text: 'Owned',
          align: 'center',
          sortable: true,
          value: 'owned'
        },
        {
          text: 'Read',
          align: 'center',
          sortable: true,
          value: 'read'
        }
      ],
      books: []
    }
  },
  created: function () {
    var booksRef = firebase.database().ref('/books')
    booksRef.on('value', (snapshot) => {
      const booksIDs = snapshot.val()
      this.books = Object.keys(booksIDs).map(id => Object.assign({}, booksIDs[id], { id }))
    })
  },
  methods: {
    addBook: function () {
      if (this.checkForm()) {
        firebase.database().ref('books').push(this.newBook)
        this.newBook = { title: '', author: '', owned: '', read: '' }
      }
    },
    removeBook: function (id) {
      firebase.database().ref(`/books/${id}`).once('value').then((snapshot) => {
        snapshot.ref.remove()
      })
    },
    checkForm: function () {
      if (
        this.newBook.title &&
        this.newBook.author &&
        this.newBook.owned &&
        this.newBook.read
      ) return true
      this.errors = []
      if (!this.newBook.title) this.errors.push('Title required')
      if (!this.newBook.author) this.errors.push('Author required')
      if (!this.newBook.owned) this.errors.push('Owned required')
      if (!this.newBook.read) this.errors.push('Read required')
    }
  }
}
</script>

<style>
  input {
    border: 1px solid grey;
  }
</style>
