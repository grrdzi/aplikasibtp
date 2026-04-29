type Props = {
  title: string;
};

function Header({ title }: Props) {
  return (
    <header className="topbar">
      <h2>{title}</h2>

      <div className="user-area">
        Carlos ▾
      </div>
    </header>
  );
}

export default Header;