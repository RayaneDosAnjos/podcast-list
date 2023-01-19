import style from "./Header.module.css"
const Header = () => {
  return (
    <header className={style.header} >
      
      <nav className={style.nav}>
        <div className={style.navItem}>
          <div>Menu</div>
          <div>Logo</div>
          <div className={style.line}></div>
          <div>Filmes e Séries à Vontade</div>
        </div>
        <div className={style.navItem}>
          <div>Lupa</div>
          <button type="submit" className={style.btnLogin}>ENTRAR</button>
        </div>
      </nav>
    </header>
  );
};

export function Test (){
  
  return(
      <div>oi,teste</div>
  )

}
export default Header
