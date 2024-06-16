import githubIcon from "/svgs/github.svg";

const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/">
            Rick & Morty
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a target="_blank"  href="https://github.com/jorgeromero17/rick-morty.git">
          <img src="${githubIcon}" alt="github" width="30px">
        </a>
      </div>
    </div>
  `;
  return view;
};

export default Header;
