class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;
    }

    getCount(){
        database.ref('playerCount').on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            'playerCount': count
        });
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            'name' : this.name,
            'distance' : this.distance,
        });
    }

    static getPlayerInfo(){
        database.ref('players').on("value", (data)=>{
            allPlayers = data.val();
        })
    }

    getRank(){
        database.ref('carsAtEnd').on("value",(data)=>{
            this.rank = data.val();
        })
    }

    static updateRank(r){
        database.ref('/').update({
            carsAtEnd : r
        })
    }
}
