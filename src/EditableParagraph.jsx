import { IoPerson } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiEdit } from "react-icons/bi";
import { IconContext } from "react-icons";

const EditableParagraph = ({ initialValue, validationSchema, onSubmit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(validationSchema),
    });

    useEffect(() => {
        const inputs = document.querySelectorAll(".input-box input");

        const handleInput = (event) => {
            const { value } = event.target;
            const label = event.target.nextElementSibling;

            if (value.trim() !== "") {
                label.classList.add("active");
            } else {
                label.classList.remove("active");
            }
        };

        const handleInitialValue = () => {
            inputs.forEach((input) => {
                const label = input.nextElementSibling;
                if (input.value.trim() !== "") {
                    label.classList.add("active");
                } else {
                    label.classList.remove("active");
                }
            });
        };

        handleInitialValue();

        if (isEditing) {
            inputs.forEach((input) => {
                input.addEventListener("input", handleInput);
            });
        } else {
            inputs.forEach((input) => {
                input.removeEventListener("input", handleInput);
            });
        }

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("input", handleInput);
            });
        };
    }, [isEditing]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleSave = (data) => {
        setIsEditing(false);
        onSubmit(data);
    };

    return (
        <>
            {!isEditing ? (
                <>
                    <p>label: </p>
                    <p>{initialValue}</p>
                    <button onClick={handleEdit}>
                        <IconContext.Provider value={{ size: "1.2em" }}>
                            <BiEdit />
                        </IconContext.Provider>
                    </button>
                </>
            ) : (
                <form onSubmit={handleSubmit(handleSave)}>
                    <div className="input-box">
                        <span className="icon">
                            <IoPerson />
                        </span>
                        <input
                            {...register("editedValue")}
                            defaultValue={initialValue}
                        />
                        <label htmlFor="text">Email</label>
                    </div>
                    {errors.editedValue && (
                        <span>{errors.editedValue.message}</span>
                    )}
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancelEdit}>
                        Cancel
                    </button>
                </form>
            )}
        </>
    );
};

export default EditableParagraph;
