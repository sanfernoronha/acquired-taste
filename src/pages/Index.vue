<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <div
      class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16 mt-8"
    >
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Music genre classification web app</div>
        <div class="text-green-700 leading-tight">
          Welcome to the site
        </div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="~/dev.svg" alt="hero" class="mx-auto sm:mx-0" />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style></style>
