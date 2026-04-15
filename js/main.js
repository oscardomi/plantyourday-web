function handleContact(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = '✔ Missatge enviat!';
    btn.style.background = '#388E3C';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = 'Enviar missatge';
        btn.style.background = '';
        btn.disabled = false;
        e.target.reset();
    }, 3000);
}
