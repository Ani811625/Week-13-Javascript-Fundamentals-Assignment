let package="overnight";
switch(package){
    case "standard":
        console.log("Delivery might take 3-5 days.");
        break;
    case "express":
        console.log("Delivery might take 1-2 days.");
        break;
    case "overnight":
        console.log("Delivery will be done by overnight .");
        break;
        default:
            console.log("Please enter the the proper type of package.Type of package entered is INVALID!!");
            break;
}