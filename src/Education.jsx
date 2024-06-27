import FEULOGO from './assets/FEU_Tech_official_seal.png'
import faithLogo from './assets/FAITH_logo.png'
import donbLogo from './assets/donbLogo.png'
import sgaLogo from './assets/sgaLogo.png'
import sarasasLogo from './assets/sarasasLogo.png'

function Education(props) {
    const universities = [
        {   
            level: 'University',
            year: '2023-2027',
            name: 'Far Eastern University - Institute of Technology',
            field: 'Bachelor of Science in Information Technology with Specialization in Web and Mobile Applications',
            logo: FEULOGO,
            link: 'https://www.feutech.edu.ph/'
        },
        {
            level: 'Senior High School',
            year: '2021-2023',
            abbreviation: 'FAITH',
            name: 'First Asia Institute of Technology and Humanities',
            field: 'STEM - Science, Technology, Engineering, and Mathematics.',
            logo: faithLogo,
            link: 'https://www.faith.edu.ph/'
        },
        {
            level: 'High School',
            year: '2017-2021',
            name: 'San Guillermo Academy',
            logo: sgaLogo,
        },
        {
            level: 'Primary School',
            year: '2014-2017',
            name: 'Don Bosco Thailand',
            logo : donbLogo,
        },
        {
            level: 'Primary School',
            year: '2009-2012',
            name: 'Sarasas Witaed Bangbuathong',
            logoSarasas: sarasasLogo,
        },
    ];

    return (
        <section className="section">
            <h1 className="content text-center mb-10">Education</h1>
            <div className="flex flex-col my-6">
                {universities.map((uni, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <a href={uni.link}>
                            <img 
                                className="w-[130px] pb-4" 
                                src={uni.logo}
                            />
                        </a>
                        <img 
                            src={uni.logoSarasas}
                            className='w-[130px]'
                        >
                        </img>
                        <h2 className='text-2xl text-green-200'>
                            {uni.level}
                        </h2>
                        <h2 className='text-xl text-green-100'>
                            {uni.year}
                        </h2>
                        <a href={uni.link} target='blank'>
                                <h2 className='text-center'>{uni.abbreviation}</h2>
                            <h2 className="text-center text-xl text-purple-300">
                                {uni.name}
                            </h2>
                            <h2 className="mb-12 text-center">
                                {uni.field}
                            </h2>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education;
