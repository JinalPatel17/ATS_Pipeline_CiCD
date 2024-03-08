import React from 'react';

const InvoiceList = ({ invoices }) => (
  <ul>
    {invoices.map(invoice => (
      <li key={invoice.id}>
        {invoice.customer}: ${invoice.amount}
      </li>
    ))}
  </ul>
);

export default InvoiceList;
