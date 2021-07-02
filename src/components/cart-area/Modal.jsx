import React from 'react'

export default function Modal({ showModal, changeModalShowStatus, submitDone }) {
  return (
    <div className="react">
      <div className={ showModal ? 'backdrop' : 'backdrop d-none' } onClick={ changeModalShowStatus }></div>
      <div className={ showModal ? 'modalBody' : 'modalBody d-none' }>
        <div className="formContainer react">
          <h1>Complete the form below and hit submit</h1>
          <form className="orderForm" onSubmit={ submitDone }>
            <ul>
              <li>
                <input type="text" name="name" className="fieldStyle fieldSplit alignLeft" placeholder="Name"  required/>
                <input type="text" name="phone" className="fieldStyle fieldSplit alignRight" placeholder="Phone no."  required/>
              </li>
              <li>
                <input type="text" name="email" className="fieldStyle fieldFull" placeholder="Email"  required/>
              </li>
              <li>
                <textarea name="address" className="fieldStyle" placeholder="Address" required></textarea>
              </li>
              <li>
                <input type="submit" value="Submit Order" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}
