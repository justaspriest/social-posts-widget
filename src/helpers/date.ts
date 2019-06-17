interface DateParts {
    type: string;
    value: string;
}

interface DateContainer {
    day: string;
    month: string;
    year: string;
    hour: string;
    minute: string;
}

const formatter = new Intl.DateTimeFormat("default", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
});

const dateFormat = (dateEntry: string) => {
    const date = new Date(dateEntry);

    if (isNaN(date.getTime())) {
        return `Cannot parse date: ${dateEntry}`;
    }

    const { day, month, year, hour, minute } = formatter
        .formatToParts(date)
        .reduce((acc: DateContainer, parts: DateParts) => {
            switch (parts.type) {
                case "day":
                case "month":
                case "year":
                case "hour":
                case "minute":
                    acc[parts.type] = parts.value;
            }
            return acc;
        }, {} as DateContainer);

    return `${day}.${month}.${year} ${hour}:${minute}`;
};

const compareDateEntries = (dateEntry1: string, dateEntry2: string) => {
    const date1 = new Date(dateEntry1);
    const date2 = new Date(dateEntry2);
    return date1.getTime() - date2.getTime();
};

export { compareDateEntries, dateFormat };
