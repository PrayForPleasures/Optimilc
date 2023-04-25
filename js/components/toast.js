export default function (id = "", timeout = 2000) {
    const toast = document.querySelector([`[data-toast-id=${id}]`]);

    if (toast && !toast.classList.contains("active")) {
        toast.classList.add("active");

        setTimeout(() => toast.classList.remove("active"), timeout);
    }
}
