let information = new Object;

information = { // using an object for later use
    football: false,
    soccer: false,
    tennis: false,
    lacrosse: false,
    volleyball: false,
    ["ping-pong"]: false,
    badminton: false,
}

let sport = prompt("what is your favorite sport?" + "\n" + "\n" + "to see a list of recognized sports, type 'list'");

switch(sport) {
    case "list":
        alert("football" + "\n" + "soccer" + "\n" + "tennis" + "\n" + "lacrosse" + "\n" + "volleyball" + "\n" + "ping-pong" + "\n" + "badminton");
    break;

    case "football":
        information.football = true;
        alert("your favorite sport is football!");
    break;

    case "soccer":
        information.soccer = true;
        alert("your favorite sport is soccer!");
    break;

    case "tennis":
        information.tennis = true;
        alert("your favorite sport is tennis!");
    break;

    case "lacrosse":
        information.lacrosse = true;
        alert("your favorite sport is lacrosse!");
    break;

    case "volleyball":
        information.volleyball = true;
        alert("your favorite sport is volleyball!");
    break;

    //----------\\

    default:
        alert("please specify a recognized sport");
    break;
};