/* tslint:disable:max-line-length */
import { Component, OnInit } from '@angular/core';

import { data } from './data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() {
    }

    alpha = 'abcdefgh';

    allIndexes: { name: string, indexes: number[], description: string }[] = [
        {
            name: 'Исполнитель', indexes: this.convertStringToIndexes('gahdbfe'), description: `Это член команды, выражающий ее сущность, потому что цели Исполнителя идентичны
целям команды. Часто Исполнитель является именно тем руководителем, выполняющим задания, которые другие не всегда хотят выполнять. Исполнитель систематически составляет планы и эффективно претворяет их в производство. Стиль Исполнителя в команде
- организация работ. Он может иметь недостаток гибкости и не любит непроверенные идеи.`
        },
        {
            name: 'Председатель', indexes: this.convertStringToIndexes('dbahfcg'), description: `Этот тип руководителя организует работу команды и использование ресурсов в
соответствии с групповыми целями. Председатель имеет ясное представление о сильных и
слабых сторонах команды и работает с максимальным использованием потенциала каждого
члена команды. Председатель может не обладать блестящим интеллектом, но он хорошо
руководит людьми. Главная личная черта характера Председателя - это сильное
доминирование и преданность групповым целям. Председатель является спокойным,
несуетливым, самодисциплинированным, поощряющим и поддерживающим типом
руководителя команды. Стиль руководства командой Председателя - принимать вносимые
вклады в деятельность команды и оценивать их в соответствии с целями команды.`
        },
        {
            name: 'Формировать', indexes: this.convertStringToIndexes('fecbdga'), description: `Это другой, более умело управляющий, честолюбивый, оппортунистический,
предпринимательский тип руководителя команды. Он формирует усилия команды через
установление целей и приоритетов. Формирователь присоединяется к точке зрения, что
победителей не судят. Стиль руководства Формирователя - оспаривать, мотивировать,
достигать. Он склонен к провокациям, раздражению и нетерпению.`
        },
        {
            name: 'Мыслитель', indexes: this.convertStringToIndexes('cgdehaf'), description: `Это интровертный (сосредоточенный на своем внутреннем мире), умный, склонный к
нововведениям член команды. Мыслитель представляет новые идеи, пытается их
развивать, разрабатывает стратегию. Он интересуется, в основном, более широкими
вопросами, которые могут дать результат, при недостаточном внимании к деталям. Стиль
Мыслителя - привносить инновационные идеи в работу команды и ее цели. Он склонен
"витать в облаках" и игнорировать детали или протокол.`
        },
        {
            name: 'Разведчик', indexes: this.convertStringToIndexes('acfgehd'), description: `Это экстравертивный (ориентированный на внешний мир), собирающий ресурсы тип
генератора идей. Разведчик исследует и докладывает об идеях, ресурсах и новых
усовершенствованиях, которые имеются вне команды. Он естествен в общественных
отношениях и создает полезные внешние контакты для команды. Он обычно знает, как
примирить интересы людей с общественными интересами. Разведчик обычно знает, кто
может помочь решить проблемы. Стиль Исследователя ресурсов - создать сеть и собирать
полезные ресурсы для команды. Разведчики могут терять интерес, стоит только пройти
первоначальному увлечению.`
        },
        {
            name: 'Оценщик', indexes: this.convertStringToIndexes('hdgcaeb'), description: `Оценщик объективен при анализировании проблем и оценке идей. Редко охваченный
энтузиазмом, он защищает команду от принятия импульсивных, отчаянных решений. Стиль
построения команды Оценщика - объективно анализировать и оценивать идеи и решения
команды. Им может не хватать вдохновения или способности мотивировать других.`
        },
        {
            name: 'Коллективист', indexes: this.convertStringToIndexes('bfeacbh'), description: `Коллективист играет ориентированную на отношения, поддерживающую
роль. Этот чрезвычайно популярный тип нередок среди высших менеджеров. Коллективист
благоприятно действует на дух команды, улучшает межличностное общение, сводит к
минимуму конфликты в команде. Стиль построения команды Коллективиста - поддерживать
отношения внутри команды. Он может быть нерешителен в момент кризиса.`
        },
        {
            name: 'Доводчик', indexes: this.convertStringToIndexes('ehbfgdc'), description: `Доводчик продвигается вперед и настаивает на данном плане, проекте или предложении, когда
возбуждение и энтузиазм других членов команды исчерпаны. Доводчик хорошо планирует,
выполняет и доводит до конца задачи команды. Он раздражается, если работа команды отстает от
графика, и теряет удовлетворение от работы, когда работа не завершена. Стиль построения команды
Доводчика - настаивать ради продвижения вперед, выдерживать сроки.`
        },
    ];

    allItems: { group: string, children: { name: string, value: number }[] }[] = data;

    currentGroupIndex = 0;

    allBlocksSums = new Array(this.allItems.length);
    allSums = 0;
    blockSum = 0;

    showIconHelp = false;

    showList = true;

    result = [];

    resultInfo = [];

    convertStringToIndexes(str: string): number[] {
        return str.split('').map(e => this.alpha.indexOf(e));
    }


    ngOnInit() {
        this.blockSum = this.allItems[this.currentGroupIndex].children.map(e => e.value).reduce((a, b) => a + b, 0);
        this.updateAllSum();
    }

    updateAllSum() {
        this.allBlocksSums = this.allItems
            .map(item => item.children
                .map(e => e.value).reduce((a, b) => a + b, 0));
        this.allSums = this.allBlocksSums.reduce((a, b) => a + b, 0);
    }

    updateBlockSum() {
        this.blockSum = this.allItems[this.currentGroupIndex].children.map(e => e.value).reduce((a, b) => a + b, 0);
    }

    changeSum(event, child) {
        this.updateAllSum();
        this.updateBlockSum();
        if (this.blockSum > 10) {
            this.blockSum = 10;
            event.source.value = 0;
            child.value = 0;
        }
    }

    updateBlock(currentGroupIndex) {
        if (currentGroupIndex > this.allItems.length - 1) {
            this.result = this.getResult();
            this.result.sort((a, b) => {
                if (a.value < b.value) {
                    return 1;
                }
                if (a.value === b.value) {
                    return 0;
                }
                if (a.value > b.value) {
                    return -1;
                }
            });
            this.showList = false;

            const maxValue = Math.max(...this.result.map(e => e.value));
            const minValue = Math.min(...this.result.map(e => e.value));
            this.resultInfo.push(this.result.find(e => e.value === maxValue));
            this.resultInfo.push(this.result.find(e => e.value === minValue));

            return;
        }
        this.currentGroupIndex = currentGroupIndex;
        this.updateBlockSum();
    }

    getResult() {
        const result = this.allIndexes.map((indGroup) => {
            return {
                name: indGroup.name,
                value: indGroup.indexes.map((e, index) => this.allItems[index].children[e].value)
                    .reduce((a, b) => a + b, 0),
                description: indGroup.description
            };
        }).map(e => {
            return { ...e, percent: Math.round(e.value * 100 / 70 * 10) / 10 };
        });
        return result.map(e => ({ ...e, title: `${e.name} - ${e.percent}% (${e.value})` }));
    }
}
