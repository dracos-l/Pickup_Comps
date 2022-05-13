const my_score = {'%AST':50, '%OREB':50, '%DREB':50, '%STL':50, '%BLK':50, 'Freq_6':50, 'Diff%_6':50, 'Freq_15':50, 'Diff%_15':50, 'Freq_Handoff_Off':50, 'eFG%_Handoff_Off':50, 'Freq_Iso_Def':50, 'eFG%_Iso_Def':50, 'Freq_Iso_Off':50, 'eFG%_Iso_Off':50, 'Freq_OffScreen_Off':50, 'eFG%_OffScreen_Off':50, 'Freq_P&R_Handler_Off':50, 'eFG%_P&R_Handler_Off':50, 'Freq_P&R_Man_Off':50, 'eFG%_P&R_Man_Off':50, 'Freq_Postup_Off':50, 'eFG%_Postup_Off':50, 'Freq_Putbacks_Off':50, 'eFG%_Putbacks_Off':50, 'Freq_Spotup_Off':50, 'eFG%_Spotup_Off':50, 'Freq_Tight':50, 'eFG%_Tight':50, 'Freq_Open':50, 'eFG%_Open':50, 'FGA_Catch_And_Shoot':50, 'EFG%_Catch_And_Shoot':50, 'FGA_Pull_Up':50, 'EFG%_Pull_Up':50, 'DRIVES_Drives':50, 'FG%_Drives':50, 'Height': 68};
const weights = {
    '%AST': 2, 
    '%OREB': 1.2,
    '%DREB': 1.5, 
    '%STL': 1.1, 
    '%BLK': 1.1, 
    '6': 2, 
    '15': 2, 
    'Handoff_Off': 0.7, 
    'Iso_Def': 2, 
    'Iso_Off': 1, 
    'OffScreen_Off': 0.7, 
    'P&R_Handler_Off': 1, 
    'P&R_Man_Off': 1, 
    'Postup_Off': 0.9, 
    'Putbacks_Off': 0.7, 
    'Spotup_Off': 0.6, 
    'Tight': 1, 
    'Open': 1, 
    'Catch_And_Shoot': 0.6, 
    'Pull_Up': 1, 
    'Drives': 1,
    'Height': 5
}

function loadNames(my_score) {

    const names = require(".//JSON_Data//Final_Final_Player_Precentile.json");

    return calculation(my_score, names);
    
}

