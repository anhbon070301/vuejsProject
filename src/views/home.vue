<script setup lang="ts">
defineProps<{
  title: string
}>()
import newDetail from '../views/news/new.vue';
import listNew from '../views/news/listnew.vue';
</script>

<template>
    <div class="container" style="margin-left: 5%;">

        <newDetail></newDetail>

        <listNew></listNew>

    </div>
</template>


