const boxes = document.querySelectorAll(
  ".section__descr, .item, .steps__item, .courses__item",
);

const handleScroll = () => {
  const trigger = (window.innerHeight / 5) * 4;
  let delay = 0.2;

  for (const box of boxes) {
    const topOfBox = box.getBoundingClientRect().top;

    if (topOfBox < trigger && !box.classList.contains("show")) {
      box.style.transitionDelay = `${delay}s`;
      box.classList.add("show");
      delay += 0.3;
    }
  }
};

window.addEventListener("scroll", handleScroll);
