document.addEventListener("DOMContentLoaded", function () {
    console.log("Global script loaded!");

document.addEventListener("DOMContentLoaded", function () {
    let themeSwitcher = document.querySelector(".color-scheme");
    if (themeSwitcher) {
        document.body.appendChild(themeSwitcher); // Move it directly inside <body>
    }
});


    // let pages = [
    //     { url: "/my_works_lab5", title: "Home" },
    //     { url: "/my_works_lab5/projects", title: "Projects" },
    //     { url: "/my_works_lab5/contact", title: "Contact" },
    //     { url: "/my_works_lab5/cv", title: "CV" },
    //     { url: "https://github.com/heytian", title: "Github" }
    // ];

    // let nav = document.createElement("nav");
    // document.body.prepend(nav);

    // for (let p of pages) {
    //     let a = document.createElement("a");
    //     a.href = p.url;
    //     a.textContent = p.title;

    //     if (a.host === location.host && a.pathname === location.pathname) {
    //         a.classList.add("current");
    //     }

    //     if (a.host !== location.host) {
    //         a.target = "_blank";
    //     }

    //     nav.appendChild(a);
    // }

    // Dark mode theme switcher (top right)
    document.body.insertAdjacentHTML("beforeend", `
        <label class="color-scheme">
            Theme:
            <select id="theme-select">
                <option value="light dark">Auto</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </label>
    `);

    let select = document.querySelector("#theme-select");

    select.addEventListener("input", function (event) {
        document.documentElement.style.setProperty("color-scheme", event.target.value);
        localStorage.setItem("colorScheme", event.target.value);
    });

    let storedTheme = localStorage.getItem("colorScheme");
    if (storedTheme) {
        document.documentElement.style.setProperty("color-scheme", storedTheme);
        select.value = storedTheme;
    }

    console.log("Theme switcher should be at:", document.querySelector(".color-scheme"));
});
