import styled from 'styled-components';

const loginWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const loginForm = styled.div`
  background: #0e101c;
  max-width: 400px;
  margin: 0 auto;
`;

const input = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
`;

export {loginWrap, loginForm, input}
