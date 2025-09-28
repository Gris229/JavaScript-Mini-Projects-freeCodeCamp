
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

/*
//Ceci est ma fonction... à comparer avec l'autre après ...

function updateRecords(records, id, prop, value) {
  //records[id][prop] = value;

  if (value === "") {
    delete records[id][prop];
  }

  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
    return records;
  }

  if (prop === "tracks" && value !== "" && !records[id].hasOwnProperty("tracks")) {
    let update = records[id][prop] = [];
    update.push(value);
  };

  if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks")) {
    let update = records[id][prop];
    update.push(value);
  }
  
  return records;
}*/

//Fonction copié et qui marche alors que ma propre fonction [plus haut] ne marche pas... j'ai alors décidé de copier cette fonction et de la comparer avec la mienne après ...

const updateRecords = (records, id, prop, value) => {

  if (value === "") {
    
      delete records[id][prop];
        return records;
        }

        else if (prop !== "tracks" && value !== "") {
          
            records[id][prop] = value; 
              return records;
              }

              else if (prop === "tracks" && value !== "" && !records[id].hasOwnProperty("tracks")) 
              {

                records[id][prop] = [];
                  records[id][prop].push(value);
                    return records;

                    }

                    else if (prop === "tracks" && value !== "") {
                      
                        let update = records[id][prop];
                          update.push(value);
                            return records;
                            }
                            }


updateRecords(recordCollection, 5439, "artist", "ABBA");

console.log(recordCollection);

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");

console.log(recordCollection);


updateRecords(recordCollection, 2468, "tracks", "Free");

console.log(recordCollection);
