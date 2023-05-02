import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer' id='contacts'>
      <ul className='footer__links'>
        <li>
          <a href='https://t.me/inesagosteva' className='footer__link' target='_blank'>Telegram</a>
          </li>
        <li>
          <a href='https://vk.com/innabunny' target='_blank' className='footer__link'>Вконтакте</a>
          </li>
        <li>
          <a href='mailto: innagosteva31@yandex.ru' className='footer__link'>Почта</a>
          </li>
      </ul> 
    </footer>
  )
}