import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2019');
  const selectedExpenseYear = (slectedyear) => {
    setFilteredYear(slectedyear);
  };
  const filteredExp = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          defaultSelect={filteredYear}
          onChangeFilfer={selectedExpenseYear}
        />
        <ExpensesChart expenses={filteredExp} />
        <ExpensesList items={filteredExp} />
      </Card>
    </div>
  );
}

export default Expenses;
