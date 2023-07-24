import { TProgram } from './programs.types';

export const programs: TProgram[] = [
  {
    id: 'uarc',
    name: 'UARC Repeater Id',
    play: '[set freq:600 wpm:30]w7sp/rpt'
  }, 
  {
    id: 'letter-scramble',
    name: 'Random scramble of all letters',
    play: '[set freq:350 wpm:25][scramble from:[letters]]'
  },
  {
    id: '1-letters',
    name: 'One letter',
    play: '[set wpm:30 eff:30][pick from:[letters] repeat:30]'
  },  
  {
    id: '2-letters',
    name: 'Two letter combinations',
    play: '[set wpm:30 freq:500][pick from:[letters] combine:2 repeat:30]'
  },
  {
    id: '3-letters',
    name: 'Three letter combinations',
    play: '[set wpm:30 freq:500][pick from:[letters] combine:3 repeat:30]'
  },
  {
    id: '4-letters',
    name: 'Four letter combinations',
    play: '[set wpm:30 freq:500][pick from:[letters] combine:4 repeat:30]'
  },
  {
    id: 'common-prefixes',
    name: 'Most Common Prefixes',
    play: '[set freq:500][pick from:"anti de dis en em fore in im il ir inter mid mis non over pre re semi sub super trans un under" repeat:30]'
  },
  {
    id: 'common-suffixes',
    name: 'Most Common Suffixes',
    play: '[set freq:500][pick from:"able ible al ial ed en er est ful ic ing ion tion ation ition ity ty ive ative itive less ly ment ness ous eous ious s es y" repeat:30]'
  },
  {
    id: 'frequent-2-letter-combos',
    name: 'Most used two letter combinations',
    play: '[pick from:"th he in er an re on en at es ed te ti or st ar nd to nt is of it al as ha ng co se me de" repeat:30]'
  },
  {
    id: 'frequent-double-letters',
    name: 'Double letters by frequency of use',
    play: '[pick from:"ll ee ss tt oo mm ff pp rr nn cc dd" repeat:30]'
  },
  {
    id: 'arrl-text-1',
    name: 'ARRL Practice 1',
    play: '[set wpm:30]TEXT IS FROM NOVEMBER 2020 QST  PAGE 50 ='
      + ' RESISTOR, AND AN LED STRIP CONTAINING EIGHT ADDRESSABLE RGB RED GREEN BLUE '
      + ' LEDS, ALL ON ONE ARDUINO SHIELD.  THE PIONEER ALSO HAS HEADER PINS ON BOARD'
      + ' TO CONNECT TO OTHER DEVICES, SUCH AS THE INCLUDED ULTRASONIC SENSOR.  THE'
      + ' 81 PAGE ONLINE ASSEMBLY AND USER GUIDE IS WELL WRITTEN AND INCLUDES A'
      + ' NUMBER OF DETAILED COLOR PHOTOS.  THE EASY TO FOLLOW STEP BY STEP ASSEMBLY'
      + ' GUIDE INCLUDES A SECTION ON HOW TO INSTALL THE ARDUINO IDE PROGRAMMING'
      + ' SOFTWARE AND USB PORT DRIVERS NEEDED ARDUINO SHIELDS AN ARDUINO SHIELD IS A'
      + ' BOARD THAT HAS CONNECTORS AROUND THE EDGE THAT ALLOW IT TO BE MOUNTED, OR'
      + ' STACKED, ON TOP OF AN ARDUINO UNO STYLE BOARD.  STACKING SHIELDS ALLOWS FOR'
      + ' THE QUICK AND EASY ADDITION OF FEATURES AND DEVICES TO ARDUINO PROJECTS.'
      + ' MULTIPLE SHIELDS CAN BE STACKED ON TOP OF EACH OTHER TO ADD EVEN MORE'
      + ' =  END OF 20 WPM TEXT  =  QST DE W1AW'
  },
  {
    id: 'lovecraft-1',
    name: 'The Shadow out of Time',
    play: "[set wpm:30 freq:550]After twenty-two years of nightmare and terror, saved only by a desperate conviction of the mythical source of certain impressions, I am unwilling to vouch for the truth of that which I think I found in Western Australia on the night of July 17 and 18, 1935. There is reason to hope that my experience was wholly or partly an hallucination for which, indeed, abundant causes existed. And yet, its realism was so hideous that I sometimes find hope impossible. If the thing did happen, then man must be prepared to accept notions of the cosmos, and of his own place in the seething vortex of time, whose merest mention is paralysing. He must, too, be placed on guard against a specific lurking peril which, though it will never engulf the whole race, may impose monstrous and unguessable horrors upon certain venturesome members of it. It is for this latter reason that I urge, with all the force of my being, a final abandonment of all attempts at unearthing those fragments of unknown, primordial masonry which my expedition set out to investigate="
      + "Assuming that I was sane and awake, my experience on that night was such as has befallen no man before. It was, moreover, a frightful confirmation of all I had sought to dismiss as myth and dream. Mercifully there is no proof, for in my fright I lost the awesome object which would if real and brought out of that noxious abyss have formed irrefutable evidence. When I came upon the horror I was alone and I have up to now told no one about it. I could not stop the others from digging in its direction, but chance and the shifting sand have so far saved them from finding it. Now I must formulate some definitive statement not only for the sake of my own mental balance, but to warn such others as may read it seriously="
      + "These pages much in whose earlier parts will be familiar to close readers of the general and scientific press are written in the cabin of the ship that is bringing me home. I shall give them to my son, Prof. Wingate Peaslee of Miskatonic University the only member of my family who stuck to me after my queer amnesia of long ago, and the man best informed on the inner facts of my case. Of all living persons, he is least likely to ridicule what I shall tell of that fateful night. I did not enlighten him orally before sailing, because I think he had better have the revelation in written form. Reading and re-reading at leisure will leave with him a more convincing picture than my confused tongue could hope to convey. He can do as he thinks best with this account shewing it, with suitable comment, to any quarters where it will be likely to accomplish good. It is for the sake of such readers as are unfamiliar with the earlier phases of my case that I am prefacing the revelation itself with a fairly ample summary of its background="
      + "My name is Nathaniel Wingate Peaslee, and those who recall the newspaper tales of a generation back or the letters and articles in psychological journals six or seven years ago will know who and what I am. The press was filled with the details of my strange amnesia in 1908, and much was made of the traditions of horror, madness, and witchcraft which lurk behind the ancient Massachusetts town then and now forming my place of residence. Yet I would have it known that there is nothing whatever of the mad or sinister in my heredity and early life. This is a highly important fact in view of the shadow which fell so suddenly upon me from outside sources. It may be that centuries of dark brooding had given to crumbling, whisper-haunted Arkham a peculiar vulnerability as regards such shadows though even this seems doubtful in the light of those other cases which I later came to study. But the chief point is that my own ancestry and background are altogether normal. What came, came from somewhere else where, I even now hesitate to assert in plain words="
      + "I am the son of Jonathan and Hannah Wingate Peaslee, both of wholesome old Haverhill stock. I was born and reared in Haverhill at the old homestead in Boardman Street near Golden Hill and did not go to Arkham till I entered Miskatonic University at the age of eighteen. That was in 1889. After my graduation I studied economics at Harvard, and came back to Miskatonic as Instructor of Political Economy in 1895. For thirteen years more my life ran smoothly and happily. I married Alice Keezar of Haverhill in 1896, and my three children, Robert K., Wingate, and Hannah, were born in 1898, 1900, and 1903, respectively. In 1898 I became an associate professor, and in 1902 a full professor. At no time had I the least interest in either occultism or abnormal psychology="
  },
  {
    id: 'cthulu-1',
    name: 'Call of Cthulu #1',
    play: "[set wpm:30 freq:650]The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far. The sciences, each straining in its own direction, have hitherto harmed us little; but some day the piecing together of dissociated knowledge will open up such terrifying vistas of reality, and of our frightful position therein, that we shall either go mad from the revelation or flee from the deadly light into the peace and safety of a new dark age."
  },
  {
    id: 'sonnet-29',
    name: 'Shakespeare - Sonnet 29',
    play: "[set wpm:30 freq:600]When in disgrace with fortune and mens eyes " +
      "I all alone beweep my outcast state, " +
      "And trouble deaf heaven with my bootless cries, " +
      "And look upon myself, and curse my fate, " +
      "Wishing me like to one more rich in hope, " +
      "Featured like him, like him with friends possessed, " +
      "Desiring this mans art, and that mans scope, " +
      "With what I most enjoy contented least; " +
      "Yet in these thoughts my self almost despising, " +
      "Haply I think on thee, and then my state, " +
      "Like to the lark at break of day arising " +
      "From sullen earth, sings hymns at heavens gate; " +
      "For thy sweet love remembered such wealth brings " +
      "That then I scorn to change my state with kings. "
  },
  {
    id: '100-years',
    name: '100 Years',
    play: (count) => {
      if (!count) {
        const years = [];
        for (let i = 1950; i < 2050; i++) {
          years.push(`${i}`);
        }
        return '[set wpm:30 freq:600] ' + years.join('  ');
      }
    }
  },
  // {
  //   id: 'rnd-letters',
  //   name: 'Random 2 letter sequences',
  //   play: count => {
  //     let text = count ? '' : '[set freq:600 wpm:30]';

  //     for (let i = 0; i < 5; i++) {
  //       text += '   ' + randLetters(2);
  //     }

  //     return text;
  //   }
  // }, 
  // {
  //   id: '1-letter',
  //   name: 'One random letter or number',
  //   play: count => {
  //     const value = Math.floor(Math.random() * ALPHABET.length);

  //     return count ? '' : ALPHABET.substring(value, value + 1);
  //   }
  // }, 
  {
    id: 'rand-eish5',
    name: 'Random E T I S H 5 practice',
    play: '[set wpm:30][pick from:ETISH5 repeat:100]'
  },
  {
    id: 'rand-h5',
    name: 'Random H 5 practice',
    play: '[set wpm:30][pick from:H5 repeat:100]'
  },
  {
    "id": "qso201",
    "name": "QSO 201",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\nCQ CQ CQ de K1BG K1BG K1BG K\n[set freq:570 as:c2 color:\"#309bff\"]\nK1BG de K5AX K5AX K\n[c1]\nK5AX de K1BG Ge es TU fer call Ur rst is 57n 57n QTH is MA MA Name is Bruce Bruce HW? K5AX de K1BG K\n[c2]\nK1BG de K5AX GE Bruce es tu fer rpt frm MA Ur RST is also 56n hr in TX TX Name is Tom Tom HW? K1BG de K5AX K\n[c1]\nde K1BG R R Tu Tom fer rpt frm TX WX is cldy es cool temp is 40 Rig runs KW to 4 el yagi HW? De K1BG K\n[c2]\nK1BG de K5AX solid Bruce WX is OC es cool temp is 57 Rig runs 500 W to 3 el yagi at 50 ft HW? K1BG de K5AX K\n[c1]\nde K1BG sld cpy Tom Tu fer QSO 73 fer nw Cu agn sn SK K5AX de K1BG SU\n[c2]\nK1BG de K5AX TU fer QSO Bruce 73 es CU SN SK K1BG de K5AX GE ee \n[c1]\nee"
  },
  {
    "id": "qso202",
    "name": "QSO 202",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\nCQ CQ CQ de JF1UOX JF1UOX K\n[set freq:570 as:c2 color:\"#309bff\"]\nJF1UOX de 4X4NJ 4X4NJ K\n[c1]\n4X4NJ de JF1UOX R TU fer call Ur rst is 57n 57n QTH is Kanagawa Kanagawa es Name is Misa Misa HW? 4X4NJ de JF1UOX K\n[c2]\nJF1UOX de 4X4NJ TU Misa got it all Ur RST is 56n QTH is Naale Naale Name is Riki Riki HW? JF1UOX de 4X4NJ K\n[c1]\n4X4NJ de JF1UOX R Riki WX is rain temp is 6C Rig runs kw to a 3 el yagi HW? 4X4NJ de JF1UOX K\n[c2]\nJF1UOX de 4X4NJ gud cpy Misa WX is sunny but cool temp is 10 C Rig runs KW to 4 el yagi at 75 ft HW? JF1UOX de 4X4NJ K\n[c1]\n4X4NJ de JF1UOX Riki, vy nice sig Tu fer QSO 73 Gud DX SK 4X4NJ de JF1UOX GM\n[c2]\nJF1UOX de 4X4NJ TU fer QSO Misa Gud signal 73 SK JF1UOX de 4X4NJ ee\n[c1]\nee"
  },
  {
    "id": "qso203",
    "name": "QSO 203",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\nCQ CQ CQ de BA1RB BA1RB K\n[set freq:570 as:c2 color:\"#309bff\"]\nBA1RB de VE6JF K\n[c1]\nVE6JF de BA1RB Tnx fer call Ur rst is 569 569 QTH is Beijing Beijing es Name is Fan Fan HW? VE6JF de BA1RB K\n[c2]\nBA1RB de VE6JF Tnx fer rpt Fan Ur RST is 55n QTH is Calgary AB Calgary AB Name is Jim Jim HW? BA1RB de VE6JF K\n[c1]\nVE6JF de BA1RB R R Jim WX is rain temp is 7 C Rig runs 500 w to a EF wire HW? VE6JF de BA1RB K\n[c2]\nBA1RB de VE6JF got it all Fan WX is sunny but cold temp is minus 5 C Rig runs 500 w to 3 el yagi at 10 mtrs HW? BA1RB de VE6JF K\n[c1]\nVE6JF de BA1RB Jim Tks fer QSO 73 SK VE6JF de BA1RB \n[c2]\nBA1RB de VE6JF TU fer QSO Fan 73 SK BA1RB de VE6JF ee \n[c1]\nee"
  },
  {
    "id": "qso204",
    "name": "QSO 204",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\nCQ CQ CQ de C6AZM C6AZM K\n[set freq:570 as:c2 color:\"#309bff\"]\nC6AZM de XE2B XE2B \n[c1]\nXE2B de C6AZM GM es TU Ur rst is 589 589 QTH is Alice Town Alice Town es Name is Juan Juan HW? XE2B de C6AZM K\n[c2]\nde XE2B TU Juan Ur RST is 579 QTH is Aguascalientes Aguascalientes Name is Luis Luis HW? de XE2B\n[c1]\nXE2B de C6AZM R R Luis WX is rain temp is 28 C Rig runs 200 w to a G5RV HW? XE2B de C6AZM \n[c2]\nde XE2B FB FB Juan WX is OC temp is 12 C Rig runs 500 w to 3 el yagi at 15 m HW? de XE2B\n[c1]\nXE2B de C6AZM Luis, vy nice stn TU fer QSO 73 adios SK XE2B de C6AZM K\n[c2]\nde XE2B Muchas gracias Juan 73 SK C6AZM de XE2B \nee\n[c1]\nee"
  },
  {
    "id": "qso205",
    "name": "QSO 205",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\nCQ CQ CQ de JN1THL JN1THL JN1THL K\n[set freq:570 as:c2 color:\"#309bff\"]\nJN1THL de K6HP K6HP K\n[c1]\nK6HP de JN1THL TU Ur rst is 589 589 QTH is Tokyo Tokyo es Name is Ken Ken HW? K6HP de JN1THL K\n[c2]\nJN1THL de K6HP GE Ken gud cpy Ur RST is 589 QTH is Parsons Parson Name is Ed Ed HW? JN1THL de K6HP K\n[c1]\nK6HP de JN1THL R Ed gud cpy WX is rain temp is 8 C Rig runs KW to a 4 el yagi at 25 m HW? K6HP de JN1THL K\n[c2]\nJN1THL de K6HP FB FB Ken solid cpy WX is clr temp is 12 C Rig runs 100 w to vert HW? JN1THL de K6HP\n[c1]\nK6HP de JN1THL R Ed TU fer QSO 73 SK K6HP de JN1THL GM \n[c2]\nJN1THL de K6HP FB Ken 73 SK JN1THL de K6HP ee\n[c1]\nee"
  },
  {
    "id": "qso206",
    "name": "QSO 206",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\nCQ CQ CQ de AB7MP AB7MP K\n[set freq:570 as:c2 color:\"#309bff\"]\nAB7MP de AG4EA K\n[c1]\nAG4EA de AB7MP TU fer call Ur rst is 569 569 QTH is Spokane WA Spokane WA es Name is Mark Mark OK? AG4EA de AB7MP K\n[c2]\nAB7MP de AG4EA Solid Mark Ur RST is 579 579 QTH is Pelzer SC Pelzer SC Name is Bill Bill BTU AB7MP de AG4EA K\n[c1]\nAG4EA de AB7MP R Solid Bill WX is PC and windy temp is 45 wind is peaking 25 mph Rig runs 200 w to a vertical HW? AG4EA de AB7MP K\n[c2]\nAB7MP de AG4EA R R Mark WX is rain temp is 47 Rig runs 100 w to end fed dipole BTU AB7MP de AG4EA\n[c1]\nAG4EA de AB7MP R Bill Gud sig fer 100 w es a wire TU fer QSO 73 SK AG4EA de AB7MP GB \n[c2]\nAB7MP de AG4EA FB Bill Ur sig is gud hr 73 SK AB7MP de AG4EA ee\n[c1]\nee"
  },
  {
    "id": "qso207",
    "name": "QSO 207",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\nCQ CQ CQ de 9V1YC 9V1YC K\n[set freq:570 as:c2 color:\"#309bff\"]\n9V1YC de AI6W AI6W K\n[c1]\nAI6W de 9V1YC GM es tks fer buzz Ur rst is 55n 55n es Name is James James HW? AI6W de 9V1YC K\n[c2]\n9V1YC de AI6W Sld cpy James Ur RST is 579 579 QTH is Newcastle Newcastle es Name is Jon Jon HW? 9V1YC de AI6W\n[c1]\nAI6W de 9V1YC R Jon WX is sunny temp is 27 C Rig runs KW to 4 el yagi at 75 ft HW? AI6W de 9V1YC K\n[c2]\n9V1YC de AI6W R R James WX is drizzle temp is 34 Rig runs 100 w to efhw wire HW? 9V1YC de AI6W \n[c1]\nAI6W de 9V1YC R James Nice to meet u TU fer QSO 73 SK AI6W de 9V1YC GN \n[c2]\n9V1YC de AI6W FB Jon Nice to meet u 2 73 SK 9V1YC de AI6W ee\n[c1]\nee"
  },
  {
    "id": "qso208",
    "name": "QSO 208",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\nCQ CQ CQ de E21EIC E21EIC K\n[set freq:570 as:c2 color:\"#309bff\"]\nE21EIC de JJ1FXF JJ1FXF K\n[c1]\nJJ1FXF de E21EIC tnx fer call Ur rst is 569 569 QTH is Bangkok Bangkok Name is Champ Champ HW? JJ1FXF de E21EIC K\n[c2]\nE21EIC de JJ1FXF R R Champ Ur RST is 589 589 QTH is Chiba Chiba Name is Hiro Hiro HW? W1RM de N5GQ K\n[c1]\nJJ1FXF de E21EIC R Hiro WX is cldy temp is 18 C Rig runs 500 w to 3 el yagi HW? JJ1FXF de E21EIC K\n[c2]\nE21EIC de JJ1FXF Q R R Champ WX is sunny temp is 7 C Rig runs 100 w to 3 el yagi HW? E21EIC de JJ1FXF K\n[c1]\nJJ1FXF de E21EIC R Hiro TU fer QSO 73 SK JJ1FXF de E21EIC ee\n[c2]\nE21EIC de JJ1FXF Hpe Cu agn Champ 73 SK E21EIC de JJ1FXF ee\n[c1]\nee"
  },
  {
    "id": "qso209",
    "name": "QSO 209",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\nCQ CQ CQ de K7AZT K7AZT K\n[set freq:570 as:c2 color:\"#309bff\"]\nK7AZT de K8AZT K\n[c1]\nK8AZT de K7AZT nice call hee Ur rst is 56n 56n QTH is Tucson AZ Tucson AZ Name is Paul Paul HW? K8AZT de K7AZT K\n[c2]\nK7AZT de K8AZT fb Paul Ur RST is also 56n 56n QTH is Livonia MI Livonia MI Name is John John HW? K7AZT de K8AZT K\n[c1]\nK8AZT de K7AZT R R John gud cpy WX is sunny temp is 92 Rig runs 100 w to a vert HW? K8AZT de K7AZT K\n[c2]\nK7AZT de K8AZT R R Paul WX is sunny but temp is 36 Rig also runs 100 w to a vert HW? K7AZT de K8AZT K\n[c1]\nK8AZT de K7AZT Boy, we both run 100 w to a vertical How cum we are not 5nn plus? Hee TU fer vy gud QSO 73 SK K8AZT de K7AZT\n[c2]\nK7AZT de K8AZT Right. We shud be really cooking hee 73 Paul es hpe cu agn SK K7AZT de K8AZT ee\n[c1]\nee"
  },
  {
    "id": "qso210",
    "name": "QSO 210",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\nCQ CQ de GU4CHY GU4CHY K\n[set freq:570 as:c2 color:\"#309bff\"]\nGU4CHY DE HB9CVQ HB9CVQ K\n[c1]\nHB9CVQ DE GU4CHY tu fer call Ur rst is 57n 57n QTH is Guernsey Guernsey Name is Dick Dick HW? HB9CVQ DE GU4CHY K\n[c2]\nGU4CHY DE HB9CVQ fb dick Ur RST is 55n 55n QTH is Berikon Berikon Name is Andy Andy HW? GU4CHY DE HB9CVQ K\n[c1]\nHB9CVQ DE GU4CHY ok andy some qsb and qrn but got it all WX is foggy temp is 7 C Rig runs 400 w to vertical HW? HB9CVQ DE GU4CHY K\n[c2]\nGU4CHY DE HB9CV R R dick WX is cldy temp is 3 C Rig runs 500 w to dipole HW? GU4CHY DE HB9CV k\n[c1]\nHB9CVQ DE GU4CHY solid andy TU fer nice QSO 73 cheers om SK HB9CVQ DE GU4CHY \n[c2]\nGU4CHY DE HB9CV cheers dick es cu agn 73 SK GU4CHY DE HB9CV ee\n[c1]\nee"
  },
  {
    "id": "qso211",
    "name": "QSO 211",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\nCQ CQ CQ de KA5M KA5M K\n[set freq:570 as:c2 color:\"#309bff\"]\nKA5M de K9CPO K9CPO K\n[c1]\nK9CPO de KA5M ur rst 579 579 QTH is Shreveport LA Shreveport LA and name is Marsh Marsh HW? de KA5M\n[c2]\nde K9CPO tu March ur rst 589 QTH is Kenosha WI es name is Nate Nate HW?\n[c1]\nde KA5M rock solid Nate rig runs kw to dipole hw? de KA5M\n[c2]\nKA5M de k9CPO rig hr runs 100 w to a dipole u r only 10 times bigger than me hee hw? de K9CPO\n[c1]\nK9CP de KA5M Yes but only 1 s unit difference hee hw? De KA5M\n[c2]\nDe K9CPO wats 1 s unit Marsh right? Tnx fer QSO es hpe cu agn SK KA5M de K9CPO K\n[c1]\nDe KA5M Right its no big deal Nate 73 es stay well hpe cu agn 2 SK K9CPO de KA5M ee\n[c2]\nEe"
  },
  {
    "id": "qso212",
    "name": "QSO 212",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\ncq cq cq de EI5LA EI5LA k\n[set freq:570 as:c2 color:\"#309bff\"]\nEI5LA de KC9YL KC9YL k\n[c1]\nKC9YL de EI5LA tu fer call ur rst is 559 55n QTH is County Kerry County Kerry es name is Megan Megan hw? KC9YL de EI5LA \n[c2]\nEI5LA de KC9YL fb megan es tu fer rpt fm county Kerry u r my first QSO wid Ireland ur rst is also 55n but vy steady megan qth is francis creek wi francis creek wi es name is Anne Anne it is so nice to wrk another YL es even btr in a new country TU Megan HW? EI5LA de KC9YL K\n[c1]\nKC9YL de EI5LA tu anne u r my first qso in wi I am vy psed wx is rain es temp is 4 C rig runs 100 w to dipole I am surprised u r hearing me anne age is 15 I love cw hw? KC9YL de EI5LA K\n[c2]\nEI5LA de KC9YL my goodness u r so young megan es ur cw is excellent wx is snow es temp is 28 F or abt minus 2 C my rig runs 100 w to a 4 el yagi I am so excited to wrk u megan hw? EI5LA de KC9YL K\n[c1]\nKC9YL de EI5LA fb anne vy gud cpy I am sure ur yagi is doing most of the wrk hee band is nw more qsb than b4 so 73 anne es hpe to wrk u agn vy sn SK KC9YL de EI5LA K\n[c2]\nEI5LA de KC9YL great cpy megan tnx so much for the qso es I hpe cu agn vy sn too band is also more qsb nw hr in wi so it is gud time to end the qso SK EI5LA de KC9YL 73\n[c1]\nKC9YL de EI5LA yes it is a gud time to end it agn 73 anne KC9YL de EI5LA gm \n[c2]\nGa megan ee"
  },
  {
    "id": "qso213",
    "name": "QSO 213",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\ncq cq cq de K0AD K0AD\n[set freq:570 as:c2 color:\"#309bff\"]\nK0ad de aa0yy aa0yy k\n[c1]\nAa0yy de k0ad tu fer call ur rst is 56n 56n qth is Plymouth mn Plymouth mn es name is al al hw? Aa0yy de k0ad k\n[c2]\nK0ad de aa0yy fb al ur rst is 57n 57n qth is pacific mo pacific mo es name is mark mark ok? K0ad de aa0yyk\n[c1]\nAa0yy de k0ad sld cpy mark wx is snow es temp is 18 rig runs 500 w to 3 el yagi hw? Aa0yy de k0ad k\n[c2]\nK0ad de aa0yy vy solid hr al wx is snow es temp is 24 rig runs 100 w to horiz loop hw? K0ad de aa0yy k\n[c1]\nAa0yy de k0ad tnx fer qso mark keep warm pal 73 cu agn sk Aa0yy de k0ad k\n[c2]\nk0ad de aa0yy nice to meet u al 73 es keep well sk k0ad de aa0yy ee\n[c1]\nee"
  },
  {
    "id": "qso214",
    "name": "QSO 214",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\ncq cq cq de ea6bf ea6bf k\n[set freq:570 as:c2 color:\"#309bff\"]\nEa6bf de f5vv f5vv k\n[c1]\nF5vv de ea6bf tu fer call ur rst is 579 hr in sant agusti des vedra sant agusti des vedra es name is josep josep hw? F5vv de ea6bf k\n[c2]\nEa6bf de f5vv gud cpy josep es tnx fer rpt ur rst is 579 in attignat attignat es op is joel joel ok? Ea6bg de f5vv k\n[c1]\nF5vv de ea6bf gud cpy hr also joel wx is sunny es temp is 18 C rig runs 5TT w to hexbeam hw? F5vv de ea6bf k\n[c2]\nEa6bf de f5vv vy gud sig josep wx is oc es temp is 12 C rig runs kw to spiderbeam hw? Ea6bf de f5vv k\n[c1]\nF5vv de ea6bf tnx fer the fb qso joel I hpe to wrk u agn sn 73 to u es urs sk F5vv de ea6bf gb\n[c2]\nEa6bf de f5vv tnx fer nice qso josep es all the best 73 sk Ea6bf de f5vv ee\n[c1]\nee"
  },
  {
    "id": "qso215",
    "name": "QSO 215",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\ncq cq cq de it9vdq it9vdq k\n[set freq:570 as:c2 color:\"#309bff\"]\nIt9vdq de ea4bb ea4bb k\n[c1]\nEa4bb de it9vdq tu fer clg ur rst is 58n 58n qth is Palermo palermo es name is giu giu hw? Ea4bb de it9vdq k\n[c2]\nIt9vdq de ea4bb fb giu gud cpy on u ur rst is 57n 57n in Madrid Madrid es name is Armando armando hw? It9vdq de ea4bb k\n[c1]\nEa4bb de it9vdq gud cpy Armando es tnx fer the rpt wx is sunny es 21 C rig runs 500 w to a dipole hw? Ea4bb de it9vdq k\n[c2]\nIt9vdq de ea4bb vy gud sig giu wx is fog es temp is 10 C rig runs 500 w to vert hw? 4x6gp de g4nvr k\n[c1]\nEa4bb de it9vdq tks fer nice qso armando es will look fer u agn 73 es ciao ciao sk Ea4bb de it9vdq k \n[c2]\nIt9vdq de ea4bb vy nice chat giu 73 to u es urs sk It9vdq de ea4bb ee\n[c1]\nee"
  },
  {
    "id": "qso216",
    "name": "QSO 216",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\ncq cq cq de hs0zdj hs0zdj k\n[set freq:570 as:c2 color:\"#309bff\"]\nHs0zdj de JF1UOX JF1UOX k\n[c1]\nJF1UOX de HS0ZDJ tu fer call ur rst is 599 599 QTH is Bangkok Bangkok name is john john hw? n2yo de w5tm k\n[c2]\nHs0zdj de JF1UOX fb john solid cpy ur rst is 579 in kanagawa kanagawa es name is misa misa hw? Hs0zdj de JF1UOX k\n[c1]\nJF1UOX de HS0ZDJ gud cpy wx is sunny es hot temp 32 C rig runs 500 w to a dipole hw? JF1UOX de HS0zdj k\n[c2]\nHs0zdj de JF1UOX r r john wx is rainy es temp is 13 C rig runs kw to 3 el yagi hw? Hs0zdj de JF1UOX k\n[c1]\nJF1UOX de HS0ZDJ tu fer fb qso misa 73 es my best to u es ur family SK JF1UOX de HS0ZDJ \n[c2]\nHs0zdj de JF1UOX tu john fer vy nice qso 73 to u es hpe cu agn gud dx SK Hs0zdj de JF1UOX ee k\n[c1]\nee"
  },
  {
    "id": "qso217",
    "name": "QSO 217",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\ncq cq cq 8p9aa 8p9aa k\n[set freq:570 as:c2 color:\"#309bff\"]\n8p9aa de ce3ct ce3ct k\n[c1]\nCe3ct de 8p9aa tu fer call ur rst is 56n 56n in st Philip parish st Philip parish es name is yuri yuri hw? Ce3ct de 8p9aa k\n[c2]\n8p9aa de ce3ct r r fb yuri ur rst is 579 in Santiago santiago es name is Roberto Roberto hw? 8p9aa de ce3ct k\n[c1]\nCe3ct de 8p9aa fb roberto gud cpy wx is rainy es temp is 25 c rig runs 2TT w to dipole hw? Ce3ct de 8p9aa\n[c2]\n8p9aa de ce3ct r r yuri ur sig is great for 2TT w es dipole wx is sunny es 22 C rig runs kw to 3 el yagi hw? 8p9aa de ce3ct k\n[c1]\nCe3ct de 8p9aa Roberto u hv a vy strong sig hr tu fer qso es gud dx cu agn sn 73 sk Ce3ct de 8p9aa \n[c2]\n8p9aa de ce3ct yuri mni tnx fer fb qso 73 es cu agn sk 8p9aa de ce3ct ee\n[c1]\nee"
  },
  {
    "id": "qso218",
    "name": "QSO 218",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\ncq cq cq de GW0ETF gw0etf k\n[set freq:570 as:c2 color:\"#309bff\"]\nGw0etf de dd5xx dd5xx k\n[c1]\nDd5xx de gw0etf vy loud sig ur rst is 5nn qth is bangor wales bangor wales es name is stew stew hw? Dd5xx de gw0etf k\n[c2]\nGw0etf de dd5xx fb stew vy gud cpy ur rst is also 57n plus hr in Esslingen esslingen name is saki saki ok? Gw0etf de dd5xx k\n[c1]\nDd5xx de gw0etf fb saki vy gud cpy wonder whr esslingen is located in Germany? Bk\n[c2]\nBk It is a small village nr Stuttgart stew ok? Bk\n[c1]\nBk r r yes gud tnx fer qth info saki wx is drizzling es temp is 4 C rig runs 400 watts to wire ant hw? Dd5xx de gw0etf k\n[c2]\nGw0etf de dd5xx gud cpy stew wx is cldy es 3 c hr rig runs kw into 5 el monoband yagi tu vy much fer fb qso stew es I hpe to wrk u agn vy sn fer nw 73 es my best wishes to u and ur family sk gw0etf de dd5xx \n[c1]\nDd5xx de gw0etf solid cpy all gud saki I enjoyed our qso es hpe we hv another vy sn 73 my friend sk dd5xx de gw0etf gb ee\n[c2]\nee"
  },
  {
    "id": "qso219",
    "name": "QSO 219",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\ncq cq cq de 9a1aa 9a1aa 9a1aa k\n[set freq:570 as:c2 color:\"#309bff\"]\n9a1aa de dl1qq dl1qq k\n[c1]\nDl1qq de 9a1aa ge es tu fer call ur rst is 57n 57n qth is belisce belisce es op is ivo ivo hw? Dl1qq de 9a1aa k\n[c2]\n9a1aa de dl1qq fb ivo gud cpy ur rst is 57n in hoexster hoexster es name is Alexandra alexandra hw? 9a1aa de dl1qq k\n[c1]\nDl1qq de 9a1aa fb alexandra wx is snow es temp is minus 5 C minus 5 C rig runs 500 w to 3 el yagi at 15 mtrs high hw? Dl1qq de 9a1aa k\n[c2]\n9a1aa de dl1qq vy fb ivo wx is fog es temp is 2 C 2 C rig runs 500 w to 3 el triband yagi mni tnx fer nice qso ivo gud dx es hpe to cu agn sn 73 sk 9a1aa de dl1qq k \n[c1]\nDl1qq de 9a1aa tnx fer qso gud to meet u alexandra my best to u es ur family 73 sk dl1qq de 9a1aa gn ee\n[c2]\nee"
  },
  {
    "id": "qso220",
    "name": "QSO 220",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\ncq cq cq de kr2q kr2q kr2q k\n[set freq:570 as:c2 color:\"#309bff\"]\nKr2q de ve3mv ve3mv k\n[c1]\nVe3mv de kr2q tu fer call ur rst 57n 57n hr in Randolph nj Randolph nj op is doug doug w? ve3mv de kr2q k\n[c2]\nKr2q de ve3mv tu fer rpt doug ur rst is 55n 55n in east York on east york on name is doug doug hw? Kr2q de ve3mv ;\n[c1]\nde kr2q r doug gud cpy wx is cldy es temp is 45 rig runs 10 w to 4 el yagi at 75 ft hw? de kr2q k\n[c2]\nKr2q de ve3mv solid doug es ur 10 watts sounds like 100 w wx is snowy es temp is 22 rig runs kw watt to dipole up 50 feet hw? Kr2q de ve3mv k\n[c1]\nVe3mv de kr2q solid doug vy solid tnx fer the qso es nice to meet u 73 fer nw es hpe to wrk u agn sn sk ve3ki de kr2q gn\n[c2]\nKr2q de ve3mv nice to meet u 2 doug cu agn sn 73 sk kr2q de ve3mv gn ee\n[c1]\nee"
  },
  {
    "id": "qso221",
    "name": "QSO 221",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\ncq cq cq nf8m nf8m\n[set freq:570 as:c2 color:\"#309bff\"]\nNf8m de ks7t ks7t k\n[c1]\nKs7t nf8m ge es tu fer call ur rst is 57n 57n in novi mi novi mi es name is frank frank hw? de nf8m\n[c2]\nNf8m de ks7t ge es tu fer rprt fm novi frank ur rst is also 57n hr in billings mt billings mt es name is fred fred wx is snow es temp is 21 rig runs kw to 3 el yag hw? Nf8m de ks7tk\n[c1]\nde nf8m fred that yagi is doing a great job es running a kw doesnt hurt hee hee wx in novi is also snow but temp is 15 rig runs 100 w to efw with peak height of 40 ft hw? de nf8m\n[c2]\nNf8m de ks7t frank tnx fer info on wx es rig I hv a sked vy sn so need to wrap things up 73 es tnx fer the nice qso sk nf8m de ks7t gn es tu ee\n[c1]\nde nf8m fred mni tks fer nice qso cu agn sn 73 sk ks7t nf8m gn ee\n[c2]\nee"
  },
  {
    "id": "qso222",
    "name": "QSO 222",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\ncq cq cq kd7l kd7l\n[set freq:570 as:c2 color:\"#309bff\"]\nkd7l de aa3rf aa3rf k\n[c1]\naa3rf kd7l gm es tu fer call ur rst is 58n 58n in clear water fl clear water fl es name is hans hans hw? de kd7l\n[c2]\nkd7l de aa3rf ge es tu fer rprt fm clear water hans ur rst is 57n hr in chicago il chicago il es name is fred fred wx is windy and cold rig icom 746pro into hexbeam hw? kd7l de aa3rfk\n[c1]\naa3rf de kd7l fred your hexbeam is doing fb 500 watts works here we are having sunshine but only 22 degrees f rig runs 500 watt to to a four square up52 feet hw? aa3rf de kd7l\n[c2]\nkd7l de aa3rf hans tnx fer info on wx es rig got to go the xyl is calling so 73 es tnx fer the nice qso sk kd7l de aa3rf see you again ee\n[c1]\nhans mni tks fer nice qso cu agn sn 73 sk aa3rf kd7l gn ee\n[c2]\nee"
  },
  {
    "id": "qso223",
    "name": "QSO 223",
    "play": "[set freq:590 as:c1 color:\"#45ff64\"]\ncq cq cq n3sf n3sf\n[set freq:570 as:c2 color:\"#309bff\"]\nn3sf de ww9tt ww9tt k\n[c1]\nww9tt n3sf tnx for calling me ur rst is 5nn 5nn in misty lake mi misty lake mi es name is mike mike hw? de n3sf\n[c2]\nNf8m de ww9tt gm tnx taking my call mike ur rst is 58n hr in buffalo ny buffalo ny es name is scott scott wx is cloudy and hot rig icom 756iii into inverted vee hw? n3sf de ww9ttk\n[c1]\nde nf8m scott your inverted vee at 1500 watts works here it is clear here but only 12 degrees f rig runs 200 watt into a three element yagi up about 60 feet hw? de nf8m\n[c2]\nn3sf de ww9tt mike tnx fer info on wx es rig get time for dinner so 73 es tnx qso sk n3sf de ww9tt another time ee\n[c1]\nde n3sf mike mni tks fer nice qso enjoyed it a lot 73 sk ww9tt n3sf gn ee\n[c2]\nee"
  },
  {
    "id": "SS201",
    "name": "Short Story 201",
    "play": "John signed up for cw academy and chose the beginner class He needed a paddle But what kind of paddle should he get a single lever paddle or a dual lever paddle? Single lever paddles are for non iambic sending and dual lever paddles can be used for both non iambic and iambic John decided to get a dual lever paddle because that way he could use it for either non iambic or iambic sending"
  },
  {
    "id": "SS202",
    "name": "Short Story 202",
    "play": "Bill bought a used radio but he needed an antenna He wanted either a dipole or a vertical A dipole is a horizontal antenna A vertical is a vertical antenna A horizontal antenna is directional and less noisy than a vertical A vertical is omnidirectional and can be mounted on the ground A dipole needs to be mounted off the ground Bill chose a vertical because he had no nearby trees"
  },
  {
    "id": "SS203",
    "name": "Short Story 203",
    "play": "Copying CW with a speaker can be a problem There is loss in loudness as sound travels from speaker to ears Other sounds can interfere With a headset that fits over ones ears it can block out other sounds and is more comfortable because it does not press against the outer ear A wide frequency response is good for listening to music but unnecessary for CW A headset that works well over a frequency of 200 to 800 Hz can provide good CW reproduction while reducing high frequency and low frequency audio sounds"
  },
  {
    "id": "SS204",
    "name": "Short Story 204",
    "play": "The key to sending good code is to make sure dits and dahs are easily distinguished from one another If sending with a handkey or bug one may end up making dahs that sound too similar to dits That is a problem because the sound patterns of different characters becomes harder to distill In addition it is important to keep proper spacing between characters and words A keyer may help to send distinct dits and dahs but spacing is up to the user"
  },
  {
    "id": "SS205",
    "name": "Short Story 205",
    "play": "In most contests one has a choice of staying on one frequency and soliciting calls one after another called running Or one may respond to someone soliciting calls and move on one after another This is called searching and pouncing Big gun stations that put out a lot of power and use gain antennas have an advantage in running because they are relatively louder than stations running less power and using non gain antennas A station using less power and non gain antennas is better off searching and pouncing first then trying to run later"
  },
  {
    "id": "SS206",
    "name": "Short Story 206",
    "play": "Engaging in conversational QSOs or chatting is also called ragchewing For the first 50 years of ham radio a lot of operators made such QSOs The last 50 years has seen more CW operators choosing to chase DX and or do contests where conversation is rare if ever Hams who can partake in conversational QSOs often find the experience very satisfying It is worth exploring along with DX chasing and contesting"
  },
  {
    "id": "SS207",
    "name": "Short Story 207",
    "play": "If a radio can put out 100 watts in CW phone or digital modes the s meter on the receiving end will see virtually no difference But the operator trying to copy CW or phone or digital may see a big difference It is all about signal to noise ratio If you are talking to someone where there are only two of you in the room and there is little extraneous sound your ability to understand is high"
  },
  {
    "id": "SS208",
    "name": "Short Story 208",
    "play": "When a rare DX station is on the air calling CQ it quickly generates a crowd of other hams trying to work that station This is called a pile up Usually the DX is sending up up to let those callers know that they need to call higher up the band This is called operating split But if you a running low power to a non gain antenna you may spend hours trying to work that DX on the first day or two of operation The trick is to wait until the Big Guns have worked it and then give it a try"
  },
  {
    "id": "SS209",
    "name": "Short Story 209",
    "play": "Sometimes when you are running in a contest someone will get on your frequency and start sending dits or dahs as deliberate QRM If you can still hear and work other stations without having to move you should do so and the QRMer will get bored and look for someone else to harass But if you are being affected by the QRM it is better to just move to another frequency or start searching and pouncing for a while before starting to run again It is very frustrating but just another example of how civility keeps suffering"
  },
  {
    "id": "SS210",
    "name": "Short Story 210",
    "play": "When you operate your station you typically have an outdoor antenna connected to your radio via coax or ladder line Should lightning strike the antenna or something close to the antenna it can cause a huge surge of electrical energy into your shack via the coax or ladder line If you have advanced warning of thunderstorms coming then stay off the radio Disconnecting the coax or ladder line from the rig and either grounding it or placing it outside adds more safety"
  },
  {
    "id": "SS211",
    "name": "Short Story 211",
    "play": "Radio waves in the hf spectrum all refract off different layers in the ionosphere The degree of refraction and energy loss is related to the solar excitation of each layer On the higher bands 10 through 20 propagation tends to improve during daytime hours On the lower bands 30 through 80 propagation tends to improve during darkness hours The sun causes the ionospheric excitation and it increases when there are more sunspots and decreases when there are fewer The number of sunspots increases and decreases in a cycle that typically takes 11 years to complete So if we reach a peak in 2025 we will reach another peak in 2036 Around 2030 or 2030 there will be fewer if any sunspots and many bands will appear to be useless"
  },
  {
    "id": "SS212",
    "name": "Short Story 212",
    "play": "One thing that has surely changed with ham radio is the amount of electrical noise that the bands are exposed to From 1920 to 1970 noise was typically caused by auto sparkplugs, sparking electric motors, arcing power lines, and approaching thunderstorms These days so called wall wart power supplies computers network cables modems can all cause local noise that is sometimes overbearing Though many modern ham rigs feature noise reduction functions they often cause signal distortion in the process"
  },
  {
    "id": "SS213",
    "name": "Short Story 213",
    "play": "When virtually all the worlds radio authorities cancelled Morse code ability as a ham license qualification many people believed it spelled the end of CW They were wrong The same thing was said about sailing boats and ships when steam engines began replacing sails on ocean going vessels They were also wrong CW like sailing is a skill that takes time to learn and is fun to learn And as SOTA folks will tell you CW is the preferred mode for communicating from a summit"
  },
  {
    "id": "SS214",
    "name": "Short Story 214",
    "play": "When CW is send relatively slowly it can take a long time to send a short message Consider how long it took to use a 1200 baud modem to send a text document over regular phone line You could watch each line being received letter by letter At the same time CW that is sent at relatively high speeds may be difficult to copy and cause a need for frequent repeats Picking the appropriate speed is a judgment call If you are doing a conversational QSO and get called by someone going slower than you you should slow down If you are doing a contest where the average contester is going significantly faster than you you may need to speed up to avoid frustration"
  },
  {
    "id": "SS215",
    "name": "Short Story 215",
    "play": "Electronic keyers when first introduced involved sending combinations of dits and dahs by moving the paddle tabs back and forth much as one does with a bug but both dits and dahs were automatic rather than semi automatic Later electronic keyers were introduced that allowed special dual lever paddles to enable users to squeeze both tabs together and produce a string of dit dah dit dah dit dah code elements This was called iambic mode By manipulating the tabs properly one could send using less back and forth tab motion However characters like M O 0 to 9 I S H gained nothing from iambic mode"
  },
  {
    "id": "SS216",
    "name": "Short Story 216",
    "play": "Many radios with built-in keyers and external keyers allow users to adjust the relative duration of dahs versus dits Most hams seem to prefer a 3 to 1 ratio which makes it relatively easy to hear the difference when listening to character sound patterns If you shorten the ratio, dahs begin to sound more like dits and become harder to discern If you length the ratio dahs may be a bit more discernible but the overall character sounds may sound distorted It is a judgment call and most hams keep the ratio at 3 to 1\nSpacing is Everything"
  },
  {
    "id": "SS217",
    "name": "Short Story 217",
    "play": "If you make the space between characters too short then multiple characters begin to sound condensed For example the word net sent with too short spacing begins to sound like the letter x or the letters d and t Spacing is crucial to sending good CW It requires a nice balance between too little or too much spacing If one practices and tries to emulate perfectly sent Morse one can develop an unconscious feel for proper spacing"
  },
  {
    "id": "SS218",
    "name": "Short Story 218",
    "play": "When an RF signal is turned on and off too abruptly is becomes like a square wave shape and produces lots of close in spurious energy When listening to such a signal with a ham rig one will hear clicking sounds on both sides of the signals frequency This is particularly annoying to stations located close to the clicking station Sometime clicking can extend for several KHz above and below the signal frequency By slowing down the rise and fall and making the shape more sinewave like one can reduce clicks significantly This is called key shaping"
  },
  {
    "id": "SS219",
    "name": "Short Story 219",
    "play": "Lets compare two messages one that is spelled out and one that is abbreviated First consider this message \nJim how did you like Europe? Where did you go? I heard you visited UK and France. How long were you gone?\nNow consider this Jim hw did u like eu? Whr did u go? I hrd u vstd UK and FR Hw lng wr u gone?\nBy abbreviating one used about a third less characters and saved a third as much time"
  },
  {
    "id": "SS220",
    "name": "Short Story 220",
    "play": "If u snd CQ CQ CQ Test de K6RB K6RB K that uses 21 characters If u snd CQ test K6RB that uses 9 characters 9 is less than 21 so I can send the second group in abt half the time at the same speed If I get an answer to every CQ sequence I wud wrk about twice as mni QSOs in the same amount of time If someone answers me by sending K6RB de AA0YY K that uses 12 characters versus AA0YY that uses 5 characters That saves about half the time and allows both parties to wrk more QSOs In contests u shud only send what is required es no more anything more is wasted effort es time"
  },
  {
    "id": "SS221",
    "name": "Short Story 221",
    "play": "If you are in a room where there is more external noise your ability to understand is not as high And if you are in a room with a lot more external noise it is even harder to understand your partner. CW is like being in a more quiet room Digital may be like being in a room with twice as much noise and phone is like being in a room with 20 times as much noise Different mode can make a big difference"
  },
  {
    "id": "SS222",
    "name": "Short Story 222",
    "play": "Sometimes when I am trying to operate I call cq and no one answers me. The bands are real quiet so I start to wonder if my equipment if properly connected. I go outside and check everything out and it looks fine. Turns out I had the sound turned all the way down. Dummy."
  },
  {
    "id": "SS223",
    "name": "Short Story 223",
    "play": "Seems like everytime I want to sit down and operate for a while my xyl asks me to do something for her. I always try to keep her happy so off I go on another one of her projects. When I get done I am too tired to get on the air so I just go take a nap and try again later."
  }
];