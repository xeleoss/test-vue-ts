<template>
  <div class="hello">
    <table>
      <thead>
        <tr>
          <td>
            <input
              type="checkbox"
              v-bind:checked="isSelectAll"
              v-bind:onclick="onSelectAll"
            />
          </td>
          <td
            v-bind:key="heading.propKey"
            v-for="heading in headings"
            v-bind:onclick="(e) => onSortByKey(heading.propKey)"
          >
            <span>{{ heading.title }}</span>
            <span v-if="sort.propKey === heading.propKey">{{
              sort.direction === "ask" ? "↑" : "↓"
            }}</span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="d.id" v-for="d in data">
          <td>
            <input
              type="checkbox"
              v-bind:checked="selected[d[dataKey]]"
              v-bind:onclick="() => onSelect(d)"
            />
          </td>
          <td v-bind:key="heading.propKey" v-for="heading in headings">
            {{ d[heading.propKey] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IData, IHeading, ISort } from "@/components/Table/types";

interface State {
  sort: ISort;
  selected: { [key: string]: boolean };
}

export default defineComponent({
  name: "Table",
  methods: {
    onSortByKey(propKey: keyof IData) {
      if (propKey !== this.sort.propKey) {
        this.sort.direction = undefined;
      }

      this.sort = {
        propKey,
        direction: this.sort.direction === "desk" ? "ask" : "desk",
      };
      this.onSort(this.sort);
    },
    onSelect(v: IData) {
      this.selected[v[this.dataKey]] = !this.selected[v[this.dataKey]];
      if (this.onSelectChange) {
        this.onSelectChange(this.selected);
      }
    },
    onSelectAll() {
      const value = !this.isSelectAll;
      this.data.forEach((x) => {
        this.selected[x[this.dataKey]] = value;
      });
      if (this.onSelectChange) {
        this.onSelectChange(this.selected);
      }
    },
  },
  props: {
    data: {
      type: Array as PropType<IData[]>,
      required: true,
    },
    headings: {
      type: Array as PropType<IHeading[]>,
      required: true,
    },
    onSort: {
      type: Function as PropType<(sort: ISort) => void>,
      required: true,
    },
    dataKey: {
      type: String as PropType<keyof IData>,
      required: true,
    },
    onSelectChange: {
      type: Function as PropType<
        (selected: { [key: string]: boolean }) => void
      >,
    },
  },
  data() {
    const state: State = {
      sort: {},
      selected: {},
    };

    return state;
  },
  computed: {
    isSelectAll(): boolean {
      return !this.data.find((x) => !this.selected[x[this.dataKey]]);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  thead {
    tr {
      td {
        padding: 10px;
        cursor: pointer;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        font-family: "Arial", "Calibri Light";
        user-select: none;
      }

      background-color: aliceblue;
    }
  }

  tbody {
    tr {
      td {
        padding: 5px;
        cursor: pointer;
        text-align: center;
        font-family: "Arial", "Calibri Light";
      }

      background-color: azure;
    }
  }
}
</style>
