<template>
  <div v-if="isSelected">
    <slot>
      <div class="main-block">
        <div class="main-block__main-toolbar">
          <time datetime="" class="main-block__date">{{ date }}</time>

          <div class="toolbarInput">
            <p class="toolbarInput__text">
              {{ base }}
            </p>

            <div class="toolbarInput__input">
              <input
                type="number"
                v-model="multiply"
                @keyup.enter="onSubmit"
                class="inputBlock"
              />
            </div>
          </div>
        </div>

        <div class="first-block" v-for="item in pageOfItems" :key="item.id">
          <div class="first-block__first-card1">
            <div class="first-block__first-card">
              <span class="currencyNum">{{ item[1] }}</span>
              <span class="currencyText">{{ item[0] }}</span>
            </div>
          </div>
        </div>
        <div class="pagination-block">
          <jw-pagination
            :maxPages="20"
            :pageSize="4"
            :items="this.arrRates"
            :styles="customStyles"
            :labels="customLabels"
            :disableDefaultStyles="true"
            @changePage="onChangePage"
            class="pagination-block2"
          ></jw-pagination>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
  import paginationMixin from '@/mixins/pagination.mixin'

  const customLabels = {
    first: 'Первая стр.',
    last: 'Последняя стр.',
    next: 'Далее >',
    previous: '< Назад',
  }

  const customStyles = {
    ul: {},
    li: {
      maxWidth: '100%',
      backround: 'grey',
    },
    // first: {
    //   display: 'none',
    // },
    // last: {
    //   display: 'none',
    // },
    a: {
      textAlign: 'center',
      color: '#2B2D33',
      cursor: 'pointer',
    },
  }

  export default {
    mixins: [paginationMixin],
    data() {
      return {
        pageOfItems: [],
        multiply: 0,
        multipliedItems: [],
        customLabels,
        customStyles,
      }
    },
    props: {
      isSelected: {
        type: Boolean,
        required: true,
      },
      arrRates: {
        type: Array,
      },
      base: {
        type: String,
      },
      date: {
        type: String,
      },
    },
    methods: {
      onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems
      },
      onSubmit() {
        let forMulti = [...this.arrRates]
        if (this.multiply == 0) {
          this.arrRates.map((el) => {
            let res = [...el]
            return res[1]
          })
        } else {
          forMulti.map((el) => {
            let res = [...el]
            let forMulti = res[1]

            if (this.multiply == 1) {
              return el
            } else {
              let forMultiNum = this.multiply
              let multiplied = forMulti * forMultiNum
              el[1] = multiplied.toFixed(2)
              this.$forceUpdate()
            }
          })
        }
      },
    },
  }
</script>

<style>
  .main-block {
    width: 100%;
    height: 100%;
  }
  .setupPagination {
    display: none;
  }
  .first-block {
    display: inline-block;
    margin-bottom: 20px;
  }
  .first-block__first-card1 {
    display: inline-block;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 327px;
    height: 137px;
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16);
    border-radius: 12px;
  }
  .first-block__first-card {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 60px;
    margin-left: 30px;
  }
  .currencyNum {
    size: 100%;
    font-size: 48px;
    font-weight: 300px;
  }
  .currencyText {
    font-size: 24px;
    font-weight: 300px;
    margin-bottom: 10px;
    margin-left: 13px;
  }
  .inputBlock {
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
    width: 60px;
    margin-right: 15px;
  }
  .main-block__main-toolbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
  }
  .main-block__date {
    margin-left: 33px;
  }
  .toolbarInput {
    display: flex;
    flex-direction: row;
    margin-right: 30px;
  }
  .toolbarInput__input {
    order: 1;
  }
  .toolbarInput__text {
    order: 2;
  }
  .pagination-block {
    margin-top: 100px;
    margin-left: 800px;
  }
  @media (max-width: 1315px) {
    .pagination-block {
      margin-top: 100px;
      margin-left: 550px;
    }
  }
  @media (max-width: 1183px) {
    .pagination-block {
      margin-top: 100px;
      margin-left: 390px;
    }
  }
  @media (max-width: 839px) {
    .pagination-block {
      margin-top: 100px;
      margin-left: 270px;
    }
  }
  @media (max-width: 635px) {
    .pagination-block {
      margin-top: 100px;
      margin-left: 100px;
    }
  }
  @media (max-width: 500px) {
    .pagination-block2 {
      width: 200px;
    }
  }
  .pagination li.page-number {
    display: none;
  }
  .pagination li.first {
    display: none;
  }
  .pagination li.last {
    display: none;
  }
</style>
