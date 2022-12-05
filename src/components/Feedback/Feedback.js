import React from 'react'

function Feedback() {
  return (
    <div>
        <div class="container-sm mt-5">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-sm-6 border border-dark ">
                <div class="mb-5">
                    <h3><center>Feedback Form</center></h3>
                </div>
                  <div class="mb-3 text-dark">
                    <label for="exampleFormControlTextarea1" class="form-label">How are the Classes going on ?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                  </div>
                  <div class="mb-3 text-dark">
                    <label for="exampleFormControlTextarea1" class="form-label">How are concepts being explained ?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                  </div>
                  <div class="mb-3 text-dark">
                    <label for="exampleFormControlTextarea1" class="form-label">How good are you understanding the concepts ?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                  </div>
                  <div class="mb-3 text-dark">
                    <label for="exampleFormControlTextarea1" class="form-label">Any Other Queries ?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                  </div>
                  <div class="d-grid gap-2">
                    <button type="button" class=" mb-3 btn btn-lg btn-outline-success">Submit Feedback</button>
                  </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Feedback