<template>
  <div class="w-full bg-gray-200 h-dvh flex flex-col items-center justify-center">
    <h1>Login</h1>
    <div class="p-4 rounded-xl bg-white min-h-10 flex flex-col gap-2 items-center shadow-xl">
      <input type="text" class="border-black border px-5 py-2 rounded" placeholder="E-Mail Adresse">
      <input type="password" class="border-black border px-5 py-2 rounded" placeholder="Passwort">
      <button type="submit" class="rounded">Login</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input {
  width: 20rem;
}
button {
  background: black;
  color: #fff;
  padding: .5rem 1rem;
  width: 6.5rem;
  font-weight: 400;
}
</style>

<script>
export default {
  name: "Login"
}
</script>