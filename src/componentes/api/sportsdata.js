
  
  /*
  <div style={{ marginBottom: '20px' }}>
    <input
      name="country"
      type="text"
      onChange={(e) => setIdentifier(e.target.value)}
      value={identifier}
      placeholder="Enter a country name, UN Code, ISO Alpha-2, or ISO Alpha-3 Code"
    />
    <button onClick={handleButtonClick}>Get Flag</button>
</div>
<img src={flagURL} alt="flag" />
*/
  /*
  const sportsdataleague = {
    url: 'https://app.sportdataapi.com/api/v1/soccer/leagues?apikey='+apikey,
  }
    const sportsdataleague = [{"league_id":1,"country_id":1,"name":"CAF Super Cup"},{"league_id":2,"country_id":1,"name":"World Cup Qualification - CAF"},{"league_id":3,"country_id":1,"name":"African Games"},{"league_id":4,"country_id":1,"name":"Africa Cup of Nations"},{"league_id":5,"country_id":1,"name":"Africa Cup of Nations Qualification"},{"league_id":6,"country_id":1,"name":"COSAFA Cup"},{"league_id":7,"country_id":1,"name":"African Nations Championship"},{"league_id":8,"country_id":1,"name":"CAF Champions League"},{"league_id":9,"country_id":1,"name":"CAF Confederations Cup"},{"league_id":10,"country_id":1,"name":"Africa Cup of Nations U20"},{"league_id":11,"country_id":1,"name":"Africa Cup of Nations U23"},{"league_id":12,"country_id":1,"name":"African Championship Women"},{"league_id":13,"country_id":10,"name":"Ligue 1"},{"league_id":14,"country_id":10,"name":"Algeria Cup"},{"league_id":15,"country_id":10,"name":"Ligue 2"},{"league_id":16,"country_id":10,"name":"Super Cup"},{"league_id":17,"country_id":12,"name":"Girabola"},{"league_id":18,"country_id":24,"name":"Premier League"},{"league_id":19,"country_id":28,"name":"Elite One"},{"league_id":20,"country_id":33,"name":"Ligue 1"},{"league_id":21,"country_id":40,"name":"Premier League"},{"league_id":22,"country_id":40,"name":"Super Cup"},{"league_id":23,"country_id":40,"name":"Egypt Cup"},{"league_id":24,"country_id":49,"name":"Premier League"},{"league_id":25,"country_id":49,"name":"FA Cup"},{"league_id":26,"country_id":63,"name":"Ligue 1"},{"league_id":27,"country_id":63,"name":"Coupe Nationale"},{"league_id":28,"country_id":63,"name":"Super Cup"},{"league_id":29,"country_id":68,"name":"Premier League"},{"league_id":30,"country_id":81,"name":"Botola Pro"},{"league_id":31,"country_id":81,"name":"Coupe du Trone"},{"league_id":32,"country_id":81,"name":"Botola 2"},{"league_id":33,"country_id":86,"name":"NPFL"},{"league_id":34,"country_id":103,"name":"National Football league"},{"league_id":35,"country_id":107,"name":"Ligue 1"},{"league_id":36,"country_id":112,"name":"Premier League"},{"league_id":37,"country_id":112,"name":"FA Cup"},{"league_id":38,"country_id":112,"name":"League Cup"},{"league_id":39,"country_id":112,"name":"MTN 8 Cup"},{"league_id":40,"country_id":112,"name":"Black Label Cup"},{"league_id":41,"country_id":112,"name":"National First Division"},{"league_id":42,"country_id":116,"name":"Ligi Kuu Bara"},{"league_id":43,"country_id":119,"name":"Ligue Professionnelle 1"},{"league_id":44,"country_id":119,"name":"Ligue Professionnelle 2"},{"league_id":45,"country_id":119,"name":"Super Cup"},{"league_id":46,"country_id":119,"name":"Tunisia Cup"},{"league_id":47,"country_id":121,"name":"Super 8"},{"league_id":48,"country_id":121,"name":"Premier League"},{"league_id":49,"country_id":130,"name":"Super League"},{"league_id":50,"country_id":131,"name":"Premier Soccer League"},{"league_id":51,"country_id":2,"name":"U23 AFC Championship"},{"league_id":52,"country_id":2,"name":"World Cup Qualification - AFC"},{"league_id":53,"country_id":2,"name":"AFC Olympic Qualification Women"},{"league_id":54,"country_id":2,"name":"Asian Cup"},{"league_id":55,"country_id":2,"name":"Asian Cup Qualification"},{"league_id":56,"country_id":2,"name":"Asian Cup Women"},{"league_id":57,"country_id":2,"name":"Asian Games"},{"league_id":58,"country_id":2,"name":"SAFF Championship"},{"league_id":59,"country_id":2,"name":"AFF Suzuki Cup"},{"league_id":60,"country_id":2,"name":"EAFF E-1 Football Championship"},{"league_id":61,"country_id":2,"name":"EAFF E-1 Football Championship Women"},{"league_id":62,"country_id":2,"name":"Gulf Cup of Nations"},{"league_id":63,"country_id":2,"name":"AFC Champions League"},{"league_id":64,"country_id":2,"name":"AFC Cup"},{"league_id":65,"country_id":2,"name":"U22 Southeast Asian Games "},{"league_id":66,"country_id":2,"name":"AFC Championship U19"},{"league_id":67,"country_id":2,"name":"AFC Championship Women U19"},{"league_id":68,"country_id":2,"name":"Asian Games Women"},{"league_id":69,"country_id":2,"name":"Premier League Asia Trophy"},{"league_id":70,"country_id":2,"name":"Southeast Asian Games Women"},{"league_id":71,"country_id":2,"name":"U23 AFC Championship Qualification"},{"league_id":72,"country_id":2,"name":"WAFF Championship"},{"league_id":73,"country_id":15,"name":"A-League"},{"league_id":74,"country_id":15,"name":"W-League"},{"league_id":75,"country_id":15,"name":"NPL South Australian"},{"league_id":76,"country_id":15,"name":"NPL Victoria"},{"league_id":77,"country_id":15,"name":"FFA Cup"},{"league_id":78,"country_id":15,"name":"Brisbane Premier League"},{"league_id":79,"country_id":15,"name":"Brisbane Premier League - Women\t"},{"league_id":80,"country_id":15,"name":"NPL Capital Football\t"},{"league_id":81,"country_id":15,"name":"NPL New South Wales\t"},{"league_id":82,"country_id":15,"name":"NPL Northern NSW"},{"league_id":83,"country_id":15,"name":"NPL Queensland"},{"league_id":84,"country_id":15,"name":"NPL South Australia Women"},{"league_id":85,"country_id":15,"name":"NPL Tasmania"},{"league_id":86,"country_id":15,"name":"NPL Victoria"},{"league_id":87,"country_id":15,"name":"NPL Western Australia"},{"league_id":88,"country_id":15,"name":"Women's NPL Queensland"},{"league_id":89,"country_id":15,"name":"Y-League"},{"league_id":90,"country_id":18,"name":"Premier League"},{"league_id":91,"country_id":18,"name":"Federation Cup"},{"league_id":92,"country_id":18,"name":"2nd Division"},{"league_id":93,"country_id":18,"name":"King's Cup"},{"league_id":94,"country_id":27,"name":"Premier League"},{"league_id":95,"country_id":31,"name":"Super League"},{"league_id":96,"country_id":31,"name":"Jia League"},{"league_id":97,"country_id":31,"name":"CFA Cup"},{"league_id":98,"country_id":31,"name":"China League 2"},{"league_id":99,"country_id":31,"name":"Chinese Super League, Women"},{"league_id":100,"country_id":31,"name":"Super Cup"},{"league_id":101,"country_id":54,"name":"Premier League"},{"league_id":102,"country_id":54,"name":"Division 1"},{"league_id":103,"country_id":54,"name":"Reserve Division"},{"league_id":104,"country_id":54,"name":"FA Cup"},{"league_id":105,"country_id":57,"name":"I-League"},{"league_id":106,"country_id":57,"name":"ISL"},{"league_id":107,"country_id":57,"name":"Hero Super Cup"},{"league_id":108,"country_id":58,"name":"Liga 1"},{"league_id":109,"country_id":59,"name":"Persian Gulf Pro League"},{"league_id":110,"country_id":59,"name":"Division 1"},{"league_id":111,"country_id":59,"name":"Hazfi Cup"},{"league_id":112,"country_id":65,"name":"J1 League"},{"league_id":113,"country_id":65,"name":"J2 League"},{"league_id":114,"country_id":65,"name":"Emperors Cup"},{"league_id":115,"country_id":65,"name":"Super Cup"},{"league_id":116,"country_id":65,"name":"YBC Levain Cup"},{"league_id":117,"country_id":65,"name":"J3 League"},{"league_id":118,"country_id":65,"name":"Nadeshiko League Women"},{"league_id":119,"country_id":66,"name":"Premier League"},{"league_id":120,"country_id":66,"name":"Jordan Cup"},{"league_id":121,"country_id":66,"name":"Premier League"},{"league_id":122,"country_id":70,"name":"Premier League"},{"league_id":123,"country_id":70,"name":"Crown Prince Cup"},{"league_id":124,"country_id":70,"name":"Federation Cup"},{"league_id":125,"country_id":70,"name":"Emir Cup"},{"league_id":126,"country_id":70,"name":"Super Cup"},{"league_id":127,"country_id":72,"name":"Premier League"},{"league_id":128,"country_id":72,"name":"Lebanon Cup"},{"league_id":129,"country_id":72,"name":"Super Cup"},{"league_id":130,"country_id":76,"name":"Super League"},{"league_id":131,"country_id":76,"name":"FA Cup"},{"league_id":132,"country_id":76,"name":"Premier League"},{"league_id":133,"country_id":82,"name":"National League"},{"league_id":134,"country_id":90,"name":"Professional League"},{"league_id":135,"country_id":90,"name":"Sultan Cup"},{"league_id":136,"country_id":92,"name":"Gaza Strip Premier League"},{"league_id":137,"country_id":92,"name":"West Bank League"},{"league_id":138,"country_id":92,"name":"Gaza Strip Cup"},{"league_id":139,"country_id":92,"name":"West Bank Cup"},{"league_id":140,"country_id":96,"name":"PFL"},{"league_id":141,"country_id":99,"name":"QSL"},{"league_id":142,"country_id":99,"name":"QSL Cup"},{"league_id":143,"country_id":99,"name":"Crown Prince Cup"},{"league_id":144,"country_id":100,"name":"K League 1"},{"league_id":145,"country_id":100,"name":"K League 2"},{"league_id":146,"country_id":100,"name":"Korean Cup"},{"league_id":147,"country_id":100,"name":"National League"},{"league_id":148,"country_id":100,"name":"WK League Women"},{"league_id":149,"country_id":105,"name":"Saudi Professional League"},{"league_id":150,"country_id":105,"name":"Division 1"},{"league_id":151,"country_id":105,"name":"King Cup"},{"league_id":152,"country_id":105,"name":"Super Cup"},{"league_id":153,"country_id":109,"name":"Premier League"},{"league_id":154,"country_id":109,"name":"Singapore Cup"},{"league_id":155,"country_id":117,"name":"Thai League 1"},{"league_id":156,"country_id":117,"name":"Thai League 2"},{"league_id":157,"country_id":123,"name":"UAE League"},{"league_id":158,"country_id":123,"name":"UAE League"},{"league_id":159,"country_id":123,"name":"Division 1"},{"league_id":160,"country_id":123,"name":"Presidents Cup"},{"league_id":161,"country_id":123,"name":"Super Cup"},{"league_id":162,"country_id":126,"name":"Super League"},{"league_id":163,"country_id":126,"name":"Uzbekistan Cup"},{"league_id":164,"country_id":128,"name":" V.League 1"},{"league_id":165,"country_id":128,"name":"V.League 2"},{"league_id":166,"country_id":128,"name":"Super Cup"},{"league_id":167,"country_id":128,"name":"Vietnamese Cup"},{"league_id":168,"country_id":9,"name":"Superliga"},{"league_id":169,"country_id":9,"name":"First Division"},{"league_id":170,"country_id":9,"name":"Albanian Cup"},{"league_id":171,"country_id":9,"name":"Super Cup"},{"league_id":172,"country_id":11,"name":"Primera Divisió"},{"league_id":173,"country_id":11,"name":"Segona Divisió"},{"league_id":174,"country_id":11,"name":"Copa Constitució"},{"league_id":175,"country_id":14,"name":"Premier League"},{"league_id":176,"country_id":14,"name":"First League"},{"league_id":177,"country_id":14,"name":"Armenian Cup"},{"league_id":178,"country_id":14,"name":"Super Cup"},{"league_id":179,"country_id":16,"name":"Tipico Bundesliga"},{"league_id":180,"country_id":16,"name":"2. Liga"},{"league_id":181,"country_id":16,"name":"Regionalliga Central"},{"league_id":182,"country_id":16,"name":"Regionalliga East"},{"league_id":183,"country_id":16,"name":"Regionalliga West"},{"league_id":184,"country_id":16,"name":"OFB Cup"},{"league_id":185,"country_id":16,"name":"Bundesliga Women"},{"league_id":186,"country_id":16,"name":"Regionalliga West - Salzburg"},{"league_id":187,"country_id":16,"name":"Regionalliga West - Tyrol"},{"league_id":188,"country_id":16,"name":"Regionalliga West - Vorarlberg"},{"league_id":189,"country_id":17,"name":"Premier League"},{"league_id":190,"country_id":17,"name":"First Division"},{"league_id":191,"country_id":17,"name":"Azerbaijan Cup"},{"league_id":192,"country_id":20,"name":"Vysshaya Liga"},{"league_id":193,"country_id":20,"name":"Pershaya Liga"},{"league_id":194,"country_id":20,"name":"Belarusian Cup"},{"league_id":195,"country_id":20,"name":"Super Cup"},{"league_id":196,"country_id":21,"name":"Jupiler League"},{"league_id":197,"country_id":21,"name":"Proximus League"},{"league_id":198,"country_id":21,"name":"Belgian Cup"},{"league_id":199,"country_id":21,"name":"Super Cup"},{"league_id":200,"country_id":21,"name":"Pro League U21"},{"league_id":201,"country_id":21,"name":"Reserve League"},{"league_id":202,"country_id":21,"name":"Super League Women"},{"league_id":203,"country_id":23,"name":"Premier League"},{"league_id":204,"country_id":23,"name":"FBiH"},{"league_id":205,"country_id":23,"name":"RS"},{"league_id":206,"country_id":23,"name":"Bosnia and Herzegovina Cup"},{"league_id":207,"country_id":26,"name":"Parva Liga"},{"league_id":208,"country_id":26,"name":"Vtora liga"},{"league_id":209,"country_id":26,"name":"Bulgarian Cup"},{"league_id":210,"country_id":26,"name":"Super Cup"},{"league_id":211,"country_id":35,"name":"1. HNL"},{"league_id":212,"country_id":35,"name":"2. HNL"},{"league_id":213,"country_id":35,"name":"Croatian Cup"},{"league_id":214,"country_id":35,"name":"Super Cup"},{"league_id":215,"country_id":36,"name":"First Division"},{"league_id":216,"country_id":36,"name":"Division 2"},{"league_id":217,"country_id":36,"name":"Cyprus Cup"},{"league_id":218,"country_id":36,"name":"Cyprus Cup"},{"league_id":219,"country_id":37,"name":"1. Liga"},{"league_id":220,"country_id":37,"name":"FNL"},{"league_id":221,"country_id":37,"name":"U19 League"},{"league_id":222,"country_id":37,"name":"MOL Cup"},{"league_id":223,"country_id":37,"name":"Winter League"},{"league_id":224,"country_id":37,"name":"1. Liga Women"},{"league_id":225,"country_id":37,"name":"U21"},{"league_id":226,"country_id":37,"name":"CFL"},{"league_id":227,"country_id":37,"name":"MSFL"},{"league_id":228,"country_id":38,"name":"Superliga"},{"league_id":229,"country_id":38,"name":"1st Division"},{"league_id":230,"country_id":38,"name":"2nd Division"},{"league_id":231,"country_id":38,"name":"Danmarksserien - Pulje 1"},{"league_id":232,"country_id":38,"name":"Danmarksserien - Pulje 2"},{"league_id":233,"country_id":38,"name":"Danmarksserien - Pulje 3"},{"league_id":234,"country_id":38,"name":"Landspokal Cup"},{"league_id":235,"country_id":38,"name":"Danmarksserien - Pulje 4"},{"league_id":236,"country_id":38,"name":"Elitedivisionen Women"},{"league_id":237,"country_id":42,"name":"Premier League"},{"league_id":238,"country_id":42,"name":"Championship"},{"league_id":239,"country_id":42,"name":"League One"},{"league_id":240,"country_id":42,"name":"League Two"},{"league_id":241,"country_id":42,"name":"National League"},{"league_id":242,"country_id":42,"name":"National League North"},{"league_id":243,"country_id":42,"name":"National League South"},{"league_id":244,"country_id":42,"name":"Isthmian League Premier Division"},{"league_id":245,"country_id":42,"name":"NPL Premier Division"},{"league_id":246,"country_id":42,"name":"Southern Football League - Championship Playoff"},{"league_id":247,"country_id":42,"name":"Southern Football League - Premier Division South"},{"league_id":248,"country_id":42,"name":"Southern League Central Division"},{"league_id":249,"country_id":42,"name":"FA Cup"},{"league_id":250,"country_id":42,"name":"FA Community Shield"},{"league_id":251,"country_id":42,"name":"EFL Cup"},{"league_id":252,"country_id":42,"name":"EFL Trophy"},{"league_id":253,"country_id":42,"name":"FA Trophy"},{"league_id":254,"country_id":42,"name":"FA Cup - Qualification"},{"league_id":255,"country_id":42,"name":"FA Trophy - Qualification"},{"league_id":256,"country_id":42,"name":"Premier League 2"},{"league_id":257,"country_id":42,"name":"Premier League Cup U23"},{"league_id":258,"country_id":42,"name":"Professional Development League"},{"league_id":259,"country_id":42,"name":"Women's FA Cup"},{"league_id":260,"country_id":42,"name":"Women’s League Cup"},{"league_id":261,"country_id":43,"name":"Meistriliiga"},{"league_id":262,"country_id":43,"name":"Esiliiga"},{"league_id":263,"country_id":43,"name":"Estonian Cup"},{"league_id":264,"country_id":43,"name":"Super Cup"},{"league_id":265,"country_id":4,"name":"Euro U21"},{"league_id":266,"country_id":4,"name":"Euro U21 Qualification"},{"league_id":267,"country_id":4,"name":"World Cup Qualification - UEFA"},{"league_id":268,"country_id":4,"name":"U19 European Championship"},{"league_id":269,"country_id":4,"name":"U19 European Championship, Qualification"},{"league_id":270,"country_id":4,"name":"UEFA Olympic Qualifications Women"},{"league_id":271,"country_id":4,"name":"Euro"},{"league_id":272,"country_id":4,"name":"Euro - Qualification"},{"league_id":273,"country_id":4,"name":"U19 European Championship Qualification Women "},{"league_id":274,"country_id":4,"name":"U19 European Championship Women"},{"league_id":275,"country_id":4,"name":"Euro Qualification Women"},{"league_id":276,"country_id":4,"name":"Euro Women"},{"league_id":277,"country_id":4,"name":"European Championship U17"},{"league_id":278,"country_id":4,"name":"European Championship U17 Qualification"},{"league_id":279,"country_id":4,"name":"Euro U17 Women"},{"league_id":280,"country_id":4,"name":"European Championship U17 Qualification Women"},{"league_id":281,"country_id":4,"name":"UEFA Champions League"},{"league_id":282,"country_id":4,"name":"UEFA Youth League"},{"league_id":283,"country_id":4,"name":"UEFA Champions League Women"},{"league_id":284,"country_id":4,"name":"UEFA Europa League"},{"league_id":285,"country_id":4,"name":"UEFA Super Cup"},{"league_id":286,"country_id":4,"name":"Baltic Cup"},{"league_id":287,"country_id":4,"name":"Emirates Cup"},{"league_id":288,"country_id":4,"name":"Slovakia U18"},{"league_id":289,"country_id":4,"name":"Czech-Slovak Super Cup"},{"league_id":290,"country_id":4,"name":"UEFA Nations League"},{"league_id":291,"country_id":44,"name":"Premier League"},{"league_id":292,"country_id":44,"name":"1st deild"},{"league_id":293,"country_id":44,"name":"Faroe Islands Cup"},{"league_id":294,"country_id":45,"name":"Veikkausliiga"},{"league_id":295,"country_id":45,"name":"Ykkonen"},{"league_id":296,"country_id":45,"name":"Kakkonen Group A"},{"league_id":297,"country_id":45,"name":"Kakkonen Group B"},{"league_id":298,"country_id":45,"name":"Kakkonen Group C"},{"league_id":299,"country_id":45,"name":"Suomen Cup"},{"league_id":300,"country_id":45,"name":"Naisten Liiga"},{"league_id":301,"country_id":46,"name":"Ligue 1"},{"league_id":302,"country_id":46,"name":"Ligue 2"},{"league_id":303,"country_id":46,"name":"National"},{"league_id":304,"country_id":46,"name":"Coupe de France"},{"league_id":305,"country_id":46,"name":"Super Cup"},{"league_id":306,"country_id":46,"name":"Coupe de la Ligue"},{"league_id":307,"country_id":46,"name":"Division 1 Women"},{"league_id":308,"country_id":46,"name":"Championnat National U19"},{"league_id":309,"country_id":46,"name":"Coupe de France Women"},{"league_id":310,"country_id":47,"name":"Crystalbet Erovnuli Liga"},{"league_id":311,"country_id":47,"name":"Crystalbet Erovnuli Liga 2"},{"league_id":312,"country_id":47,"name":"Georgian Cup"},{"league_id":313,"country_id":47,"name":"Super Cup"},{"league_id":314,"country_id":48,"name":"Bundesliga"},{"league_id":315,"country_id":48,"name":"2. Bundesliga"},{"league_id":316,"country_id":48,"name":"3. Liga"},{"league_id":317,"country_id":48,"name":"Regionalliga Bayern"},{"league_id":318,"country_id":48,"name":"Regionalliga Nordost"},{"league_id":319,"country_id":48,"name":"Regionalliga North"},{"league_id":320,"country_id":48,"name":"Regionalliga Play Offs"},{"league_id":321,"country_id":48,"name":"Regionalliga Sudwest"},{"league_id":322,"country_id":48,"name":"Regionalliga West"},{"league_id":323,"country_id":48,"name":"Oberliga Baden-Württemberg"},{"league_id":324,"country_id":48,"name":"Oberliga Bayern Nord"},{"league_id":325,"country_id":48,"name":"Oberliga Bayern Süd"},{"league_id":326,"country_id":48,"name":"Oberliga Bremen"},{"league_id":327,"country_id":48,"name":"Oberliga Hamburg"},{"league_id":328,"country_id":48,"name":"Oberliga Hessen"},{"league_id":329,"country_id":48,"name":"Oberliga Mittelrhein"},{"league_id":330,"country_id":48,"name":"Oberliga Niederrhein"},{"league_id":331,"country_id":48,"name":"Oberliga Niedersachsen"},{"league_id":332,"country_id":48,"name":"Oberliga NOFV- Sud"},{"league_id":333,"country_id":48,"name":"Oberliga NOFV-Nord"},{"league_id":334,"country_id":48,"name":"Oberliga Rheinland-Pfalz\/Saar"},{"league_id":335,"country_id":48,"name":"Oberliga Schleswig-Holstein"},{"league_id":336,"country_id":48,"name":"Oberliga Westfalen"},{"league_id":337,"country_id":48,"name":"Junioren Bundesliga -Playoffs"},{"league_id":338,"country_id":48,"name":"Junioren Bundesliga North"},{"league_id":339,"country_id":48,"name":"Junioren Bundesliga South"},{"league_id":340,"country_id":48,"name":"Junioren Bundesliga West"},{"league_id":341,"country_id":48,"name":"Bundesliga Women"},{"league_id":342,"country_id":48,"name":"DFB Pokal"},{"league_id":343,"country_id":48,"name":"DFB Pokal Women"},{"league_id":344,"country_id":48,"name":"Super Cup"},{"league_id":345,"country_id":48,"name":"2. Bundesliga Women"},{"league_id":346,"country_id":48,"name":"DFB Junioren Pokal"},{"league_id":347,"country_id":50,"name":"National League - Relegation Group"},{"league_id":348,"country_id":51,"name":"Super League"},{"league_id":349,"country_id":51,"name":"Super League 2"},{"league_id":350,"country_id":51,"name":"Greek Cup"},{"league_id":351,"country_id":51,"name":"U19 Super League"},{"league_id":352,"country_id":51,"name":"Football League"},{"league_id":353,"country_id":51,"name":"Gamma Ethniki"},{"league_id":354,"country_id":51,"name":"Gamma Ethniki - Group 1"},{"league_id":355,"country_id":51,"name":"Gamma Ethniki - Group 2"},{"league_id":356,"country_id":51,"name":"Gamma Ethniki - Group 3"},{"league_id":357,"country_id":51,"name":"Gamma Ethniki - Group 4"},{"league_id":358,"country_id":51,"name":"Gamma Ethniki - Group 5"},{"league_id":359,"country_id":51,"name":"Gamma Ethniki - Group 6"},{"league_id":360,"country_id":51,"name":"Gamma Ethniki - Group 7"},{"league_id":361,"country_id":51,"name":"Gamma Ethniki - Group 8"},{"league_id":362,"country_id":51,"name":"Super League, Women"},{"league_id":363,"country_id":55,"name":"OTP Bank Liga"},{"league_id":364,"country_id":55,"name":"Merkantil Bank Liga"},{"league_id":365,"country_id":55,"name":"Hungarian Cup"},{"league_id":366,"country_id":55,"name":"Liga Kupa"},{"league_id":367,"country_id":55,"name":"NB I Women"},{"league_id":368,"country_id":56,"name":"Urvalsdeild"},{"league_id":369,"country_id":56,"name":"1st deild"},{"league_id":370,"country_id":56,"name":"1. deild Women"},{"league_id":371,"country_id":56,"name":"Icelandic Cup"},{"league_id":372,"country_id":56,"name":"Super Cup"},{"league_id":373,"country_id":56,"name":"Cup, Women"},{"league_id":374,"country_id":56,"name":"Super Cup, Women"},{"league_id":375,"country_id":56,"name":"2. deild"},{"league_id":376,"country_id":56,"name":"3. deild"},{"league_id":377,"country_id":56,"name":"League Cup A, Women"},{"league_id":378,"country_id":56,"name":"League Cup"},{"league_id":379,"country_id":56,"name":"Urvalsdeild Women"},{"league_id":380,"country_id":60,"name":"Premier Division"},{"league_id":381,"country_id":60,"name":"Division 1"},{"league_id":382,"country_id":60,"name":"FAI Cup"},{"league_id":383,"country_id":60,"name":"League Cup"},{"league_id":384,"country_id":60,"name":"Super Cup"},{"league_id":385,"country_id":61,"name":"Ligat ha'Al"},{"league_id":386,"country_id":61,"name":"Leumit League"},{"league_id":387,"country_id":61,"name":"State Cup"},{"league_id":388,"country_id":61,"name":"Super Cup"},{"league_id":389,"country_id":61,"name":"League Cup, Premier"},{"league_id":390,"country_id":61,"name":"League Cup, National"},{"league_id":391,"country_id":61,"name":"Ligat Al, Women"},{"league_id":392,"country_id":62,"name":"Serie A"},{"league_id":393,"country_id":62,"name":"Serie B"},{"league_id":394,"country_id":62,"name":"Serie C - Group A"},{"league_id":395,"country_id":62,"name":"Serie C - Group B"},{"league_id":396,"country_id":62,"name":"Serie C - Group C"},{"league_id":397,"country_id":62,"name":"Serie C - Promotion Playoffs"},{"league_id":398,"country_id":62,"name":"Serie D - Group A"},{"league_id":399,"country_id":62,"name":"Serie D - Group B"},{"league_id":400,"country_id":62,"name":"Serie D - Group C"},{"league_id":401,"country_id":62,"name":"Serie D - Group D"},{"league_id":402,"country_id":62,"name":"Serie D - Group E"},{"league_id":403,"country_id":62,"name":"Serie D - Group F"},{"league_id":404,"country_id":62,"name":"Serie D - Group G"},{"league_id":405,"country_id":62,"name":"Serie D - Group H"},{"league_id":406,"country_id":62,"name":"Serie D - Group I"},{"league_id":407,"country_id":62,"name":"Serie D - Play Offs"},{"league_id":408,"country_id":62,"name":"Primavera 1"},{"league_id":409,"country_id":62,"name":"Coppa Italia"},{"league_id":410,"country_id":62,"name":"Super Cup"},{"league_id":411,"country_id":62,"name":"Coppa Italia Serie C"},{"league_id":412,"country_id":62,"name":"Coppa Italia Primavera"},{"league_id":413,"country_id":62,"name":"Coppa Italia Women"},{"league_id":414,"country_id":62,"name":"Primavera 2"},{"league_id":415,"country_id":62,"name":"Serie A - Women"},{"league_id":416,"country_id":62,"name":"Serie C - Relegation Playoffs"},{"league_id":417,"country_id":62,"name":"Super Cup (Serie C)"},{"league_id":418,"country_id":62,"name":"Supercoppa Primavera"},{"league_id":419,"country_id":67,"name":"Premier League"},{"league_id":420,"country_id":67,"name":"First Division"},{"league_id":421,"country_id":67,"name":"Kazakhstan Cup"},{"league_id":422,"country_id":67,"name":"Super Cup"},{"league_id":423,"country_id":69,"name":"Super Cup"},{"league_id":424,"country_id":69,"name":"Kosovar Cup"},{"league_id":425,"country_id":69,"name":"Kosovar Cup"},{"league_id":426,"country_id":71,"name":"Optibet Virsliga"},{"league_id":427,"country_id":71,"name":"1.Liga"},{"league_id":428,"country_id":71,"name":"Latvian Cup"},{"league_id":429,"country_id":71,"name":"League Cup"},{"league_id":430,"country_id":73,"name":"Liechtenstein Cup"},{"league_id":431,"country_id":74,"name":"A Lyga"},{"league_id":432,"country_id":74,"name":"I Lyga"},{"league_id":433,"country_id":74,"name":"Lithuanian Cup"},{"league_id":434,"country_id":74,"name":"Super Cup"},{"league_id":435,"country_id":75,"name":"National Division"},{"league_id":436,"country_id":75,"name":"Luxembourg Cup"},{"league_id":437,"country_id":77,"name":"Premier League"},{"league_id":438,"country_id":77,"name":"Division 1"},{"league_id":439,"country_id":77,"name":"FA Trophy"},{"league_id":440,"country_id":77,"name":"Super Cup"},{"league_id":441,"country_id":79,"name":"Divizia Nationala"},{"league_id":442,"country_id":79,"name":"Divizia A"},{"league_id":443,"country_id":79,"name":"Moldovan Cup"},{"league_id":444,"country_id":79,"name":"Super Cup"},{"league_id":445,"country_id":79,"name":"Federation Cup"},{"league_id":446,"country_id":80,"name":"Prva Crnogorska Liga"},{"league_id":447,"country_id":80,"name":"Druga Liga"},{"league_id":448,"country_id":80,"name":"Montenegrin Cup"},{"league_id":449,"country_id":83,"name":"Eredivisie"},{"league_id":450,"country_id":83,"name":"Eerste Divisie"},{"league_id":451,"country_id":83,"name":"Reserve League"},{"league_id":452,"country_id":83,"name":"KNVB Beker"},{"league_id":453,"country_id":83,"name":"Super Cup"},{"league_id":454,"country_id":83,"name":"Eredivisie Women"},{"league_id":455,"country_id":83,"name":"Tweede Divisie"},{"league_id":456,"country_id":87,"name":"1. MFL"},{"league_id":457,"country_id":87,"name":"2. MFL"},{"league_id":458,"country_id":87,"name":"Macedonian Cup"},{"league_id":459,"country_id":88,"name":"NIFL Premiership"},{"league_id":460,"country_id":88,"name":"NIFL Championship"},{"league_id":461,"country_id":88,"name":"Irish Cup"},{"league_id":462,"country_id":88,"name":"Irish League Cup"},{"league_id":463,"country_id":89,"name":"Eliteserien"},{"league_id":464,"country_id":89,"name":"OBOS-ligaen"},{"league_id":465,"country_id":89,"name":"Division 2 - Group 1"},{"league_id":466,"country_id":89,"name":"Division 2 - Group 2"},{"league_id":467,"country_id":89,"name":"NM Cup"},{"league_id":468,"country_id":89,"name":"Super Cup"},{"league_id":469,"country_id":89,"name":"Toppserien Women"},{"league_id":470,"country_id":89,"name":"Norway Cup Women"},{"league_id":471,"country_id":89,"name":"1st Division, Women "},{"league_id":472,"country_id":89,"name":"Division 2 - Group 1 - Playoffs"},{"league_id":473,"country_id":89,"name":"Division 3 - Group 1"},{"league_id":474,"country_id":89,"name":"Division 3 - Group 2"},{"league_id":475,"country_id":89,"name":"Division 3 - Group 3"},{"league_id":476,"country_id":89,"name":"Division 3 - Group 4"},{"league_id":477,"country_id":89,"name":"Division 3 - Group 5"},{"league_id":478,"country_id":89,"name":"Division 3 - Group 6"},{"league_id":479,"country_id":97,"name":"Ekstraklasa"},{"league_id":480,"country_id":97,"name":"Division 1"},{"league_id":481,"country_id":97,"name":"Polish Cup"},{"league_id":482,"country_id":97,"name":"Super Cup"},{"league_id":483,"country_id":97,"name":"Central Youth League"},{"league_id":484,"country_id":97,"name":"Division 2"},{"league_id":485,"country_id":97,"name":"Ekstraliga Women"},{"league_id":486,"country_id":97,"name":"III Liga - Group I"},{"league_id":487,"country_id":97,"name":"III Liga - Group II"},{"league_id":488,"country_id":97,"name":"III Liga - Group III"},{"league_id":489,"country_id":97,"name":"III Liga - Group IV"},{"league_id":490,"country_id":98,"name":"Primeira Liga"},{"league_id":491,"country_id":98,"name":"Segunda Liga"},{"league_id":492,"country_id":98,"name":"U19 Championship"},{"league_id":493,"country_id":98,"name":"Taça de Portugal"},{"league_id":494,"country_id":98,"name":"Super Cup"},{"league_id":495,"country_id":98,"name":"League Cup"},{"league_id":496,"country_id":98,"name":"Campeonato de Portugal"},{"league_id":497,"country_id":98,"name":"Liga BPI Women"},{"league_id":498,"country_id":98,"name":"Liga Revelacao U23"},{"league_id":499,"country_id":98,"name":"Liga Revelacao U23"},{"league_id":500,"country_id":101,"name":"Liga 1"},{"league_id":501,"country_id":101,"name":"Liga 2"},{"league_id":502,"country_id":101,"name":"Romanian Cup"},{"league_id":503,"country_id":101,"name":"Super Cup"},{"league_id":504,"country_id":102,"name":"Premier League"},{"league_id":505,"country_id":102,"name":"FNL Cup"},{"league_id":506,"country_id":102,"name":"PFL - Center"},{"league_id":507,"country_id":102,"name":"PFL - East"},{"league_id":508,"country_id":102,"name":"PFL - South"},{"league_id":509,"country_id":102,"name":"PFL - Ural-Povolzhye"},{"league_id":510,"country_id":102,"name":"PFL - West"},{"league_id":511,"country_id":102,"name":" Youth League"},{"league_id":512,"country_id":102,"name":"Russian Cup"},{"league_id":513,"country_id":102,"name":"Super Cup"},{"league_id":514,"country_id":102,"name":"Supreme Division Women"},{"league_id":515,"country_id":104,"name":"Campionato Sammarinese"},{"league_id":516,"country_id":104,"name":"Coppa Titano"},{"league_id":517,"country_id":104,"name":"Super Cup"},{"league_id":518,"country_id":106,"name":"Premiership"},{"league_id":519,"country_id":106,"name":"Championship"},{"league_id":520,"country_id":106,"name":"League One"},{"league_id":521,"country_id":106,"name":"League Two"},{"league_id":522,"country_id":106,"name":"Scottish Cup"},{"league_id":523,"country_id":106,"name":"League Cup"},{"league_id":524,"country_id":106,"name":"Challenge Cup"},{"league_id":525,"country_id":106,"name":"League Two"},{"league_id":526,"country_id":106,"name":"SWPL Cup Women"},{"league_id":527,"country_id":108,"name":"Super Liga"},{"league_id":528,"country_id":108,"name":"Prva Liga"},{"league_id":529,"country_id":108,"name":"Serbian Cup"},{"league_id":530,"country_id":110,"name":"Fortuna liga"},{"league_id":531,"country_id":110,"name":"2. liga"},{"league_id":532,"country_id":110,"name":"U19 1. Liga"},{"league_id":533,"country_id":110,"name":"Slovak Cup"},{"league_id":534,"country_id":110,"name":"1. League Women"},{"league_id":535,"country_id":111,"name":"Prva Liga"},{"league_id":536,"country_id":111,"name":"2. SNL"},{"league_id":537,"country_id":111,"name":"Slovenian Cup"},{"league_id":538,"country_id":113,"name":"LaLiga"},{"league_id":539,"country_id":113,"name":" LaLiga2"},{"league_id":540,"country_id":113,"name":"Segunda Division B"},{"league_id":541,"country_id":113,"name":"Copa del Rey"},{"league_id":542,"country_id":113,"name":"Super Cup"},{"league_id":543,"country_id":113,"name":"Supercopa de Catalunya"},{"league_id":544,"country_id":113,"name":"Primera Division Women"},{"league_id":545,"country_id":113,"name":"Copa de la Reina Women"},{"league_id":546,"country_id":113,"name":"Copa Federacion"},{"league_id":547,"country_id":113,"name":"Super Cup Women"},{"league_id":548,"country_id":113,"name":"Tercera Division - Group 1\t"},{"league_id":549,"country_id":113,"name":"Tercera Division - Group 10\t"},{"league_id":550,"country_id":113,"name":"Tercera Division - Group 11"},{"league_id":551,"country_id":113,"name":"Tercera Division - Group 12\t"},{"league_id":552,"country_id":113,"name":"Tercera Division - Group 13\t"},{"league_id":553,"country_id":113,"name":"Tercera Division - Group 14\t"},{"league_id":554,"country_id":113,"name":"Tercera Division - Group 15"},{"league_id":555,"country_id":113,"name":"Tercera Division - Group 16"},{"league_id":556,"country_id":113,"name":"Tercera Division - Group 17"},{"league_id":557,"country_id":113,"name":"Tercera Division - Group 18\t"},{"league_id":558,"country_id":113,"name":"Tercera Division - Group 2"},{"league_id":559,"country_id":113,"name":"Tercera Division - Group 3"},{"league_id":560,"country_id":113,"name":"Tercera Division - Group 4"},{"league_id":561,"country_id":113,"name":"Tercera Division - Group 5"},{"league_id":562,"country_id":113,"name":"Tercera Division - Group 6"},{"league_id":563,"country_id":113,"name":"Tercera Division - Group 7\t"},{"league_id":564,"country_id":113,"name":"Tercera Division - Group 8"},{"league_id":565,"country_id":113,"name":"Tercera Division - Group 9"},{"league_id":566,"country_id":113,"name":"Tercera Division - Playoffs"},{"league_id":567,"country_id":114,"name":"Allsvenskan"},{"league_id":568,"country_id":114,"name":"Superettan"},{"league_id":569,"country_id":114,"name":"Division 1 - Norra"},{"league_id":570,"country_id":114,"name":"Division 1 - Södra"},{"league_id":571,"country_id":114,"name":"Division 2 - Norra Götaland"},{"league_id":572,"country_id":114,"name":"Division 2 - Norra Svealand"},{"league_id":573,"country_id":114,"name":"Division 2 - Norrland"},{"league_id":574,"country_id":114,"name":"Division 2 - Ostra Gotaland"},{"league_id":575,"country_id":114,"name":"Division 2 - Södra Svealand"},{"league_id":576,"country_id":114,"name":"Division 2 - Västra Götaland"},{"league_id":577,"country_id":114,"name":"U21"},{"league_id":578,"country_id":114,"name":"Svenska Cupen"},{"league_id":579,"country_id":114,"name":"Allsvenskan Women"},{"league_id":580,"country_id":114,"name":"Svenska Cupen Women"},{"league_id":581,"country_id":114,"name":"Division 1 - Relegation"},{"league_id":582,"country_id":114,"name":"Division 2 - Promotion Group"},{"league_id":583,"country_id":114,"name":"U19 Allsvenskan"},{"league_id":584,"country_id":115,"name":"Super League"},{"league_id":585,"country_id":115,"name":"Challenge League"},{"league_id":586,"country_id":115,"name":"Promotion League"},{"league_id":587,"country_id":115,"name":"Swiss Cup"},{"league_id":588,"country_id":115,"name":"Nationalliga A Women"},{"league_id":589,"country_id":120,"name":"Super Lig"},{"league_id":590,"country_id":120,"name":"1. Lig"},{"league_id":591,"country_id":120,"name":"2. Lig"},{"league_id":592,"country_id":120,"name":"3. Lig , Group 4"},{"league_id":593,"country_id":120,"name":"3. Lig - Group 1"},{"league_id":594,"country_id":120,"name":"3. Lig - Group 2"},{"league_id":595,"country_id":120,"name":"3. Lig - Group 3"},{"league_id":596,"country_id":120,"name":"Turkish Cup"},{"league_id":597,"country_id":120,"name":"Super Cup"},{"league_id":598,"country_id":120,"name":"U19 Lig, Elit A"},{"league_id":599,"country_id":120,"name":"U19 Lig, Elit B"},{"league_id":600,"country_id":120,"name":"U21 1. Lig"},{"league_id":601,"country_id":120,"name":"U21 Ligi"},{"league_id":602,"country_id":122,"name":"Premier League"},{"league_id":603,"country_id":122,"name":"Persha Liga"},{"league_id":604,"country_id":122,"name":"Youth League"},{"league_id":605,"country_id":122,"name":"Ukrainian Cup"},{"league_id":606,"country_id":122,"name":"Super Cup"},{"league_id":607,"country_id":122,"name":"U19"},{"league_id":608,"country_id":129,"name":"Cymru Premier"},{"league_id":609,"country_id":129,"name":"Cymru Alliance"},{"league_id":610,"country_id":129,"name":"Division 1"},{"league_id":611,"country_id":129,"name":"FAW Welsh Cup"},{"league_id":612,"country_id":129,"name":"League Cup"},{"league_id":613,"country_id":129,"name":"Cymru North"},{"league_id":614,"country_id":129,"name":"Cymru South"},{"league_id":615,"country_id":29,"name":"Canadian Premier League"},{"league_id":616,"country_id":29,"name":"CSL"},{"league_id":617,"country_id":29,"name":"Championship"},{"league_id":618,"country_id":34,"name":"Primera Division - Apertura\t"},{"league_id":619,"country_id":34,"name":"Primera Division - Clausura"},{"league_id":620,"country_id":34,"name":"Liga de Ascenso"},{"league_id":621,"country_id":34,"name":"Liga de Ascenso - Apertura"},{"league_id":622,"country_id":34,"name":"Liga de Ascenso - Clausura"},{"league_id":623,"country_id":41,"name":"Primera Division - Apertura"},{"league_id":624,"country_id":41,"name":"Primera Division - Clausura"},{"league_id":625,"country_id":52,"name":"Liga Nacional - Apertura"},{"league_id":626,"country_id":52,"name":"Liga Nacional - Clausura"},{"league_id":627,"country_id":53,"name":"Liga Nacional - Apertura"},{"league_id":628,"country_id":53,"name":"Liga Nacional - Clausura"},{"league_id":629,"country_id":53,"name":"Liga Nacional - Relegation Playoff"},{"league_id":630,"country_id":64,"name":"Premier League"},{"league_id":631,"country_id":78,"name":"Liga MX - Apertura"},{"league_id":632,"country_id":78,"name":"Liga MX - Clausura"},{"league_id":633,"country_id":78,"name":"Ascenso MX - Apertura"},{"league_id":634,"country_id":78,"name":"Ascenso MX - Clausura"},{"league_id":635,"country_id":78,"name":"Copa Mexico"},{"league_id":636,"country_id":78,"name":"Liga de Expansion MX, Apertura"},{"league_id":637,"country_id":78,"name":"Supercopa MX"},{"league_id":638,"country_id":78,"name":"U20 League"},{"league_id":639,"country_id":78,"name":"Campeón de Campeones"},{"league_id":640,"country_id":78,"name":"Liga MX Women -  Clausura"},{"league_id":641,"country_id":78,"name":"Liga MX Women - Apertura"},{"league_id":642,"country_id":85,"name":"Liga Primera"},{"league_id":643,"country_id":5,"name":"CONCACAF Championship U20"},{"league_id":644,"country_id":5,"name":"CONCACAF Championship Women U20"},{"league_id":645,"country_id":5,"name":"World Cup Qualification - CONCACAF"},{"league_id":646,"country_id":5,"name":"CONCACAF Championship U17"},{"league_id":647,"country_id":5,"name":"CONCACAF Championship Women"},{"league_id":648,"country_id":5,"name":"Gold Cup"},{"league_id":649,"country_id":5,"name":"CONCACAF Champions League"},{"league_id":650,"country_id":5,"name":"Copa Premier Centroamericana"},{"league_id":651,"country_id":5,"name":"Campeones Cup"},{"league_id":652,"country_id":5,"name":"Central American & Caribbean Games"},{"league_id":653,"country_id":5,"name":"Central American and Caribbean Games Women"},{"league_id":654,"country_id":5,"name":"CONCACAF Championship Women U17"},{"league_id":655,"country_id":5,"name":"CONCACAF League"},{"league_id":656,"country_id":5,"name":"CONCACAF Nations League"},{"league_id":657,"country_id":5,"name":"CONCACAF Olympic Qualifications Women"},{"league_id":658,"country_id":5,"name":"Copa Centroamericana"},{"league_id":659,"country_id":5,"name":"Leagues Cup"},{"league_id":660,"country_id":93,"name":"LPF - Apertura"},{"league_id":661,"country_id":93,"name":"LPF - Clausura"},{"league_id":662,"country_id":118,"name":"Pro League"},{"league_id":663,"country_id":125,"name":"MLS"},{"league_id":664,"country_id":125,"name":"US Open Cup"},{"league_id":665,"country_id":125,"name":"Desert Diamond Cup"},{"league_id":666,"country_id":125,"name":"NWSL Challenge Cup"},{"league_id":667,"country_id":125,"name":"NWSL Fall Series, Women"},{"league_id":668,"country_id":125,"name":"United Soccer League"},{"league_id":669,"country_id":125,"name":"MLS All Star Game"},{"league_id":670,"country_id":125,"name":"National Premier Soccer League "},{"league_id":671,"country_id":125,"name":"NPSL Members Cup"},{"league_id":672,"country_id":125,"name":"Carolina Challenge Cup"},{"league_id":673,"country_id":125,"name":"NWSL Women"},{"league_id":674,"country_id":125,"name":"USL Championship"},{"league_id":675,"country_id":125,"name":"USL League One"},{"league_id":676,"country_id":125,"name":"USL League Two"},{"league_id":677,"country_id":3,"name":"World Cup Qualification - OFC"},{"league_id":678,"country_id":3,"name":"OFC Champions League"},{"league_id":679,"country_id":19,"name":"Premier League"},{"league_id":680,"country_id":84,"name":"Football Championship"},{"league_id":681,"country_id":13,"name":"Copa de la Superliga"},{"league_id":682,"country_id":13,"name":"Superliga"},{"league_id":683,"country_id":13,"name":"Primera Nacional"},{"league_id":684,"country_id":13,"name":"Primera B Metropolitana"},{"league_id":685,"country_id":13,"name":"Primera C Metropolitana"},{"league_id":686,"country_id":13,"name":"Copa Argentina"},{"league_id":687,"country_id":13,"name":"Torneos de Verano"},{"league_id":688,"country_id":13,"name":"Primera D Metropolitana"},{"league_id":689,"country_id":13,"name":"Super Cup"},{"league_id":690,"country_id":13,"name":"Torneo Federal"},{"league_id":691,"country_id":22,"name":"Division Profesional - Apertura"},{"league_id":692,"country_id":22,"name":"Division Profesional - Clausura"},{"league_id":693,"country_id":25,"name":"Brasileiro Serie A"},{"league_id":694,"country_id":25,"name":"Brasileiro Serie B"},{"league_id":695,"country_id":25,"name":"Brasileiro Serie C"},{"league_id":696,"country_id":25,"name":"Copa do Brasil"},{"league_id":697,"country_id":25,"name":"Copa do Nordeste"},{"league_id":698,"country_id":25,"name":"U20 Copa Internacional Ipiranga"},{"league_id":699,"country_id":25,"name":"Brasileiro Serie D"},{"league_id":700,"country_id":25,"name":"Paulista, Women"},{"league_id":701,"country_id":25,"name":"U20 Paulista"},{"league_id":702,"country_id":25,"name":"Brasileiro U20"},{"league_id":703,"country_id":25,"name":"Brasileiro Women"},{"league_id":704,"country_id":25,"name":"Brasileiro Women"},{"league_id":705,"country_id":25,"name":"Campeonato Acreano"},{"league_id":706,"country_id":25,"name":"Campeonato Alagoano"},{"league_id":707,"country_id":25,"name":"Campeonato Amapaense"},{"league_id":708,"country_id":25,"name":"Campeonato Amazonense"},{"league_id":709,"country_id":25,"name":"Campeonato Baiano"},{"league_id":710,"country_id":25,"name":"Campeonato Brasiliense"},{"league_id":711,"country_id":25,"name":"Campeonato Capixaba"},{"league_id":712,"country_id":25,"name":"Campeonato Carioca"},{"league_id":713,"country_id":25,"name":"Campeonato Catarinense"},{"league_id":714,"country_id":25,"name":"Campeonato Cearense"},{"league_id":715,"country_id":25,"name":"Campeonato Gaucho"},{"league_id":716,"country_id":25,"name":"Campeonato Goiano"},{"league_id":717,"country_id":25,"name":"Campeonato Maranhense"},{"league_id":718,"country_id":25,"name":"Campeonato Matogrossense"},{"league_id":719,"country_id":25,"name":"Campeonato Mineiro"},{"league_id":720,"country_id":25,"name":"Campeonato Paraense"},{"league_id":721,"country_id":25,"name":"Campeonato Paraibano"},{"league_id":722,"country_id":25,"name":"Campeonato Paranaense"},{"league_id":723,"country_id":25,"name":"Campeonato Paulista"},{"league_id":724,"country_id":25,"name":"Campeonato Paulista A1"},{"league_id":725,"country_id":25,"name":"Campeonato Paulista A2"},{"league_id":726,"country_id":25,"name":"Campeonato Paulista A3"},{"league_id":727,"country_id":25,"name":"Campeonato Pernambucano"},{"league_id":728,"country_id":25,"name":"Campeonato Piauiense"},{"league_id":729,"country_id":25,"name":"Campeonato Potiguar - First stage"},{"league_id":730,"country_id":25,"name":"Campeonato Potiguar - Second stage"},{"league_id":731,"country_id":25,"name":"Campeonato Potiguar Grand Final"},{"league_id":732,"country_id":25,"name":"Campeonato Rondoniense"},{"league_id":733,"country_id":25,"name":"Campeonato Roraimense"},{"league_id":734,"country_id":25,"name":"Campeonato Sergipano"},{"league_id":735,"country_id":25,"name":"Campeonato Sul-Matogrossense"},{"league_id":736,"country_id":25,"name":"Campeonato Tocantinense"},{"league_id":737,"country_id":25,"name":"Copa do Brasil U20"},{"league_id":738,"country_id":25,"name":"Copa Sao Paulo de Juniores U20"},{"league_id":739,"country_id":25,"name":"Copa Verde"},{"league_id":740,"country_id":25,"name":"Supercopa do Brasil"},{"league_id":741,"country_id":30,"name":"Primera Division"},{"league_id":742,"country_id":30,"name":"Primera B"},{"league_id":743,"country_id":30,"name":"Chilean Cup"},{"league_id":744,"country_id":30,"name":"Supercup"},{"league_id":745,"country_id":32,"name":"Primera A - Apertura"},{"league_id":746,"country_id":32,"name":"Primera A - Clausura"},{"league_id":747,"country_id":32,"name":"Primera B"},{"league_id":748,"country_id":32,"name":"Copa Colombia"},{"league_id":749,"country_id":32,"name":"Super Cup"},{"league_id":750,"country_id":39,"name":"Liga Pro - First stage"},{"league_id":751,"country_id":39,"name":"Copa Ecuador"},{"league_id":752,"country_id":39,"name":"Liga Pro - Second stage"},{"league_id":753,"country_id":39,"name":"Super Cup"},{"league_id":754,"country_id":94,"name":"\tPrimera Division - Clausura"},{"league_id":755,"country_id":94,"name":"Primera Division - Apertura"},{"league_id":756,"country_id":94,"name":"Division Intermedia"},{"league_id":757,"country_id":94,"name":"Copa Paraguay"},{"league_id":758,"country_id":94,"name":"Primera Division Reserve - Apertura"},{"league_id":759,"country_id":94,"name":"Primera Division Reserve - Clausura"},{"league_id":760,"country_id":95,"name":"Liga 1"},{"league_id":761,"country_id":95,"name":"Liga 2"},{"league_id":762,"country_id":95,"name":"Copa Bicentenario"},{"league_id":763,"country_id":95,"name":"Supercopa Peruana"},{"league_id":764,"country_id":6,"name":"CONMEBOL Championship U20 "},{"league_id":765,"country_id":6,"name":"Copa América"},{"league_id":766,"country_id":6,"name":"World Cup Qualification - CONMEBOL"},{"league_id":767,"country_id":6,"name":"U20 Copa Libertadores"},{"league_id":768,"country_id":6,"name":"Copa Libertadores"},{"league_id":769,"country_id":6,"name":"Copa Sudamericana"},{"league_id":770,"country_id":6,"name":"Recopa Sudamericana"},{"league_id":771,"country_id":6,"name":"CONMEBOL Pre-Olympic Tournament"},{"league_id":772,"country_id":6,"name":" CONMEBOL Women U20"},{"league_id":773,"country_id":6,"name":"CONMEBOL Championship U17"},{"league_id":774,"country_id":6,"name":"Copa Libertadores - Women"},{"league_id":775,"country_id":124,"name":"Primera Division"},{"league_id":776,"country_id":124,"name":"Segunda Division"},{"league_id":777,"country_id":124,"name":"Super Cup"},{"league_id":778,"country_id":127,"name":"Primera Division"},{"league_id":779,"country_id":127,"name":"Copa Venezuela"},{"league_id":780,"country_id":8,"name":"Simulated Reality League"},{"league_id":781,"country_id":7,"name":"Viareggio Cup"},{"league_id":782,"country_id":7,"name":"World Cup Qualification Women"},{"league_id":783,"country_id":7,"name":"U20 World Cup"},{"league_id":784,"country_id":7,"name":"Olympic Games"},{"league_id":785,"country_id":7,"name":"U20 Womens World Cup"},{"league_id":786,"country_id":7,"name":"Olympic Games Women"},{"league_id":787,"country_id":7,"name":"CAF Confederations Cup"},{"league_id":788,"country_id":7,"name":"World Cup"},{"league_id":789,"country_id":7,"name":"World Cup U17"},{"league_id":790,"country_id":7,"name":"World Cup Women U17"},{"league_id":791,"country_id":7,"name":"World Cup Women"},{"league_id":792,"country_id":7,"name":"International Friendly"},{"league_id":793,"country_id":7,"name":"International Friendly Women"},{"league_id":794,"country_id":7,"name":"FIFA Club World Cup"},{"league_id":795,"country_id":7,"name":"Uhrencup"},{"league_id":796,"country_id":7,"name":"Atlantic Cup"},{"league_id":797,"country_id":7,"name":"Club Friendly"},{"league_id":798,"country_id":7,"name":"Four Nations Tournament Women"},{"league_id":799,"country_id":7,"name":"U17 Friendly Games"},{"league_id":800,"country_id":7,"name":"U18 Friendly Games"},{"league_id":801,"country_id":7,"name":"U19 Friendly Games"},{"league_id":802,"country_id":7,"name":"U20 Friendly Games"},{"league_id":803,"country_id":7,"name":"U21 Friendly Games"},{"league_id":804,"country_id":7,"name":"U23 Friendly Games"},{"league_id":805,"country_id":7,"name":"Algarve Cup Women"},{"league_id":806,"country_id":7,"name":"Audi Cup"},{"league_id":807,"country_id":7,"name":"International Tournament (Cyprus) Women"},{"league_id":808,"country_id":7,"name":"Toulon Tournament"},{"league_id":809,"country_id":7,"name":"CONCACAF\/CONMEBOL Olympic Qualifying"},{"league_id":810,"country_id":7,"name":"Copa Suruga Bank"},{"league_id":811,"country_id":7,"name":"Eredivisie Comeback Tournament"},{"league_id":812,"country_id":7,"name":"Florida Cup"},{"league_id":813,"country_id":7,"name":"Intercontinental Cup"},{"league_id":814,"country_id":7,"name":"U19 CEE Cup"},{"league_id":815,"country_id":7,"name":"Arab Club Champions Cup"},{"league_id":816,"country_id":7,"name":"International Champions Cup"},{"league_id":817,"country_id":7,"name":"International Champions Cup Women"},{"league_id":818,"country_id":7,"name":"Kings Cup"},{"league_id":819,"country_id":7,"name":"Pan American Games"},{"league_id":820,"country_id":7,"name":"Pan American Games Women"},{"league_id":821,"country_id":7,"name":"Pinatar Cup Women"},{"league_id":822,"country_id":7,"name":"SheBelieves Cup Women"},{"league_id":823,"country_id":7,"name":"Tournament of Nations Women"},{"league_id":824,"country_id":7,"name":"Tournoi de France Women"},{"league_id":825,"country_id":7,"name":"U18 Valentin Granatkin Memorial Cup"},{"league_id":826,"country_id":7,"name":"U19 Friendly Games Women"},{"league_id":827,"country_id":7,"name":"U21 Commonwealth States Cup"},{"league_id":828,"country_id":7,"name":"Viareggio Cup Women"},{"league_id":829,"country_id":7,"name":"World Cup Qualification - Inter-Confederation Playoffs"},{"league_id":830,"country_id":7,"name":"World Cup Qualification - Inter-Confederation Playoffs Women"},{"league_id":831,"country_id":132,"name":"Premier League"},{"league_id":832,"country_id":22,"name":"Division Profesional"},{"league_id":833,"country_id":74,"name":"II Lyga"},{"league_id":834,"country_id":91,"name":"Premier League"},{"league_id":835,"country_id":113,"name":"Primera RFEF"},{"league_id":836,"country_id":4,"name":"UEFA Europa Conference League 21\/22"},{"league_id":837,"country_id":13,"name":"Liga Profesional, Reserves"},{"league_id":838,"country_id":13,"name":"Primera Division, Women"},{"league_id":839,"country_id":13,"name":"Trofeo de Campeones de la Liga Profesional"},{"league_id":840,"country_id":8,"name":"International Friendlies SRL"},{"league_id":841,"country_id":8,"name":"K-League 1 SRL"},{"league_id":842,"country_id":8,"name":"LaLiga SRL"},{"league_id":843,"country_id":8,"name":"Ligue 1 SRL"},{"league_id":844,"country_id":8,"name":"Premier League SRL"},{"league_id":845,"country_id":8,"name":"Russia Premier League SRL"},{"league_id":846,"country_id":8,"name":"Serie A SRL"},{"league_id":847,"country_id":8,"name":"UEFA Champions League SRL"}]
  */

    const countriesurldef = 'https://countryflagsapi.com/png/';

    /*const sportsdatacountries = [
        {
            "country_id": 1,
            "name": "Africa",
            "country_code": null,
            "continent": "World"
        },
        {
            "country_id": 2,
            "name": "Asia",
            "country_code": null,
            "continent": "World"
        },
        {
            "country_id": 3,
            "name": "Australia & Oceania",
            "country_code": null,
            "continent": "World"
        },
        {
            "country_id": 4,
            "name": "Europe",
            "country_code": null,
            "continent": "World"
        },
        {
            "country_id": 5,
            "name": "North & Central America",
            "country_code": null,
            "continent": "World"
        },
        {
            "country_id": 6,
            "name": "South America",
            "country_code": null,
            "continent": "World"
        },
        {
            "country_id": 7,
            "name": "World",
            "country_code": null,
            "continent": "World"
        },
        {
            "country_id": 8,
            "name": "Simulated Reality League",
            "country_code": null,
            "continent": "World"
        },
        {
            "country_id": 9,
            "name": "Albania",
            "country_code": "al",
            "continent": "Europe"
        },
        {
            "country_id": 10,
            "name": "Algeria",
            "country_code": "dz",
            "continent": "Africa"
        },
        {
            "country_id": 11,
            "name": "Andorra",
            "country_code": "ad",
            "continent": "Europe"
        },
        {
            "country_id": 12,
            "name": "Angola",
            "country_code": "ao",
            "continent": "Africa"
        },
        {
            "country_id": 13,
            "name": "Argentina",
            "country_code": "ar",
            "continent": "South America"
        },
        {
            "country_id": 14,
            "name": "Armenia",
            "country_code": "am",
            "continent": "Europe"
        },
        {
            "country_id": 15,
            "name": "Australia",
            "country_code": "au",
            "continent": "Asia"
        },
        {
            "country_id": 16,
            "name": "Austria",
            "country_code": "at",
            "continent": "Europe"
        },
        {
            "country_id": 17,
            "name": "Azerbaijan",
            "country_code": "az",
            "continent": "Europe"
        },
        {
            "country_id": 18,
            "name": "Bahrain",
            "country_code": "bh",
            "continent": "Asia"
        },
        {
            "country_id": 19,
            "name": "Bangladesh",
            "country_code": "bd",
            "continent": "Oceania"
        },
        {
            "country_id": 20,
            "name": "Belarus",
            "country_code": "by",
            "continent": "Europe"
        },
        {
            "country_id": 21,
            "name": "Belgium",
            "country_code": "be",
            "continent": "Europe"
        },
        {
            "country_id": 22,
            "name": "Bolivia",
            "country_code": "bo",
            "continent": "South America"
        },
        {
            "country_id": 23,
            "name": "Bosnia & Herzegovina",
            "country_code": "ba",
            "continent": "Europe"
        },
        {
            "country_id": 24,
            "name": "Botswana",
            "country_code": "bw",
            "continent": "Africa"
        },
        {
            "country_id": 25,
            "name": "Brazil",
            "country_code": "br",
            "continent": "South America"
        },
        {
            "country_id": 26,
            "name": "Bulgaria",
            "country_code": "bg",
            "continent": "Europe"
        },
        {
            "country_id": 27,
            "name": "Cambodia",
            "country_code": "kh",
            "continent": "Asia"
        },
        {
            "country_id": 28,
            "name": "Cameroon",
            "country_code": "cm",
            "continent": "Africa"
        },
        {
            "country_id": 29,
            "name": "Canada",
            "country_code": "ca",
            "continent": "North America"
        },
        {
            "country_id": 30,
            "name": "Chile",
            "country_code": "cl",
            "continent": "South America"
        },
        {
            "country_id": 31,
            "name": "China",
            "country_code": "cn",
            "continent": "Asia"
        },
        {
            "country_id": 32,
            "name": "Colombia",
            "country_code": "co",
            "continent": "South America"
        },
        {
            "country_id": 33,
            "name": "Congo",
            "country_code": "cg",
            "continent": "Africa"
        },
        {
            "country_id": 34,
            "name": "Costa Rica",
            "country_code": "cr",
            "continent": "North America"
        },
        {
            "country_id": 35,
            "name": "Croatia",
            "country_code": "hr",
            "continent": "Europe"
        },
        {
            "country_id": 36,
            "name": "Cyprus",
            "country_code": "cy",
            "continent": "Europe"
        },
        {
            "country_id": 37,
            "name": "Czech Republic",
            "country_code": "cz",
            "continent": "Europe"
        },
        {
            "country_id": 38,
            "name": "Denmark",
            "country_code": "dk",
            "continent": "Europe"
        },
        {
            "country_id": 39,
            "name": "Ecuador",
            "country_code": "ec",
            "continent": "South America"
        },
        {
            "country_id": 40,
            "name": "Egypt",
            "country_code": "eg",
            "continent": "Africa"
        },
        {
            "country_id": 41,
            "name": "El Salvador",
            "country_code": "sv",
            "continent": "North America"
        },
        {
            "country_id": 42,
            "name": "England",
            "country_code": "en",
            "continent": "Europe"
        },
        {
            "country_id": 43,
            "name": "Estonia",
            "country_code": "ee",
            "continent": "Europe"
        },
        {
            "country_id": 44,
            "name": "Faroe Islands",
            "country_code": "fo",
            "continent": "Europe"
        },
        {
            "country_id": 45,
            "name": "Finland",
            "country_code": "fi",
            "continent": "Europe"
        },
        {
            "country_id": 46,
            "name": "France",
            "country_code": "fr",
            "continent": "Europe"
        },
        {
            "country_id": 47,
            "name": "Georgia",
            "country_code": "ge",
            "continent": "Europe"
        },
        {
            "country_id": 48,
            "name": "Germany",
            "country_code": "de",
            "continent": "Europe"
        },
        {
            "country_id": 49,
            "name": "Ghana",
            "country_code": "gh",
            "continent": "Africa"
        },
        {
            "country_id": 50,
            "name": "Gibraltar",
            "country_code": "gi",
            "continent": "Europe"
        },
        {
            "country_id": 51,
            "name": "Greece",
            "country_code": "gr",
            "continent": "Europe"
        },
        {
            "country_id": 52,
            "name": "Guatemala",
            "country_code": "gt",
            "continent": "North America"
        },
        {
            "country_id": 53,
            "name": "Honduras",
            "country_code": "hn",
            "continent": "North America"
        },
        {
            "country_id": 54,
            "name": "Hong Kong",
            "country_code": "hk",
            "continent": "Asia"
        },
        {
            "country_id": 55,
            "name": "Hungary",
            "country_code": "hu",
            "continent": "Europe"
        },
        {
            "country_id": 56,
            "name": "Iceland",
            "country_code": "is",
            "continent": "Europe"
        },
        {
            "country_id": 57,
            "name": "India",
            "country_code": "in",
            "continent": "Asia"
        },
        {
            "country_id": 58,
            "name": "Indonesia",
            "country_code": "id",
            "continent": "Asia"
        },
        {
            "country_id": 59,
            "name": "Iran",
            "country_code": "ir",
            "continent": "Asia"
        },
        {
            "country_id": 60,
            "name": "Ireland",
            "country_code": "ie",
            "continent": "Europe"
        },
        {
            "country_id": 61,
            "name": "Israel",
            "country_code": "il",
            "continent": "Europe"
        },
        {
            "country_id": 62,
            "name": "Italy",
            "country_code": "it",
            "continent": "Europe"
        },
        {
            "country_id": 63,
            "name": "Ivory Coast",
            "country_code": "ci",
            "continent": "Africa"
        },
        {
            "country_id": 64,
            "name": "Jamaica",
            "country_code": "jm",
            "continent": "North America"
        },
        {
            "country_id": 65,
            "name": "Japan",
            "country_code": "jp",
            "continent": "Asia"
        },
        {
            "country_id": 66,
            "name": "Jordan",
            "country_code": "jo",
            "continent": "Asia"
        },
        {
            "country_id": 67,
            "name": "Kazakhstan",
            "country_code": "kz",
            "continent": "Europe"
        },
        {
            "country_id": 68,
            "name": "Kenya",
            "country_code": "ke",
            "continent": "Africa"
        },
        {
            "country_id": 69,
            "name": "Kosovo",
            "country_code": "xk",
            "continent": "Europe"
        },
        {
            "country_id": 70,
            "name": "Kuwait",
            "country_code": "kw",
            "continent": "Asia"
        },
        {
            "country_id": 71,
            "name": "Latvia",
            "country_code": "lv",
            "continent": "Europe"
        },
        {
            "country_id": 72,
            "name": "Lebanon",
            "country_code": "lb",
            "continent": "Asia"
        },
        {
            "country_id": 73,
            "name": "Liechtenstein",
            "country_code": "li",
            "continent": "Europe"
        },
        {
            "country_id": 74,
            "name": "Lithuania",
            "country_code": "lt",
            "continent": "Europe"
        },
        {
            "country_id": 75,
            "name": "Luxembourg",
            "country_code": "lu",
            "continent": "Europe"
        },
        {
            "country_id": 76,
            "name": "Malaysia",
            "country_code": "my",
            "continent": "Asia"
        },
        {
            "country_id": 77,
            "name": "Malta",
            "country_code": "mt",
            "continent": "Europe"
        },
        {
            "country_id": 78,
            "name": "Mexico",
            "country_code": "mx",
            "continent": "North America"
        },
        {
            "country_id": 79,
            "name": "Moldova",
            "country_code": "md",
            "continent": "Europe"
        },
        {
            "country_id": 80,
            "name": "Montenegro",
            "country_code": "me",
            "continent": "Europe"
        },
        {
            "country_id": 81,
            "name": "Morocco",
            "country_code": "ma",
            "continent": "Africa"
        },
        {
            "country_id": 82,
            "name": "Myanmar",
            "country_code": "mm",
            "continent": "Asia"
        },
        {
            "country_id": 83,
            "name": "Netherlands",
            "country_code": "nl",
            "continent": "Europe"
        },
        {
            "country_id": 84,
            "name": "New Zealand",
            "country_code": "nz",
            "continent": "Oceania"
        },
        {
            "country_id": 85,
            "name": "Nicaragua",
            "country_code": "ni",
            "continent": "North America"
        },
        {
            "country_id": 86,
            "name": "Nigeria",
            "country_code": "ng",
            "continent": "Africa"
        },
        {
            "country_id": 87,
            "name": "North Macedonia",
            "country_code": "mk",
            "continent": "Europe"
        },
        {
            "country_id": 88,
            "name": "Northern Ireland",
            "country_code": "n",
            "continent": "Europe"
        },
        {
            "country_id": 89,
            "name": "Norway",
            "country_code": "no",
            "continent": "Europe"
        },
        {
            "country_id": 90,
            "name": "Oman",
            "country_code": "om",
            "continent": "Asia"
        },
        {
            "country_id": 91,
            "name": "Pakistan",
            "country_code": "pk",
            "continent": "Asia"
        },
        {
            "country_id": 92,
            "name": "Palestine",
            "country_code": "ps",
            "continent": "Asia"
        },
        {
            "country_id": 93,
            "name": "Panama",
            "country_code": "pa",
            "continent": "North America"
        },
        {
            "country_id": 94,
            "name": "Paraguay",
            "country_code": "py",
            "continent": "South America"
        },
        {
            "country_id": 95,
            "name": "Peru",
            "country_code": "pe",
            "continent": "South America"
        },
        {
            "country_id": 96,
            "name": "Philippines",
            "country_code": "ph",
            "continent": "Asia"
        },
        {
            "country_id": 97,
            "name": "Poland",
            "country_code": "pl",
            "continent": "Europe"
        },
        {
            "country_id": 98,
            "name": "Portugal",
            "country_code": "pt",
            "continent": "Europe"
        },
        {
            "country_id": 99,
            "name": "Qatar",
            "country_code": "qa",
            "continent": "Asia"
        },
        {
            "country_id": 100,
            "name": "Republic of Korea",
            "country_code": "kr",
            "continent": "Asia"
        },
        {
            "country_id": 101,
            "name": "Romania",
            "country_code": "ro",
            "continent": "Europe"
        },
        {
            "country_id": 102,
            "name": "Russia",
            "country_code": "ru",
            "continent": "Europe"
        },
        {
            "country_id": 103,
            "name": "Rwanda",
            "country_code": "rw",
            "continent": "Africa"
        },
        {
            "country_id": 104,
            "name": "San Marino",
            "country_code": "sm",
            "continent": "Europe"
        },
        {
            "country_id": 105,
            "name": "Saudi Arabia",
            "country_code": "sa",
            "continent": "Asia"
        },
        {
            "country_id": 106,
            "name": "Scotland",
            "country_code": "s",
            "continent": "Europe"
        },
        {
            "country_id": 107,
            "name": "Senegal",
            "country_code": "sn",
            "continent": "Africa"
        },
        {
            "country_id": 108,
            "name": "Serbia",
            "country_code": "rs",
            "continent": "Europe"
        },
        {
            "country_id": 109,
            "name": "Singapore",
            "country_code": "sg",
            "continent": "Asia"
        },
        {
            "country_id": 110,
            "name": "Slovakia",
            "country_code": "sk",
            "continent": "Europe"
        },
        {
            "country_id": 111,
            "name": "Slovenia",
            "country_code": "si",
            "continent": "Europe"
        },
        {
            "country_id": 112,
            "name": "South Africa",
            "country_code": "za",
            "continent": "Africa"
        },
        {
            "country_id": 113,
            "name": "Spain",
            "country_code": "es",
            "continent": "Europe"
        },
        {
            "country_id": 114,
            "name": "Sweden",
            "country_code": "se",
            "continent": "Europe"
        },
        {
            "country_id": 115,
            "name": "Switzerland",
            "country_code": "ch",
            "continent": "Europe"
        },
        {
            "country_id": 116,
            "name": "Tanzania",
            "country_code": "tz",
            "continent": "Africa"
        },
        {
            "country_id": 117,
            "name": "Thailand",
            "country_code": "th",
            "continent": "Asia"
        },
        {
            "country_id": 118,
            "name": "Trinidad and Tobago",
            "country_code": "tt",
            "continent": "North America"
        },
        {
            "country_id": 119,
            "name": "Tunisia",
            "country_code": "tn",
            "continent": "Africa"
        },
        {
            "country_id": 120,
            "name": "Turkey",
            "country_code": "tr",
            "continent": "Europe"
        },
        {
            "country_id": 121,
            "name": "Uganda",
            "country_code": "ug",
            "continent": "Africa"
        },
        {
            "country_id": 122,
            "name": "Ukraine",
            "country_code": "ua",
            "continent": "Europe"
        },
        {
            "country_id": 123,
            "name": "United Arab Emirates",
            "country_code": "ae",
            "continent": "Asia"
        },
        {
            "country_id": 124,
            "name": "Uruguay",
            "country_code": "uy",
            "continent": "South America"
        },
        {
            "country_id": 125,
            "name": "USA",
            "country_code": "us",
            "continent": "North America"
        },
        {
            "country_id": 126,
            "name": "Uzbekistan",
            "country_code": "uz",
            "continent": "Asia"
        },
        {
            "country_id": 127,
            "name": "Venezuela",
            "country_code": "ve",
            "continent": "South America"
        },
        {
            "country_id": 128,
            "name": "Vietnam",
            "country_code": "vn",
            "continent": "Asia"
        },
        {
            "country_id": 129,
            "name": "Wales",
            "country_code": "w",
            "continent": "Europe"
        },
        {
            "country_id": 130,
            "name": "Zambia",
            "country_code": "zm",
            "continent": "Africa"
        },
        {
            "country_id": 131,
            "name": "Zimbabwe",
            "country_code": "zw",
            "continent": "Africa"
        },
        {
            "country_id": 132,
            "name": "Ethiopia",
            "country_code": "et",
            "continent": "Africa"
        }
    ];*/
    //const apikey='95bcac40-1d15-11ed-aa26-054050cf046b';
    //const apikey='1e533c70-2180-11ed-baa9-4b9da241aeac';
    const apikey='1418e510-2190-11ed-b8cc-9d0bf74dc548';

    const sportsdatacountries = {
        url: 'https://app.sportdataapi.com/api/v1/soccer/countries?apikey='+apikey,
    }

    const sportsdataleague = {
        url: 'https://app.sportdataapi.com/api/v1/soccer/leagues?apikey='+apikey,
    }

    function sportsdatateams(countries){
        return ({
            url: 'https://app.sportdataapi.com/api/v1/soccer/teams?apikey='+apikey+'&country_id='+countries,
        });
    }

    function sportsdataplayers(countries){
        return ({
            url: 'https://app.sportdataapi.com/api/v1/soccer/players?apikey='+apikey+'&country_id='+countries,
        });
    }

    function sportsdatareferees(countries){
        return ({
            url: 'https://app.sportdataapi.com/api/v1/soccer/referees?apikey='+apikey+'&country_id='+countries,
        });
    }

    function sportsdatavenues(countries){
        return ({
            url: 'https://app.sportdataapi.com/api/v1/soccer/venues?apikey='+apikey+'&country_id='+countries,
        });
    }

    function sportsdataseason(league){
        return ({
            url: 'https://app.sportdataapi.com/api/v1/soccer/seasons?apikey='+apikey+'&league_id='+league,
        });
    }

    function sportsdatastages(season){
        return ({
            url: 'https://app.sportdataapi.com/api/v1/soccer/stages?apikey='+apikey+'&season_id='+season,
        });
    }

    function sportsdatarounds(season){
        return ({
            url: 'https://app.sportdataapi.com/api/v1/soccer/rounds?apikey='+apikey+'&season_id='+season,
        });
    }
    
    function sportsdatamatches(season){
        return ({
            url: 'https://app.sportdataapi.com/api/v1/soccer/matches?apikey='+apikey+'&season_id='+season,
        });
    }
    
    function sportsdatastandings(season){
        return ({
            url: 'https://app.sportdataapi.com/api/v1/soccer/standings?apikey='+apikey+'&season_id='+season,
        });
    }
    
    export {
        sportsdataleague,
        sportsdatacountries,
        sportsdataseason,
        countriesurldef,
        sportsdatateams,
        sportsdatastandings,
        sportsdataplayers,
        sportsdatareferees,
        sportsdatavenues,
        sportsdatastages,
        sportsdatarounds,
        sportsdatamatches,
    }

  /*
  */