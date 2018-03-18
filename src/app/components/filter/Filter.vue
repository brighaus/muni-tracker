<template>
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  name: 'filter',
  data() {
    return {
      text: 'Displays a list of filter options. Emits an event with a list of selected filter choices.'
    };
  }
};
</script>
