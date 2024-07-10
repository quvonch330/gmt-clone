import React from "react";
import Logo from "../../assets/logo.svg";
import vk from "../../assets/24--vk.svg";
import vk2 from "../../assets/24--telegram.svg";
import vk3 from "../../assets/24--whatsapp.svg";
import mastercard from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";
import mir from "../../assets/mir.svg";




export const Footer = () => {
  return (
    <footer className="mt-[150px] w-full h-auto bg-tx-u7vg">
      <div
        className={`w-full max-w-[1310px] bg-color1 overflow-hidden flex flex-col items-start justify-start pt-10 mx-auto pb-5 box-border gap-[60px] leading-[normal] tracking-[normal] text-left text-xs text-[#F8F7F3] font-t3 sm:gap-[15px] md:gap-[30px] md:pl-8 md:pr-8 md:box-border`}
      >
        <section className="w-full flex flex-col md:flex-row items-start justify-between gap-[20px] text-left text-sm text-[#F8F7F3] font-t3">
          <div className="w-full md:w-[210px] flex flex-col items-start justify-start gap-[15px]">
            <div className="relative font-semibold inline-block min-w-[92px]">
              Покупателям
            </div>
            <div className="w-full h-px relative bg-color" />
            <div className="w-full flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative inline-block min-w-[78px]">
                  О компании
                </div>
                <div className="relative inline-block min-w-[91px]">
                  Сертификаты
                </div>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[64px]">
                  Вакансии
                </a>
                <div className="relative inline-block min-w-[62px]">
                  Гарантии
                </div>
                <div className="relative inline-block min-w-[46px]">Услуги</div>
                <div className="relative inline-block min-w-[41px]">Акции</div>
                <div className="relative inline-block min-w-[63px]">
                  Доставка
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[49px]">
                  Оплата
                </a>
                <div className="relative inline-block min-w-[55px]">
                  Возврат
                </div>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[26px]">
                  FAQ
                </a>
                <div className="relative inline-block min-w-[48px]">Лизинг</div>
                <div className="relative inline-block min-w-[51px]">Отзывы</div>
                <div className="relative inline-block min-w-[32px]">Блог</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[650px] flex flex-col items-start justify-start gap-[15px]">
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[56px]">
              Каталог
            </a>
            <div className="w-full h-px relative bg-color2" />
            <div className="flex flex-wrap items-start justify-start gap-[30px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative inline-block min-w-[83px]">
                  Реанимация
                </div>
                <div className="relative inline-block min-w-[63px]">
                  Хирургия
                </div>
                <div className="relative inline-block min-w-[107px]">
                  Офтальмология
                </div>
                <div className="relative">Лабораторная диагностика</div>
                <div className="relative">Акушерство и Гинекология</div>
                <div className="relative inline-block min-w-[77px]">
                  Гистология
                </div>
                <div className="relative inline-block min-w-[96px]">
                  Косметология
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative">Орториноларингология</div>
                <div className="relative">Рентгенология и томография</div>
                <div className="relative inline-block min-w-[106px]">
                  Стрерилизация
                </div>
                <div className="relative">Физиотерапия и реабилитация</div>
                <div className="relative">Функциональная диагностика</div>
                <div className="relative inline-block min-w-[82px]">
                  Эндоскопия
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[57px]">
                  Новинки
                </a>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[83px]">
                  Распродажи
                </a>
                <div className="relative inline-block min-w-[129px]">
                  Кабинеты под ключ
                </div>
                <div className="relative inline-block min-w-[110px]">
                  Скачать каталог
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[210px] flex flex-col items-start justify-start gap-[15px]">
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[66px]">
              Контакты
            </a>
            <div className="w-full flex flex-col items-start justify-start gap-[25px]">
              <div className="w-full flex flex-col items-start justify-start gap-[15px]">
                <div className="w-full h-px relative bg-color2" />
                <div className="w-full flex flex-col items-start justify-start gap-[5px]">
                  <div className="relative font-semibold inline-block min-w-[48px]">
                    Адрес:
                  </div>
                  <div className="relative leading-[19.56px]">{`г. Москва, ул. Московская, д. 35 `}</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <div className="relative font-semibold inline-block min-w-[101px]">
                  Карта проезда
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-[13px] h-[13px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/13-arrow.svg"
                  />
                </div>
              </div>
              <div className="relative">
                <p className="m-0">График работы:</p>
                <p className="m-0">{`Пн-Пт с 09:00-19:00, `}</p>
                <p className="m-0">Сб-Вс - выходной</p>
              </div>
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative inline-block min-w-[121px] whitespace-nowrap">
                  +7 000-000-00-00
                </div>
                <div className="relative inline-block min-w-[121px] whitespace-nowrap">
                  +7 495-000-00-00
                </div>
                <div className="relative inline-block min-w-[114px]">
                  8 800-000-00-00
                </div>
                <div className="relative inline-block min-w-[81px] whitespace-nowrap">
                  info@mail.ru
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-start justify-start gap-[15px] text-left text-sm text-[#F8F7F3] font-t3">
          <div className="w-full h-px relative bg-color2" />
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start gap-[10px] text-xs">
              <img
                className="w-[65.8px] h-[41px] relative overflow-hidden  shrink-0"
                loading="lazy"
                alt=""
                src={Logo}
              />
              <div className="relative">ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="relative font-semibold inline-block min-w-[100px]">
                Мы в соцсетях
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={vk}
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={vk2}
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={vk3}
                />
              </div>
            </div>
            <div className="w-full md:w-[735px] flex flex-row items-start justify-start gap-[25px] md:gap-[50px] flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative">Партнерская программа</div>
                <div className="relative inline-block min-w-[120px]">
                  Оптовые продажи
                </div>
                <div className="relative inline-block min-w-[71px]">
                  Реквизиты
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[24px] flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative">Политика конфиденциальности</div>
                  <div className="relative">Условия соглашения</div>
                  <div className="relative inline-block min-w-[80px]">
                    Карта сайта
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[136px]">
                  <div className="relative font-semibold inline-block min-w-[116px]">
                    Способы оплаты
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <img
                      className="h-[30px] w-[49px] relative"
                      loading="lazy"
                      alt=""
                      src={mastercard}
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <img
                        className="self-stretch h-5 relative max-w-full overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={visa}
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <img
                        className="self-stretch h-5 relative max-w-full mt-[50px] mr-[50px] overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={mir}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-[20px]">
          <div className="relative inline-block">
            © 2022 Медоборудование Все права защищены
          </div>
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border text-[#F8F7F3]">
            <div className="relative">
              Информация на данном сайте носит справочный характер и не является
              публичной офертой, определяемой положениями Статьи 437
              Гражданского кодекса Российской Федерации
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
