import React, { Fragment } from 'react';
import { TableContainer, TableFlexContainer, TableFlexRow, TableHeader, TableRow } from './Table.styles';
import { ITableProps } from './Table.types';

const Table = ({ data }: ITableProps): React.ReactElement => {
  const { header, rows, align } = data;
  return (
    <Fragment>
      {align === 'horizontal' ? (
        <TableContainer>
          <TableHeader>
            {header.map((item, index) => (
              <div key={`${item.title}_${index}`} style={{ width: item.width }}>
                {item.title}
              </div>
            ))}
          </TableHeader>
          {rows.map((item) => (
            <TableRow key={item.id}>
              {Object.entries(item).map(([key, value]) => {
                if (key === 'id') return null;
                return <div key={key}>{value}</div>;
              })}
            </TableRow>
          ))}
        </TableContainer>
      ) : (
        <TableFlexContainer>
          {rows.map((item, index) => (
            <TableFlexRow key={item.id}>
              {Object.entries(item).map(([key, value]) => {
                if (key === 'id') return null;
                return (
                  <Fragment key={key}>
                    <div style={{ width: header[index].width }}>{header[index].title}</div>
                    <div>{typeof value === 'function' ? value() : value}</div>
                  </Fragment>
                );
              })}
            </TableFlexRow>
          ))}
        </TableFlexContainer>
      )}
    </Fragment>
  );
};

export default Table;
