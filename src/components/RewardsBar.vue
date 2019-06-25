<template>
  <div class="c-question-list">
    <div class="columns is-multiline" v-for="reward in rewards">
      <div class="column is-12">
        <div
          class="c-question-list__item button is-fullwidth"
          :class="{'is-success': reward.isGained}"
        >
          <span>$ {{ reward }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      rewards: Array
    }
  }
</script>

<style lang="scss">
  .c-question-list {
    &__item {
      color: hsl(48,  100%, 67%);
    }

    .is-success {
      color: #fff;
      background: lawngreen;
    }
  }
</style>
