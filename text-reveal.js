document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".reveal-container");

    elements.forEach((paragraph) => {
        const text = paragraph.innerText.trim();
        const words = text.split(" ");

        paragraph.innerHTML = ""; 

        words.forEach((word, index) => {
            const wrapper = document.createElement("span");
            wrapper.classList.add("word-wrapper");

            const span = document.createElement("span");
            span.classList.add("reveal-word");
            span.style.animationDelay = (index * 0.12) + "s";
            span.innerText = word;

            wrapper.appendChild(span);
            paragraph.appendChild(wrapper);
        });
    });
});
