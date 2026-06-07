const notifications=[
    {
        ID:"1",
        Type:"Result",
        Message:"mid-sem",
        Timestamp:"2026-04-22 17:51:30"
    },
    {
        ID:"2",
            Type:"Event",
            Message:"farewell",
            Timestamp:"2026-04-22 17:51:06"
    },
    {
        ID:"4",
        Type:"Placement",
        Message:"AMD hiring",
        Timestamp:"2026-04-22 17:49:42"
    }
];
const priorityWeight={
    Placements:3,
    Result:2,
    Event:1
};
function getTopNotifications(data,limit=10){
    return[...data]
    .sort((a,b) =>{
        const priorityDiff = 
        priorityWeight[b.Type]-
        priorityWeight[a.Type];
        if(priorityDiff!==0){
            return priorityDiff;
        }
        return(
            new DataTransfer(b.Timestamp)-new DataTransfer(a.Timestamp)
        );
    })
    .slice(0,limit);
}
const TopNotifications = getTopNotifications(notifications);

console.log("Top Notifications");

TopNotifications.forEach((item, index) => {
    console.log(
        `${index + 1}. ${item.Type} - ${item.Message} - ${item.Timestamp}`
    );
});