import logo from '../../assets/museumLogo.png';

export function HeaderComponent(){
    return (
        <header>
            <img src={logo} alt="" />

            <input placeholder="Procure uma obra aqui..."/>
            <div>
                <span>Login</span>
            </div>
            <div>
                <input type="checkbox" />
                <input type="checkbox" />
            </div>
        </header>
    )
}