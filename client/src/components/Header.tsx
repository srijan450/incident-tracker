import { useNavigate } from "react-router-dom";

interface iButton {
  title: string;
  handler: (_: any) => void;
  className?: string;
}

interface iHeaderProps {
  title: string;
  backSupport?: boolean;
  buttons?: iButton[];
}

const Header = ({ title, backSupport, buttons }: iHeaderProps) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={buttons ? `two-columns` : ""}>
      <header className="d-flex">
        {backSupport ? (
          <span onClick={handleGoBack} className="header-back-button">
            <img src="../back.png" />
          </span>
        ) : null}
        <h2 className="page-title">{title}</h2>
      </header>

      {buttons ? (
        <div className="d-flex">
          {buttons.map((button, ind) => (
            <button
              key={ind}
              className={button.className || ""}
              onClick={button.handler}
            >
              {button.title}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Header;
