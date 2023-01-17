import style from "./Header.module.css"
const Header = () => {
  return (
    <header className={style.header}>
      
      <nav className={style.nav}>
        <div className={style.navItem}>
          <div>Menu</div>
          <div>Logo</div>
          <div>Filmes e séries a vontade</div>
        </div>
        <div className={style.navItem}>
          <div>Lupa</div>
          <button type="submit">Entrar</button>
        </div>
      </nav>
    </header>
  );
};
export default Header