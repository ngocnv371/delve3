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
  data: () => ({ showRenameDialog: false }),
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
    <v-toolbar dense flat>
      <v-toolbar-title v-text="party.name"></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu bottom left :close-on-click="true">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>ellipsis-v</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="showRenameDialog = true">
            <v-list-item-title>Rename</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Disband</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-list>
      <member-picker
        v-for="(item, index) of party.members"
        :key="index"
        :value="item"
        @update="onUpdate(index, $event)"
      />
    </v-list>
    <RenamePartyDialog v-model="showRenameDialog" :party="party">
    </RenamePartyDialog>
  </v-card>
</template>
