// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {getbalance, getincome, expensive} = props

  return (
    <div className="moneydetaile_container">
      <div className="Balance_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balanceimage"
        />
        <div>
          <p className="your_Balance_paragraph">Your Balance</p>
          <p data-testid="balanceAmount">Rs {getbalance}</p>
        </div>
      </div>

      <div className="income_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balanceimage"
        />
        <div>
          <p className="your_Balance_paragraph">Your Income</p>
          <p data-testid="incomeAmount">Rs {getincome}</p>
        </div>
      </div>

      <div className="expense_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balanceimage"
        />
        <div>
          <p className="your_Balance_paragraph">Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expensive}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
