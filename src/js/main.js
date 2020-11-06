/*
(function ($, undefined) {

})(jQuery);

// Object fit images
objectFitImages();

// Lazy Load images
window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.expand = 100;
lazySizesConfig.hFac = 0.4;
lazySizes.init();

// InputMask
let inputsTel = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('999-999-9999');
im.mask(inputsTel);

// Validate form
function validateForms(selectorForm, rules) {
    new window.JustValidate(selectorForm, {
        rules: rules,
        submitHandler: function (form, values, ajax) {
            console.log(form);

            /!*let formData = new formData(form);

            fetch('mail.php', {
                method: 'POST',
                body: formData
            })
                .then(function (data) {
                    console.log(data);
                    console.log('Sended');
                    form.reset();
                });*!/
        }
    });
}

validateForms('.form', { email: { required: true, email: true }, firstName: { required: true }, lastName: { required: true }, tel: { required: true } });*/


// section_01111111
/*
let pos = document.documentElement;

pos.addEventListener('mousemove', e =>{
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', e.clientY + 'px')
})*/


// section_022
/*
function changeBg() {
    const images = ['url("../images/section_022/1.jpg")', 'url("../images/section_022/2.jpg")', 'url("../images/section_022/3.jpg")', 'url("../images/section_022/4.jpg")', 'url("../images/section_022/5.jpg")', 'url("../images/section_022/6.jpg")', 'url("../images/section_022/7.jpg")', 'url("../images/section_022/8.jpg")'];

    const randomPhoto = document.getElementById('randomPhoto');
    const bg = images[Math.floor(Math.random() * images.length)];
    randomPhoto.style.backgroundImage = bg;
}

setInterval(changeBg, 1000)*/
