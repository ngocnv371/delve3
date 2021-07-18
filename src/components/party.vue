<script>
import { mapMutations } from 'vuex'
import RenamePartyDialog from './rename-party-dialog.vue'
import memberPicker from './unassigned-member-picker.vue'

export default {
  components: { memberPicker, RenamePartyDialog },
  props: {
    party: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations('barrack', ['ASSIGN_MEMBER_TO_PARTY']),
    onUpdate(index, $event) {
      this.ASSIGN_MEMBER_TO_PARTY({ party: this.party, index, member: $event })
    },
  },
}
</script>

<template>
  <v-card class="party">
    <v-card-title v-text="party.name" />
    <v-list>
      <member-picker
        v-for="(item, index) of party.members"
        :key="index"
        :value="item"
        @update="onUpdate(index, $event)"
      />
    </v-list>
    <v-card-actions>
      <v-spacer></v-spacer>
      <RenamePartyDialog :party="party"></RenamePartyDialog>
    </v-card-actions>
  </v-card>
</template>
