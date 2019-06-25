<template>
  <div v-if="currentQuestion" class="o-vertical-fill tile is-vertical is-ancestor">
    <div class="o-vertical-fill__item o-vertical-fill__item--fixed tile is-parent">
      <div class="is-child tile box">
        <div class="has-text-centered">
          <h1 class="title">Currently won: <strong>{{ cashAmount | cash }}</strong></h1>
          <h2 class="subtitle">Round {{ currentRound }} of {{ maxRound }}</h2>
        </div>
      </div>
    </div>

    <div class="o-vertical-fill__item tile">
      <div class="tile is-parent is-9">
        <div class="is-child tile">
          <div class="box">
            <game :question="currentQuestion" @choose-answer="onChosenAnswer"/>
          </div>
        </div>
      </div>

      <div class="tile is-parent">
        <div class="is-child tile box">
          <rewards-bar :rewards="rewardsCurrent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Game from './Game'
  import RewardsBar from './RewardsBar'
  import { DIFFICULTY_LEVELS, REWARDS } from '../common/const'
  import { getQuestions } from '../common/api'

  export default {
    name: 'PlayView',

    components: {
      Game,
      RewardsBar
    },

    data () {
      return {
        currentRound: 1,
        questions: [],
        rewards: REWARDS
      }
    },

    created () {
      getQuestions(15, DIFFICULTY_LEVELS.EASY)
      .then((questions) => {
        console.log(questions)
        this.questions = questions
      })
    },

    computed: {
      cashAmount () {
        return this.currentRound > 0
          ? REWARDS[this.currentRound - 1]
          : 0
      },
      currentQuestion () {
        return this.questionsWithRewards[this.currentRound]
      },
      maxRound () {
        return this.questions.length
      },
      questionsWithRewards () {
        return this.questions.map((question, index) => ({
          ...question,
          reward: REWARDS[index],
          isGained: index < this.currentRound
        }))
      },
      rewardsCurrent () {
        return this.rewards.slice().reverse()
      }
    },

    filters: {
      cash (value) {
        return `$ ${value}`
      }
    },

    methods: {
      onChosenAnswer (isValidAnswer) {
        if (isValidAnswer) {
          if (this.currentRound + 1 === this.maxRound) {
            this.currentRound++
            this.$router.push({name: 'won'})
          } else {
            this.currentRound++
          }
        } else {
          this.$router.push({name: 'lost'})
        }
      }
    }
  }
</script>

<style lang="scss">

  // styles for animations

  .flip-enter-active, .flip-leave-active {
    transition: all 0.5s linear;
  }
  .flip-enter, .flip-leave-to {
    transform: rotateY(90deg) scale(0.5, 1);
  }
</style>
