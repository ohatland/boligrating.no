<template>
  <div>
    <ul>
    <li v-for="res in result" :key="res.adressetekst">
      <p>{{res.adressetekst}}</p>
      <p>{{res.kommunenavn}}</p>
    </li>
  </ul>
  </div>
</template>

<script>

export default {
  props: {
    result: Array
  }
};
</script>

<style>
</style>