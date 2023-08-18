// Write your code here
import './index.css'

const TransactionItem = props => {
  const {title, amount, type, historylist, ondeletechange} = props
  const {id} = historylist

  const onchangedelete = () => {
    ondeletechange(id)
  }

  return (
    <li className="histroy_list_container">
      <p className="title_amount_type_paragraph">{title}</p>
      <p className="title_amount_type_paragraph">Rs {amount}</p>
      <p className="title_amount_type_paragraph">{type}</p>
      <div>
        <button
          type="button"
          className="delete_button"
          onClick={onchangedelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete_image"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
