import Vue from "vue";

export default () => {
   Vue.filter('formatDate', function (value) {
      if (!value) return ''
      return value.substring(0, 10)
   })
}
