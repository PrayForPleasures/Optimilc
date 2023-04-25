import toastActive from "../components/toast";

export default function () {
    let sending = false;

    const clearErrors = (e) => {
        const input = e.target;

        if (input) {
            if (input.type === "checkbox") {
                input.classList.remove("error");
            } else {
                const parentLabel = e.target.parentNode;

                if (
                    parentLabel &&
                    parentLabel.classList.contains("main-feedback__wrap")
                ) {
                    parentLabel.classList.remove("error");
                }
            }
        }
    };

    const checkForm = (inputsValidation) => {
        if (inputsValidation && inputsValidation.length > 0) {
            const inputs = [...inputsValidation];
            let errorIsHere = false;

            inputs.forEach((input) => {
                if (input.type === "checkbox") {
                    if (!input.checked) {
                        input.classList.add("error");
                        errorIsHere = true;
                    }
                } else {
                    const parentLabel = input.parentNode;
                    const pattern = new RegExp(
                        `${input.getAttribute("data-validation-form")}`
                    );

                    if (
                        parentLabel &&
                        parentLabel.classList.contains("main-feedback__wrap")
                    ) {
                        if (!pattern || !pattern.test(input.value)) {
                            parentLabel.classList.add("error");
                            errorIsHere = true;
                        }
                    }
                }
            });

            return !errorIsHere;
        }
    };

    const submitFormFeedback = async (e) => {
        e.preventDefault();

        const form = e.target;
        const inputsValidation = form.querySelectorAll(
            "[data-validation-form]"
        );

        let formData = new FormData(form);

        if (!sending) {
            if (checkForm(inputsValidation)) {
                sending = true;

                try {
                    const res = await axios.post("mail/mail.php", formData);

                    if (res && res.status == 200) {
                        toastActive("success");
                        form.reset();
                        setTimeout(() => {
                            window.dispatchEvent(new Event("close-all-modal"));
                        }, 1500);
                    } else {
                        console.error(res, "response failed");
                    }
                } catch (error) {
                    toastActive("error");
                    console.error(error);
                } finally {
                    sending = false;
                }
            }
        }
    };

    let submitForms = document.querySelectorAll("[data-consultation-form]");

    if (submitForms && submitForms.length > 0) {
        submitForms = Array(...submitForms);

        submitForms.forEach((form) => {
            const inputsValidation = form.querySelectorAll(
                "[data-validation-form]"
            );

            if (inputsValidation && submitForms.length > 0) {
                inputsValidation.forEach((input) => {
                    input.addEventListener("change", clearErrors);
                    input.addEventListener("input", clearErrors);
                });
            }

            form.addEventListener("submit", submitFormFeedback);
        });
    }
}
