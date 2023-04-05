import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants"
import {ChangeEvent, type FC } from 'react'
import { type FromLanguage, type Language, SectionType } from '../types.d'

type Props =
    | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void}
    | { type: SectionType.to, value: Language, onChange: (language: Language) => void}

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }
    return (
        <Form.Select aria-label='Select a language' onChange={handleChange} value={value}>
            {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detect Language</option>}
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
            <option key={key} value={key}>
                {literal}
            </option>
        ))}
        </Form.Select>
    )
}