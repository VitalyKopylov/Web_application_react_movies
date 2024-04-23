function Footer() {
  return (
    <footer className="page-footer #1b5e20 green darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/VitalyKopylov/react-movies"
          >
            Ссылка на репозиторий GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
