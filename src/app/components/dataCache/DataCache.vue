<script>
export default {
  name: 'dataCache',
  data() {
    return {
      cache: []
    };
  },
  methods: {
    getCache: function () {
      return this.cache
    },
    refreshCache: function() {
      this.cache = []
      this.$emit('cacherefreshed')
      return this.cache
    }
  }
};
</script>
