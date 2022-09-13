const TypeSelector = ({ qtype, setQtype }) => {
    return (
        <>
            <div className="col-lg-12 col-md-6 mx-auto">
            <select
                className="form-select"
                value={qtype}
                onChange={(event) => {
                let type = parseInt(event.target.value);
                setQtype(type);
                }}
            >
                <option value="0">Choose Question Type</option>
                <option value="1">Multi-Select</option>
                <option value="2">Single-Select</option>
            </select>
            </div>
        </>
    );
};
  
export default TypeSelector;
  