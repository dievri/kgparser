<#setting number_format="computer"> <#-- remove annoying commas in integers-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Топ по числу машин в гараже</title>
    <link rel="stylesheet" type="text/css" href="./${links.statsCss}">
    <link rel="shortcut icon" href="img/favicon/favicon.ico"/>
</head>
<body>
<#include "./header.ftl">
<main>
    <div class="section">
        <h2>
            Топ-${players?size} по числу машин в гараже
            <a class="excel" href="./${links.topByCarsCountZip}"><img src="img/excel.png" class="excel" alt="Скачать Excel" title="Скачать Excel"/>Скачать Excel (в архиве)</a>
        </h2>
    </div>

    <div class="section" id="table-container">

        <table class="data">
            <tr>
                <th>#</th>
                <th>Логин</th>
                <th>Машин</th>
                <th>Рекорд в &laquo;Обычном&raquo;</th>
                <th>Общий пробег</th>
                <th>Зарегистрирован</th>
                <th>Достижений</th>
                <th>Уровень</th>
                <th>Друзей</th>
                <th>Словарей</th>
            </tr>

            <#import "./player-td.ftl" as ptd>

            <#list players as player>
                <tr>
                    <td class="right">${player.orderNumber}</td>
                    <@ptd.playerTd player=player/>
                    <td class="right">${player.carsCount}</td>
                    <td class="right">${(player.bestSpeed)!"&mdash;"}</td> <#-- BestSpeed can be null -->
                    <td class="right">${player.totalRacesCount}</td>
                    <#-- Java 8 Date/Time format does not work in Freemarker -->
                    <#-- see https://stackoverflow.com/questions/32063276/java-time-java-8-support-in-freemarker -->
                    <#--                    <td>${player.registered?string["yyyy-MM-dd HH:mm:ss"]}</td>-->
                    <td>${player.registered}</td>
                    <td class="right">${player.achievementsCount}</td>
                    <td class="right">${player.ratingLevel}</td>
                    <td class="right">${player.friendsCount}</td>
                    <td class="right">${player.vocabulariesCount}</td>
                </tr>
            </#list>
        </table>

    </div>
</main>
</body>
</html>