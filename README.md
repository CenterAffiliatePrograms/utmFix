# utmFix
## Переброс UTM меток на iframe или ссылку для ведения статистики в CPA сети

### Для iframe
+ Открываем сайт в программе.
+ Находим там Ваш фрейм, открываем его настройки, копируем ссылку (эту ссылку можно получить в своей СРА сети), она нам еще понадобится, а потом удаляем её из этого поля и кликаем по фрейму. Должно получиться как на картинке

![''](https://cloud.githubusercontent.com/assets/11016617/18415979/e661e738-781e-11e6-82a0-7adba0cd9b5d.jpg)
Если фрейм пропал, ничего страшного, так и должно быть, мы ведь удалили его ссылку.

![''](https://cloud.githubusercontent.com/assets/11016617/18415987/2e3525de-781f-11e6-9b80-9d161b7526d6.jpg)
Если Хотите посмотреть на дизайн фрейма, то можете вставить ссылку снова и фрейм появится, но перед экспортом в html не забудьте её снова удалить. Иначе статистика в CPA сети с большой вероятностью будет умножаться на 2.
Если в ссылке у Вас есть php код, то его необходимо удалить. 
Например, было вот так

``` http://link.ru?<?=param?> ```

то сокращаем ссылку до 

``` http://link.ru ```

(не забываем, что все ссылки должны начинаться с http://)
+ Устанавливаем виджет. Размещение виджета на странице не играет никакой роли. Виджет не несет никакой графической нагрузки, это просто код. Так же уточняю - на весь сайт виджет ставится один раз, виджет нужно ставить на все три версии сайта(компьютер, планшет, телефон)
+ В настройках виджета прописываем партнерскую ссылку

![''](https://cloud.githubusercontent.com/assets/11016617/18416027/a4290e76-7820-11e6-875a-a48d8b946b4e.jpg)
+ Задаем iframe подсказку utm-link, для этого выбираем этот iframe в фокус и на верхней панели инструментов кликаем на **Гиперссылки** и там есть поле **Подсказка**

![''](https://cloud.githubusercontent.com/assets/11016617/18416047/945252ae-7821-11e6-9cdc-5012acf5fe5f.jpg)

Данные дейстия повторяем для всех iframe на странице, в которые нужно передать UTM метки.

### Для ссылок
+ Открываем сайт в программе
+ Выделяем нужную ссылку и прописываем ей партнерскую ссылку, полученную от СРА сети(в данном случае ссылка в настройке виджета  нас не интересует)

![''](https://cloud.githubusercontent.com/assets/11016617/18416122/4052a174-7824-11e6-9b54-7a37f4492224.jpg)
+ Затем прописываем ей Подсказку utm-link. Для этого выделяем ссылку, на верхней панели инструментов кликаем на **Гиперссылки** и там есть поле **Подсказка**

![''](https://cloud.githubusercontent.com/assets/11016617/18416146/ba2fa050-7824-11e6-8f1e-208f6aae718b.jpg)

Данные дейстия повторяем для всех ссылок на странице, в которые нужно передать UTM метки.

----------------------------------------------------------------------------------------------
**Все вопросы пишите на закрытый форум.**
