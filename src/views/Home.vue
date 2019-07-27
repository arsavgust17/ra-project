<template>
  <div class="home">
    <MainWindow></MainWindow>
  </div>
</template>

<script>
// @ is an alias to /src
import MainWindow from "@/components/main-window.vue";

export default {
  name: "home",
  components: {
    MainWindow,
  }
};
</script>
