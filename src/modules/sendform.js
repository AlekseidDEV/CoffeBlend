import {
    maskPhone
} from "./hellpers";

export const sendForm = () => {
    const formHead = document.getElementById("form_head");
    const formFoot = document.getElementById("form_foot");

    const sendFomrServer = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((r) => r.json());
    };

    const formValidate = (inputs) => {
        let succes;

        inputs.forEach((input) => {
            if (input.value === "") {
                succes = false;
            } else {
                succes = true;
            }
        });

        return succes;
    };

    const dataPreporation = (e) => {
        e.preventDefault();

        const inputs = e.target.querySelectorAll("input");
        const formData = new FormData(e.target);

        const succesWind = document.querySelector(".succes_modal");
        const warnWind = document.querySelector(".warn_modal");
        const errorWind = document.querySelector(".error_modal");

        const formBody = {};

        formData.forEach((value, key) => {
            formBody[key] = value;
        });

        if (formValidate(inputs)) {
            sendFomrServer(formBody)
                .then(() => {
                    succesWind.style.display = "flex";
                    inputs.forEach((input) => {
                        input.value = "";
                    });
                })
                .catch(() => {
                    errorWind.style.display = "flex";
                });
        } else {
            warnWind.style.display = "flex";
        }

        warnWind.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target || e.target.className === "close_message") {
                warnWind.style.display = "none";
            }
        });
        succesWind.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target || e.target.className === "close_message") {
                succesWind.style.display = "none";
            }
        });
        errorWind.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target || e.target.className === "close_message") {
                errorWind.style.display = "none";
            }
        });
    };

    maskPhone('input[type="tel"]');

    formHead.addEventListener("submit", dataPreporation);
    formFoot.addEventListener("submit", dataPreporation);
};