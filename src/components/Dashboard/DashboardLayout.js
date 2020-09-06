import React from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSide } from "./DashboardSide";
import { DashboardSection } from "./DashboardSection";

export const Layout = (props) => {
	return (
		<div className="dashboard-container">
			<div className="row">
				<div className="col-2 side">
					<DashboardSide />
				</div>
				<div className="col-10 header">
					<DashboardHeader />
					<DashboardSection>{props.children}</DashboardSection>
				</div>
			</div>
		</div>
	);
};
