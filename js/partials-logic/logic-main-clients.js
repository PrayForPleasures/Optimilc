export default function () {
    try {
        const items = document.querySelectorAll("[data-change-clients]");
        const getRndInteger = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min;
        };

        if (items && items.length > 0) {
            const item = items[0];

            items.forEach((item) => {
                const images = item.querySelectorAll(
                    ".main-our-clients__item-img"
                );
                const duration = getRndInteger(10, 20);

                if (images && images.length > 0) {
                    images.forEach((image, i) => {
                        if (image) {
                            const delay = (duration * i) / 2;

                            image.style.animationName = "toggle-gray";
                            image.style.animationDuration = `${duration}s`;
                            image.style.animationDelay = `${delay}s`;
                            image.style.animationIterationCount = "infinite";
                            image.style.animationTimingFunction = "linear";
                        }
                    });
                }
            });
        }
    } catch (e) {
        console.error(e);
    }
}
