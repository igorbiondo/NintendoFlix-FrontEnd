import './warning.styles.scss';
const Warning = () => {
	return (
		<div className="warning-message">
			<h1>Atenção</h1>
			<p>
				A API do sistema está hospedada em um serviço
				gratuito que interrompe a execução quando não está
				sendo utilizado, portanto por favor aguarde um
				instate para que o serviço seja iniciado e reinicie
				a pagina!
			</p>
		</div>
	);
};

export default Warning;
