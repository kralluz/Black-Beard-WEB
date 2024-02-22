import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const PasswordInput = ({
    label,
    id,
    register,
    errors,
    isHidden,
    setIsHidden,
    ...inputProps
}) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}:
            </label>
            <div className="input-group">
                <input
                    id={id}
                    className={`form-control ${errors[id] ? "is-invalid" : ""}`}
                    type={isHidden ? "password" : "text"}
                    {...register(id)}
                    {...inputProps}
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setIsHidden(!isHidden)}
                >
                    {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
                </button>
            </div>
            {errors[id] && (
                <div className="alert alert-danger">{errors[id].message}</div>
            )}
        </div>
    );
};

export default PasswordInput;
