<template>
  <p>{{ message }}</p>
</template>

<script>
export default{
  data: () => {
    console.log('Hello World!');
    return {
      message : 'Hey, This is Vue!',
    };
  },
};
</script>

<style scoped>
p {
  color: blue;
}
</style>