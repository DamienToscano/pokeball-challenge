export default function Footer() {
    const data = [
        {
            name: '© By Damien Toscano',
            link: 'https://twitter.com/DamienToscano',
            color: '#ffffff'
        },
        {
            name: 'Data - PokeAPI',
            link: 'https://pokeapi.co/',
            color: '#ffffff'
        },
        {
            name: 'Pokeball Model - Jose Ramos',
            link: 'https://poly.pizza/u/Jose%20Ramos',
            color: '#ffffff'
        },
        {
            name: 'Machine Model - Anastasiia Ku',
            link: 'https://poly.pizza/u/Anastasiia%20Ku',
            color: '#ffffff'
        },
    ]

    return <>
        <footer className="footer">
            {data.map((item, index) => {
                return <a key={index}
                    className="footer-link"
                    style={{ backgroundColor: item.color }}
                    href={item.link}
                    target="_blank"
                >
                    {item.name}
                </a>
            }
            )}
        </footer >
    </>
}