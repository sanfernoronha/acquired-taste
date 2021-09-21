<template>
  <div
    class="font-sans text-gray-800 leading-normal flex flex-col min-h-screen"
  >
    <header class="border-t-14 border-green-500">
      <nav class="container mx-auto flex justify-between items-center py-8">
        <a href="" class="uppercase font-bold text-xl"
          >Acquired <span class="text-green-500">taste</span></a
        >
        <ul class="uppercase tracking-wide font-bold flex items-center">
          <li class="mr-8">
            <a href="#" class="text-gray-800 hover:text-gray-600">Github</a>
          </li>
          <li>
            <a href="#" class="text-gray-800 hover:text-gray-600">blog</a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="flex-grow">
      <slot />
    </div>

    <footer class="bg-green-500 text-white">
      <div class="container mx-auto flex items-center justify-between py-8">
        <div>Copyright 2021, All rights reserved</div>
        <ul class="flex items-center">
          <li class="mr-8"><a href="#">A</a></li>
          <li class="mr-8"><a href="#">B</a></li>
          <li class="mr-8"><a href="#">C</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style src="../main.css" />
