<template>
  <div>
    <h1>{{$t('welcomeText')}} EuroTax!</h1>
    <div class="dashboard__functions flex row gap-4 mt-6">
      <div class="dashboard__functions__item p-4 rounded-2xl relative shadow-1xl hover:shadow-2xl transition-shadow" style="background-image: url('/function_tax_declaration.jpeg')">
        <div class="absolute bottom-0 left-0 p-4 w-full">
          <h4 class="mb-2 text-white">{{$t('functions.taxDeclarationHeadline')}}</h4>
          <a href="#" class="cursor-pointer">
            <button class="uppercase border-2 px-5 py-2 bg-white font-black border-black">{{$t('startText')}}</button>
          </a>
        </div>
      </div>
      <div class="dashboard__functions__item p-4 rounded-2xl relative shadow-1xl hover:shadow-2xl transition-shadow" style="background-image: url('/function_tax_registration.jpeg')">
        <div class="absolute bottom-0 left-0 p-4 w-full">
          <h4 class="mb-2 text-white">{{$t('functions.taxRegistrationHeadline')}}</h4>
          <a href="#" class="cursor-pointer">
            <button class="uppercase border-2 px-5 py-2 bg-white font-black border-black">{{$t('startText')}}</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard__functions {
  &__item {
    overflow: hidden;
    background-color: #ececec;
    min-width: 30rem;
    min-height: 15rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    & > div {
      background: rgba(0,0,0,0.4);
      backdrop-filter: blur(2px);
      h4 {
        word-break: keep-all;
        width: max-content;
      }
    }
  }
}
</style>

<script setup lang="ts">
definePageMeta({
  //middleware: 'auth'
})
</script>
