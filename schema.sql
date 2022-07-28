1 Портфолио Portfolio
  а) фотография id_photo FK

2 Услуги Services
  а) Название title
  б) Описание description
  в) Стоимость price
  г) Основной/Дополнительный main (0/1)
  д) Фоновое фото id_photo FK

3) Отзывы Reviews
  а) Имя name Not null
  б) фамилия surname
  в) Город city
  г) email Not null
  д) Отзыв Review Not null

4) Фотогаллерея Photoalbums
  а) Название альбома title
  б) Обложка альбома id_photo FK
  в) Фотографии id_photo FK

5) Фотографии Photos
  а) id
  б) имя файла
  в) url
  г) горизонтальная (булевое)

6) Контакты Contacts
  а) телефон phone Not null
  б) whatsapp
  в) viber
  г) vk

7) О себе About
  а)text
