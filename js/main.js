import logicMenu from "./partials-logic/logic-menu";
import logicModals from "./partials-logic/logic-modals";
import logicMainClients from "./partials-logic/logic-main-clients";
import logicMainTopSlider from "./partials-logic/logic-main-top-slider";
import logicSubmitConsultationForms from "./partials-logic/logic-submit-consultation-forms";

document.addEventListener("DOMContentLoaded", function () {
    // main logic
    logicMenu();
    logicModals();
    logicMainTopSlider();
    logicMainClients();
    logicSubmitConsultationForms();
});
