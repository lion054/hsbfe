const menus = [
    {
        id: 1,
        name: 'Play',
        namesub: [
            {
                id: 0,
                sub: 'Create Bet',
                links: '/create-item'
            },
            {
                id: 1,
                sub: 'Public Bets',
                links: '/povo'
            },
            {
                id: 2,
                sub: 'HSB Groups',
                links: '/groupa'
            },
            {
                id: 3,
                sub: 'Arcade',
                links: '/groupa'
            },
            
        ],
    },
    {
        id: 2,
        name: 'Marketplace',
        namesub: [
            {
                id: 1,
                sub: 'Wearables',
                links: '/Marketo'
            },
            {
                id: 2,
                sub: 'Mint NFT',
                links: '/Marketo'
            },
            {
                id: 3,
                sub: 'HSB Swap',
                links: '/Marketo'
            },
        ],
    },
    {
        id: 4,
        name: 'About',
        namesub: [
            {
                id: 1,
                sub: 'About Us',
                links: '#'
            },
            {
                id: 2,
                sub: 'Gitbook',
                links:'to="gitbook" params={myParams} target="_blank"'
            },
        ],
    },
    {
        id: 2,
        name: 'Profile',
        namesub: [
            {
                id: 1,
                sub: 'Profile',
                links: '/namez'
            },
            {
                id: 1,
                sub: 'Disconnect',
                links: '#'
            },
        ],
    },
    
]

export default menus;