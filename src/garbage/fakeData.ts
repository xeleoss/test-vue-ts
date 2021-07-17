import {IData, IHeading} from '@/components/Table/types';

const tableData: IData[] = [];

for (let id = 0; id < 300; id++) {
  const fio = Math.random().toString(36).substring(7);
  const post = Math.random().toString(36).substring(7);
  const department = Math.random().toString(36).substring(7);
  tableData.push({
    id,
    fio,
    post,
    department,
  });
}

const tableHeadings: IHeading[] = [
  {
    title: 'ID',
    propKey: 'id',
  },
  {
    title: 'ФИО',
    propKey: 'fio',
  },
  {
    title: 'Отдел',
    propKey: 'department',
  },
  {
    title: 'Должность',
    propKey: 'post',
  },
];

export default {
  tableData,
  tableHeadings
};
