<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    party: {
      type: Object,
      required: true,
    },
  },
  data: () => ({ name: '', show: false }),
  mounted() {
    this.name = this.party.name
  },
  methods: {
    ...mapMutations('barrack', ['RENAME_PARTY']),
    onSave($event) {
      $event.preventDefault()
      $event.stopPropagation()
      this.RENAME_PARTY({ id: this.party.id, name: this.name })
      this.show = false
    },
  },
}
</script>

<template>
  <v-dialog v-model="show">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">Rename</v-btn>
    </template>
    <v-card>
      <v-card-title>Rename party</v-card-title>
      <v-container>
        <v-row>
          <v-col>
            <v-form @submit="onSave">
              <v-text-field v-model="name" max-length="10"></v-text-field>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="onSave">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
