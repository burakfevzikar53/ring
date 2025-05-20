import React, { useEffect, useState } from 'react';
import './styles/App.css';
import './styles/Game.css';
import Intro from './pages/Intro';
import Game from './pages/Game';
import Proposal from './pages/Proposal';

function App() {
    const [stage, setStage] = useState('intro');

    useEffect(() => {
        // Oyun müziğini başlat
        const backgroundMusic = new Audio('/assets/sounds/background-music.mp3');
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.4;
        /* backgroundMusic.play(); */
        return () => backgroundMusic.pause();
    }, []);

    const handleStartGame = () => setStage('game');
    const handleShowProposal = () => setStage('proposal');
    const handleRestartGame = () => setStage('intro');

    return (
        <div className="app-container">
            {stage === 'intro' && <Intro onStart={handleStartGame} />}
            {stage === 'game' && <Game onProposal={handleShowProposal} />}
            {stage === 'proposal' && <Proposal onRestart={handleRestartGame} />}
        </div>
    );
}

export default App;
