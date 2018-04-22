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

<style>
li {
  display: inline-block;
}
</style>
