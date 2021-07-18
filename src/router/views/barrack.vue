<script>
import Party from '@components/party.vue'
import UnassignedList from '@components/unassigned-party.vue'
import Layout from '@layouts/main.vue'
import { mapState } from 'vuex'

export default {
  page() {
    return {
      title: 'Barrack',
      meta: [
        {
          name: 'description',
          content: `The barrack where all your troops stay.`,
        },
      ],
    }
  },
  components: { Layout, Party, UnassignedList },
  computed: {
    ...mapState('barrack', ['parties', 'unassigned']),
  },
}
</script>

<template>
  <Layout class="">
    <v-row class="align-self-start pa-0">
      <v-col v-for="item of parties" :key="item.id" cols="12">
        <Party :party="item"> </Party>
      </v-col>
      <v-col>
        <UnassignedList />
      </v-col>
    </v-row>
  </Layout>
</template>
