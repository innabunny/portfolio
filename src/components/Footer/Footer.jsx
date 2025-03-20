import './Footer.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { TbBrandVk } from "react-icons/tb";
import { TbMailbox } from "react-icons/tb";

export default function Footer({ isTranslate }) {
  return (
    <footer className="footer" id="contacts">
      <ul className="footer__links">
        <li>
          <FaTelegramPlane className='footer__icon' />
          <a
            href="https://t.me/inesagosteva"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </li>
        <li>
          <TbBrandVk className='footer__icon' />
          <a
            href="https://vk.com/innabunny"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            {isTranslate ? 'Vkontake' : 'Вконтакте'}
          </a>
        </li>
        <li>
          <TbMailbox className='footer__icon' />
          <a
            href="mailto: innagosteva31@yandex.ru"
            rel="noreferrer"
            className="footer__link"
          >
            {isTranslate ? 'Mail' : 'Почта'}
          </a>
        </li>
      </ul>
    </footer>
  );
}
