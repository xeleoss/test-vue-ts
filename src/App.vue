<template>
  <Table
      v-bind:headings="headings"
      v-bind:values="values"
      v-bind:on-sort="onSort"
      v-bind:on-select-change="onSelectedChange"
      value-key="name"

  />
  <div>
    <h3>Выбранные записи</h3>
    <ul>
      <li v-bind:key="selectedKey" v-for="selectedKey in selectedKeys">
        {{
          tableValuesForKeys[selectedKey].name
        }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Table from './components/Table/Table.vue';
import {IData, IHeading, ISort} from '@/components/Table/types';
import fakeData from '@/garbage/fakeData';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    Table,
  },
  data: () => ({
    headings: fakeData.tableHeadings as IHeading[],
    values: fakeData.tableData as IData[],
    selected: {} as { [key: string]: boolean },
    valueKey: 'name',
  }),
  methods: {
    onSort(sort: ISort) {
      if (!sort || !sort.name) {
        return;
      }

      function compare(a: any, b: any) {
        if (a[sort.name!] < b[sort.name!]) {
          return -1;
        }
        if (a[sort.name!] > b[sort.name!]) {
          return 1;
        }
        return 0;
      }

      if (sort.direction === 'ask') {
        this.values = this.values.sort(compare).reverse();
      } else {
        this.values = this.values.sort(compare);
      }
    },
    onSelectedChange(selected: { [key: string]: boolean }) {
      this.selected = selected;
    },
  },
  computed: {
    selectedKeys(): string[] {
      return Object.keys(this.selected).filter((x) => this.selected[x]);
    },
    tableValuesForKeys(): { [key: string]: IData } {
      return this.values.reduce(
          (accumulator: { [key: string]: IData }, currentValue: IData) => {
            accumulator[currentValue[this.valueKey]] = currentValue;
            return accumulator;
          },
          {}
      );
    },
  },
});
</script>

<style lang="scss">
html {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
}
</style>
