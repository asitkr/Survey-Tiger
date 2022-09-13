const Options = ({ addOptions, deleteOptions, uid, updateText }) => {
    return (
      <>
        <div className="col-lg-12 col-md-6 mx-auto input-group my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Option Text"
            onChange={(event) => {
              updateText(uid, event.target.value);
            }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => addOptions()}
            >
              +
            </button>
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => deleteOptions()}
            >
              -
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default Options;
  