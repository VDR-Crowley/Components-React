// React
import React from 'react';
// Styles
import './Dropdown.css';
import {faAngleDown, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
  children?: React.ReactNode;
  menu: string;
}

function Dropdown(props: Props) {
  const [isOpen, setIsOpened] = React.useState(false);

  const buttonFilter = React.useRef<HTMLAnchorElement>(null);
  const listOptions = React.useRef<HTMLUListElement>(null);

  const timeoutRef = React.useRef<any>(null);

  React.useEffect(() => {
    function setMenuFalse(e: any) {
      setIsOpened(false);

      if(!isOpen && listOptions.current?.classList.contains('openDropdown')) {
        listOptions.current?.classList.remove('openDropdown');
        listOptions.current?.classList.add('closeDropdown');
      }
    }
    document.addEventListener('click', setMenuFalse);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      listOptions.current?.classList.remove('closeDropdown');
    }, 1000);

    return () => {
      document.removeEventListener('click', setMenuFalse);
    };
  }, [isOpen]);

  function openMenu(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (listOptions.current?.classList.contains('openDropdown')) {
      setIsOpened(false);
      listOptions.current?.classList.remove('openDropdown');
      listOptions.current?.classList.add('closeDropdown');
      return;
    }

    setIsOpened(true);
    listOptions.current?.classList.remove('closeDropdown');
    listOptions.current?.classList.add('openDropdown');
  }

  return (
      <li className="content">
        <a href="#" className="itemMenu" ref={buttonFilter} onClick={(event) => openMenu(event)}>
          <FontAwesomeIcon icon={faAngleDown} className="icon" />
          <span>{props.menu}</span>
        </a>

        <ul className="list" ref={listOptions}>
          {props.children}
        </ul>
      </li>
  );
}

export default Dropdown;
