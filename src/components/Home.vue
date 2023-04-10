<template>
  <Header />


  <div class="bg-success bg-green-50 py-5 page-section">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div class="text-white text-2xl mb-3">Learn From Zero To Hero</div>
        <h3 class="title-section">
          <span class="text-white">"My Skill"</span>
        </h3>
        <div class="divider mx-auto"></div>
      </div>

      <div
        class="flex flex-col lg:flex-row items-center justify-evenly space-x-3 h-full text-left py-5">
        <div
          class="bg-white traktrak rounded-xl drop-shadow-md mt-3 col-lg-4 ml-2 py-1 px-5 h-96 hover:-mt-3 cursor-default hover:shadow-lg hover:shadow-green-100">
          <img
            src="../images/cib-blender.svg"
            trigger="hover"
            style="width: 150px; height: 150px"
            class="hidden lg:flex">

          <div class="text-2xl font-semibold text-green-800 mt-4 pl-1">
            Blender 3D
          </div>
          <p class="text-left text-base lg:text-sm leading-relaxed text-red">
            Saya sudah menggunakan blender sekitar 2 tahunan
            dan sampai sekarang saya masih belajar

          </p>
        </div>

        <div
          class="bg-white traktrak rounded-xl mt-3 drop-shadow-md col-lg-4 ml-2 py-1 px-5 h-96 hover:-mt-3 cursor-default hover:shadow-lg hover:shadow-green-100">
          <img src="../images/cib-unreal-engine.svg"
            trigger="hover"
            style="width: 150px; height: 150px"
            class="hidden lg:flex">

          <div class="text-2xl  font-semibold text-green-800 mt-4 pl-1">
            Unreal Engine
          </div>
          <p class="text-left text-base lg:text-sm leading-relaxed">
            Unreal engine adalah software yang sangat bagus untuk di gunakan dalam game development
            saya telah menggunakan unrealengine sekitar satu tahun untuk virtual production dan game development
          </p>
        </div>

        <div
          class="bg-white traktrak rounded-xl drop-shadow-md mt-3 col-lg-4 ml-2 py-1 px-5 h-96 hover:-mt-3 cursor-default hover:shadow-lg hover:shadow-green-100">
          <img
            src="../images/substance.png"
            trigger="morph"
            style="width: 150px; height: 150px"
            class="hidden lg:flex">

          <div class="text-2xl font-semibold text-green-800 mt-4 pl-1">
            Substance Painter
          </div>
          <p class="text-left text-base lg:text-sm leading-relaxed">
            3D arstist atau environtment artis biasanya mengejar realisme,salah satu caranya 
            mengggunakan software painting digital
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
import About from "./Tentang.vue";


export default {
  name: "Home",
  data() {
    return {};
  },

  props: {
    blog: Array,
  },

  components: {
    Navbar,
    Header,
    About,

  },
};
</script>

<style>
.container{
  background-image: linear-gradient(60deg, #122b23 0%, #122b23 100%);
}
.traktrak{
  background-image: linear-gradient(60deg, #122b23 0%, #122b23 100%);
}

.bg-success{
  background-image: linear-gradient(60deg, #122b23 0%, #122b23 100%);
}

</style>
