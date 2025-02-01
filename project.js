let product = document.getElementById('productImg');
let btns = document.getElementsByClassName('btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        product.src = this.getAttribute('data-img');
        for (let bt of btns) {
            bt.classList.remove('active');
        }
        this.classList.add('active');
    }
}