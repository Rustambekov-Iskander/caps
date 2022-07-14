import * as yup from "yup";

const usernameRules = /^[a-z][a-z0-9]*?([-_][a-z0-9]+){0,2}$/i;
const passwordRules = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
const phoneRules = /^[+996][0-9]{12}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email('Введите email корректно').required('Это поле обязательно!'),
    username: yup
        .string()
        .matches(usernameRules, {message: 'Только буквы, цифры и @/./+/-/_'})
        .required('Это поле обязательно!'),
    password: yup
        .string()
        .matches(passwordRules, 'Пароль должен содержать хотя-бы одну заглавную и одну маленькую букву, также одну цифру')
        .min(5, 'Пароль должен содержать минимум 5 символов')
        .required('Это поле обязательно!'),
    password2: yup
        .string().oneOf([yup.ref('password'), null], 'Пароли не совпадают')
        .required('Это поле обязательно!'),
    first_name: yup.string().min(3, 'Имя должно содержать минимум 3 символов').required('Это поле обязательно!'),
    last_name: yup.string().min(5, 'Фамилия должна содержать минимум 5 символов').required('Это поле обязательно!'),
    phone: yup
        .string()
        .matches(phoneRules, 'Номер должен содержать ровно 12 цифр и начинаться на +996, без пробелов')
        .required('Это поле обязательно!')
})

export const loginSchema = yup.object().shape({
    username: yup
        .string()
        .matches(usernameRules, {message: 'Только буквы, цифры и @/./+/-/_'})
        .required('Это поле обязательно!'),
    password: yup
        .string()
        .matches(passwordRules, 'Пароль должен содержать хотя-бы одну заглавную и одну маленькую букву, также одну цифру')
        .min(5, 'Пароль должен содержать минимум 5 символов')
        .required('Это поле обязательно!'),
})