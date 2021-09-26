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
        <button
          v-scroll-to="{ el: '#input' }"
          class="bg-green-500 hover:bg-green-400 text-base text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-arrow-down-circle-fill mr-2 animate-bounce"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
          <span>
            Try it!
          </span>
        </button>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image
          src="~/music.svg"
          width="300"
          alt="hero"
          class="mx-auto sm:mx-0"
        />
      </div>
    </div>
    <!-- hero ends here -->
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 py-10">
      <div class="input-section" id="input">
        <label
          class="w-64 mx-auto flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-green-600 hover:text-white text-green-600 ease-linear transition-all duration-150"
        >
          <i class="fas fa-cloud-upload-alt fa-3x"></i>
          <span class="mt-2 text-base leading-normal">Select a file</span>
          <input
            type="file"
            class="hidden"
            id="file"
            ref="myFile"
            @change="setFile"
            @click="file == null"
          />
        </label>
        <div class="text-center my-2">
          <span
            class=" text-xs font-semibold inline-flex items-center py-1 px-2  rounded-full text-white bg-green-600 uppercase last:mr-0 mr-1"
            v-show="this.file"
          >
            <span>
              {{ this.file.name }}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              class="bi bi-x-lg inline-block ml-2 "
              viewBox="0 0 16 16"
              @click="clear"
            >
              <path
                d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
              />
            </svg>
          </span>
        </div>
        <div class="text-center">
          <button
            :disabled="!file"
            v-show="file"
            @click="predict"
            class="bg-green-500 hover:bg-green-400 text-base text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-dice-6 mr-2"
              v-bind:class="{
                'animate-spin': loading,
                'animate-none': !loading,
              }"
              viewBox="0 0 16 16"
            >
              <path
                d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"
              />
              <path
                d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
              />
            </svg>
            <span>
              Predict
            </span>
          </button>
        </div>
      </div>

      <div class="play-section">
        <!-- audio player -->

        <div class="result-section"></div>
        <!-- result section -->
        <div
          v-show="result"
          class="animate-bounce my-8 sm:my-0 text-white flex justify-center items-center flex-row px-6 py-4 border-0 rounded bg-green-500 w-3/4 sm:w-3/5 mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-chat-right-text-fill mr-8"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"
            />
          </svg>
          <span class="inline-block align-middle mr-8 capitalize">
            It's <span class=" font-extrabold">{{ result }}</span>
          </span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {},
  data() {
    return {
      file: "",
      audio_url: "",
      loading: false,
      result: "",
      error: "",
    };
  },
  methods: {
    setFile() {
      this.file = this.$refs.myFile.files[0];
      // console.log(this.file);
    },
    sendFile() {
      const storageRef = fb
        .storage()
        .ref(`${this.file.name}`)
        .put(this.file);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          // console.log(error.message);
        },
        () => {
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.audio_url = url;
            // console.log(this.audio_url);
          });
        }
      );
    },
    clear() {
      this.$refs.myFile.values = null;
      this.result = "";
      this.file = "";
      this.error = "";
    },
    async predict() {
      this.loading = true;
      var formdata = new FormData();
      formdata.append("song", this.file);
      fetch("http://3.128.168.16/classify", {
        method: "POST",
        redirect: "follow",
        body: formdata,
      })
        .then((response) => response.json())
        .then((data) => {
          this.loading = false;
          // console.log(data);
          this.result = data.result;
        })
        .catch((error) => {
          this.loading = false;
          // console.log(error);
          this.error = error;
        });

      // var requestOptions = {
      //   method: "POST",
      //   body: formdata,
      //   redirect: "follow",
      //   config: {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   },
      // };
      // fetch("http://3.128.168.16/classify", requestOptions)
      //   .then((response.json()) => {
      //     response.text();
      //     console.log(response);
      //   })
      //   .then((result) => {
      //     this.loading = false;
      //     console.log(result);
      //   })
      //   .catch((error) => {
      //     this.loading = false;
      //     console.log("error", error);
      //   });
      // axios({
      //   method: "post",
      //   url: "http://3.128.168.16/classify",
      //   data: formdata,
      //   config: {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   },
      // })
      //   .then((response) => {
      //     console.log(response.data.result);
      //   })
      //   .catch((error) => {
      //     console.log("error", error);
      //   });
    },
  },
  components: {},
};
</script>

<style></style>
