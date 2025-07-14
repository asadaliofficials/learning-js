console.log("hello");

let adjectives = {
  "first": "Crazy",
  "second": "Amazing",
  "third": "Fire",
};

let shopNames = {
  "first": "Engine",
  "second": "Foods",
  "third": "Garments",
};

let lastWords = {
  "first": "Shop",
  "second": "Limited",
  "third": "Hub",
};


for(let a =1; a<=3; a++){
  let adjective;
  if(a==1)  adjective = "first";
  else if(a==2) adjective = "second";
  else adjective = "third";

  for(let b = 1; b<=3; b++){
    let shopName;
    if(b==1) shopName = "first";
    else if(b==2) shopName = "second";
    else shopName = "third";
    
    for(let c = 1; c<=3; c++){
      let lastWord;
      if(c==1) lastWord = "first";
      else if(c==2) lastWord = "second";
      else lastWord = "third";

      console.log(`${adjectives[adjective]} ${shopNames[shopName]} ${lastWords[lastWord]}`);
    }
  }
}