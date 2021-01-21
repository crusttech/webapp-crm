<template>
  <b-card
    header-bg-variant="white"
    footer-bg-variant="white"
  >
    <b-form-group
      :label="$t('block.recordList.import.report.title')"
    >
      <div
        class="small pl-2"
      >
        <b>{{ $t('block.recordList.import.report.startedAt') }}</b>: {{ datify(progress.startedAt) }}
      </div>

      <div
        class="small pl-2"
      >
        <b>{{ $t('block.recordList.import.report.finishedAt') }}</b>: {{ datify(progress.finishedAt) }}
      </div>

      <div
        class="small pl-2"
      >
        <b>{{ $t('block.recordList.import.report.totalRecords') }}</b>: {{ progress.entryCount }}
      </div>

      <div
        class="small pl-2"
      >
        <b>{{ $t('block.recordList.import.report.importedRecords') }}</b>: <span class="text-success">{{ progress.completed }}</span>
      </div>

      <div
        class="small pl-2"
      >
        <b>{{ $t('block.recordList.import.report.failedRecords') }}</b>: <span class="text-danger">{{ progress.failed }}</span>
      </div>
    </b-form-group>

    <b-table
      id="error-list"
      hover
      outlined
      fixed
      class="mb-0"
      head-variant="light"
      :items="progress.failLog"
      :fields="fields"
      @row-clicked="item=>$set(item, '_showDetails', !item._showDetails)"
    >
      <template #cell(record)="{ item: l }">
        <span
          class="text-truncate"
        >
          <span
            v-for="(rv, iy) in l.record.values"
            :key="iy"
          >
            <b>{{ rv.name }}</b>: {{ rv.value }}<span v-if="iy < l.record.values.length - 1">, </span>
          </span>
        </span>
      </template>
      <template #cell(error)="{ item: l }">
        <span
          class="text-truncate text-danger"
        >
          {{ l.error.join(', ') }}
        </span>
      </template>
      <template #row-details="{ item: l }">
        <b-card-group class="m-3 mb-4">
          <b-card
            :header="$t('block.recordList.import.report.record')"
            class="small"
          >
            <div
              v-for="(rv, iy) in l.record.values"
              :key="iy"
            >
              <b>{{ rv.name }}</b>: {{ rv.value }}
            </div>
          </b-card>

          <b-card
            :header="$t('block.recordList.import.report.errors')"
            class="small"
          >
            <div
              v-for="(e, ei) in l.error"
              :key="ei"
              class="text-danger"
            >
              {{ e }}
            </div>
          </b-card>
        </b-card-group>
      </template>
    </b-table>

    <div slot="footer">
      <b-button variant="dark"
                class="float-right"
                @click="$emit('reset')">

        {{ $t('general.label.ok') }}
      </b-button>
    </div>
  </b-card>
</template>

<script>

export default {
  props: {
    session: {
      type: Object,
      required: true,
      default: () => ({}),
    },

    noPool: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      expandedLogs: {},
      completedLogs: {},
    }
  },

  computed: {
    progress () {
      return this.session.progress
    },

    fields () {
      return [
        {
          key: 'index',
          label: this.$t('block.recordList.import.report.line'),
          sortable: true,
          class: 'fit',
          tdClass: 'border-top pointer',
        },
        {
          key: 'record',
          label: this.$t('block.recordList.import.report.record'),
          tdClass: 'border-top text-truncate pointer',
        },
        {
          key: 'error',
          label: this.$t('block.recordList.import.report.errors'),
          tdClass: 'border-top text-truncate pointer',
        },
      ]
    },
  },

  methods: {
    datify (dt) {
      return new Date(dt).toLocaleString()
    },

    stringify (r) {
      return r.values.map(v => `${v.name}: ${v.value}`).join(', ')
    },
  },
}
</script>

<style lang="scss">
.progress-label {
  font-size: 15px;
}

.fit {
  white-space: nowrap;
  width: 15%;
}

.pointer {
  cursor: pointer;
}
</style>
