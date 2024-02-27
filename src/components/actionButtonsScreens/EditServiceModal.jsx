// EditServiceModal.js
import React from "react";
import ModalBase from "../modals/BasedModal";
import ServiceForm from "./ServiceForm"; // Importe o ServiceForm

const EditServiceModal = ({ isOpen, onClose, service, updateService }) => {
    const handleFormSubmit = (data) => {
        updateService(service.id, data);
        onClose();
    };

    return (
        <ModalBase isOpen={isOpen} onClose={onClose}>
            <ServiceForm
                initialValues={{ name: service?.name, price: service?.price, description: service?.description }}
                onSubmit={handleFormSubmit}
                onCancel={onClose}
            />
        </ModalBase>
    );
};

export default EditServiceModal;
