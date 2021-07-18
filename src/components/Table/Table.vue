<template>
  <div class="hello">
    <label>
      Поиск:
      <input v-model="searchText">
    </label>
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
          <span v-if="sort.propKey === heading.propKey">
            {{
              sort.direction === 'ask' ? '↑' : '↓'
            }}
          </span>
        </td>
      </tr>
      </thead>
      <tbody>
      <tr v-bind:key="value.id" v-for="value in valuesFromSearch">
        <td>
          <input
              type="checkbox"
              v-bind:checked="selected[value[valueKey]]"
              v-bind:onclick="() => onSelect(value)"
          />
        </td>
        <td v-bind:key="heading.propKey" v-for="heading in headings">
          {{ value[heading.propKey] }}
        </td>
      </tr>
      </tbody>
    </table>
    <div>
      Показано {{ valuesFromSearch.length }} из {{ values.length }} записей
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IData, IHeading, ISort} from '@/components/Table/types';

export default defineComponent({
  name: 'Table',
  methods: {
    onSortByKey(propKey: keyof IData) {
      if (propKey !== this.sort.propKey) {
        this.sort.direction = undefined;
      }

      this.sort = {
        propKey,
        direction: this.sort.direction === 'desk' ? 'ask' : 'desk',
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
      type: String as PropType<keyof IData>,
      required: true,
    },
    onSelectChange: {
      type: Function as PropType<(selected: { [key: string]: boolean }) => void>,
    },
  },
  data: () => ({
    sort: {} as ISort,
    selected: {} as { [key: string]: boolean },
    searchText: '' as string,
  }),
  computed: {
    isSelectAll(): boolean {
      return !this.valuesFromSearch.find((x) => !this.selected[x[this.valueKey]]);
    },
    valuesFromSearch(): IData[] {
      const searchText = this.searchText;
      if (searchText.length === 0) {
        return this.values;
      }


      console.log(this.values);
      return this.values.filter(
          (value: IData) => {
            if (!value) {
              return false;
            }

            return Object.keys(value)
                .find((key) => {
                  return value[key as keyof IData].toString().includes(searchText);
                });
          }
      );
    }
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
      }

      background-color: azure;
    }
  }
}
</style>
