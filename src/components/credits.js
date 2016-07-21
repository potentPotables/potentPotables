import React, { Component } from 'react';

export default class Credits extends Component {
	render() {
		return (
			<div className="creditsContainer">
				<div className="creditsTitle">Credits</div>
				
				<div className="creditsText">
					
					<div id="jService">
						<img id="jServiceLogo" src="http://50.112.42.29/assets/jService.png" height="209" width="225"/>
						<div id="jServiceTitle">
							<p>jService</p> 
							<p>(by Steve Ottenad)</p>
						</div>
						<div id="jServiceText">
							<p>Steve Ottenad Github: <a className="creditsLink" href="https://github.com/sottenad">@sottenad</a></p>
							<p>Project Github: <a className="creditsLink" href="https://github.com/sottenad/jService">jService</a></p>
							<p style={{color: "yellow"}}>(All Jeopardy categories and clues provided by jService.  Thanks for helping to make this project possible.)</p>
						</div>
					</div>
					
					<div id="webFonts">
						<div id="webFontsTitle">
						<p>Fonts provided by:</p>
						<p><a className="creditsLink" href="http://www.onlinewebfonts.com">Online Webfonts</a></p>
						<p><a className="creditsLink" href="http://www.onlinewebfonts.com">www.onlinewebfonts.com</a></p>
						</div>
						<div id="webFontsText">
							<p style={{fontFamily: "Korinna-BT", color: "white", textShadow: "2px 2px black"}}>Korinna-BT</p>
							<p style={{fontFamily: "Swiss-911", color: "yellow", fontWeight: "lighter"}}>Swiss-911</p>
							<p style={{fontFamily: "Gyparody", color: "blue", fontWeight: "lighter", backgroundColor: "#FEE533", padding: "10px", borderRadius: "10px", width: "50%", margin: "auto"}}>Gyparody</p>
						</div>
					</div>

				</div>

			</div>
		);
	}
}