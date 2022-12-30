<template>
  <div class="flex flex-row">
    <!-- NAV BAR -->
    <side-bar />
    <!-- CONTENT -->
    <div class="w-full">
      <!-- HEADER -->
      <my-header />
      <!-- TABLE -->
      <nf-table />
    </div>
  </div>
</template>

<script>
import SideBar from '../components/My-SideBar.vue'
import Table from '../components/My-Table.vue'
import Header from '../components/My-Header.vue'

export default {

  components: {
    'side-bar': SideBar,
    'nf-table': Table,
    'my-header': Header
  },
}
</script>
