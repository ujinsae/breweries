import {use, useEffect, useState} from 'react';
const API_URL = import.meta.env.VITE_BREWERIES_API

const BreweryInfo = ({name, state, city, phone, website}) => {
    const [nameState, setNameState] = useState('');
    const [stateInfo, setStateInfo] = useState('');
    const [cityInfo, setCityInfo] = useState('');
    const [phoneInfo, setPhoneInfo] = useState('');
    const [websiteInfo, setWebsiteInfo] = useState('');

    useEffect(() => {

    const getStateName = async() => {
        const response = await fetch(`${API_URL}`);  
        const json = await response.json();
        setNameState(json);
    }
    getStateName().catch(console.error)
 } , [name]);

    return (
        <tr>
            <td>{name}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{phone ? phone : 'N/A'}</td>
            <td>
                {website ? (
                <a href={website} target="_blank" rel="noopener noreferrer">
                    {website}
                </a>
                ) : 'N/A'}
            </td>
        </tr>
    )


}

export default BreweryInfo;
