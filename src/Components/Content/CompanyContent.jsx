import React from "react";

export const CompanyContent = () => (
  <>
    <header class="header-w">
    <div class="max_width">
        <div class="header__logo" style="opacity: 1">
            <a href="/">
                <img class="logo_default m_visible" src="/i/logo.svg" alt="SB-SB" />
                <img class="logo_white" src="/i/logo_white.svg" alt="SB-SB" />
            </a>
        </div>
        <button class="hamburger hamburger--3dx" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
        <ul class="header__menu">
            <li>
                <a href="/company/">Компания</a>
            </li>
            <li>
                <a href="/our_services/">Услуги </a>
            </li>
            <li>
                <a href="/parthners/">Партнеры</a>
            </li>
            <li>
                <a href="/publications/">Публикации</a>
            </li>
            <li>
                <a href="/events/">Ивенты</a>
            </li>
            <li>
                <a href="/contacts/">Контакты</a>
            </li>
            <li class="menu-search">
                <div class="search-icon js-search-open">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                        <path
                            d="M12.3217 11.4984L9.43155 8.49245C10.1747 7.60906 10.5818 6.49758 10.5818 5.34047C10.5818 2.63702 8.38231 0.4375 5.67885 0.4375C2.9754 0.4375 0.775879 2.63702 0.775879 5.34047C0.775879 8.04393 2.9754 10.2434 5.67885 10.2434C6.69377 10.2434 7.66093 9.93733 8.48783 9.35622L11.4 12.385C11.5217 12.5114 11.6854 12.5811 11.8609 12.5811C12.0269 12.5811 12.1845 12.5178 12.304 12.4027C12.5582 12.1582 12.5663 11.7527 12.3217 11.4984ZM5.67885 1.71654C7.67713 1.71654 9.30279 3.34219 9.30279 5.34047C9.30279 7.33876 7.67713 8.96441 5.67885 8.96441C3.68057 8.96441 2.05492 7.33876 2.05492 5.34047C2.05492 3.34219 3.68057 1.71654 5.67885 1.71654Z">
                        </path>
                    </svg>
                </div>
                <div class="search-block js-search-block">
                    <form method="post" action="/search/" class="searchform">
                        <input type="hidden" name="form" value="search" />
                        <div class="b-input">
                            <input class="searchform_text" name="search" type="text" placeholder="Поиск..."
                                style="box-shadow: none" />
                            <div class="search-icon-mobile js-mobile-search-submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                                    <path
                                        d="M12.3217 11.4984L9.43155 8.49245C10.1747 7.60906 10.5818 6.49758 10.5818 5.34047C10.5818 2.63702 8.38231 0.4375 5.67885 0.4375C2.9754 0.4375 0.775879 2.63702 0.775879 5.34047C0.775879 8.04393 2.9754 10.2434 5.67885 10.2434C6.69377 10.2434 7.66093 9.93733 8.48783 9.35622L11.4 12.385C11.5217 12.5114 11.6854 12.5811 11.8609 12.5811C12.0269 12.5811 12.1845 12.5178 12.304 12.4027C12.5582 12.1582 12.5663 11.7527 12.3217 11.4984ZM5.67885 1.71654C7.67713 1.71654 9.30279 3.34219 9.30279 5.34047C9.30279 7.33876 7.67713 8.96441 5.67885 8.96441C3.68057 8.96441 2.05492 7.33876 2.05492 5.34047C2.05492 3.34219 3.68057 1.71654 5.67885 1.71654Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </form>
                </div>
            </li>
        </ul>

        <div class="header__contacts geocountry--Ukraine">
            <div class="header__main-phone">
                <a href="tel:+380443793062">+38 044 379-30-62</a> КИЕВ
            </div>
            <div class="header__buttons">
                <a href="#" class="bub24-web-form-popup-btn-4 b24-web-form-popup-btn-10 b24-web-form-popup-btn-12"
                    onclick="fbq('track', 'Purchase', { value: '0.00', currency: 'USD' }); dataLayer.push({ 'event': 'ButtonRequest', 'analytics_action': 'Zakazat' }); window.yaCounter43176944 ? yaCounter43176944.reachGoal('order_phone') : '';">
                    Заказать звонок
                </a>
                <div class="buttons__more-phones">все офисы</div>
            </div>
            <div class="header__more-phones m_hidden">
                <div>
                    <a href="tel:+380443793062">+38 044 379-30-62</a> КИЕВ
                </div>
                <div>
                    <a href="tel:+420228881658">+420 228-881-658</a> ПРАГА
                </div>
                <div>
                    <a href="tel:+3726104206">+372 610-42-06</a> ТАЛЛИНН
                </div>
                <div>
                    <a href="tel:+74991120569">+7 499 112-05-69</a> МОСКВА
                </div>
                <div class="phones__callback">
                    <a href="#" class="bub24-web-form-popup-btn-4 b24-web-form-popup-btn-10 b24-web-form-popup-btn-12"
                        onclick="fbq('track', 'Purchase', { value: '0.00', currency: 'USD' }); dataLayer.push({ 'event': 'ButtonRequest', 'analytics_action': 'Zakazat' }); window.yaCounter43176944 ? yaCounter43176944.reachGoal('order_phone') : '';">
                        Заказать звонок
                    </a>
                </div>
            </div>
        </div>
    </div>
    <ul class="lng ulclear">
        <li class="lng_on">ru</li>
        <li>
            <a href="/en/parthners/" class="nounderline">
                en
            </a>
        </li>
    </ul>
</header>
  </>
);
