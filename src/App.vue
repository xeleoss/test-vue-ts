<template>
  <Table
    v-bind:headings="headings"
    v-bind:data="data"
    v-bind:on-sort="onSort"
    v-bind:on-select-change="onSelectedChange"
    data-key="id"
  />
  <div>
    <h3>Выбранные записи</h3>
    <li>
      <ol v-bind:key="selectedKey" v-for="selectedKey in selectedKeys">
        {{
          dataForKeys[selectedKey].fio
        }}
      </ol>
    </li>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Table from "./components/Table/Table.vue";
import { IData, IHeading, ISort } from "@/components/Table/types";

@Options({
  components: {
    Table,
  },
  methods: {
    onSort(sort: ISort) {
      if (!sort || !sort.propKey) {
        return;
      }

      function compare(a: any, b: any) {
        if (a[sort.propKey!] < b[sort.propKey!]) {
          return -1;
        }
        if (a[sort.propKey!] > b[sort.propKey!]) {
          return 1;
        }
        return 0;
      }

      if (sort.direction === "ask") {
        this.data = this.data.sort(compare).reverse();
      } else {
        this.data = this.data.sort(compare);
      }
    },
    onSelectedChange(selected: { [key: string]: boolean }) {
      this.selected = selected;
    },
  },
  data() {
    const headings: IHeading[] = [
      {
        title: "ID",
        propKey: "id",
      },
      {
        title: "ФИО",
        propKey: "fio",
      },
      {
        title: "Отдел",
        propKey: "department",
      },
      {
        title: "Должность",
        propKey: "post",
      },
    ];
    const data: IData[] = [
      {
        id: 1,
        fio: "Фамилия Имя Отчество",
        department: "Бухгалтерия",
        post: "Почтальон",
      },
      {
        id: 2,
        fio: "Большой Брат Булочник",
        department: "Медкабинет",
        post: "Футболист",
      },
      {
        id: 3,
        fio: "Чебурек Палыч Шашлыков",
        department: "Кухня",
        post: "Повар",
      },
    ];
    return {
      headings,
      data,
      selected: {},
    };
  },
  computed: {
    dataForKeys() {
      return this.data.reduce(
        (accumulator: { [key: string]: IData }, currentValue: IData) => {
          accumulator[currentValue.id] = currentValue;
          return accumulator;
        },
        {}
      );
    },
    selectedKeys() {
      return Object.keys(this.selected).filter((x) => this.selected[x]);
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
