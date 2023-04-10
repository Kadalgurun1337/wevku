<template>
  <transition name="fade" mode="out-in" @before-enter="beforeEnter" appear>
    <router-view :blog="blog"></router-view>
  </transition>
</template>

<script>



export default {
  name: 'App',
  data () {
    return {
    }
  },

  methods: {
    beforeEnter () {
      this.$root.$emit('scrollBeforeEnter')
    }
  },

  components: {}
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 350ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
</style>
