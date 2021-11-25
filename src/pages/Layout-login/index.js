import './style.css';
import InputSenha from '../../components/InputSenha';
import InputGeral from '../../components/InputGeral';
import linhaBrancaHorizontal from '../../assets/linhaBrancaHorizontal.svg';
import linhaVerdeHorizontal from '../../assets/linhaVerdeHorizontal.svg';
import loginImg from '../../assets/login-img.jpg'

function LayoutLogin() {
    return (
        <div className='background'>
            <div className='background-login-img'>


            </div>
            <div className='background-rigth'>
                <div className='container-input'>
                    <h1>Faça seu login!</h1>
                    <div className='senha'>
                        <label>E-mail*</label>
                        <InputGeral placeholder='Digite seu e-mail' />

                    </div>
                    <div className='repetir-senha'>
                        <div className='a'>
                            <label>Senha</label>
                            <a href=''>Esqueceu a senha?</a>
                        </div>
                        <InputSenha placeholder='Digite sua senha' />

                    </div>
                    <button className='botao-entrar'>Entrar</button>
                    <span>Ainda não possui uma conta? <a href=''>Cadastre-se</a></span>
                </div>

            </div>
        </div>
    );
}

export default LayoutLogin;