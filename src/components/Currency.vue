<template>
  <div class="main_block">
    <p class="my-tab__title">Курс на EUR 2020.01.19</p>
    <ul class="nav nav-tabs my-tab">
      <li v-for="tab in tabs" :key="tab" class="nav-item">
        <a
          class="nav-link my-tab__link"
          :class="{ active: tab === selected }"
          @click="setSelected(tab)"
        >
          {{ tab }}
        </a>
      </li>
    </ul>
    <div class="main_block__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import paginationMixin from '@/mixins/pagination.mixin'
  export default {
    mixins: [paginationMixin],
    props: {
      tabs: {
        type: Array,
        required: true,
      },
      selected: {
        type: String,
        required: true,
      },
      arrRates: {
        type: Array,
      },
      // currency: {
      //   type: Array,
      //   required: true,
      // },
    },
    methods: {
      setSelected(tab) {
        this.$emit('selected', tab)
      },
    },
    // created() {
    //   let resArr = [...this.arrRates]
    //   this.setupPagination(resArr.map((el) => el))
    // },
    // mounted() {
    //   fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then((response) => {
    //       response.json()
    //     })
    //     .then((json) => {
    //       this.currency = json
    //       console.log(json)
    //     })
    // },
  }
</script>

<style scoped>
  .main_block {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #ffe782;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  }
  .my-tab {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .main_block__content {
    background: white;
  }
  .my-tab__link {
    color: #ccae68;
    cursor: pointer;
  }
  .my-tab__link {
    color: #ccae68;
    cursor: pointer;
  }
  .my-tab__title {
    margin-top: 40px;
    margin-left: 20px;
  }
  .nav-item {
    margin-left: 40px;
    border-radius: 20%;
  }
  .nav-item:hover {
    background: #efefef;
    opacity: 0.3;
  }
</style>
