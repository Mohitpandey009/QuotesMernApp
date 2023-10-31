import React from 'react'

export default function login() {
  return (
    <>
      <div class="position-absolute top-50 start-50 translate-middle">
    <div className="row">
  <div className="col">
    <input
      type="text"
      className="form-control"
      placeholder="First name"
      aria-label="First name"
    />
  </div>
  <div className="col">
    <input
      type="text"
      className="form-control"
      placeholder="Last name"
      aria-label="Last name"
    />
  </div>
</div>


<div><form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
</div>
</div>
    </>
  )
}
