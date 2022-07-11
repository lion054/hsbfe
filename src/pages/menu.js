const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/'
    },
    {
        id: 2,
        name: 'Play',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Create Bet',
                links: '/coming-soon'
            },
            {
                id: 2,
                sub: 'Public Bet',
                links: '/coming-soon'
            },
            {
                id: 3,
                sub: 'HSB Groups',
                links: '/coming-soon'
            },
            {
                id: 4,
                sub: 'Arcade',
                links: '/community'
            },

        ]
    },
    {
        id: 3,
        name: 'MarketPlace',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Mint NFT',
                links: '/nft-item'
            },
            {
                id: 2,
                sub: 'HSB Swap',
                links: '/coming-soon'
            },
        ],
    },
    {
        id: 4,
        name: 'About',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'team',
                links: '/about-v1'
            },
            {
                id: 2,
                sub: 'Road Map',
                links: '/road-map-v1'
            },
            {
                id: 3,
                sub: 'Gitbook',
                links: '#'
            },
        ]
    },
    {
        id: 6,
        name: 'Profile',
        links: '/account'
    },
    
]

export default menus;