<script>
import { mapMutations } from 'vuex'
import ForwardModel from '@src/mixins/forward-model'

export default {
  mixins: [ForwardModel],
  props: {
    party: {
      type: Object,
      required: true,
    },
  },
  data: () => ({ name: '' }),

  mounted() {
    this.name = this.party.name
  },
  methods: {
    ...mapMutations('barrack', ['RENAME_PARTY']),
    onSave($event) {
      $event.preventDefault()
      $event.stopPropagation()
      this.RENAME_PARTY({ id: this.party.id, name: this.name })
      this.localValue = false
    },
  },
}
</script>

<template>
  <v-dialog v-model="localValue">
    <v-card>
      <v-card-title>Rename party</v-card-title>
      <v-container>
        <v-row>
          <v-col>
            <v-form @submit="onSave">
              <v-text-field
                v-model="name"
                autofocus
                max-length="10"
              ></v-text-field>
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
