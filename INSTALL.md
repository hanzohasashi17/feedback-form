
### У вас должен быть openserver:
1. в настройках модуля ставим версий которые указаны в таблице README.md
2. Клонируем в папку /domains куда вы установили OSPanel
```
git clone https://github.com/hanzohasashi17/feedback-form.git
```
3. в настройках домена, ставим ручное управление доменами и выбираем папку 'public' проекта, столбец Папка домена должен выйти типа: 'feedback-form/public', сохраняем.

### Настройка
Переименуйте .env.example в .env, измените значения данных полей
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=feedback
DB_USERNAME=root
DB_PASSWORD=
```

### Зависимости
Для установки зависимостей
```
composer install
```

А также (если уже установлен node.js)
```
yarn install
```

### Запуск
Генерируем уникальный ключ для приложения
```
php artisan key:generate
```

Инициализируем миграции (обязательно настройте подключение к БД в .env)
```
php artisan migrate
```
Билдим frontend
```
yarn build
```
Экспортируем дамп в СУБД MySQL



