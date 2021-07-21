<script>
import Layout from '@layouts/main.vue'
import Dungeon from '@components/dungeon.vue'
import { mapGetters } from 'vuex'

export default {
  page() {
    return {
      title: 'Dungeons',
      meta: [
        {
          name: 'description',
          content: `The tavern where all the adventurers stay.`,
        },
      ],
    }
  },
  components: { Layout, Dungeon },
  computed: {
    ...mapGetters('dungeons', ['availableDungeons']),
  },
}
</script>

<template>
  <Layout>
    <v-row class="align-self-start">
      <v-col v-for="item of availableDungeons" :key="item.id" cols="12">
        <Dungeon :dungeon="item" />
      </v-col>
    </v-row>
  </Layout>
</template>
