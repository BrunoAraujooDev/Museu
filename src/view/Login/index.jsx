import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { TemaContext } from "../../Contexts/TemaContext";
import "./index.css"

export function LoginComponent()  {

    const { tema } = useContext(TemaContext);

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <form onSubmit={e => e.preventDefault()} id="login-form" style={{ backgroundColor: tema.corFundoTema, color: tema.corTexto }}>


        <div className="mb-3 login-div">
            <input type="text" className="form-input" name="email" id="email" required aria-describedby="emailHelp"
                style={{ color: tema.corTexto, borderBottom: `1px solid ${tema.corTexto}` }}
                onChange={e => setUsuario(e.target.value)} />
            <label htmlFor="email" className="form-label">Usuário</label>
        </div>
        <div className="mb-3 login-div">
            <input type="password" className="form-input" name="password" id="password" required
                style={{ color: tema.corTexto, borderBottom: `1px solid ${tema.corTexto}` }}
                onChange={e => setSenha(e.target.value)} />
            <label htmlFor="password" className="form-label">Senha</label>
        </div>
        <button type="submit" className="btn login-botao" disabled={usuario == "" || senha == ""}
            style={{ backgroundColor: tema.corBotao }}
            >
            <Link to="/" style={{ color: tema.corTexto}}>
                Entrar
            </Link>
        </button>
    </form>
    )
}