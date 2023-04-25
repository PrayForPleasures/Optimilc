export default function () {
    try {
        const sliderMain = document.getElementById("slider-main");
        const sliderImages = document.querySelectorAll(
            "[data-main-slider-image]"
        );

        if (sliderMain && sliderImages && sliderImages.length > 0) {
            let activeIndexSlide = 0;
            const swiper = new window.Swiper("#slider-main", {
                effect: "fade",
                fadeEffect: {
                    crossFade: true,
                },
                allowTouchMove: false,
                speed: 800,
                autoplay: {
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
            });
            const changeActiveImage = (index) => {
                const currentImage = sliderImages[activeIndexSlide];
                const nextImage = sliderImages[index];

                if (currentImage && nextImage) {
                    currentImage.classList.remove("active");
                    nextImage.classList.add("active");
                    activeIndexSlide = index;
                }
            };

            sliderImages.forEach((image, index) => {
                image.addEventListener("click", () => {
                    changeActiveImage(index);
                    swiper.slideTo(index);
                });
            });

            swiper.on("slideChange", function () {
                const index = swiper.activeIndex;

                changeActiveImage(index);
            });
        }
    } catch (e) {
        console.error(e);
    }
}
