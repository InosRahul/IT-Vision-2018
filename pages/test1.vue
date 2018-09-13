<template>
  <div>
    <no-ssr>
      <flip-countdown deadline="2018-09-19 00:00:00"></flip-countdown>
    </no-ssr>
  </div>
</template>

<script>
  import FlipCountdown from 'vue2-flip-countdown'

  export default {
      components: { FlipCountdown }
  }
</script>