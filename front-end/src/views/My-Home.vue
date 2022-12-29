<template>
  <div class="flex flex-row">
    <!-- NAV BAR -->
    <div class="h-screen w-4/12  bg-slate-100">
      <side-bar />
    </div>
    <!-- CONTENT -->
    <div>
      <!-- HEADER -->
      <div></div>
      <!-- TABLE -->
      <div></div>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/My-SideBar.vue'

export default {
  components: {
    'side-bar': SideBar,
  }
}
</script>
