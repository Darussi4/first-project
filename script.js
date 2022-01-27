<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="портфолио Дарьи Деминой на Яндекс.Практикуме">
  <meta name="keywords" content="html, css, javascript">
  <meta name="author" content="Дарья Демина">
  <link rel="stylesheet" href="https://code.s3.yandex.net/web-code/normalize.css">
  <link rel="stylesheet" href="style.css">
  <title>Портфолио</title>
</head>
<body class="page">
  <header class="header centered-block">
   <h1 class="centered-block">
     <a href="#" class="header__link" lang="en">Daria</a>
   </h1>
  </header>
  <nav class="menu centered-block page__menu">
    <a href="#beginner" class="menu__link menu__link_active">Первые шаги в HTML и CSS</a>
    <a href="#frameworks" class="menu__link">Библиотеки JavaScript</a>
    <a href="#practice" class="menu__link">Практика HTML, CSS и JavaScript</a>
  </nav>
  <main class="content centered-block">
    <section id="beginner">
      <h2 class="content__title">Первые шаги в HTML и CSS</h2>
    <ul class="flex-row list flex-row_space_bottom">
      <li class="project project_name_music-album project_width_l project_height_l">
      <a href="#" class="project__overlay">обложка музыкального альбома</a>
      </li>
      <li class="project project_name_design-principles project_width_l project_height_l">
      <a href="#" class="project__overlay">посадочная страница</a>
      </li>
    </ul>
    </section>
    <section id="frameworks">
     <h2 class="content__title">Библиотеки JavaScript</h2>
     <div class="flex-row flex-row_reversed flex-row_space_bottom">
      <div class="flex-column flex-column_reversed">
        <div class="project project_width_l project_height_s">
          <video class="project__video" src="https://code.s3.yandex.net/web-code/like.mp4" autoplay muted loop></video>
        </div>
        <ul class="flex-row list">
          <li class="project project_name_slider project_width_m project_height_m">
          <a href="#" class="project__overlay">слайдер</a>
          </li>
          <li class="project project_name_reactive project_width_m project_height_m">
          <a href="#" class="project__overlay">React, Vue, Angular</a>
          </li>
        </ul>
      </div>
      <div class="project project_width_l project_height_xl">
        <video class="project__video" src="https://code.s3.yandex.net/web-code/procrastinate.mov" autoplay muted loop></video>
      </div>
     </div>
    </section>
   <section id="practice">
      <h2 class="content__title">Практика HTML, CSS и JavaScript</h2>
    <ul class="flex-row list">
      <li class="project project_name_how-to-study project_width_m project_height_m">
      <a href="#" class="project__overlay"> CSS-анимации</a>
      </li>
      <li class="project project_name_across-russia project_width_l project_height_m">
      <a href="#" class="project__overlay">адаптивная вёрстка</a>
      </li>
      <li class="project project_name_mesto project_width_m project_height_m">
      <a href="#" class="project__overlay">приложение на JavaScript</a>
      </li>
    </ul>
   </section>
  </main>
  <footer class="footer centered-block">
    <div class="footer__logo"></div>
  </footer>
</body>
</html>
