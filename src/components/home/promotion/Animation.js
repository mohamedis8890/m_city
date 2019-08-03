import React from "react";
import Zoom from "react-reveal/Zoom";
import jerseyImage from "../../../Resources/images/jersey.jpg";

export default function PromotionAnimation() {
	return (
		<div className="promotion_animation">
			<div className="left">
				<Zoom>
					<div>
						<span>Win A</span>
						<span>Jersey</span>
					</div>
				</Zoom>
			</div>
			<div className="right">
				<Zoom>
					<div style={{ background: `url(${jerseyImage}) no-repeat` }} />
				</Zoom>
			</div>
		</div>
	);
}
