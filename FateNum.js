const NumberDescriptions = {
    1: [
        '1 — Лидерство и независимость',
        'Люди с числом 1 часто обладают лидерскими качествами, стремятся к независимости, амбициозны и инициативны. Они уверенные, самостоятельные и любят брать на себя ответственность.',
    ],
    2: [
        '2 — Гармония и дипломатия',
        'Число 2 символизирует спокойствие, терпимость и дипломатичность. Люди с этой цифрой часто миролюбивы, стараются избегать конфликтов, любят сотрудничать и умеют поддерживать гармоничные отношения.',
    ],
    3: [
        '3 — Творчество и общение',
        'Те, у кого цифра судьбы 3, обычно обладают ярким воображением и выраженной креативностью. Они часто артистичны, общительны, любят радовать окружающих и умеют привлекать к себе внимание.',
    ],
    4: [
        '4 — Практичность и трудолюбие',
        'Четвёрки — это люди с устойчивой жизненной позицией, они практичны, организованы и трудолюбивы. Обычно они ставят реалистичные цели и работают усердно для их достижения.',
    ],
    5: [
        '5 — Свобода и приключения',
        'Число 5 связано с желанием перемен, свободы и приключений. Люди с этой цифрой судьбы ищут новые впечатления, любят путешествовать и часто стремятся к разнообразию в жизни.',
    ],
    6: [
        '6 — Ответственность и забота',
        'Число 6 символизирует любовь, заботу и ответственность. Люди с этой цифрой часто склонны к заботе о других, имеют сильное чувство долга, преданны семье и близким.',
    ],
    7: [
        '7 — Духовность и анализ',
        'Семёрки обладают глубокой духовностью, аналитическим складом ума и склонны к самоанализу. Они часто интересуются философией и мистикой, любят разбираться в сути вещей.',
    ],
    8: [
        '8 — Власть и успех',
        'Число 8 связано с материальным успехом, властью и карьерным ростом. Люди с этой цифрой судьбы часто нацелены на достижения, стремятся к финансовому благополучию и умеют управлять ресурсами.',
    ],
    9: [
        '9 — Гуманизм и альтруизм',
        'Девятки — это люди, которые стремятся к служению обществу, они гуманисты и альтруисты. Их интересует благополучие других, они часто участвуют в благотворительности и готовы помогать окружающим.',
    ],
};

export default function getLifeNumberDescription(result) {
    const title = document.querySelector('.life-number-title');
    const description = document.querySelector('.life-number-description');
    for (const [num, info] of Object.entries(NumberDescriptions)) {
        if (num == result) {
            title.innerHTML = info[0];
            description.innerHTML = info[1];
            break;
        }
    }
}
