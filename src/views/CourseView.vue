<template>
  <div>
    <h1>This is course view</h1>

    <h2>Id of this course is: {{ $route.params.id }}</h2>

<!--    <h3> {{ notes($route.params.id) }}</h3>-->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router/composables"
const route = useRoute();


let muuttuja1 = "Kurssi"
function myFunction() {
  return ("hello world")
}
myFunction();

// import {useNoteStore} from "@/stores/notes";
// const store = useNoteStore()
//console.log(route.params.id)
//const notes = store.notes.notes
//console.log(this.$route.params)
//console.log($route)
//console.log(store.getByCourseId(route.params.id))
//const notes = (id: number) => console.log(store.getByCourseId(id));

</script>

<style scoped>

</style>