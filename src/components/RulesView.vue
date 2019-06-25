<template>
  <div class="box has-text-centered">
    <h1 class="title">Rules</h1>
    <section>
      Answer questions until you win! There will be <strong>{{ questionsCount }}</strong> questions.
      Currently selected difficulty is <strong>Difficulty</strong>.
    </section>
    <hr>
    <div class="columns">
      <div class="column">
        <router-link class="button is-fullwidth" :to="{name: 'play'}">
          Start game
        </router-link>
      </div>
      <div class="column">
        <router-link class="button is-fullwidth" :to="{name: 'settings'}">
          Settings
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { REWARDS } from '../common/const'

  export default {
    data () {
      return {
        questionsCount: REWARDS.length
      }
    }
  }
</script>
