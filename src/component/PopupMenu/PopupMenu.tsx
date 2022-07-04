// React
import React from 'react';
// Styles
import './Popupmenu.css';
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
  children?: React.ReactNode;
}

function PopupMenu(props: Props) {
  const [isOpen, setIsOpened] = React.useState(false);

  const buttonFilter = React.useRef<HTMLButtonElement>(null);
  const listOptions = React.useRef<HTMLUListElement>(null);

  const timeoutRef = React.useRef<any>(null);

  React.useEffect(() => {
    function setMenuFalse(e: any) {
      setIsOpened(false);

      if(!isOpen && listOptions.current?.classList.contains('openMenu')) {
        listOptions.current?.classList.remove('openMenu');
        listOptions.current?.classList.add('closeMenu');
      }
    }

    document.addEventListener('click', setMenuFalse);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      listOptions.current?.classList.remove('closeMenu');
    }, 500);

    return () => {
      document.removeEventListener('click', setMenuFalse);
    };
  }, [isOpen]);

  function openMenu(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (listOptions.current?.classList.contains('openMenu')) {
      setIsOpened(false);
      listOptions.current?.classList.remove('openMenu');
      listOptions.current?.classList.add('closeMenu');
      return;
    }

    setIsOpened(true);
    listOptions.current?.classList.remove('closeMenu');
    listOptions.current?.classList.add('openMenu');
  }

  return (
      <div className="content">
        <button className="button" ref={buttonFilter} onClick={(event) => openMenu(event)}>
          <span className="icon">
              <FontAwesomeIcon icon={faEllipsisV} />
          </span>
        </button>

        <nav>
          <ul className="listMenu" ref={listOptions}>
            {props.children}
          </ul>
        </nav>
      </div>
  );
}

export default PopupMenu;
