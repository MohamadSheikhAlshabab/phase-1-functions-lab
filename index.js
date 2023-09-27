const SCUBER_HEADQUARTERS_STREET_NUMBER = 42;

function distanceFromHqInBlocks(numberOfBlocks){
    let result = 0;
    
    result = numberOfBlocks >= SCUBER_HEADQUARTERS_STREET_NUMBER ?
    numberOfBlocks - SCUBER_HEADQUARTERS_STREET_NUMBER :
    SCUBER_HEADQUARTERS_STREET_NUMBER - numberOfBlocks;

    return result;
}

function distanceFromHqInFeet(numberOfBlocks){
    let result = 0;
    
    result = numberOfBlocks >= SCUBER_HEADQUARTERS_STREET_NUMBER ?
    (numberOfBlocks - SCUBER_HEADQUARTERS_STREET_NUMBER) * 264 :
    (SCUBER_HEADQUARTERS_STREET_NUMBER - numberOfBlocks) * 264;

    return result;
}

function distanceTravelledInFeet( startPoint , endPoint ){
    let result = 0;
    
    result = endPoint >= startPoint ?
    (endPoint - startPoint) * 264 :
    (startPoint - endPoint) * 264;

    return result;
}

function calculatesFarePrice(start, destination) {
    let fare  = 0;
    let distanceTravelled = destination - start;
    
    if (distanceTravelled < 0 )
        distanceTravelled  *=  -1 ;
    
    const distanceTravelledInFeet =  distanceTravelled * 264;

    if (distanceTravelledInFeet <= 400)
        fare = 0
    else if ( distanceTravelledInFeet > 400 && distanceTravelledInFeet < 2000 )
        fare = ( distanceTravelledInFeet - 400 ) * 0.02
    else if ( distanceTravelledInFeet >= 2000 && distanceTravelledInFeet <= 2500 )
        fare = 25
    else
        fare = 'cannot travel that far';
    return fare;
}
