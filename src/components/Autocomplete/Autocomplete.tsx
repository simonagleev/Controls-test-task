import { useEffect, useState } from "react";
import { CountryInfo, getCountryByName } from "../../api/apiService";

import './Autocomplete.css'

interface IAutocomlete {
    count: number,
}

const Autocomlete = ({ count }: IAutocomlete) => {
    const [text, setText] = useState("")
    const [result, setResult] = useState<CountryInfo[] | undefined>()
    const textItem: string[] = text.split(" ")
    const finalTextItem = textItem.slice(textItem.length - 1).join("")

    useEffect(() => {
        const loadResult = async () => {
            try {
                const res = await getCountryByName(finalTextItem);
                setResult(res);
            } catch (error) {
                console.log(error)
            }
        };
        loadResult()
    }, [finalTextItem])

    return (
        <div className="autocomplete">
            <input
                className="autocomlete-input"
                onChange={e => setText(e.target.value)}
                placeholder="Начните вводить название страны"
                value={text}
            />
            <div className="autocomlete-container">
                {result
                    ?.slice(0, count)
                    .map((item: { flag: string; name: string; fullName: string }) => {
                        return (
                            //в связи с отсутсвием id или другого идентификатора пусть хотя бы индекс будет в качестве key
                            <div
                                className="autocomlete-item"
                                key={result.indexOf(item)}
                                onClick={() => {
                                    const textArray = text.split(' ')
                                    textArray.splice(textArray.length - 1, 1, item.name)
                                    setText(textArray.join(' '))
                                }}
                            >
                                <div
                                    className="autocomlete-item-name"
                                >
                                    {item.name}
                                </div>
                                <div
                                    className="autocomlete-item-full-name"
                                >
                                    {item.fullName}
                                </div>{" "}
                                <img src={item.flag} alt="flag" />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Autocomlete