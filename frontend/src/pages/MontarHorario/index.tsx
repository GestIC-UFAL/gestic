import * as React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import { Page } from '../../components/Page';

const teste = [
  {
    id: '6b475edd-4b23-4e59-b2fc-3a3db2ff66a2',
    offerId: '16d4ecd9-4441-4998-9788-d81f7e613df7',
    weekday: 'thu',
    start_time: '07:00',
    end_time: '08:00',
    createdAt: '2021-09-01T11:58:43.923Z',
    updatedAt: '2021-09-07T00:55:53.983Z',
    offer_id: '16d4ecd9-4441-4998-9788-d81f7e613df7',
  },
  {
    id: '6b475edd-4b23-4e59-b2fc-3a3db2ff66a2',
    offerId: '16d4ecd9-4441-4998-9788-d81f7e613df7',
    weekday: 'mon',
    start_time: '07:30',
    end_time: '08:30',
    createdAt: '2021-09-01T11:58:43.923Z',
    updatedAt: '2021-09-07T00:55:53.983Z',
    offer_id: '16d4ecd9-4441-4998-9788-d81f7e613df7',
  },
  {
    id: '6b475edd-4b23-4e59-b2fc-3a3db2ff66a2',
    offerId: '16d4ecd9-4441-4998-9788-d81f7e613df7',
    weekday: 'mon',
    start_time: '08:30',
    end_time: '09:20',
    createdAt: '2021-09-01T11:58:43.923Z',
    updatedAt: '2021-09-07T00:55:53.983Z',
    offer_id: '16d4ecd9-4441-4998-9788-d81f7e613df7',
  },
];

let times: string[] = [];
teste.forEach(element => {
  times.push(element.start_time);
  times.push(element.end_time);
});
function uniq(a: string[]) {
  return a.sort().filter(function diff(item, pos, ary) {
    return !pos || item !== ary[pos - 1];
  });
}
times = uniq(times);

const table = Array(times.length)
  .fill(null)
  .map(_ => ['', '', '', '', '']);

teste.forEach(el => {
  const week = ['mon', 'tue', 'wed', 'thu', 'fri'].findIndex(w => w === el.weekday);
  const start = times.findIndex(t => t === el.start_time);
  const end = times.findIndex(t => t === el.end_time);

  for (let index = start; index <= end; index += 1) {
    if (table[index][week] !== '') table[index][week] += '/';
    table[index][week] += 'CCOM';
  }
});

console.log(table);
const MontarHorario = () => {
  return (
    <Page>
      <Table variant="simple">
        <TableCaption>Horário de disciplinas</TableCaption>
        <Thead>
          <Tr>
            <Th />
            <Th>Segunda</Th>
            <Th>Terça</Th>
            <Th>Quarta</Th>
            <Th>Quinta</Th>
            <Th>Sexta</Th>
          </Tr>
        </Thead>
        <Tbody>
          {table.map((row, idx) => {
            return (
              <Tr key={idx}>
                <Td>{times[idx]}</Td>
                {row.map((col, idx) => {
                  return <Td key={idx}>{col}</Td>;
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Page>
  );
};

export default MontarHorario;
