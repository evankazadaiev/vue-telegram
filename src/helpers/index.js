export default (function () {
  return {
    randomDate (start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    },
    getRandomId () {
      return [...Array(10)].map(i => (~~(Math.random() * 36)).toString(36)).join('')
    }
  }
})()
