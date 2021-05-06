<template>
  <div id="app">
    <Currency
      :tabs="['USD', 'RUB', 'HRK', 'NOK', 'JPY', 'EUR', 'CAD']"
      :selected="selected"
      @selected="setSelected"
      :arrRates="arrRates"
    >
      <EachTab :isSelected="selected === 'USD'"> {{ currency }}</EachTab>
      <EachTab :isSelected="selected === 'RUB'"> <h1>setting</h1> </EachTab>
      <EachTab :isSelected="selected === 'HRK'">profile </EachTab>
      <EachTab :isSelected="selected === 'NOK'">profile </EachTab>
      <EachTab :isSelected="selected === 'JPY'">profile </EachTab>
      <EachTab
        :isSelected="selected === 'EUR'"
        :base="this.base"
        :arrRates="arrRates"
        :date="this.date"
      >
      </EachTab>
      <EachTab :isSelected="selected === 'CAD'">profile </EachTab>
    </Currency>
  </div>
</template>

<script>
  import Currency from './components/Currency'
  import EachTab from './components/EachTab'
  import paginationMixin from '@/mixins/pagination.mixin'

  export default {
    mixins: [paginationMixin],
    name: 'App',

    data() {
      return {
        currency: {},
        selected: 'home',
        base: '',
        arrRates: [],
        date: '',
      }
    },
    methods: {
      setSelected(tab) {
        this.selected = tab
      },
      convertToArr(obj) {
        let rates = Object.entries(obj.rates)
        this.arrRates = [...rates]
      },
      setBase(obj) {
        obj.base = this.base
        console.log(this.base)
      },
      setDate(obj) {
        obj.date = this.date
      },
    },
    mounted() {
      fetch('https://api.openrates.io/latest')
        .then((response) => response.json())
        .then((json) => {
          this.currency = json
          this.base = json.base
          this.date = json.date
          this.arrRates = Object.entries(json.rates)
          let resArr = [...this.arrRates]
          this.setupPagination(resArr)
        })
    },

    components: {
      Currency,
      EachTab,
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
