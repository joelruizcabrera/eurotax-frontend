<template>
  <div class="flex row">
    <AppSidebar></AppSidebar>
    <NuxtPage class="p-3 px-5 w-full"></NuxtPage>
  </div>
</template>
<script>
import AppSidebar from "~/components/AppSidebar.vue";

export default {
  name: "App",
  components: {
    AppSidebar
  }
}
</script>