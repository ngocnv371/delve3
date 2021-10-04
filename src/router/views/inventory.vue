<script>
import Layout from '@layouts/main.vue'
import { mapGetters } from 'vuex'

export default {
  page() {
    return {
      title: 'Inventory',
      meta: [
        {
          name: 'description',
          content: `Where all your loots are stocked.`,
        },
      ],
    }
  },
  components: { Layout },
  computed: {
    ...mapGetters('inventory', ['items']),
  },
}
</script>

<template>
  <Layout>
    <v-row class="pa-0 align-self-start">
      <v-list>
        <v-list-item v-for="item of items" :key="item.id">
          <v-list-item-content>
            <v-list-item-title
              v-text="`${item.name} L${item.level}`"
            ></v-list-item-title>
            <v-list-item-subtitle
              v-text="item.description"
            ></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            {{ item.quantity }}
          </v-list-item-action>
        </v-list-item>
        <v-list-item v-if="!items.length">
          <v-list-item-title>
            The inventory is empty
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-row>
  </Layout>
</template>
