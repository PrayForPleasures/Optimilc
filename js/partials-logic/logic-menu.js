export default function () {
    try {
        let iconsToggleMenuList =
            document.querySelectorAll("[data-toggle-menu]");
        const iconMobileMenu = document.getElementById("toggle-mobile-menu");

        if (iconsToggleMenuList && iconsToggleMenuList.length > 0) {
            const callback = function (event) {
                const target = event.currentTarget;
                const callbackClickDocument = function (el) {
                    setTimeout(() => {
                        if (el) {
                            el.classList.remove("active");
                        }
                    }, 100);
                };

                if (target) {
                    if (!target.classList.contains("active")) {
                        target.classList.add("active");

                        setTimeout(() => {
                            document.addEventListener(
                                "click",
                                callbackClickDocument.bind(this, target),
                                {
                                    once: true,
                                }
                            );
                        }, 0);
                    } else {
                        target.classList.remove("active");

                        document.removeEventListener(
                            "click",
                            callbackClickDocument.bind(this, target)
                        );
                    }
                }
            };

            iconsToggleMenuList = Array(...iconsToggleMenuList);

            iconsToggleMenuList.forEach((list) => {
                list.addEventListener("click", callback);
            });
        }

        if (iconMobileMenu) {
            const callback = () => {
                document.body.classList.toggle("off-scroll");
                iconMobileMenu.classList.toggle("active");
            };

            iconMobileMenu.addEventListener("click", callback);

            window.addEventListener("resize", () => {
                document.body.classList.remove("off-scroll");
                iconMobileMenu.classList.remove("active");
            });
        }
    } catch (error) {
        console.error(error);
    }
}

// const menuComponents = document.getElementById("menu__components");
// const componentsDropDown = document.querySelector(".menu__components_dropdown");
// const menuServices = document.getElementById("menu__services");
// const servicesDropDown = document.querySelector(".menu__services_dropdown");
// const menuNav = document.querySelector(".menu__nav");
// const menuSubNav = document.querySelector(".menu__sub-nav");
// const menuSubNavMargin = document.querySelector(".menu__sub-nav_margin");
// const menuVerticalMargin = document.querySelector(".menu_vertical-margin");
// const menuLink = document.querySelector(".menu__nav-link");
// const menuNavLinkMargin = document.querySelector(".menu__nav-link_margin");
// const menu = document.querySelector(".header__menu-place");
// const menuShowIcon = document.querySelector(".menu_show-icon");

// function headerComponentsDropdown() {
//     window.onclick = function (event) {
//         if (event.target.matches(".menu__components_dropdown")) {
//             menuComponents.classList.toggle("menu__components_show");
//             componentsDropDown.src = "../../images/header/arrowUp.svg";
//         }
//     };
// }

// function headerServicesDropdown() {
//     window.onclick = function (event) {
//         if (event.target.matches(".menu__services_dropdown")) {
//             menuServices.classList.toggle("menu__services_show");
//             servicesDropDown.src = "../../images/header/arrowUp.svg";
//         }
//     };
// }

// function headerMenuClick() {
//     window.onclick = function (event) {
//         if (event.target.matches(".menu_show-icon")) {
//             menuNav.classList.toggle("menu_show");
//             menu.appendChild(menuNav);
//         }
//     };
// }

// menuShowIcon.addEventListener("click", headerMenuClick);

// window.addEventListener("click", (event) => {
//     if (event.target != menuSubNav) {
//         menuComponents.classList.remove("menu__components_show");
//         componentsDropDown.src = "../../images/header/arrowDown.svg";
//     }
// });

// window.addEventListener("click", (event) => {
//     if (event.target != menuSubNav) {
//         menuServices.classList.remove("menu__services_show");
//         servicesDropDown.src = "../../images/header/arrowDown.svg";
//     }
// });
