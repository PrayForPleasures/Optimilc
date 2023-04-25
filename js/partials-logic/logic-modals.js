export default function () {
    try {
        const buttonsOpenModalArray =
            document.querySelectorAll("[data-open-modal]");
        const buttonsCloseModalArray =
            document.querySelectorAll("[data-close-modal]");
        let activeModal = null;

        if (buttonsOpenModalArray && buttonsOpenModalArray.length > 0) {
            buttonsOpenModalArray.forEach((el) => {
                el.addEventListener("click", (e) => {
                    const target = e.target;
                    const modalName =
                        target.getAttribute("data-open-modal") || "";
                    const modal = document.querySelector(
                        `[data-modal-name="${modalName}"]`
                    );
                    const modalChangeValue =
                        target.getAttribute("data-modal-change-value") || "";
                    const modalChangeImg =
                        target.getAttribute("data-modal-change-img") || "";

                    if (modal) {
                        if (modalChangeValue) {
                            const modalBlocksChangeValue =
                                modal.querySelectorAll(
                                    "[data-change-value-in-modal]"
                                );

                            if (
                                modalBlocksChangeValue &&
                                modalBlocksChangeValue.length > 0
                            ) {
                                modalBlocksChangeValue.forEach((element) => {
                                    if (
                                        element.tagName.toUpperCase() ===
                                        "INPUT"
                                    ) {
                                        element.value = `${modalChangeValue}`;
                                    } else {
                                        element.innerHTML = `${modalChangeValue}`;
                                    }
                                });
                            }
                        }

                        if (modalChangeImg) {
                            const modalBlocksChangeImg = modal.querySelectorAll(
                                "[data-change-img-in-modal]"
                            );

                            if (
                                modalBlocksChangeImg &&
                                modalBlocksChangeImg.length > 0
                            ) {
                                modalBlocksChangeImg.forEach((element) => {
                                    if (
                                        element.tagName.toUpperCase() === "IMG"
                                    ) {
                                        element.src = `${modalChangeImg}`;
                                    }
                                });
                            }
                        }

                        modal.classList.add("open");
                        activeModal = modal;
                        document.body.classList.add("off-scroll");
                    }
                });
            });
        }

        const clearModal = () => {
            if (activeModal) {
                const modalBlocksChangeValue = activeModal.querySelectorAll(
                    "[data-change-value-in-modal]"
                );
                const modalBlocksChangeImg = activeModal.querySelectorAll(
                    "[data-change-img-in-modal]"
                );

                if (
                    modalBlocksChangeValue &&
                    modalBlocksChangeValue.length > 0
                ) {
                    modalBlocksChangeImg.forEach((element) => {
                        if (element.tagName.toUpperCase() === "INPUT") {
                            element.value = ``;
                        } else {
                            element.innerHTML = ``;
                        }
                    });
                }

                if (modalBlocksChangeImg && modalBlocksChangeImg.length > 0) {
                    modalBlocksChangeImg.forEach((element) => {
                        if (element.tagName.toUpperCase() === "IMG") {
                            element.src = ``;
                        }
                    });
                }

                // clear all inputs
                const inputs = activeModal.querySelectorAll("input");

                if (inputs && inputs.length > 0) {
                    inputs.forEach((el) => {
                        if (el.type === "checkbox") {
                            el.checked = false;
                        } else {
                            el.value = "";
                        }
                    });
                }
            }
        };

        const callbackCloseModal = () => {
            if (activeModal) {
                activeModal.classList.remove("open");
                document.body.classList.remove("off-scroll");

                setTimeout(() => {
                    clearModal();

                    activeModal = null;
                }, 300);
            }
        };

        if (buttonsCloseModalArray && buttonsCloseModalArray.length > 0) {
            buttonsCloseModalArray.forEach((el) => {
                el.addEventListener("click", callbackCloseModal);
            });
        }

        window.addEventListener("resize", () => {
            document.body.classList.remove("off-scroll");
            callbackCloseModal();
        });

        window.addEventListener("close-all-modal", callbackCloseModal);
    } catch (e) {
        console.error(e);
    }
}
