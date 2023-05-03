import './Footer.css'

export default function Footer({isTranslate}) {
  return (
    <footer className='footer' id='contacts'>
      <ul className='footer__links'>
        <li>
          <a href='https://t.me/inesagosteva' className='footer__link' target='_blank' rel='noreferrer'>Telegram</a>
          </li>
        <li>
          <a href='https://vk.com/innabunny' target='_blank' rel='noreferrer' className='footer__link'>{isTranslate ? "Vkontake" : "Вконтакте"}</a>
          </li>
        <li>
          <a href='mailto: innagosteva31@yandex.ru' rel='noreferrer' className='footer__link'>{isTranslate ? "Mail" : "Почта"}</a>
          </li>
      </ul> 
    </footer>
  )
}