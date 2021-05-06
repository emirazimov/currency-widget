import _ from 'lodash'

export default {
  data() {
    return {
      page: 1,
      pageSize: 4,
      pageCount: 0,
      allItems: [],
      items: [],
    }
  },
  methods: {
    pageChangeHandler(page) {
      this.items = this.allItems[page - 1] || this.allItems[0]
    },
    setupPagination(arr) {
      this.allItems = _.chunk(arr, this.pageSize)
      this.pageCount = _.size(this.allItems)
      this.items = this.allItems[this.page - 1] || this.allItems[0]
      console.log(this.items)
    },
  },
}
