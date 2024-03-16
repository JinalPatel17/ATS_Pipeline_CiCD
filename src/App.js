import React from 'react';
import InvoiceList from './components/InvoiceList';

class App extends React.Component {
  state = { invoices: [] };

  componentDidMount() {
    // Fetch invoices from your API here. This is just dummy data.
    const invoices = [
   //   { id: 1, customer: 'Customer A', amount: 100 },
     // { id: 2, customer: 'Customer B', amount: 200 },
    ];
//<h1>Invoice List</h1>

    this.setState({ invoices });
  }

  render() {
    return (
      <div className="App">
        
        <InvoiceList invoices={this.state.invoices} />
        <h2>Hello Welcome to AutomaticInvoiceSystem</h2>
      </div>
    );
  }
}
export default App;
