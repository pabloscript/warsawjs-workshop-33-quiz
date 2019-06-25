import Router from 'vue-router'
import Vue from 'vue'
import IntroView from './components/IntroView'
import RulesView from './components/RulesView'
import PlayView from './components/PlayView'
import SettingsView from './components/SettingsView'
import LostView from './components/LostView'
import WonView from './components/WonView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IntroView,
      name: 'intro'
    },
    {
      path: '/rules',
      component: RulesView,
      name: 'rules'
    },
    {
      path: '/play',
      component: PlayView,
      name: 'play'
    },
    {
      path: '/settings',
      component: SettingsView,
      name: 'settings'
    },
    {
      path: '/lost',
      component: LostView,
      name: 'lost'
    },
    {
      path: '/settings',
      component: WonView,
      name: 'won'
    }
  ]
})
