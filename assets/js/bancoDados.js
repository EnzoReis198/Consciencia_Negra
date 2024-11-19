let bancoDados = {
    paises: [
        { id: 1, nome: 'África do Sul', descricao: 'África do Sul é um país multicultural localizado na ponta sul da África, conhecido por sua biodiversidade e pela história do apartheid.'},
        { id: 2, nome: 'Angola', descricao: 'Angola está localizada no sudoeste da África, conhecida por sua rica cultura Bantu e paisagens variadas que incluem praias e desertos.' },
        { id: 3, nome: 'Argélia', descricao: 'A Argélia é o maior país da África, com vastos desertos e uma população que reflete tradições árabes e berberes.'  },
        { id: 4, nome: 'Benin', descricao: 'Benin é uma nação da África Ocidental, berço do Reino do Daomé e com fortes tradições culturais e religiosas, incluindo o vodu.' },
        { id: 5, nome: 'Botsuana', descricao: 'Botsuana, no sul da África, é famosa por sua democracia estável, vastos parques de vida selvagem e o deserto do Kalahari.' },
        { id: 6, nome: 'Burkina Faso', descricao: 'Burquina Faso é um país da África Ocidental conhecido por sua cultura rica em música e dança, com uma economia baseada na agricultura.'  },
        { id: 7, nome: 'Burundi', descricao: 'Burundi, no leste da África, tem forte cultura Hutu-Tutsi e enfrenta desafios sociais, mas celebra sua música tradicional vibrante.' },
        { id: 8, nome: 'Cabo Verde', descricao: 'Cabo Verde é um arquipélago vulcânico na África Ocidental, conhecido por sua música, dança morna e belas paisagens costeiras.' },
        { id: 9, nome: 'Camarões', descricao: 'Camarões possui uma rica diversidade cultural e geográfica, com florestas tropicais, savanas e povos de várias etnias.' },
        { id: 10, nome: 'Chade', descricao: 'Chade é um país sem litoral na África Central, com vastas áreas desérticas e uma população de diversas origens culturais.' },
        { id: 11, nome: 'Comores', descricao: 'Comores é um arquipélago no Oceano Índico, famoso por suas ilhas tropicais e influência árabe, africana e francesa.' },
        { id: 12, nome: 'Costa do Marfim', descricao: 'Costa do Marfim, na África Ocidental, é conhecida por sua produção de cacau, cultura diversificada e forte tradição musical.'  },
        { id: 13, nome: 'Djibouti', descricao: 'Djibouti é um pequeno país na África Oriental com localização estratégica no Mar Vermelho e rica mistura de cultura árabe e africana.'  },
        { id: 14, nome: 'Egito', descricao: 'Egito, no norte da África, é famoso por sua antiga civilização faraônica e seu papel crucial no mundo árabe moderno.' },
        { id: 15, nome: 'Eritreia', descricao: 'Eritreia está localizada no Chifre da África, com forte herança cultural influenciada por suas raízes etíopes e italianas.' },
        { id: 16, nome: 'Eswatini (Suazilândia)', descricao: 'Eswatini, também conhecido como Suazilândia, é um pequeno reino no sul da África com cultura Zulu e belas paisagens.'  },
        { id: 17, nome: 'Etiópia', descricao: 'Etiópia é uma das nações mais antigas do mundo, conhecida por seu cristianismo antigo, café e rica história cultural.'  },
        { id: 18, nome: 'Gabão', descricao: 'Gabão, na África Central, tem florestas tropicais extensas e uma cultura influenciada pelas tradições Bantu e colonização francesa.' },
        { id: 19, nome: 'Gâmbia', descricao: 'Gâmbia é o menor país da África continental, conhecido por seu rio homônimo e rica tradição cultural na música e dança.' },
        { id: 20, nome: 'Gana', descricao: 'Gana é uma nação da África Ocidental conhecida por sua história rica, minas de ouro e tradição Ashanti.'  },
        { id: 21, nome: 'Guiné', descricao: 'Guiné é um país na costa ocidental da África, famoso por sua diversidade étnica e vastos recursos minerais.'  },
        { id: 22, nome: 'Guiné Equatorial', descricao: 'Guiné Equatorial é o único país africano com o espanhol como idioma oficial, com riqueza de petróleo e cultura influenciada por colonização.'  },
        { id: 23, nome: 'Guiné-Bissau', descricao: 'Guiné-Bissau é um pequeno país da África Ocidental, conhecido por suas ilhas Bijagós e rica cultura indígena.' },
        { id: 24, nome: 'Lesoto', descricao: 'Lesoto é um reino montanhoso completamente cercado pela África do Sul, conhecido por seu povo Basotho e tradições culturais.'  },
        { id: 25, nome: 'Libéria', descricao: 'Libéria, na África Ocidental, foi fundada por escravizados libertos dos EUA e possui uma rica herança afro-americana.' },
        { id: 26, nome: 'Líbia', descricao: 'Líbia é um país do norte da África, conhecido por suas vastas áreas desérticas e forte influência árabe.' },
        { id: 27, nome: 'Madagascar', descricao: 'Madagáscar é a maior ilha da África, famosa por sua biodiversidade única e cultura malgaxe influenciada por povos africanos e asiáticos.' },
        { id: 28, nome: 'Malawi', descricao: 'Malawi é um país no sudeste da África, conhecido pelo Lago Malawi e pela hospitalidade de seu povo.' },
        { id: 29, nome: 'Mali', descricao: 'Mali, na África Ocidental, é lar de Timbuktu e de rica herança cultural do Império Mali.'  },
        { id: 30, nome: 'Marrocos', descricao: 'Marrocos, na região do Magrebe, é conhecido por suas medinas, cultura árabe-berbere e paisagens desérticas.' },
        { id: 31, nome: 'Mauritânia', descricao: 'Mauritânia, no noroeste da África, tem vastas áreas desérticas e uma cultura influenciada por tradições árabes e berberes.' },
        { id: 32, nome: 'Maurício', descricao: 'Maurício é uma ilha no Oceano Índico famosa por suas praias e cultura diversificada com influências africanas, indianas e europeias.' },
        { id: 33, nome: 'Moçambique', descricao: 'Moçambique é um país do sudeste africano, conhecido por suas praias tropicais e cultura de influência portuguesa.'  },
        { id: 34, nome: 'Namíbia', descricao: 'Namíbia, no sudoeste da África, é famosa pelo deserto da Namíbia e pela herança colonial alemã.' },
        { id: 35, nome: 'Níger', descricao: 'Níger é um vasto país desértico na África Ocidental, com cultura tuaregue e desafios econômicos e climáticos.' },
        { id: 36, nome: 'Nigéria', descricao: 'Nigéria é a nação mais populosa da África, conhecida por sua diversidade étnica e vibrante indústria de entretenimento Nollywood.' },
        { id: 37, nome: 'Quênia', descricao: 'Quênia é famoso por seus safáris, cultura Maasai e paisagens variadas, que incluem o Vale do Rift e montanhas.' },
        { id: 38, nome: 'República Centro-Africana', descricao: 'A República Centro-Africana tem rica biodiversidade e é conhecida pela diversidade cultural de seus povos.' },
        { id: 39, nome: 'República Democrática do Congo', descricao: 'A RDC, no coração da África, é rica em recursos minerais e tem vasta cultura e história.'  },
        { id: 40, nome: 'República do Congo', descricao: 'A República do Congo, na África Central, é coberta por florestas tropicais densas e possui uma rica herança cultural e diversidade de grupos étnicos.' },
        { id: 41, nome: 'Ruanda', descricao: 'Ruanda é conhecida como a "terra das mil colinas", com paisagens montanhosas e uma impressionante recuperação social e econômica após o genocídio de 1994.' },
        { id: 42, nome: 'São Tomé e Príncipe', descricao: 'São Tomé e Príncipe é um pequeno arquipélago no Golfo da Guiné, conhecido por suas paisagens tropicais e produção de cacau.' },
        { id: 43, nome: 'Senegal', descricao: 'Senegal é um país da África Ocidental com rica tradição musical e cultural, e famoso pela hospitalidade do seu povo.'  },
        { id: 44, nome: 'Serra Leoa', descricao: 'Serra Leoa, na África Ocidental, é conhecida por suas praias, minas de diamantes e rica diversidade cultural.' },
        { id: 45, nome: 'Seychelles', descricao: 'Seychelles é um arquipélago no Oceano Índico famoso por suas praias paradisíacas e rica vida marinha.' },
        { id: 46, nome: 'Somália', descricao: 'Somália, localizada no Chifre da África, tem uma longa costa e cultura moldada por tradições nômades.' },
        { id: 47, nome: 'Sudão', descricao: 'Sudão é o terceiro maior país da África, com uma história milenar e forte influência árabe-africana.'  },
        { id: 48, nome: 'Sudão do Sul', descricao: 'Sudão do Sul, o país mais jovem do mundo, é rico em diversidade étnica e enfrenta desafios desde sua independência.' },
        { id: 49, nome: 'Tanzânia', descricao: 'Tanzânia abriga o Monte Kilimanjaro e é famosa por suas reservas naturais e a ilha de Zanzibar.' },
        { id: 50, nome: 'Togo', descricao: 'Togo é um país estreito na África Ocidental, com rica tradição de culturas tribais e comércio costeiro.'  },
        { id: 51, nome: 'Tunísia', descricao: 'Tunísia, no norte da África, é conhecida por suas ruínas romanas e cultura influenciada pela história mediterrânea.' },
        { id: 52, nome: 'Uganda', descricao: 'Uganda é chamada de "Pérola da África" devido à sua biodiversidade e cultura diversificada, incluindo tribos locais.' },
        { id: 53, nome: 'Zâmbia', descricao: 'Zâmbia é um país sem litoral no sul da África, famoso por suas cataratas Vitória e vasta vida selvagem.'  },
        { id: 54, nome: 'Zimbábue', descricao: 'Zimbábue, localizado no sul da África, é conhecido por suas ruínas de pedra antigas e a rica diversidade natural.' }
    ]
}

export default bancoDados;

{
    paises: [
        
        { nome_pais: 'Tunísia' },
        { nome_pais: 'Uganda' }
    ]
}


