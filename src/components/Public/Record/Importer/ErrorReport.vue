<template>
  <b-card header-bg-variant="white"
          footer-bg-variant="white">

    <h5>
      #Record import error report#
    </h5>
    <ul>
      <li>
        <b>#started at#</b>: {{ datify(progress.startedAt) }}
      </li>
      <li>
        <b>#finished at#</b>: {{ datify(progress.finishedAt) }}
      </li>
      <li>
        <b>#total records#</b>: {{ datify(progress.entryCount) }}
      </li>
      <li>
        <b>#imported records#</b>: {{ progress.completed }}
      </li>
      <li>
        <b>#failed records#</b>: {{ progress.failed }}
      </li>
    </ul>

    <b-table-simple class="w-100" striped>
      <b-thead>
        <b-tr>
          <b-th class="fit">#</b-th>
          <b-th>#Record#</b-th>
          <b-th>#Errors#</b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <b-tr
          v-for="(li, ix) in progress.failLog"
          :key="ix"
          p-0
        >
          <b-td class="fit">
            {{ li.index }}
          </b-td>
          <b-td>
            <ul>
              <li
                v-for="(rv, iy) in li.record.values"
                :key="iy"
              >
                <b>{{ rv.name }}</b>: {{ rv.value }}
              </li>
            </ul>
          </b-td>

          <b-td>
            <ul>
              <li
                v-for="(e, ei) in li.error"
                :key="ei"
              >
                {{ e }}
              </li>
            </ul>

          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

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

<style lang="scss" scoped>
.progress-label {
  font-size: 15px;
}

.table td.fit,
.table th.fit {
  white-space: nowrap;
  width: 1%;
}

</style>
