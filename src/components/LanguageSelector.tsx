import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from "../constants"
import {ChangeEvent, type FC } from 'react'
import { FromLanguage, Language } from '../types'

type Props =
    | { type: "from", value: FromLanguage, onChange: (language: FromLanguage) => void}
    | { type: "from", value: Language, onChange: (language: Language) => void}

export const LanguageSelector: FC<Props> = ({ onChange }) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }
    return (
        <Form.Select>
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
            <option key={key} value={key}>
                {literal}
            </option>
        ))}
        </Form.Select>
    )
}