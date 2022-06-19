import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
function NewExpense(props) {
  const [addNew, setAddNew] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };
  const openTheForm = () => {
    setAddNew(true);
  };
  const cancelTheForm = () => {
    setAddNew(false);
  };
  return (
    <div className='new-expense'>
      {!addNew && <button onClick={openTheForm}>Add New Expense</button>}
      {addNew && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={cancelTheForm}
        />
      )}
    </div>
  );
}

export default NewExpense;
