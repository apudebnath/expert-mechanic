import React from 'react';
import expert1 from '../../../images/Exparts/expart1.jpg';
import expert11 from '../../../images/Exparts/expart11.jpg';
import expert3 from '../../../images/Exparts/expart3.jpg';
import expert4 from '../../../images/Exparts/expart4.jpg';
import expert5 from '../../../images/Exparts/expart5.jpg';
import expert6 from '../../../images/Exparts/expart6.jpg';
import expert7 from '../../../images/Exparts/expart7.jpg';
import expert8 from '../../../images/Exparts/expart8.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        name: 'Benzani Durikh',
        img: expert1,
        expertize: "Mechanic Engine"
    },
    {
        name: 'Salmmon Hooke',
        img: expert11,
        expertize: "Electrical"
    },
    {
        name: 'Norry Smith',
        img: expert3,
        expertize: "Mechanic"
    },
    {
        name: 'Maria Jobber',
        img: expert4,
        expertize: "Painter"
    },
    {
        name: 'Nonna Kampbel',
        img: expert5,
        expertize: "Designer"
    },
    {
        name: 'Marjan Bookka',
        img: expert6,
        expertize: "Mechanic"
    },
    {
        name: 'Anny Dibble',
        img: expert7,
        expertize: "Mechanic Engine"
    },
    {
        name: 'Joban Durikh',
        img: expert8,
        expertize: "Body Mechanic"
    } 
]
const Experts = () => {

    return (
        <div className="my-5" id="experts">
            <h2>Our Experts</h2>
            <div className="row mx-4">
                {
                    experts.map(expert => <Expert
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;