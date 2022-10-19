import { Moon, SignIn, SunDim } from 'phosphor-react';
import { useContext } from 'react';
import logo from '../../assets/museumLogo.png';
import { TemaContext } from '../../Contexts/TemaContext';
import './index.css';

export function HeaderComponent(){

    const {tema, modificarTema} = useContext(TemaContext);

    return (
        <header style={ { backgroundColor: tema.corFundoTema} }>
            <div className='div-logo-header'>
                <img src={logo} alt="" className='logo'/>   
            </div>
            <div className='div-login-header'>
                <SignIn size={24} weight="fill"  style={ { color: tema.corTexto} }/>
            </div>
            <div>
                <input type="radio" className="radio-tema" id="temaClaro" name="meuTema"/>
                <label htmlFor="temaClaro" onClick={() => modificarTema("claro")} className="label-tema" id="radio-tema-claro">
                    <SunDim size={24} weight="fill" />      
                </label>
            </div>
            <div>
                <input type="radio" className="radio-tema" id="temaEscuro" name="meuTema"/>
                <label htmlFor="temaEscuro" onClick={() => modificarTema("escuro")} className="label-tema" id="radio-tema-escuro">
                    <Moon size={24} weight="fill"  />
                </label>
            </div>
        </header>
    )
}