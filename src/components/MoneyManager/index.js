import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {historylist: [], title: '', amount: '', type: 'Income'}

  onchangetitle = event => {
    this.setState({title: event.target.value})
  }

  onchangeamount = event => {
    this.setState({amount: event.target.value})
  }

  onchangetype = event => {
    this.setState({type: event.target.value})
  }

  addclick = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const newincome = {
      id: uuidv4(),
      title,
      amount,
      type,
      delete_histroy: false,
    }

    this.setState(prevstate => ({
      historylist: [...prevstate.historylist, newincome],
      title: '',
      amount: '',
      type: 'Income',
    }))
  }

  ondeletechange = id => {
    const {historylist} = this.state
    const filterdata = historylist.filter(each => each.id !== id)
    this.setState({historylist: filterdata})
  }

  getincome = () => {
    const {historylist} = this.state
    let incomeAmount = 0

    historylist.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  expensive = () => {
    const {historylist} = this.state
    let expensesAmount = 0

    historylist.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getbalance = () => {
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    const {historylist} = this.state
    historylist.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {historylist, title, amount, type} = this.state
    const getbalance = this.getbalance()
    const getincome = this.getincome()
    const expensive = this.expensive()

    return (
      <div className="moneymanagercontainer">
        <div className="userwishcontainer">
          <h1 className="username_heading">Hi,Richard</h1>
          <p className="user_wishes">
            Welcome back to your{' '}
            <span className="highlight_wishes">Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          getbalance={getbalance}
          getincome={getincome}
          expensive={expensive}
        />

        <div className="money_add_container">
          <div className="form_container">
            <h1 className="form_heading">Add Transaction</h1>
            <form>
              <label htmlFor="title" className="labeltext">
                Title
              </label>
              <br />
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="userinput"
                onChange={this.onchangetitle}
                value={title}
              />
              <br />
              <label htmlFor="amount" className="labeltext">
                Amount
              </label>
              <br />
              <input
                type="text"
                id="amount"
                placeholder="Amount"
                className="userinput"
                onChange={this.onchangeamount}
                value={amount}
              />
              <br />
              <label htmlFor="type" className="labeltext">
                Type
              </label>
              <br />
              <select
                id="type"
                className="typeamount"
                onChange={this.onchangetype}
              >
                {transactionTypeOptions.map(each => (
                  <option
                    id={each.optionId}
                    key={each.optionId}
                    value={each.optionId}
                  >
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button
                type="button"
                className="addbutton"
                onClick={this.addclick}
              >
                Add
              </button>
            </form>
          </div>

          <div className="histroy_money_container">
            <h1 className="histroy_money_heading">History</h1>
            <div className="histroy_title_amount_type_container">
              <p className="histroy_paragraph">Title</p>
              <p className="histroy_paragraph">Amount</p>
              <p className="histroy_paragraph">Type</p>
            </div>
            <ul>
              {historylist.map(each => (
                <TransactionItem
                  title={each.title}
                  amount={each.amount}
                  type={each.type}
                  historylist={each}
                  key={each.id}
                  ondeletechange={this.ondeletechange}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
