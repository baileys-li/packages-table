import "./OnlineStatus.scss";

function OnlineStatus({ online = false }) {
	return (
		<p className={`online-status ${!online && "online-status--off"}`}>
			{online ? "online" : "offline"}
		</p>
	);
}

export default OnlineStatus;
