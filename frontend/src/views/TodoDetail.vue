<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useTodosStore } from '../stores/todoStore';

const route = useRoute();
const todoStore = useTodosStore();

const todoId = computed(() => parseInt(route.params.id as string));
const todo = computed(() => todoStore.todos.find(t => t.id === todoId.value));
</script>

<template>
    <div v-if="todo">
        <h2>Todo Detail</h2>
        <p><strong>Title:</strong> {{ todo.title }}</p>
        <p><strong>Description:</strong> {{ todo.description }}</p>
        <p><strong>Completed:</strong> {{ todo.completed ? 'Yes' : 'No' }}</p>
    </div>
    <div v-else>
        <p>Todo not found.</p>
    </div>
</template>
