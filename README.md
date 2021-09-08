[![Maintainability](https://api.codeclimate.com/v1/badges/813b79cd69242d3ac340/maintainability)](https://codeclimate.com/github/orishko/hexlet-ci/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/813b79cd69242d3ac340/test_coverage)](https://codeclimate.com/github/orishko/hexlet-ci/test_coverage)
![Actions Status](https://github.com/orishko/hexlet-ci/workflows/main/badge.svg) 
# CI

В этом упражнении нужно будет протестировать функцию `slice()` и настроить Github Actions с подсчетом Test Coverage и загрузкой отчёта по покрытию тестами на [codeclimate.com](https://codeclimate.com/).

## __tests__/index.test.js

Напишите тесты на функцию `slice(coll, begin, end)`, которая возвращает новый массив, содержащий копию части исходного массива.

Функция принимает следующие аргументы:

* `coll` - исходный массив.
* `begin` - индекс, по которому начинается извлечение. Если индекс отрицательный, begin указывает смещение от конца последовательности. По умолчанию равен нулю.
* `end` - индекс, по котрому заканчивается извлечение (не включая элемент с индексом end). Если индекс отрицательный, end указывает смещение от конца последовательности. По умолчанию равен длине исходного массива.

```javascript
const coll = [1, 2, 3, 4, 5];
slice(coll); // [1, 2, 3, 4, 5]
slice(coll, 1, 4); // [2, 3, 4]
slice(coll, -4, -2) // [2, 3]
slice(coll, 7); // []
```

## .github/workflows/main.yml

Создайте на GitHub репозиторий и загрузите туда проект.

Создайте файл в котором будут устанавливаться зависимости, выполняться тесты, а также загружаться отчёт о покрытии тестами на [codeclimate.com](https://codeclimate.com/) после каждого пуша в основную ветку.

Продублируйте файл с воркфлоу в GitLab — *.github/workflows/main.yml*

## README.md

В ридми проекта добавьте бейдж на созданный воркфлоу.

При создании issue укажите ссылку на репозиторий, в котором успешно выполняется пайплайн.

## Ссылки

* [GitHub Actions](https://github.com/features/actions)
* [Никита Соболев — Автоматизируем все с Github Actions](https://www.youtube.com/watch?v=QoCSvwkP_lQ)
* [jest --coverage](https://jestjs.io/ru/docs/cli#--coverageboolean)
* [paambaati/codeclimate-action](https://github.com/paambaati/codeclimate-action)
* [Adding a workflow status badge](https://docs.github.com/en/actions/managing-workflow-runs/adding-a-workflow-status-badge)
