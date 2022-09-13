const Published = ({ questions }) => {
    return (
      <>
        <div className="container mt-5 ">
          {questions.length > 0 ? (
            questions.map((q, key) => (
              <div className="row">
                <div className="col-lg-8 col-md-6 text-start">
                  <h3 className="my-3">
                    {key}) {q.qtext}
                  </h3>
                </div>
                <div className="col-lg-4 col-md-6 text-start d-flex">
                  {q.options.map((opt) =>
                    q.qtype === 1 ? (
                      <div className="form-check ms-3" key={opt.uid}>
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                          />
                          {opt.value}
                        </label>
                      </div>
                    ) : (
                      <div className="form-check ms-3" key={opt.uid}>
                        <label className="form-check-label">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="random"
                          />
                          {opt.value}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h2>No Questions added</h2>
            </div>
          )}
  
          {questions.length !== 0 ? (
            <div className="m-5">
              <button className="btn btn-primary">Confirm</button>
            </div>
          ) : null}
        </div>
      </>
    );
  };
  
  export default Published;
  