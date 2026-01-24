<script setup lang="ts">
import { ref } from 'vue';
import { useTodosStore } from '../stores/todoStore';

const todoStore = useTodosStore();

const newTitle = ref<string>('');
const newDescription = ref<string>('');

</script>

<template>
    <section>
      <h2>New Todo</h2>
      <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.25rem 0;">
        <input type="text" v-model="newTitle" placeholder="New Todo title" aria-label="New Todo title" />
        <input type="text" v-model="newDescription" placeholder="New Todo description" aria-label="New Todo description" />
      <button v-on:click="todoStore.addTodo(newTitle, newDescription)" :disabled="!newTitle">Add</button>
      </div>
    </section>
</template>