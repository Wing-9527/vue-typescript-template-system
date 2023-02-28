<!-- <template>
  <div>

  </div>
</template> -->

<script lang="ts">
  import { h } from 'vue'
  export default {
    setup() {

    },
    render() {
      return h(
        'div',
        {
          class: 'hello'
        }
      )
    }
  }
</script>

<style scoped lang="scss">
  .hello {
    width: 100px;
    height: 100px;
    background-color: gray;
  }
</style>