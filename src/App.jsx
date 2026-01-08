
    return (
        <div className="container">
            <h1 className="title">КАРАТЭ-ДО</h1>
            <p className="subtitle" style={{ minHeight: '1.2em', color: '#d00000' }}>{text}|</p>

            <div className="fade-in-section">
                <h2 className="section-header">Философия Будо</h2>
                <p>
                    Каратэ-до - это не просто набор ударов и блоков. Это система самосовершенствования, где "До" (Путь) означает бесконечный процесс работы над своим характером.
                </p>

                <h2 className="section-header">Триединство Каратэ</h2>
                <div className="grid-layout">
                    <div className="feature-box">
                        <h4>КИХОН</h4>
                        <p>Базовая техника. Отработка движений до автоматизма.</p>
                    </div>
                    <div className="feature-box">
                        <h4>КАТА</h4>
                        <p>Бой с тенью. Комплексы движений древних мастеров.</p>
                    </div>
                    <div className="feature-box">
                        <h4>КУМИТЭ</h4>
                        <p>Свободный поединок. Применение знаний на практике.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const BeltsPage = () => {
    const [activeBelt, setActiveBelt] = useState(null);

    const belts = [
        { color: 'Белый', level: '10-9 Кю', kanji: '白', desc: 'Чистота и начало. Символ чистого листа, на котором мастер начинает писать.' },
        { color: 'Желтый', level: '8 Кю', kanji: '黄', desc: 'Первый проблеск света. Понимание базовых принципов механики тела.' },
        { color: 'Оранжевый', level: '7 Кю', kanji: '橙', desc: 'Символ энергии солнца. Рост силы и выносливости.' },
        { color: 'Зеленый', level: '6 Кю', kanji: '緑', desc: 'Росток. Техника начинает приносить плоды, движения становятся увереннее.' },
        { color: 'Синий', level: '5-4 Кю', kanji: '青', desc: 'Текучесть воды. Ученик учится адаптироваться к движениям противника.' },
        { color: 'Коричневый', level: '3-1 Кю', kanji: '茶', desc: 'Зрелость и мощь. Техника становится твердой и эффективной.' },
        { color: 'Черный', level: '1 Дан', kanji: '黒', desc: 'Мудрость. Черный цвет впитал в себя все остальные. Это новое начало.' }
    ];

    return (
        <div className="container">
            <h1 className="title">Иерархия</h1>
            <p className="subtitle">Нажми на пояс, чтобы узнать его секрет</p>
            <div className="belts-list">
                {belts.map((b, i) => (
                    <div
                        key={i}
                        className={`belt-card ${activeBelt === i ? 'active' : ''}`}
                        onClick={() => setActiveBelt(activeBelt === i ? null : i)}
                    >
                        <div className="kanji-bg">{b.kanji}</div>
                        <div className="belt-info">
                            <h3>{b.color} пояс <span className="level">({b.level})</span></h3>
                            <div className={`description ${activeBelt === i ? 'show' : ''}`}>
                                {b.desc}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const CodePage = () => (
    <div className="container">
        <h1 className="title">ДОДЗЁ-КУН</h1>
        <p className="subtitle">Пять золотых правил</p>
        <div className="code-card">
            <ol className="dojo-list">
                <li>Стремиться к совершенствованию характера!</li>
                <li>Быть искренним, верным и честным!</li>
                <li>Постоянно прилагать усилия!</li>
                <li>Уважать этикет и других людей!</li>
                <li>Воздерживаться от насилия и вспыльчивости!</li>
            </ol>
            <p className="oss-text">OSS! 🥋</p>
        </div>
    </div>
);

export default function App() {
    return (
        <Router>
            <Helmet>
  <meta name="google-site-verification" content="FCPcmOjgZk1ZM777I1_alQ9W_5u_LVvugCI68uDTbXU" />
</Helmet>

            <nav className="navbar">
                <Link className="nav-link" to="/">Путь</Link>
                <Link className="nav-link" to="/belts">Пояса</Link>
                <Link className="nav-link" to="/code">Кодекс</Link>
            </nav>

            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/belts" element={<BeltsPage />} />
                <Route path="/code" element={<CodePage />} />
            </Routes>
        </Router>
    );
}
