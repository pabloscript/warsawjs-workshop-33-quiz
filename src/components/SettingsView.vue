<template>
  <div class="box">
    <h1 class="title has-text-centered">Settings</h1>
    <div class="field">
      <label class="label">Difficulty</label>
      <div class="control">
        <difficulty-slider :difficulty-levels="difficultyLevels" />
      </div>
    </div>
    <div class="field">
      <label class="label">Number of questions</label>
      <div class="control">
        <input class="input" type="number" min="10" max="15">
      </div>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-primary">
          Save
        </button>
      </p>
    </div>
  </div>
</template>

<script>
  import DifficultySlider from './DifficultySlider'
  import { DIFFICULTY_LEVELS } from '../common/const'

  export default {
    components: {
      DifficultySlider
    },

    data () {
      return {
        difficultyLevels: DIFFICULTY_LEVELS
      }
    }
  }
</script>

