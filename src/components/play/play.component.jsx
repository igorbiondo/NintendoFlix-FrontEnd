import { Fragment, useState, useEffect } from 'react';
import './play.styles.scss';

const Play = ({ style, rom }) => {
	const [emulatorConfig, setEmulatorConfig] = useState({
		player: '#game',
		gameUrl: `http://127.0.0.1:3001/games/rom/1/${rom.rom}`,
		core: 'snes',
		mouse: false,
		multitap: false,
		pathToData: '../data/',
		language: 'pt-BR',
		startOnLoaded: false,
		// gameId: 1,
		// serveUrl: 'http://127.0.0.1:3005/',
		// oldCore: true,
		// ligGun: false,
	});
	useEffect(() => {
		const handleUnload = () => {
			console.log('saindo');
		};

		return () => {
			window.removeEventListener('load', handleUnload);
		};
	}, []);

	useEffect(() => {
		const root = document.querySelector('#root');
		const script = document.createElement('script');

		const quitGame = () => {
			const navWindow = window;
			navWindow.EJS_terminate();
			delete navWindow.EJS_RESET_VARS;
			delete navWindow.EJS_core;
			delete navWindow.EJS_emulator;
			delete navWindow.EJS_emulator;
			delete navWindow.EJS_gameID;
			delete navWindow.EmulatorJS;
			delete navWindow.EJS_gameUrl;
			delete navWindow.EJS_player;
			delete navWindow.EJS_lightgun;
			delete navWindow.EJS_oldCores;
			delete navWindow.EJS_netplay;
			delete navWindow.EJS_netplayUrl;
			delete navWindow.EJS_pathtodata;

			const body = document.body;
			const scripts = body.querySelectorAll('script');
			scripts.forEach((script) => {
				script.remove();
			});

			const script1 = document.querySelectorAll(
				'script[src="../data/emu-min.js?v=1.1"]'
			);
			script1.forEach((script) => {
				script.remove();
			});
		};

		window.addEventListener('popstate', quitGame);

		script.type = 'text/javascript';
		script.text = `
			
					EJS_player = '${emulatorConfig.player}';
					EJS_gameUrl = '${emulatorConfig.gameUrl}';
					EJS_core = '${emulatorConfig.core}';
					EJS_gameID = ${emulatorConfig.gameId};
					EJS_pathtodata = '${emulatorConfig.pathToData}';
					EJS_netplayUrl = '${emulatorConfig.serveUrl}';
					EJS_lightgun = ${emulatorConfig.ligGun}
					EJS_oldCores = ${emulatorConfig.oldCore};
					`;
		// EJS_mouse = ${emulatorConfig.mouse};
		// EJS_multitap = ${emulatorConfig.multitap};
		// EJS_startOnLoaded = ${emulatorConfig.startOnLoaded};
		// EJS_language = '${emulatorConfig.language}';

		const script2 = document.createElement('script');
		script2.type = 'text/javascript';
		script2.src = '../data/loader.js';
		root.insertAdjacentElement('afterend', script);
		root.insertAdjacentElement('afterend', script2);
	}, [emulatorConfig]);

	return (
		<Fragment>
			<div className="display" style={{ ...style }}>
				<div id="game"></div>
			</div>
		</Fragment>
	);
};

export default Play;
