function Header() {
  return (
    <nav className="#388e3c green darken-2">
      <div classNameName="nav-wrapper">
        <a href="#" className="brand-logo">
          Веб-приложение для поиска фильмов и сериалов
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/VitalyKopylov/react-movies">
              Ссылка на репозиторий GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
