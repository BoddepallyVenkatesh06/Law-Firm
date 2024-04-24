import React from 'react'
import "./Team.css"
import user1 from "../assests/team1.svg";
import user2 from "../assests/team2.svg";
import user3 from "../assests/team3.svg";
import user4 from "../assests/team4.svg";
import user5 from "../assests/team5.svg";
import user6 from "../assests/team6.svg";
import { Box, Grid } from "@mui/material";



const teamData = [
	{
		id: 1,
		image: user1,
		name: "Danial Def",
		cases: 301,
	},
	{
		id: 2,
		image: user2,
		name: "Sanfole",
		cases: 850,
	},
	{
		id: 3,
		image: user3,
		name: "Cesforila",
		cases: 470,
	},
	{
		id: 4,
		image: user4,
		name: "Colleen",
		cases: 180,
	},
	{
		id: 5,
		image: user5,
		name: "Haldone",
		cases: 212,
	},
	{
		id: 6,
		image: user6,
		name: "Nik Jeo",
		cases: 350,
	},
];


const Team = () => {
  return (
    <div className="team-wrapper">
				<div className="team-header">
					<h3>Our Team</h3>
				</div>
				<div className="team-container">
					<Box sx={{ flexGrow: 1 }}>
						<Grid
							container
							spacing={{ xs: 2, md: 6 }}
							columns={{ xs: 4, sm: 8, md: 12 }}>
							{teamData.map((each, index) => {
                                const {image,name,cases} = each;
                                return (
                                    <Grid item xs={2} sm={4} md={4} key={index}>
									<div className="team-grid">
										<div className="client-img">
											<img src={image} alt="team-member"/>
										</div>
										<div className="text-wrapper">
											<h5>{name}</h5>
											<p>{cases} Cases</p>
										</div>
									</div>
								</Grid>
                                )
                                })}
						</Grid>
					</Box>
				</div>
			</div>
  )
}

export default Team
