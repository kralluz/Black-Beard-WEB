const InputField = ({ label, id, register, errors, ...inputProps }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}:
            </label>
            <input
                id={id}
                className={`form-control ${errors[id] ? "is-invalid" : ""}`}
                {...register(id)}
                {...inputProps}
            />
            {errors[id] && (
                <div className="alert alert-danger">{errors[id].message}</div>
            )}
        </div>
    );
};

export default InputField;