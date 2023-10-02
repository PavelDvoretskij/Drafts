import $ from "jquery";

$(function () {
    const form = $(".feedback__form");

    form.on("submit", function (e) {
        e.preventDefault();

        const validName = /^[A-Za-zа-яА-ЯёЁ _-]{2,}/.test(
            $(".feedback__name").val()
        );
        const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(
            $(".feedback__email").val()
        );
        const validMess = /^.{5,}/.test($(".feedback__mess").val());

        const valid = {
            ".feedback__name": validName,
            ".feedback__email": validEmail,
            ".feedback__mess": validMess,
        };

        let arrValid = [];

        for (const item in valid) {
            arrValid.push(valid[item]);

            if (!valid[item]) {
                $(item).css("outline", "3px solid #FB5555");
            } else {
                $(item).css("outline", "none");
            }
        }

        if (!arrValid.some((item) => !item)) {
            const data = form.serialize();
            $.get(e.target.action, data, function (res) {
                console.log(res);
            });
        }
    });
});
