export default function themeChange(theme) {

    theme.addEventListener("click", () => {

        document.body.classList.toggle("dark");
        document.body.classList.contains("dark") ? theme.src = "../assets/dark-button.png" : theme.src = "./assets/light-button.png";

    });

};