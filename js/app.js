const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Sorprendente!!',
        imgSrc: './img/vue.jpg'
      }
    }
  }).mount('#app')