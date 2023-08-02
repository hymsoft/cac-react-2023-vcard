function changeBackgroundOnHover(color1, color2) {
    console.log('Cambiar el fondo:', color1, color2)
    const body = document.body;
    body.style.background = `${color1}`;
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    body.style.background = `-webkit-linear-gradient(to right, ${color1}, ${color2})`;
}

function restoreDefaultBackground() {
    const body = document.body;
    body.style.background = '#ff5e62';
    body.style.background = 'linear-gradient(to right, #ff5e62, #ff9966)';
    body.style.background = '-webkit-linear-gradient(to right, #ff5e62, #ff9966)';
}

document.addEventListener('DOMContentLoaded', function () {
    const socialButtons = document.querySelectorAll('.social-icons a');
    socialButtons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
            const hoverColors = button.getAttribute('data-hover-colors');
            if (hoverColors) {
                const [color1, color2] = hoverColors.split(',');
                changeBackgroundOnHover(color1, color2);
            }
        });

        button.addEventListener('mouseleave', () => {
            restoreDefaultBackground();
        });
    });
});

