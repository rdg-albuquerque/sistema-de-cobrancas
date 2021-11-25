import './style.css';
import check from '../../assets/check.svg'
import footerStep from '../../assets/footer-step.svg'
import footerStepCheck from '../../assets/footer-step-check.svg'
import line from '../../assets/line-green.svg'
import confirmationImg from '../../assets/confirmation-img.svg'

function ConfirmacaoCadastro() {
    return (
        <div className='background'>
            <div className='background-left'>
                <div className='check'>
                    <img src={check} alt='' />
                    <img src={line} alt='' />
                    <img src={check} alt='' />
                    <img src={line} alt='' />
                    <img src={check} alt='' />
                </div>
                <div className='container-info'>
                    <    div className='info'>
                        <h1>Cadastre-se</h1>
                        <p>Por favor, escreva seu nome e e-mail</p>
                    </div>
                    <div className='info'>
                        <h1>Escolha uma senha</h1>
                        <p>Escolha uma senha segura</p>
                    </div>
                    <div className='info'>
                        <h1>Cadastro realizado com sucesso</h1>
                        <p>E-mail e senha cadastrados com sucesso</p>
                    </div>
                </div>
            </div>
            <div className='background-rigth'>
                <div className='container-confirmacao'>
                    <img src={confirmationImg} alt="check" />
                    <h1>Cadastro realizado com sucesso!</h1>

                </div>

                <button className='botao-login'>Ir para Login</button>
                <div className='progresso'>
                    <img src={footerStep} alt='' />
                    <img src={footerStep} alt='' />
                    <img src={footerStepCheck} alt='' />
                </div>
            </div>

        </div>

    );
}

export default ConfirmacaoCadastro;