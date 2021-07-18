<template>
  <div>
    <label class="search-input">
      Поиск:
      <input v-model="searchText" />
    </label>
    <table>
      <thead>
        <tr>
          <td v-bind:onclick="onSelectAll">
            <input type="checkbox" v-bind:checked="isSelectAll" />
          </td>
          <td
            v-bind:key="heading.name"
            v-for="heading in headings"
            v-bind:onclick="(e) => onSortByKey(heading.name)"
          >
            <span>{{ heading.label }}</span>
            <span v-if="sort.name === heading.name">
              {{ sort.direction === "ask" ? "↑" : "↓" }}
            </span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-bind:key="value[valueKey]"
          v-for="value in valuesFromSearch"
          v-bind:onclick="() => onSelect(value)"
          v-bind:data-selected="getChecked(value)"
        >
          <td>
            <input type="checkbox" v-bind:checked="getChecked(value)" />
          </td>
          <td v-bind:key="heading.name" v-for="heading in headings">
            {{ value[heading.name] }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="total-entries">
      Показано {{ valuesFromSearch.length }} из {{ values.length }} записей
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IData, IHeading, ISort } from "@/components/Table/types";

export default defineComponent({
  name: "Table",
  methods: {
    onSortByKey(propKey: keyof IData) {
      if (propKey !== this.sort.name) {
        this.sort.direction = undefined;
      }

      this.sort = {
        name: propKey,
        direction: this.sort.direction === "desk" ? "ask" : "desk",
      };
      this.onSort(this.sort);
    },
    onSelect(v: IData) {
      this.selected[v[this.valueKey]] = !this.selected[v[this.valueKey]];
      if (this.onSelectChange) {
        this.onSelectChange(this.selected);
      }
    },
    onSelectAll() {
      const value = !this.isSelectAll;
      this.valuesFromSearch.forEach((x) => {
        this.selected[x[this.valueKey]] = value;
      });
      if (this.onSelectChange) {
        this.onSelectChange(this.selected);
      }
    },
    getChecked(value: IData) {
      return this.selected[value[this.valueKey]];
    },
  },
  props: {
    values: {
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
    valueKey: {
      type: String,
      required: true,
    },
    onSelectChange: {
      type: Function as PropType<
        (selected: { [key: string]: boolean }) => void
      >,
    },
  },
  data: () => ({
    sort: {} as ISort,
    selected: {} as { [key: string]: boolean },
    searchText: "" as string,
  }),
  computed: {
    isSelectAll(): boolean {
      return !this.valuesFromSearch.find(
        (x) => !this.selected[x[this.valueKey]]
      );
    },
    valuesFromSearch(): IData[] {
      const searchText = this.searchText.toLowerCase();
      if (searchText.length === 0) {
        return this.values;
      }

      return this.values.filter((value: IData) => {
        if (!value) {
          return false;
        }

        return Object.keys(value).find((key) => {
          const valueKey: any = value[key as keyof IData];
          return valueKey?.toString().toLowerCase().includes(searchText) ?? "";
        });
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  border-spacing: 0;
  border-collapse: collapse;

  thead {
    tr {
      td {
        cursor: pointer;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        user-select: none;
        background-color: #04aa6d;
        color: white;
        padding-top: 11px;
        padding-bottom: 11px;
        width: 1%;
      }

      background-color: aliceblue;
    }
  }

  tbody {
    tr {
      td {
        padding: 8px;
        cursor: pointer;
        text-align: center;
        border: 1px solid #ddd;
      }

      &:nth-child(even) {
        background-color: #f2f2f2;
      }

      &[data-selected="true"] {
        background-color: rgba(167, 199, 255, 0.42);
      }

      &[data-selected="true"]:nth-child(even) {
        background-color: rgba(139, 179, 255, 0.42);
      }

      &:hover {
        background-color: #ddd !important;
      }
    }
  }
}

.total-entries {
  padding: 10px;
  text-align: center;
}

.search-input {
  display: block;
  padding: 10px;

  input {
    font-size: 18px;
  }
}
</style>
