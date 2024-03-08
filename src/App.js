import React from 'react';
import InvoiceList from './components/InvoiceList';

class App extends React.Component {
  state = { invoices: [] };

  componentDidMount() {
    // Fetch invoices from your API here. This is just dummy data.
    const invoices = [
      { id: 1, customer: 'Customer A', amount: 100 },
      { id: 2, customer: 'Customer B', amount: 200 },
    ];

    this.setState({ invoices });
  }

  render() {
    return (
      <div className="App">
        <h1>Invoice List</h1>
        <InvoiceList invoices={this.state.invoices} />
      </div>
    );
  }
}
export default App;