function calculation(my_score, names) {
    let similarity = 0;
    let similarity_score = {}

    for (let i = 0; i < 351; i++) {
        similarity = 0
        similarity += (Math.abs(names[i]['%AST'] - my_score['%AST'])*weights['%AST']);
        similarity += (Math.abs(names[i]['%OREB'] - my_score['%OREB'])*weights['%OREB']);
        similarity += (Math.abs(names[i]['%DREB'] - my_score['%DREB'])*weights['%DREB']);
        similarity += (Math.abs(names[i]['%STL'] - my_score['%STL'])*weights['%STL']);
        similarity += (Math.abs(names[i]['%BLK'] - my_score['%BLK'])*weights['%BLK']);
        similarity += ((Math.abs(names[i]['FREQ_6'] - my_score['Freq_6']) + Math.abs(names[i]['Diff%_6'] - my_score['Diff%_6']))*weights['6']);
        similarity += ((Math.abs(names[i]['FREQ_15'] - my_score['Freq_15']) + Math.abs(names[i]['Diff%_15'] - my_score['Diff%_15']))*weights['15']);
        similarity += ((Math.abs(names[i]['Freq_Handoff_Off'] - my_score['Freq_Handoff_Off']) + Math.abs(names[i]['eFG%_Handoff_Off'] - my_score['eFG%_Handoff_Off']))*weights['Handoff_Off']);
        similarity += ((Math.abs(names[i]['Freq_Iso_Def'] - my_score['Freq_Iso_Def']) + Math.abs(names[i]['eFG%_Iso_Def'] - my_score['eFG%_Iso_Def']))*weights['Iso_Def']);
        similarity += ((Math.abs(names[i]['Freq_Iso_Off'] - my_score['Freq_Iso_Off']) + Math.abs(names[i]['eFG%_Iso_Off'] - my_score['eFG%_Iso_Off']))*weights['Iso_Off']);
        similarity += ((Math.abs(names[i]['Freq_OffScreen_Off'] - my_score['Freq_OffScreen_Off']) + Math.abs(names[i]['eFG%_OffScreen_Off'] - my_score['eFG%_OffScreen_Off']))*weights['OffScreen_Off']);
        similarity += ((Math.abs(names[i]['Freq_P&R_Handler_Off'] - my_score['Freq_P&R_Handler_Off']) + Math.abs(names[i]['eFG%_P&R_Handler_Off'] - my_score['eFG%_P&R_Handler_Off']))*weights['P&R_Handler_Off']);
        similarity += ((Math.abs(names[i]['Freq_P&R_Man_Off'] - my_score['Freq_P&R_Man_Off']) + Math.abs(names[i]['eFG%_P&R_Man_Off'] - my_score['eFG%_P&R_Man_Off']))*weights['P&R_Man_Off']);
        similarity += ((Math.abs(names[i]['Freq_Postup_Off'] - my_score['Freq_Postup_Off']) + Math.abs(names[i]['eFG%_Postup_Off'] - my_score['eFG%_Postup_Off']))*weights['Postup_Off']);
        similarity += ((Math.abs(names[i]['Freq_Putbacks_Off'] - my_score['Freq_Putbacks_Off']) + Math.abs(names[i]['eFG%_Putbacks_Off'] - my_score['eFG%_Putbacks_Off']))*weights['Putbacks_Off']);
        similarity += ((Math.abs(names[i]['Freq_Spotup_Off'] - my_score['Freq_Spotup_Off']) + Math.abs(names[i]['eFG%_Spotup_Off'] - my_score['eFG%_Spotup_Off']))*weights['Spotup_Off']);
        similarity += ((Math.abs(names[i]['Freq_Tight'] - my_score['Freq_Tight']) + Math.abs(names[i]['eFG%_Tight'] - my_score['eFG%_Tight']))*weights['Tight']);
        similarity += ((Math.abs(names[i]['Freq_Open'] - my_score['Freq_Open']) + Math.abs(names[i]['eFG%_Open'] - my_score['eFG%_Open']))*weights['Open']);
        similarity += ((Math.abs(names[i]['FGA_Catch_And_Shoot'] - my_score['FGA_Catch_And_Shoot']) + Math.abs(names[i]['EFG%_Catch_And_Shoot'] - my_score['EFG%_Catch_And_Shoot']))*weights['Catch_And_Shoot']);
        similarity += ((Math.abs(names[i]['FGA_Pull_Up'] - my_score['FGA_Pull_Up']) + Math.abs(names[i]['EFG%_Pull_Up'] - my_score['EFG%_Pull_Up']))*weights['Pull_Up']);
        similarity += ((Math.abs(names[i]['DRIVES_Drives'] - my_score['DRIVES_Drives']) + Math.abs(names[i]['FG%_Drives'] - my_score['FG%_Drives']))*weights['Drives']);
        similarity += ((Math.abs(names[i]['Height'] - (my_score['Height']+9))*weights['Height']))
        similarity_score[names[i]['Player']] = Math.round(similarity/42.3);
    }
    let five_people = {}
    let edit_similarity_score = similarity_score;
    for (let i = 0; i < 5; i++){
        five_people[minimum(edit_similarity_score)] = edit_similarity_score[minimum(edit_similarity_score)];
        delete edit_similarity_score[minimum(edit_similarity_score)];
    }

    return five_people
}


function minimum(scores){
    // get object keys array
    var keys = Object.keys(scores),
    // set initial value as first elemnt in array
        res = keys[0];

    // iterate over array elements
    keys.forEach(function(v) {
    // compare with current property value and update with the min value property
        res = + scores[res] > +scores[v] ? v : res;
    });

    return res;
};

export default loadNames;