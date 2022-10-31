import React, {useState} from 'react';
import './styles'

interface SigninForm {
    email: String;
    password: String;
}

const SignIn = () => {
    const [loading, setLoading] = useState(true);
    function handleClick() {
        setLoading(true);
    }

    return(
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh'
            }}
        >
            <form style={{ display: 'flex', flexDirection: 'column'}}>
                <label>Email</label>
                <input type="email"/>
                <label>Password</label>
                <input type="password"/>
                <br />
                <button>
                    로그인
                </button>
            </form>
        </div>
    )
}

export default SignIn;
