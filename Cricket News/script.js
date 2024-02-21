async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=e78117ba-49f7-48e2-b324-737ac1f7627b&offset=0")
        .then(data => data.json())
        .then(data => {
            if(data.status != "success") return;

            const matchesList = data.data;

            if(!matchesList) return[];

            const relevantData = matchesList.map(match =>
                `<tr>
                <td>${match.name}</td>
                 <td>${match.status}</td>
                 </tr>`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `${match}`).join('');

            return relevantData;
        })
        .catch(e => console.log(e));
}


getMatchData();

