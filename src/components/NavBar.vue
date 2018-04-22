<template>
  <nav>
    <ul>
    <li>
      <router-link class="navbar-brand"
        :to="{ name: 'BookList' }"
      >
        BookList
      </router-link>

    </li>
    <li>
      <router-link class="navbar-brand"
        :to="{ name: 'Home' }"
      >
        Home
      </router-link>
    </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
   @import url('https://fonts.googleapis.com/css?family=Roboto');
  nav {

  }

  ul {
    text-align: center;
    list-style: none;
    height: 50px;
    line-height: 50px;
  }

  li {
    font-size: 16px;
    font-family: 'Roboto';
    text-transform: uppercase;
    padding: 0 15px;
    color: rgb(157, 174, 180);
    display: inline-block;
  }
  li:hover {
    border-bottom: 2px solid #07bdd5;
  }
  li:hover > a {
    color: #07bdd5;
  }
  a {
    text-decoration: none;
    color: #87898C;
  }

</style>
