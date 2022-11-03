import React, {useState} from 'react';
import './SignIn.styles'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface formValue {
    email: String;
    password: String;
}

const SignIn = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('아이디는 필수 입력사항입니다.')
            .email('이메일 형식이 올바르지 않습니다.'),
        password: Yup.string()
            .required('비밀번호는 필수 입력사항입니다.')
            .max(40)
    })
    const { register, handleSubmit, formState: { errors } } = useForm<formValue>({
        resolver: yupResolver(validationSchema),
        mode: "onBlur", // 'onBlur'
    });
    const onSubmit = (data: formValue) => {
        console.log(data);
    }

    return(
        <div className="loginWrap"
        >
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>이메일</label>
                    <input {...register("email")} />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" {...register("password")} autoComplete="off" />
                    <p>{errors.password?.message}</p>
                </div>
                <div>
                    <button type="submit">
                        로그인
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
