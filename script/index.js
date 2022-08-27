// import {el, setChildren} from 'redom';
import { el, setChildren } from '../node_modules/redom/dist/redom.es.min.js';

const cardPage = () => {
    const wrapHolder = el('div.form__input-wrap.form__input-wrap_holder', [el('label.form__label.form__holder-label', 'Card Holder'), el('input.input input__holder')]);
    const wrapNumber = el('div.form__input-wrap.form__input-wrap_number', [el('label.form__label.form__number-label', 'Card Number'), el('input.input input__number')]);
    const wrapDate = el('div.form__input-wrap.form__input-wrap_date', [el('label.form__label.form__date-label', 'Card Expiry'), el('input.input input__date')]);
    const wrapCvv = el('div.form__input-wrap.form__input-wrap_cvv', [el('label.form__label.form__cvv-label', 'CVV'), el('input.input input__cvv')]);
    const form = el('form.form', wrapHolder, wrapNumber, wrapDate, wrapCvv, el('button.form__button', 'CHECK OUT'));
    const cardPersonal = el('div.card__personal', [el('span.card__name', 'John Doe'), el('span.card__date', '04/24')]);
    const cardImage = el('div.credit-card', [el('span.card__number', 'xxxx xxxx xxxx xxxx'), cardPersonal]);
    const cardContainer = el('div.card', [el('p', {className: 'secure'}, 'Secure Checkout'), cardImage, form]);

    return el('div.wrapper', [cardContainer]);
}
setChildren(document.body, cardPage());
const inputHolder = document.querySelector('.input__holder');
const inputNumber = document.querySelector('.input__number');
const inputDate = document.querySelector('.input__date');
const cardNumber = document.querySelector('.card__number');
const cardName = document.querySelector('.card__name');
const cardDate = document.querySelector('.card__date');
const btn = document.querySelector('.form__button');
const form = document.querySelector('.form');

inputHolder.addEventListener('input', (e) => {
    e.preventDefault();
    inputHolder.value = inputHolder.value.replace(/[А-Я]/ig, '');
});

function maskCreditCard(event) {
    const vcc = this.value.replace(/\D/g, '');
    this.value = '';
    for(let i = 0; i < vcc.length; i++) {
        this.value += (i%4==0 && i != 0 ? ' ' : '') + vcc[i];
    }
}
inputNumber.addEventListener('input', maskCreditCard);

inputDate.addEventListener('input', (e) => {
    e.preventDefault();
    cardDate.textContent = inputDate.value;
});
btn.addEventListener('click', (e) => {
    e.preventDefault();
    cardName.textContent = inputHolder.value;
    cardNumber.textContent = inputNumber.value;
    inputDate.textContent = inputDate.value;
    form.reset();
})