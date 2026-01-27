function getStarted() {
    if (console.log("get started"),
    document.querySelector(".get-started")) {
        document.querySelector("#recaptcha-script") && document.querySelector("#recaptcha-script").remove();
        var t = document.createElement("script");
        const o = document.getElementById("get-started-form");
        flatpickr("#date", {
            mode: "multiple",
            dateFormat: "m-d-y"
        }),
        $('input[type="checkbox"]').change(function() {
            $("#ssi").is(":checked") ? $("#shoot_info").show() : $("#shoot_info").hide()
        }),
        $("#get-started-form").on("submit", async function(t) {
            t.preventDefault(),
            console.log("submitting form");
            var e = new FormData(o);
            const c = Object.fromEntries(e);
            delete c.services,
            $('input[type="checkbox"]:checked').each(function() {
                c.services = c.services ? c.services + ", " + this.value : this.value
            });
            try {
                (await fetch("./contact_.php", {
                    method: "POST",
                    body: JSON.stringify(c),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })).ok && ($("#get-started-form").hide(),
                $("#success").show(),
                $("html, body").animate({
                    scrollTop: 0
                }, "fast"))
            } catch (t) {}
        })
    }
}
export {getStarted};
