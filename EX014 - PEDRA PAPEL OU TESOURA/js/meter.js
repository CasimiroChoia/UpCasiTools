limite.addEventListener("change", () => {
    if (this.value !== "opcional") {
        for (const meter of document.querySelectorAll(".progresso > label > *")) {
            meter.setAttribute("max", limite.value)
        }
    }
})

