<script setup lang="ts">
defineProps<{
  title: string
}>()
import newDetail from '../views/news/new.vue';
import listNew from '../views/news/listnew.vue';
import detailVue1 from '../views/news/detail.vue';
</script>

<template>
  
    <div class="container" style="margin-left: 5%;">

        <detailVue1></detailVue1>

        <listNew></listNew>

    </div>

</template>

<script>

</script>

