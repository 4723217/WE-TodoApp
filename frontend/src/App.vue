<script setup lang=ts>
  import { ref, computed } from 'vue';
  import AddTodo from './components/AddTodo.vue';
  import { useTodosStore } from './stores/todoStore';
  import { RouterView, RouterLink } from 'vue-router';

  const name = ref('Vue 3 with TypeScript');

  const todoStore = useTodosStore();

</script>

<template>
  <div id="app">
    <header>
      <h1>Todo App</h1>
    </header>

    <main id ="main-content">
      <router-view />
    </main>

    <footer>
      <ul>
        <li><router-link to="/">Todo List</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>  
    </footer>
  </div>
</template>

<style scoped> 
  #main-content { padding: 1rem; border-style: solid; border-width: 2px; }
</style> 
