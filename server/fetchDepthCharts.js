
const FetchDepthCharts = async () =>{
    await fetch(process.env.NFL_SPORTS_URL)
        .then(res => res.json())
        .then((res) => {
            const teams = res.map((e) =>{
                let obj = {}
                obj.teamID = e.TeamID;
                obj.offense = e.Offense;

                return obj;
            })

            console.log(`Team ID: ${teams[0].teamID}`);
            const offenseDepth = teams[0].offense;
            const startingLineUp = offenseDepth.map((obj) =>{
                if(obj.DepthOrder === 1)
                    return obj;
            });

            console.log(startingLineUp);
        })
        .catch(err => console.log(err))
}

export default FetchDepthCharts
