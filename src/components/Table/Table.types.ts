import React from 'react';

export interface ITable {
  header: ITableHeader[];
  rows: ITableRow[];
  align: 'vertical' | 'horizontal';
}
interface ITableRow {
  id: number;
  [key: string]: any;
}

interface ITableHeader {
  title: string;
  width?: string;
}

export interface ITableProps {
  data: ITable;
}
