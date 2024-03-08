const express = require('express');
const app = express();
const port = 3000;

app.get('/api/invoices', (req, res) => {
    const invoices = [
        { id: 1, customer: 'Customer A', amount: 100 },
        { id: 2, customer: 'Customer B', amount: 200 },
    ];
    res.json(invoices);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
