import { ServiceWorker } from 'aws-amplify';
<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        test-mc-pwa
      </h1>
      <div class="links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
          @click="registerSW()"
        >
          register SW
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ServiceWorker } from 'aws-amplify';

export default {
  async created() {
      const serviceWorker = new ServiceWorker();
      await serviceWorker.register('@/static/service-worker.js', '/')
      console.log('registered SW')
  },
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
