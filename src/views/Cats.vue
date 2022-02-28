<template>
  <div>
    <b-table striped hover :items="cats"></b-table>
  </div>
</template>

<script>
// @ is a shortcut to src folder
import cats from "@/data/cats";
export default {
  data() {
    return {
      cats
      //this is a shorthand to 'cats: cats'
    };
  },
};
</script>
