import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('capitalize', function (value) {
  return value.toUpperCase()
})

Vue.filter('currency', function (value, prefix) {
  if (!prefix) prefix = '$'
  if (value === null) return value
  return numeral(value).format(`${prefix}0,0.00`)
})

Vue.filter('percentage', function (value) {
  return value + '%'
})