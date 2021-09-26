// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import AudioVisual from "vue-audio-visual";
import VueScrollTo from "vue-scrollto";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(AudioVisual);
  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  });
  head.meta.push({
    name: "keywords",
    content:
      "Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS,ml,flask,genre classification, music, genre",
  });
  head.meta.push({
    name: "description",
    content: "Music genre classification web app",
  });
  head.meta.push({
    name: "author",
    content: "Sanfer Noronha",
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto",
  });
}
