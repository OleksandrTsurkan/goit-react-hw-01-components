//import PropTypes from 'prop-types';

import { Table, Tbody, Td, Thead, Tr } from "./TransactionHistorystyled";

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Td>Type</Td>
          <Td>Amount</Td>
          <Td>Currency</Td>
        </Tr>
      </Thead>
      <Tbody>
        {items.map(item => {
          return (
            <Tr>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
