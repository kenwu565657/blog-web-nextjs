interface CalendarProps {
    date: string;
}

export default function Calendar(props: CalendarProps) {
    const [year, month, day] = props.date.split('-');
    const chineseMonthName = getChineseMonthName(month);
    const englishMonthName = getEnglishMonthName(month);

    return (
        <div className="min-w-24 bg-yellow-50 shadow-2xl flex flex-col">
            <div className="flex justify-around border-gray-400 border-2 flex-row">
                <span className="text-xs sm:text-sm text-green-700 font-extrabold">{year}</span>
                <span className="text-xs sm:text-sm text-red-700 font-extrabold">{chineseMonthName}</span>
                <span className="text-xs sm:text-sm text-green-700 font-extrabold">{englishMonthName}</span>
            </div>
            <div className="drop-shadow-2xl">
                <span className="mx-auto table font-extrabold text-green-700 text-6xl md:text-7xl">{day}</span>
            </div>
        </div>
    )
}

function getEnglishMonthName(month: string|null|undefined): 'JAN'|'FEB'|'MAR'|'APR'|'MAY'|'JUN'|'JUL'|'AUG'|'SEP'|'OCT'|'NOV'|'DEC' {
    if (!month) {
        return 'JAN';
    }
    const monthNumber: number = parseInt(month);
    if (isNaN(monthNumber)) {
        return 'JAN';
    }
    const monthList: ('JAN'|'FEB'|'MAR'|'APR'|'MAY'|'JUN'|'JUL'|'AUG'|'SEP'|'OCT'|'NOV'|'DEC')[] =
        ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    return monthList[(monthNumber - 1) % 12];
}

function getChineseMonthName(month: string|null|undefined): '一月'|'二月'|'三月'|'四月'|'五月'|'六月'|'七月'|'八月'|'九月'|'十月'|'十一月'|'十二月' {
    if (!month) {
        return '一月';
    }
    const monthNumber: number = parseInt(month);
    if (isNaN(monthNumber)) {
        return '一月';
    }
    const monthList: ('一月'|'二月'|'三月'|'四月'|'五月'|'六月'|'七月'|'八月'|'九月'|'十月'|'十一月'|'十二月')[] =
        ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
    return monthList[(monthNumber - 1) % 12];
}
